//These are my global variables
var generateBtn = document.querySelector("#generate");
var fullString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var selections = "";
//This function generates the password after the writePassword function defines the parameters
function generatePassword(finalpw) {
  var results = "";
  (finalpw, selections);
  for (var index = 0; index < finalpw; index++) {
    results += selections.charAt(Math.floor(Math.random() * selections.length));  }
  return results;}
//  This prompts user input and defines values based off the input
function writePassword() {
  selections = "";
  var input = (prompt("Input a length between 8 and 128 characters."));
  if (input < 8 || input > 128) {
    alert("Try again");
    return;  }
  if (input >8 || input < 128) {
    var qa = confirm("Would you like to include lowercase letters?");
    var qb = confirm("Would you like to include uppercase letters?");
    var qc = confirm("Would you like to include numbers?");
    var qd = confirm("Would you like to include special characters?");  }
  if (qa) {
    selections += fullString.substring(0, 26);  }
  if (qb) {
    selections += fullString.substring(26, 52);  }
  if (qc) {
    selections += fullString.substring(52, 62);  }
  if (qd) {
    selections += fullString.substring(62);  }
  var password = generatePassword(input);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);