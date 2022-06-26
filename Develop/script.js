// Assignment code here
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var passwordNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "_", "=", "+"]
var passcode = [null]



function generatePassword() {
  lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var loopCounter = ("0")
  var characterCount = prompt("How Many Characters Do You Want For Your Password?");
  if (characterCount > 8 && characterCount < 128) {
    if (confirm("Do You Want Your Password To Have Uppercase Letters?")) {
      lowerCaseLetters = lowerCaseLetters.concat(upperCaseLetters)
      if (confirm("Do You Want Your Password To Have Numbers?")) {
        lowerCaseLetters = lowerCaseLetters.concat(upperCaseLetters, passwordNumbers)
        if (confirm("Do You Want Your Password To Have Special Characters?")) {
          lowerCaseLetters = lowerCaseLetters.concat(upperCaseLetters, passwordNumbers, specialCharacters)
        } else { }
      } else {
        if (confirm("Do You Want Your Password To Have Special Characters?")) {
          lowerCaseLetters = lowerCaseLetters.concat(upperCaseLetters, specialCharacters)
        } else {
        }
      }
    } else {
      if (confirm("Do You Want Your Password To Have Numbers?")) {
        lowerCaseLetters = lowerCaseLetters.concat(passwordNumbers)
        if (confirm("Do You Want Your Password To Have Special Characters?")) {
          lowerCaseLetters = lowerCaseLetters.concat(passwordNumbers, specialCharacters)
        }
      } else {
        if (confirm("Do You Want Your Password To Have Special Characters?")) {
          lowerCaseLetters = lowerCaseLetters.concat(specialCharacters)
        }
      }
    }
  } else if (characterCount == null) {
  } else if (characterCount < 8) {
    alert("Must Have at Least 8 Characters")
    generatePassword()
  } else if (characterCount > 128) {
    alert("Must Have a Maximum of 128 Characters")
    generatePassword()
  } else {
    alert("Input Not Valid")
    generatePassword()
  } while (loopCounter < characterCount) {
    passcode.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
    loopCounter++;
  } passcode = passcode.join('')
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passcode;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword, {
  alert: ("Your New Password")
});