function loadEmployees() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employees.xml", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const xml = xhr.responseXML;
            const employees = xml.getElementsByTagName("employee");

            const table = document.getElementById("empTable");
            table.innerHTML = "";

            for (let i = 0; i < employees.length; i++) {
                const id = employees[i].getElementsByTagName("id")[0].textContent;
                const name = employees[i].getElementsByTagName("name")[0].textContent;
                const dept = employees[i].getElementsByTagName("department")[0].textContent;
                const salary = employees[i].getElementsByTagName("salary")[0].textContent;

                table.innerHTML += `
                    <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${dept}</td>
                        <td>${salary}</td>
                    </tr>
                `;
            }
        } else {
            alert("Error loading XML");
        }
    };

    xhr.send();
}
