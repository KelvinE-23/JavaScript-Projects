// GLOBAL VARIABLE
var globalMessage = "I am a global variable";

// FUNCTION WITH LOCAL VARIABLE
function showMessage() {
    var localMessage = "I am a local variable";
    console.log(localMessage);
}

// intentional error //
function addNumbers() {
    var num1 = 10;
    var num2 = 5;

    console.log(num1 + num3); // ERROR: num3 does not exist //
}

showMessage();
addNumbers();

// utilizing Date() and .getHours() 
function get_Date(){
    if (new Date().getHours()> 14) {
        document.getElementById("method").innerHTML= "Tired yet?";
        }

}

function totalVotes(){
    votes= document.getElementById("votes").value;
    if (votes >= 3 ){
        Vote= "Great job keep voting!";
    }
    else {
        Vote= "Consider voting more, your vote matters alot!";
    }
    document.getElementById("total").innerHTML= Vote;
}

// creating and utilizing the time_function()

function Time_function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}
