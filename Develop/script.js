// Assignment code here

const characterLength = document.getElementById
('characterLength')
const upperCaseyes = document.getElementById
('upperCaseyes')
const lowerCaseyes = document.getElementById
('lowerCaseyes')
const numberyes = document.getElementById
('numberyes')
const specialCyes = document.getElementById
('specialCyes')


const form = document.getElementById
 ('passwordGeneratorForm')




form.addEventListener('submit', e =>
{
  e.preventDefault()
  const characterLength = characterLength.value
  const upperCaseyes = upperCaseyesElement.value
  const lowerCaseyes = lowerCaseyesElement.value
  const numberyes = numberyesElement.value
  const specialCyes = specialCyesElement.value
  const password = generatePassword(characterLength, upperCaseyes, lowerCaseyes, numberyes, specialCyes)

})

 /*

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */
