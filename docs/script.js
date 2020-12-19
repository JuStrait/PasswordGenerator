// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  
    var input = prompt("Input a length between 8 and 128 characters.");
    if (input < 8 || input > 128) {
      alert("Try again");
      return;
    }
  
    if (input > 8 || input < 128); {
      var qa = confirm("Would you like to include lowercase letters?");
      var qb = confirm("Would you like to include uppercase letters?");
      var qc = confirm("Would you like to include numbers?");
      var qd = confirm("Would you like to include special characters?");
    }
    
    
    
    
  
    
  
  
  //calls the 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
      


  var fullString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var lower = fullString.substring(0, 25);
  var upper = fullString.substring(26, 51);
  var number = fullString.substring(52, 61);
  var special = fullString.substring(62);
  var product = [];
  
 









}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  

// Creating variables for the project. im going to attempt to use one string and sub strings to complete the equations

  
  
   
