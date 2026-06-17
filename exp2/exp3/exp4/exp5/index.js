function AddEmpolyee() {
    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var department = document.getElementById("text").value;
    var employee = {
        name: name,
        salary: salary,
        department: department
    };
    var employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    alert("Employee added successfully!");
}
function DisplayAll() {
    var employees = JSON.parse(localStorage.getItem("employees")) || [];
    var displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = ""; 
}
    employees.forEach(function(employee) {
        var employeeInfo = document.createElement("p");
        employeeInfo.innerText = "Name: " + employee.name + ", Salary: " + employee.salary + ", Department: " + employee.department;
        displayArea.appendChild(employeeInfo);
    });
function Salary() {
    var employees = JSON.parse(localStorage.getItem("employees")) || [];
    var displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = ""; 
}
    employees.forEach(function(employee) {
        if (employee.salary > 50000) {
            var employeeInfo = document.createElement("p");
            employeeInfo.innerText = "Name: " + employee.name + ", Salary: " + employee.salary + ", Department: " + employee.department;
            displayArea.appendChild(employeeInfo);
        }});
function TotalSalary() {
    var employees = JSON.parse(localStorage.getItem("employees")) || [];
    var totalSalary = employees.reduce(function(total, employee) {
        return total + parseFloat(employee.salary);
    }, 0);
    alert("Total Salary: " + totalSalary);
}
function AverageSalary() {
    var employees = JSON.parse(localStorage.getItem("employees")) || [];    
    var totalSalary = employees.reduce(function(total, employee) {
        return total + parseFloat(employee.salary);
    } , 0);
    var averageSalary = totalSalary / employees.length;
    alert("Average Salary: " + averageSalary);
}
function CountbyDepartment() {
    var employees = JSON.parse(localStorage.getItem("employees")) || [];
    var departmentCount = {};   
    employees.forEach(function(employee) {
        if (departmentCount[employee.department]) {
            departmentCount[employee.department]++; 
        } else {
            departmentCount[employee.department] = 1;
        }
    });
    alert("Employee Count by Department: " + JSON.stringify(departmentCount));
}