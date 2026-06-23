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
    "index.html";
});

document
.getElementById("downloadBtn")
.addEventListener("click", () => {

    const session =
    document.getElementById(
        "session"
    ).value;

    const subject =
    document.getElementById(
        "subject"
    ).value;

    window.open(
        `https://answer-sheet-backend.onrender.com/download-excel?session=${encodeURIComponent(session)}&subject=${encodeURIComponent(subject)}`
    );

});