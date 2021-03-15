/*var employeeDetails = {
    data : function (){
        employeeDetails.name =  prompt("Enter Employee Name :")
        employeeDetails.age  = prompt("Enter Age Of Employee");
        employeeDetails.gender  = prompt("Enter Employee Gender")
        employeeDetails.dept = prompt("Enter Department:");
        employeeDetails.id = prompt("Enter Identity of Employee:");
        employeeDetails.basicSalary = parseInt(prompt("Enter Salary"));
        employeeDetails.formulae();
    },
    formulae : () => {
        employeeDetails.pf = (12/100) * employeeDetails.basicSalary;
        employeeDetails.hra = (24/100) * employeeDetails.basicSalary;
        employeeDetails.total = employeeDetails.basicSalary + employeeDetails.pf + employeeDetails.hra; 
        employeeDetails.condition();
    },
    condition : () => {
        if(employeeDetails.gender == "male" ){
            if (employeeDetails.basicSalary == 100000)
            {
                employeeDetails.tax = (15/100) *(employeeDetails.basicSalary);
                console.log("Tax paying by " + employeeDetails.name + " is " + employeeDetails.tax);
            }
            else if (employeeDetails.basicSalary == 50000) 
            {
                employeeDetails.tax = (10/100) * employeeDetails.basicSalary;
                console.log("Tax paying by " + employeeDetailsname + " is " + employeeDetails.tax);
            }else{
                console.log("No Tax");
            }
        }
        if (employeeDetails.gender == 'female') {
            if (employeeDetails.basicSalary == 100000) {
                employeeDetails.tax = (10/100) * employeeDetails.basicSalary;
                console.log("Tax paying by " + employeeDetails.name + " is " + employeeDetails.tax);
            }
            else if (employeeDetails.basicSalary == 50000) {
                employeeDetails.tax = (5/100) * employeeDetails.basicSalary;
                console.log("Tax paying by " + employeeDetails.name + " is " + employeeDetails.tax);
            }else{
                console.log("No Tax");
            }
        }
        employeeDetails.updateProgress();
    },
    updateProgress : () =>{
        document.querySelector("#name").innerHTML = employeeDetails.name;
        document.querySelector("#age").innerHTML = employeeDetails.age;
        document.querySelector("#gender").innerHTML = employeeDetails.gender;
        document.querySelector("#dept").innerHTML = employeeDetails.dept;
        document.querySelector("#iden").innerHTML = employeeDetails.id;
        document.querySelector("#bs").innerHTML = employeeDetails.basicSalary;
        document.querySelector("#pf").innerHTML = employeeDetails.pf;
        document.querySelector("#hra").innerHTML = employeeDetails.hra;
        document.querySelector("#tax").innerHTML = employeeDetails.tax;
        document.querySelector("#total").innerHTML = employeeDetails.total;

    },
};
employeeDetails.data(); 