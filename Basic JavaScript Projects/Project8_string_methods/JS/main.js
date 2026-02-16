// Utilizing concat() method
function concatenate(){
    var part_1="I have ";
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence.";
    var whole_sentence= part_1.concat(part_2, part_3, part_4);
    document.getElementById("concat").innerHTML= whole_sentence;
}

// Utilizing slice() method
function slice_method(){
    var sentence= "All work and no play makes Johnny a dull boy.";
    var Section= sentence.slice(27,33);
    document.getElementById("slice").innerHTML=Section;
}

// Utilizing toUpperCase() method
function makeUpper() {
    var text = "Johnny likes learning javascript!";
    var result = text.toUpperCase();
    document.getElementById("upper").innerHTML = result;
}

// Utilizing search() method
function search_method() {
    var sentence = "JavaScript makes websites interactive.";
    var position = sentence.search("websites");
    document.getElementById("search_result").innerHTML = 
        "The word 'websites' starts at position: " + position;
}

// Utilizing the toString()
function string_method(){
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML= X.toString();

}

// Utilizing the toPrecision()
function precision_method() {
    var number = 123.456789;

    // Return number with specified length
    var result = number.toPrecision(10);

    document.getElementById("precision_result").innerHTML =
        "The number with 10 digits is: " + result;
}

// Using toFixed()
function fixed_method() {
    var number = 5.6789;

    // Limits to 2 decimal places
    var result = number.toFixed(2);

    document.getElementById("fixed_result").innerHTML =
        "Number rounded to 2 decimal places: " + result;
}

// Using valueOf()
function value_method() {
    var numberObject = new Number(25);
    numberObject=189450;
    // Returns the primitive number value
    var result = numberObject.valueOf();

    document.getElementById("value_result").innerHTML =
        "The primitive value is: " + result;
}

