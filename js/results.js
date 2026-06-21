async function loadResults(){

    try{

        const response = await fetch(
            "https://answer-sheet-backend.onrender.com/results"
        );

        const data =
        await response.json();

        const tbody =
        document.querySelector(
            "#resultsTable tbody"
        );

        data.forEach(student => {

            tbody.innerHTML += `

            <tr>

                <td>${student.registration_no}</td>

                <td>${student.roll_no}</td>

                <td>${student.student_name}</td>

                <td>${student.course_code}</td>

                <td>${student.q1_total}</td>

                <td>${student.q2_total}</td>

                <td>${student.q3_total}</td>

                <td>${student.grand_total}</td>

            </tr>

            `;

        });

    }
    catch(error){

        console.log(error);

        alert("Failed to load results");

    }

}

loadResults();