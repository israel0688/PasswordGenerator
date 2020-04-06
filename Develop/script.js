// used https://youtu.be/iKo9pDKKHnc as a source

// Assignment code here

// code to access the html file
const form = document.getElementById
 ('passwordGeneratorForm')

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


// used to display the generated password
const passwordDisplay = document.getElementById
('passwordDisplay')

// arrays from character codes used for populating password
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIAL_CHAR_CODES = arrayFromLowToHigh(33, 47) 
                            .concat(arrayFromLowToHigh(58, 64))
                            .concat(arrayFromLowToHigh(91,96))
                            .concat(arrayFromLowToHigh(123,126))

 // function use to generate the password                           
function generatePassword(charLen, upperCase, lowerCase, number, specialC)
{

  let charCodes = LOWERCASE_CHAR_CODES
 
  if (upperCase) charCodes = charCodes.concat
  (UPPERCASE_CHAR_CODES)

  if (lowerCase) charCodes = charCodes.concat
  (LOWERCASE_CHAR_CODES)

  if(specialC) charCodes = charCodes.concat
  (SPECIAL_CHAR_CODES)

  if(number) charCodes = charCodes.concat
  (NUMBER_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < charLen; i++)
  {
    const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }

  return passwordCharacters.join('')

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


/*I'm still not 100% sure what goes on in this part but I finally got it working,
  I beleive it activates when the button is clicked and submits the form with user input*/
form.addEventListener('submit', e =>
{
 e.preventDefault()
  const charLen = characterLength.value
  const upperCase = upperCaseyes.checked
  const lowerCase = lowerCaseyes.checked
  const number = numberyes.checked
  const specialC = specialCyes.checked
  const password = generatePassword(charLen, upperCase, lowerCase, number, specialC)
        passwordDisplay.innerText = password

})

// used https://youtu.be/iKo9pDKKHnc as a source