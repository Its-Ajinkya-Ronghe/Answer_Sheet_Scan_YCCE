document
.getElementById("loginBtn")
.addEventListener("click", () => {

    const id =
    document.getElementById("facultyId").value;

    const password =
    document.getElementById("password").value;

    if(id === "admin" &&
       password === "1234"){

        localStorage.setItem(
            "facultyId",
            id
        );

        window.location.href =
        "dashboard.html";
    }
    else{

        alert("Invalid Login");
    }

});