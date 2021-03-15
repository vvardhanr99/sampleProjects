var readStudentDetails = () =>
    {
    var sDetails = {};
    sDetails.name = document.querySelector("#sname").value;
    sDetails.semester = document.querySelector("#sem").value;
    sDetails.SemesterYear = document.querySelector("#semyear").value;
    sDetails.marks = [];
    sDetails.marks.maths = Number( document.querySelector("#maths").value);
    sDetails.marks.english = Number(document.querySelector("#english").value);
    sDetails.marks.cp =  Number(document.querySelector("#cp").value);
    sDetails.marks.cpp =  Number(document.querySelector("#cpp").value);
    sDetails.marks.java =  Number(document.querySelector("#java").value);
    sDetails.marks.flat =  Number(document.querySelector("#flat").value);
    sDetails.total = 0;
    sDetails.total = parseInt(sDetails.total)
    for (var i in sDetails.marks) {
        sDetails.total += sDetails.marks[i];
    }
    document.querySelector("#tmarks").innerHTML = sDetails.total;
    console.log(sDetails);
    displayGrade(sDetails);
}
var displayGrade = (sDetails) => {
    if(sDetails.total >= 580){
        document.querySelector("#tgrade").innerHTML = "O"
    }
    else if(sDetails.total >= 550){
        document.querySelector("#tgrade").innerHTML = "A+"
    }
    else if(sDetails.total >= 490){
        document.querySelector("#tgrade").innerHTML = "A"
    }
    else if(sDetails.total >= 450){
        document.querySelector("#tgrade").innerHTML = "B+"
    }
    else if(sDetails.total >= 400){
        document.querySelector("#tgrade").innerHTML = "B"
    }
    else if(sDetails.total >= 370){
        document.querySelector("#tgrade").innerHTML = "C+"
    }
    else if(sDetails.total >= 250){
        document.querySelector("#tgrade").innerHTML = "C"
    }
    else{
        document.querySelector("#tgrade").innerHTML = "F"
        document.querySelector("#tgrade").style.color = "red";
    }
}