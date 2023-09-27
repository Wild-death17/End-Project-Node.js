let ServerData = [];
let SrcTerm = "";
GetWorkingHours().then(GetEmployees).then(CreateTable);

async function GetWorkingHours() {
    let res = await fetch('Work_Hours/Read', {method: 'POST'})
    let data = await res.json();
    ServerData = data.rows;
}

async function GetEmployees() {
    let res = await fetch('/Employees/Read', {method: 'POST'});
    let data = await res.json();
    let str = '';
    for (let row of data.rows)
        str += `<option  value="${row.Employee_Id}">${row.FirstName} ${row.LastName}</option>`;
    document.getElementById("Employee_Name").innerHTML += str;
}

function CreateTable() {
    SrcTerm = document.getElementById('Employee_Name').value;
    let data = ServerData.filter(FilterData);
    let str = '';
    for (let row of data) {
        str += `<tr>`;
        str += `<td>${row.Shift_Id}</td>`;
        str += `<td>${row.Employee_Id}</td>`;
        str += `<td>${row.Employee_Name}</td>`;
        str += `<td>${FormatDate(row.Date_in)}</td>`;
        str += `<td>${row.Clock_in}</td>`;
        str += `<td>${row.Clock_out}</td>`;
        str += `<td>${FormatDate(row.Date_out)}</td>`;
        str += `<td class="tblBtn" onclick="DeleteLine(${row.Shift_Id})">Delete</td>`;
        str += `</tr>`;
    }
    document.querySelector('tbody').innerHTML = str;
}

function FilterData(Val) {
    if (SrcTerm === null) return true;
    let reg = new RegExp(SrcTerm, "i");
    return reg.test(Val.Employee_Id);
}

function FormatDate(date) {
    return (date === null) ? null : new Date(date).toLocaleDateString();
}
