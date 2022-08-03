var num1 = document.getElementById("firstNumber").value;
var num2 = document.getElementById("secondNumber").value;

function plus()
{
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = Number(num1) + Number(num2);
}

function subtract() 
{
    document.getElementById("result").innerHTML = num1 - num2;
}

function multiplyBy()
{
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{
    document.getElementById("result").innerHTML = num1 / num2;  
}