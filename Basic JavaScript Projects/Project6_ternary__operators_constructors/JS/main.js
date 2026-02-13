function votingAge(){
    var voterAge, Can_vote;
    voterAge= document.getElementById("Age").value;
    Can_vote= (voterAge < 18)? "You are not old enough to vote":"You can vote!";
    document.getElementById("Voter").innerHTML = Can_vote;
}

// Utilizing the new and this functions //

function Candidate(Name, Party, Year, HomeState){
    this.Name= Name;
    this.Party= Party;
    this.Year= Year;
    this.HomeState= HomeState;
}

// creating new candidates and myFunction which will print in the html on click //
var Trump = new Candidate("Donald Trump", "Republican", 2026, "New York");
var Musk = new Candidate("Elon Musk", "Independant", 2026, "California");
var Williams = new Candidate("RObert Williams", "Democrat", 2026, "North Carolina");
function myFunction(){
    document.getElementById("New_and_This").innerHTML= Trump.Name + " is a candidate from the " + Trump.Party + "\'s running for President in " + Trump.Party + ". His home state is " + Trump.HomeState + ".";
}

// utilizing nested functions //
function voteCount(){
    document.getElementById("nested_function").innerHTML= Count();
        function Count() {
            var current = 47884;
            // this declares function //
            function plusOne(){
                current += 1;
            }
            // this executes the function //
            plusOne();
            return current; 
        }
}
