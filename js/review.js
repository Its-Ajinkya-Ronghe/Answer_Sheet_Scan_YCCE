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

    resultContainer.innerHTML = `

    <table class="reviewTable">

        <tr>
            <th>Field</th>
            <th>Value</th>
        </tr>

        <tr>
            <td>Registration Number</td>
            <td>${data.registration_no}</td>
        </tr>

        <tr>
            <td>Roll Number</td>
            <td>${data.roll_no}</td>
        </tr>

        <tr>
            <td>Student Name</td>
            <td>${data.student_name}</td>
        </tr>

        <tr>
            <td>Branch</td>
            <td>${data.branch}</td>
        </tr>

        <tr>
            <td>Section</td>
            <td>${data.section}</td>
        </tr>

    </table>

    <br>

    <table class="marksTable">

        <tr>
            <th>Question</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>Total</th>
        </tr>

        <tr>
            <td>Q1</td>
            <td>${data.q1a}</td>
            <td>${data.q1b}</td>
            <td>${data.q1c}</td>
            <td>${data.q1_total}</td>
        </tr>

        <tr>
            <td>Q2</td>
            <td>${data.q2a}</td>
            <td>${data.q2b}</td>
            <td>${data.q2c}</td>
            <td>${data.q2_total}</td>
        </tr>

        <tr>
            <td>Q3</td>
            <td>${data.q3a}</td>
            <td>${data.q3b}</td>
            <td>${data.q3c}</td>
            <td>${data.q3_total}</td>
        </tr>

        <tr>
            <th colspan="4">
                Grand Total
            </th>

            <th>
                ${data.grand_total}
            </th>
        </tr>

    </table>
    `;
}

retryBtn.addEventListener("click", () => {

    window.location.href = "scanner.html";

});

const backBtn =
document.getElementById("backBtn");

backBtn.addEventListener("click", () => {

    window.location.href =
    "scanner.html";

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