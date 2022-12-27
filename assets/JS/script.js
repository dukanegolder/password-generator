var generateBtn = document.querySelector("#generate");
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercaseChsr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var symboleChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function generatePassword() {

  var option = [];
  var lengthOfPassword = prompt("How many characters would you like?")
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert('You have not selected the right amount of charachters!!')
    return
  }

  var wantsUpper = confirm("Do you want uppercase letters?")

  var wantLower = confirm("Do you want lowercase letters?")

  var wantSymbole = confirm('Do you want symboles?')

  if (wantsUpper === true) {
    option = option.concat(uppercaseChar)
  }

  if (wantLower === true) {
    option = option.concat(lowercaseChsr)
  }

  if (wantSymbole === true) {
    option = option.concat(symboleChar)
  }

  return
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

console.log(Math.floor(Math.random() * uppercaseChar.length))
