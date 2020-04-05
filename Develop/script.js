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
const generateBtn = document.getElementById
('generateBtn')

const form = document.getElementById
 ('passwordGeneratorForm')

const passwordDisplay = document.getElementById
('passwordDisplay')


const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIAL_CHAR_CODES = arrayFromLowToHigh(33, 47) 
                            .concat(arrayFromLowToHigh(58, 64))
                            .concat(arrayFromLowToHigh(91,96))
                            .concat(arrayFromLowToHigh(124,126))

function generatePassword(characterLength, upperCaseyes, lowerCaseyes, numberyes, specialCyes)
{
  let charCodes = LOWERCASE_CHAR_CODES
 
  if (upperCaseyes) charCodes = charCodes.concat
  (UPPERCASE_CHAR_CODES)

  if (lowerCaseyes) charCodes = charCodes.concat
  (LOWERCASE_CHAR_CODES)

  if(specialCyes) charCodes = charCodes.concat
  (SPECIAL_CHAR_CODES)

  if(numberyes) charCodes = charCodes.concat
  (NUMBER_CHAR_CODES)

  const passwordCharacter = []
  for (let i = 0; i < characterLength; i++)
  {
    const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)]
    passwordCharacter.push(String.fromCharCode(charcterCode))
  }

  return passwordCharacter.join('')

}

function arrayFromLowToHigh(low, hight)
{
  const array = []
  for (let i = low; i <= hight; i++)
  {
    array.push(i)
  }
  return array
}

generateBtn.addEventListener('click', e =>
{
  e.preventDefault()
  const characterLength = characterLength.value
  const upperCaseyes = upperCaseyesElement.checked
  const lowerCaseyes = lowerCaseyesElement.checked
  const numberyes = numberyesElement.checked
  const specialCyes = specialCyesElement.checked
  const password = generatePassword(characterLength, upperCaseyes, lowerCaseyes, numberyes, specialCyes)
  passwordDisplay.innerText = password

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
