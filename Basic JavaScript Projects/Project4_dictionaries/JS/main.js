// creating the myDictionary function //
function myDictionary (){
  var student= {
  name: "Kelvin",
  school: "AOLCC",
  favoriteLanguage: "JavaScript",
  currentCourse: "Web & Software Development",
  projectsCompleted: 2
  }
  // using delete word operator //
  delete student.school;
  document.getElementById("dictionary").innerHTML= student.school;
};
