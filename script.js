function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{   
    var rate= document.getElementById('rate').value;
    var years= document.getElementById('years').value;
    var principal= document.getElementById('principal').value;
    var interest= principal * years * rate /100;
    var dateNow = new Date().getFullYear()+parseInt(years);

    if (principal == undefined || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return
    }
    else{
    var resultDisplay=document.getElementById("result");

    resultDisplay.innerHTML= "If you deposit " + "<span class='highlight'>" + principal + "</span>"  + 
    ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + 
    "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + 
    ", <br> in the year " + "<span class='highlight'>" + dateNow + "</span>";

    }}