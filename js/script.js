
// }

// ci= p.(1+r)^t
function compute()
{

var p,t,r,si,ci;
p = document.getElementById ("principal").value;
if (p <= 0){
    alert("Please enter a positive value");
    
}

t = document.getElementById ("years").value;
r = document.getElementById ("rate").value;

// if (r <= 0){
//     alert('Choose a number greater than zero');
// }
si = parseInt((p*t*r)/100 );
amount = p*Math.pow((1 +r/100),t );

ci = amount -p;

const dt = new Date();
let thisYear  = dt.getFullYear();
let endYear = parseInt(t) + parseInt(thisYear);

document.getElementById ('num1').innerHTML ="Simple interest : $"+si;
document.getElementById ('num2').innerHTML ="Compound interest : $"+ci;
// document.getElementById ('num1').innerHTML ="If you deposit: "+p +", ";
// document.getElementById ('num2').innerHTML =" "+" at an interest rate of "+r + "%.";
// document.getElementById ('num3').innerHTML ="You will receive an amount of: $"+ci +",";
// document.getElementById ('num4').innerHTML ="in the year of: "+ endYear;

}

// highlightText 