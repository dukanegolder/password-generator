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

  var wantNumbers = confirm('Do you want numbers?')

  if (wantsUpper === true) {
    option = option.concat(uppercaseChar)
  }

  if (wantLower === true) {
    option = option.concat(lowercaseChsr)
  }

  if (wantSymbole === true) {
    option = option.concat(symboleChar)
  }

  if (wantNumbers === true) {
    option = option.concat(numbers)
  }

  let resultStr = '';

  for (let i = 0; i < lengthOfPassword; i++) {
    const randomIndex = Math.floor(Math.random() * option.length)
    resultStr = resultStr + option[randomIndex];
  }

  console.log('resultString: ', resultStr);

  return resultStr;
}



function writePassword() {
  var password = generatePassword();
  console.log(password)

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);


