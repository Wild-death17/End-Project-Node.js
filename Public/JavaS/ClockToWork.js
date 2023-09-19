GetEmployees();

async function GetEmployees() {
    let res = await fetch('/Employees/Read', {method: 'POST'});
    let data = await res.json();
    console.log('data', data.rows);
    let str = '';
    for (let row of data.rows)
        str += `<option value="${row.Employee_Id}">${row.FirstName} ${row.LastName}</option>`;
    document.getElementById("Employee_Id").innerHTML += str;
}

setInterval(() => {
    let T = new Date();
    document.getElementById("clock").innerHTML = T.toLocaleTimeString();
}, 1000);

async function ClockToWork(isClockingIn) {
    let Employee_Id = document.getElementById('Employee_Id').value;
    if (Employee_Id === '0') return;
    let CurrentTime = document.getElementById("clock").innerHTML;
    let JS = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"Employee_Id": Employee_Id, "CurrentTime": CurrentTime})
    }
    if (isClockingIn)
        await fetch('/Work_Hours/Clock_in', JS);
    else
        await fetch('/Work_Hours/Clock_out', JS);
}