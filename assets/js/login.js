// FORM VALIDATION
const Name = document.getElementById("name");
const s1 = document.querySelector('.s1');
const Ntest = document.querySelector(".Ntest");

const Email = document.getElementById("email");
const s2 = document.querySelector('.s2');
const Etest = document.querySelector(".Etest");

const Password = document.getElementById("password");
const s3 = document.querySelector('.s3');
const Ptest = document.querySelector(".Ptest");

const CPassword = document.getElementById("Cpassword");
const s4 = document.querySelector('.s4');
const CPtest = document.querySelector(".CPtest");

const Submitbtn = document.getElementById("Submitbtn")

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


// Name validation
Name.addEventListener('change',(e)=>{
    const val = Name.value
    const length = val.length

    if(length < 3){
        // Apply error style
        Ntest.classList.add("error")
        s1.innerText = 'Name should not be less than 3 char.';
        s1.classList.add('errortext');
    
    }else{
        Ntest.classList.remove("error");  
        s1.innerText = '';
        }
})

// Email validation
Email.addEventListener('change',(e)=>{
    const val = Email.value
    const valid_expression = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const length = val.length

    if(length >= 3 && val.match(valid_expression)){
        // Apply error style
        Etest.classList.remove("error"); 
        s2.innerText = '';

    }else{

        Etest.classList.add("error");
        s2.innerText = 'Please enter a valid email.';
        s2.classList.add('errortext');
        }
})

// Password validation

// When the user clicks on the password field, show the message box
Password.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
Password.onblur = function() {
  document.getElementById("message").style.display = "none";
}


// When the user starts to type something inside the password field
Password.onkeyup = function() {

  const val = Password.value
  // Validate lowercase letters
  const lowerCaseLetters = /[a-z]/g;
  if(val.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(val.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(val.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(Password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

// Confirm Password validation
CPassword.addEventListener('change', (e)=>{
    const validation_exp = Password.value
    const val = CPassword.value
    if(val.match(validation_exp)){
       
        // Apply error style
        CPtest.classList.remove("error");
        s4.innerText = '';

    }else{
        CPtest.classList.add("error");
        s4.innerText = 'Password is not the same.';
        s4.classList.add('errortext');
        }
})

function ShowOrHidePassword() {
    if (Password.type === "password") {
      Password.type = "text";
    } else {
      Password.type = "password";
    }
  }
  

  function ShowOrHideConfirmPassword() {
    if (CPassword.type === "password") {
      CPassword.type = "text";
    } else {
      CPassword.type = "password";
    }
  }


// Submit button listener
Submitbtn.addEventListener('click', (e)=>{
  const val = Name.value
  const length = val.length

  if(length < 3){
      // Apply error style
      Ntest.classList.add("error")
      s1.innerText = 'Name should not be less than 3 char.';
      s1.classList.add('errortext');
  
  }else{
      Ntest.classList.remove("error");  
      s1.innerText = '';
      }

})

Submitbtn.addEventListener('click', (e)=>{
  const val = Email.value
  const valid_expression = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const length = val.length

  if(length >= 3 && val.match(valid_expression)){
      // Apply error style
      Etest.classList.remove("error"); 
      s2.innerText = '';

  }else{

      Etest.classList.add("error");
      s2.innerText = 'Please enter a valid email.';
      s2.classList.add('errortext');
      }
})

Submitbtn.addEventListener('click', (e)=>{
  const validation_expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  const val = Password.value

  if(val.match(validation_expression)){
      // Apply error style
      Ptest.classList.remove("error"); 
      s3.innerText = '';
  
  }else{
      Ptest.classList.add("error");
      s3.innerText = 'Password should be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter';
      s3.classList.add('errortext');
      }
})

Submitbtn.addEventListener('click', (e)=>{
  const validation_exp = Password.value
  const val = CPassword.value
  if(val.match(validation_exp)){
     
      // Apply error style
      CPtest.classList.remove("error");
      s4.innerText = '';

  }else{
      CPtest.classList.add("error");
      s4.innerText = 'Password is not the same.';
      s4.classList.add('errortext');
      }
})
