// utilizing logical operators //
document.writeln("10" + 5);
document.writeln("<br>", 2E310);
document.writeln("<br>", -2E310);
document.writeln("<br>", 10 > 100);
document.writeln("<br>", 10 == 10);
document.writeln("<br>", 3 == 10);
console.log(2+2);
console.log(2>2);

x = 45
y = "45"
// utilizing logical operator for is equal to data type and value (===) //
document.writeln("<br> is x same data type and value as y?: ", x === y);

w=45
// displaying logical operators and and(&&) or(||) //
document.writeln("<br> is x same data type and value as w?: ", x === w);
document.writeln("<br>", 5 >2 && 10 > 4);
document.writeln("<br>", 5 > 10 && 10 > 4);
document.writeln("<br>", 5 > 10 || 10 > 4);

// function utilizing not operator to display a false output //
function not_Function(){
    document.getElementById("Not").innerHTML= !(20 > 10);
}
// utilizing not operator to display true output //
function not_Function1(){
    document.getElementById("Not-true").innerHTML= !(5 > 10);
}

