let ServerData = [];
GetEmployees().then(CreateTable);

async function GetEmployees() {
    let res = await fetch('/Employees/Read', {method: 'POST'});
    let data = await res.json();
    ServerData = data.rows;
}

async function AddLine() {
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    if (FirstName === "") return alert("Please Enter FirstName");
    if (LastName === "") return alert("Please Enter LastName");
    await fetch('/Employees/Create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"FirstName": FirstName, "LastName": LastName})
    });
    document.getElementById("FirstName").value = "";
    document.getElementById("LastName").value = "";
    GetEmployees().then(CreateTable);
}

async function EditLine() {
    let Employee_Id = document.getElementById("Employee_Id").value;
    let category = document.getElementById("category").value;
    let replacement = document.getElementById("replacement").value;
    if (Employee_Id === 0) return alert("Please Enter Employee_Id");
    if (category === 0) return alert("Please Enter category");
    if (replacement === "") return alert("Please Enter replacement");
    await fetch('/Employees/Update', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"id": Employee_Id, "category": category, "replacement": replacement})
    });
    document.getElementById("category").value = 0;
    GetEmployees().then(CreateTable);
}

async function DeleteLine(id) {
    await fetch(`/Employees/Delete/${id}`, {method: 'POST'});
    GetEmployees().then(CreateTable);
}

function CreateTable() {
    let str = '';
    let optStr = '<option selected disabled value="0">Select Employee_Id</option>';
    for (let row of ServerData) {
        optStr += `<option value="${row.Employee_Id}">${row.Employee_Id}</option>`;
        str += `<tr>`;
        str += `<td>${row.Employee_Id}</td>`;
        str += `<td>${row.FirstName}</td>`;
        str += `<td>${row.LastName}</td>`;
        str += `<td class="tblBtn" onclick="DeleteLine(${row.Employee_Id})">מחק שורה</td>`;
        str += `</tr>`;
    }
    document.querySelector("tbody").innerHTML = str;
    document.getElementById("Employee_Id").innerHTML = optStr;
}
