'use strict'


var generateBtn = document.querySelector("#generate");
var uppercase = `A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`
var lowercase = uppercase.toLowerCase()
var symboles = `! @ # $ % ^ & * ( ) - + ? > < ~`
var numberschar = `1 2 3 4 5 6 7 8 9`

function generatePassword() {
  console.log("Generating password")


  var lengthOfPassword = prompt("How many characters would you like?")

  var wantsUpper = confirm("Do you want uppercase letters?")
  console.log(wantsUpper)

  var wantLower = confirm("Do you want lowercase letters?")
  console.log(wantLower)

  if ((lengthOfPassword) === "") {
    alert("You didn't select any data types")
    return
  } else if (lengthOfPassword, wantsUpper, wantLower) {

  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
