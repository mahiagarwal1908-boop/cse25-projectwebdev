function calculateResult() {    
    var subjects = document.getElementById("subjects").value;
    console.log(typeof(subjects));
    let totalmarks=0;
    for(let i=1;i<=subjects;i++){
        let marks=parseFloat(prompt("Enter marks for subject "+i));
        totalmarks=marks+totalmarks;

    }
    let average=totalmarks/subjects;
    let grade;
    let result;
    if(average>=90)
    {
        grade="A";

    }
    else if(average>=80)
    {
        grade="B";
    }
    else if(average>=70)
    {
        grade="C";
    }
    else if(average>=60)
    {
        grade="D";
    }   
    else
    {
        grade="F";
    }
    if(grade!="F")
    {
        result="Pass";
    }
    else    
    {
        result="Fail";
    }
    document.getElementById("result").innerHTML="Total Marks: "+totalmarks+"<br>"+"Average Marks: "+average+"<br>"+"Grade: "+grade+"<br>"+"Result: "+result;
}