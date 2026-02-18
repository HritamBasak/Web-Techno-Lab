let students = [];
function loadStudents() {
    fetch("students.json")
        .then(response => response.json())
        .then(data => {
            students = data;
            displayStudents();
        })
        .catch(() => alert("Error loading JSON"));
}
function displayStudents() {
    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((s, index) => {
        table.innerHTML += `
            <tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.course}</td>
                <td>${s.marks}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}
function addStudent() {
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const marks = document.getElementById("marks").value;

    if (!name || !course || !marks) {
        alert("All fields required");
        return;
    }

    const newStudent = {
        id: Date.now(),
        name,
        course,
        marks: Number(marks)
    };

    students.push(newStudent);
    displayStudents();
}
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}
