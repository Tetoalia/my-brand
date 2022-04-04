// THIS IMPLIES THE FORM VALIDATION FOR ALL SPACES FOR FIRSTNAME SHOWING THAT THEY SHOULD BE FILLED 
// THIS IS FOR CONTACT FORM AND SIGNUP FORM

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Please enter your first name");
    return false;
  }
  let y = document.forms["myForm"]["lname"].value;

 if (y == "") {
    alert("Please enter your last name");
    return false;
  }
}
// password validation form

function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}