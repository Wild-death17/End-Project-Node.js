GetEmployees();
document.getElementById('date').innerHTML = new Date().toLocaleDateString();

async function GetEmployees() {
    let res = await fetch('/Employees/Read', {method: 'POST'});
    let data = await res.json();
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
    let JS = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"Employee_Id": Employee_Id})
    }
    if (isClockingIn) {
        let res = await fetch('/Work_Hours/Clock_in', JS);
        let json = await res.json();
        AlertStatus((json.lastId === 0));
    } else {
        await fetch('/Work_Hours/Clock_out', JS);
        return alert("Clocked Out!");
    }
}

function AlertStatus(bool) {
    if (bool) return alert("You Are Already Clocked In!");
    return alert("Clocked In!");
}

