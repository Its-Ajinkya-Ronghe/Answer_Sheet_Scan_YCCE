const resultContainer =
document.getElementById("resultContainer");

const retryBtn =
document.getElementById("retryBtn");

const saveBtn =
document.getElementById("saveBtn");

const data =
JSON.parse(
    localStorage.getItem("extractedData")
);

if(data){

    let html = "";

    for(const key in data){

        html += `
            <div class="field">
                <strong>${key}</strong> :
                ${data[key]}
            </div>
        `;
    }

    resultContainer.innerHTML = html;
}

retryBtn.addEventListener("click", () => {

    window.location.href = "index.html";

});

saveBtn.addEventListener("click", async () => {

    try{

        data.session =
        localStorage.getItem(
        "selectedSession"
        );

        data.course_code =
        localStorage.getItem(
        "selectedSubject"
        );

        const response = await fetch(
            "https://answer-sheet-backend.onrender.com/save",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }
        );

        const result =
        await response.json();

        alert(result.message);

    }
    catch(error){

        console.log(error);

        alert("Save failed");
    }

});