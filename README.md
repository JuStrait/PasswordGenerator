# PasswordGenerator
// These are my global variables
    var generateBtn = document.querySelector("#generate");
// I wanted to go down a path without using arrays and defining variables from a single string
    var fullString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// This is the global variable for selections after the writePassword function. Not to be confused with the local variable
// In the writePassword function that resets the function after each entry to stave double writes 
    var selections = "";
// This prompts user input and defines values based off the input
    function writePassword() {
// Local variable that collects the substring confirms in a single string to be called upon later
    selections = "";
// Prompts the user to input a character length which is logged for use in the generator function
    var input = (prompt("Input a length between 8 and 128 characters."));
// If the input doesnt equal the parameters then it is rejected
    if (input < 8 || input > 128) {
        alert("Try again");
        return;  }
// If the input equals the parameters then it is accepted and moves to the next prompts
    if (input >8 || input < 128) {
        var qa = confirm("Would you like to include lowercase letters?");
        var qb = confirm("Would you like to include uppercase letters?");
        var qc = confirm("Would you like to include numbers?");
        var qd = confirm("Would you like to include special characters?");  }
// Whatever prompts are confirmed are added to the variable selections via substrings
    if (qa) {
        selections += fullString.substring(0, 26);  }
    if (qb) {
        selections += fullString.substring(26, 52);  }
    if (qc) {
        selections += fullString.substring(52, 62);  }
    if (qd) {
        selections += fullString.substring(62);  }
// Selection variable is compiled of substring confirms
// The generatePassword function length is defined by input value
    var password = generatePassword(input);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;}
// This function generates the password after the writePassword function defines the parameters of the variables associated with the equation
    function generatePassword(finalpw) {
// The finalpw variable defines the input length of the final product
// Results equals the pw after the random functions have been applied to the selections string
    var results = "";
    (finalpw, selections);
// Equation to randomize characters from the selection string
    for (var index = 0; index < finalpw; index++) {
        results += selections.charAt(Math.floor(Math.random() * selections.length));  }
    return results;}
// All equations have been solved and had their values returned for a ranfomized password
// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);