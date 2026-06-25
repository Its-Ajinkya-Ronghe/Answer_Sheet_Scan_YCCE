document.getElementById(
    "facultyId"
).innerText =
localStorage.getItem(
    "facultyId"
);

document
.getElementById("scanBtn")
.addEventListener("click", () => {

    localStorage.setItem(
        "selectedSession",
        document.getElementById(
            "session"
        ).value
    );

    localStorage.setItem(
        "selectedSubject",
        document.getElementById(
            "subject"
        ).value
    );

    window.location.href =
    "scanner.html";
});

const backBtn =
document.getElementById("backBtn");

backBtn.addEventListener("click", () => {

    window.location.href =
    "login.html";

});

document
.getElementById("downloadBtn")
.addEventListener("click", () => {

    const session =
    document.getElementById("session").value;

    const subject =
    document.getElementById("subject").value;

    const courseCode =
    subject.match(/\((.*?)\)/)[1];

    window.open(
        `https://answer-sheet-backend.onrender.com/download-excel?session=${encodeURIComponent(session)}&course_code=${encodeURIComponent(courseCode)}`
    );

});