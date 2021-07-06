function compute()
{   //Values needed to calculate the interest
    var principal = document.getElementById("principal").value;
    var rate= document.getElementById("rate").value;
    var years=parseInt(document.getElementById("years").value);
    //interest is calculated
    var interest= principal*years*rate/100;
    //adding the amount of years to the current year according to the Date() function
    var year= new Date().getFullYear()+ years;
    //interest text
    document.getElementById("result").innerHTML="If you deposit <mark> "+principal+"</mark>"+" at an interest rate of <mark> "+ rate+ "</mark>"+ ". You will receive an amount of <mark>"+ interest +"</mark>"+" in the year <mark>" +year+"</mark>";
}
//rate value is updated
function updateRate()
{ var rateval= document.getElementById("rate").value;
  document.getElementById("rate_val").innerText=rateval;
}

//validating amount to make sure that the user entered a positive number
function checkdata() {
    var principal = document.getElementById("principal").value;
    var pos = parseInt(principal) > 0;
    if (!pos) {
        alert("You should only enter a positive number");
        document.getElementById("principal").focus();
    }
}