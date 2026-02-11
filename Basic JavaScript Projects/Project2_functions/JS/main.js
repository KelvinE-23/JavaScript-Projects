//function to change button text on click//
function showMessage() {
    var str = "This is the button text!", fullName= "Dan Richie"
    document.getElementById("Button_Text").innerHTML = "Hey " + fullName + " " + str;
}

//function to change paragraph element text on click //
function myFunction(){
    var sentence= "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML= sentence;
}