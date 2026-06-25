const galleryBtn = document.getElementById("galleryBtn");
const cameraBtn = document.getElementById("cameraBtn");

const galleryInput = document.getElementById("galleryInput");
const cameraInput = document.getElementById("cameraInput");

const previewImage = document.getElementById("previewImage");
const submitBtn = document.getElementById("submitBtn");

let selectedFile = null;

galleryBtn.addEventListener("click", () => {
    galleryInput.click();
});

cameraBtn.addEventListener("click", () => {
    cameraInput.click();
});

galleryInput.addEventListener("change", handleImage);
cameraInput.addEventListener("change", handleImage);

function handleImage(event){

    selectedFile = event.target.files[0];

    if(!selectedFile){
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e){
        previewImage.src = e.target.result;
    };

    reader.readAsDataURL(selectedFile);
}

const backBtn =
document.getElementById("backBtn");

backBtn.addEventListener("click", () => {

    window.location.href =
    "dashboard.html";

});

submitBtn.addEventListener("click", async () => {

    if(!selectedFile){
        alert("Please select image");
        return;
    }

    const formData = new FormData();

    formData.append("image", selectedFile);

    try{

        const response = await fetch(
            "https://answer-sheet-backend.onrender.com/extract",
            {
                method:"POST",
                body:formData
            }
        );

        const result = await response.json();

        localStorage.setItem(
            "extractedData",
            JSON.stringify(result)
        );

        window.location.href = "review.html";

    }
    catch(error){

        console.log(error);

        alert("Extraction failed");
    }

});