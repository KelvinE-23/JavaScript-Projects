// while loop counter function
function call_loop(){
    var digit= "";
    var x= 1;
    while (x < 11){
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML= digit;
}

// String to measure length
function showLength() {
    var message = "Loops are confusing";
    var lengthOfMessage = message.length;

    document.getElementById("length").innerHTML =
         "<br><br>The length of the string \"Loops are confusing\" is: " + lengthOfMessage;
}

// for loop function

    var instruments= ["guitar", "bongo", "tambourine", "violin", "piano"];
    var content= "";
    let Y;
    function for_loop(){
        for(Y=0;Y < instruments.length; Y++){
            content += instruments[Y] + "<br>";
        document.getElementById("List_of_instruments").innerHTML= content;
        }
        
}

// Displaying specific values from the array
function array_Function(){
    document.getElementById("Array").innerHTML =
        "My favorite instrument is: " + instruments[0] +
        "<br>Another instrument is: " + instruments[3];
}

function constant_function() {

    // Create object using const
    const musical_instrument = {
        type: "Violin",
        brand: "Fender",
        color: "Mahogany",
        price: "$500"
    };

    // Display object property values
    document.getElementById("Constant").innerHTML =
        "The instrument is a " + musical_instrument.color + " " +
        musical_instrument.brand + " " +
        musical_instrument.type +
        " that costs " + musical_instrument.price + " and was owned by the Devil's violinist; Niccolo Paganini.";
}

// Function that uses return
function add_numbers() {
    var a = 5;
    var b = 10;
    return a + b; 
}

// Function that calls the return function and displays it
function show_return() {
    var result = add_numbers();

    document.getElementById("Return").innerHTML =
        "The result of the returned value is: " + result;
}

function let_object_function() {

    // Create object using let
    let musician = {
        name: "Niccolo Paganini",
        instrument: "Violin",
        era: "1800s",
        skill: "Virtuoso",
        // Method in object
        description: function() {
            return this.name + " was a " + this.skill +
                   " who played the " + this.instrument +
                   " during the " + this.era + ".";
        }
    };

    // Display method result
    document.getElementById("Object").innerHTML =
        musician.description();
}

// break statment
function break_function() {
    var text = "";

    for (var i = 1; i <= 10; i++) {
        if (i === 6) {
            break; // stops loop when i equals 6
        }
        text += i + "<br>";
    }
    document.getElementById("Break").innerHTML =
        "Loop stopped at 6:<br>" + text;
}


// continue statement
function continue_function() {
    var text = "";
    for (var i = 1; i <= 10; i++) {
        if (i === 6) {
            continue; // skips number 6
        }
        text += i + "<br>";
    }
    document.getElementById("Continue_Loop").innerHTML =
        "Loop skipped 6:<br>" + text;
}


    

