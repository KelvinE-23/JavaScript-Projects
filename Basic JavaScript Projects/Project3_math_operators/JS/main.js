// creating math function for p element with id "Math" //

function doMath() {
    var subtract= 1000 - 675;
    var multiply= 6 * 8;
    var divide = 48 / 6;
    document.getElementById("Math").innerHTML="1000 - 675= " + subtract + ". Here is a multiplication example: 6 * 8= " + multiply + ". Here is a division example: 48/6= " + divide;
}

//creating modulus function for id "Mod" //

function doModulus(){
    var mod= 25 % 6;
    document.getElementById("Mod").innerHTML= "When you divide 25 by 6 you have a remainder of: " + mod;
}

function negate(){
    var x = 22
    document.getElementById("negative").innerHTML= "The opposite of 22 is : " + -x;
}

function increment(){
var v= 5;
v++;
document.getElementById("incr").innerHTML= "5 plus one equals: " + v;
}

function decrement(){
var y= 5.25;
y--;
document.getElementById("decr").innerHTML= "5.25 minus one equals: " + y;
}

window.alert(Math.round(Math.random() *100));


