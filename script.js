//javascript code starts here

const submit = document.getElementById("submit");

// when user click on submit button

submit.addEventListener("click", (e) => {
  e.preventDefault(); // for page reload
  // get all the input fields
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let password = document.getElementById("password");
  const errors = document.querySelectorAll('.errors')
  const myForm = document.getElementById('myForm')

  //Regular Expression for validation
  let nameRegex = /^[a-zA-z\s-]{2,}$/;
  let emailRegex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let phoneRegex = /^\+?[1-9]\d{1,14}$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  //clear previous errors
  errors.forEach((currError)=>{
    currError.innerText = "";
  })

  let isValid = true

  // check the first name fields
  if (!nameRegex.test(fname.value)) {
    document.getElementById("fnameError").innerText =
      "please enter a valid first name";
      isValid = false
  }

  //check the last name fields
  if (!nameRegex.test(lname.value)) {
    document.getElementById("lnameError").innerText =
      "please enter a valid last name";
      isValid = false //jab tak submit mat karo jab tak uske values wrong hai 
  }

  // check the email fields
  if (!emailRegex.test(email.value)) {
    document.getElementById("emailError").innerText =
      " please enter a valid email address";
      isValid = false //jab tak submit mat karo jab tak uske values wrong hai 
  }

  // check the phone fields
  if (!phoneRegex.test(phone.value)) {
    document.getElementById("phoneError").innerText =
      " please enter a valid 10-digit phone number";
      isValid = false //jab tak submit mat karo jab tak uske values wrong hai 
  }

  // check the password fields
  if (!passwordRegex.test(password.value)) {
    document.getElementById("passError").innerText =
      "password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character";
      isValid = false //jab tak submit mat karo jab tak uske values wrong hai 
  }

  //  if all input fields is true
  if(isValid){
    alert("Registration Successfull")

    //reset all values
    myForm.reset()
  }

});
