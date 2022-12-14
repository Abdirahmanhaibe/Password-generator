// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt('How long do you want your password to be?'));
  
  // if they pick less than 10 characters or more than 64 charchters evalute it false
  //  if password lenght is falsy

  if (passwordLength < 10 || passwordLength > 64 || !passwordLength) {
    alert('Your password has to be between 10 to 64 characters');
    generatePassword()
    return
  }
// uppercase charachters
  var upperCase = confirm('Do you want uppercase charcters?')
// Lowercase charchters
  var lowerCase = confirm('Do you want lowercase charcters?')
// numbers
  var numbers = confirm('Do you want numbers?')
// special characters
  var special = confirm('Do you want special charcters?')
// options
  var options = {
    passwordLength,
    upperCase,
    lowerCase,
    numbers,
    special,
  }
  return options

}

// Function for getting a random element from an array
function getRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]
console.log(arr)
}

// Function to generate password with user input
function generatePassword() {
  var userOptions = getPasswordOptions()
  console.log(userOptions)
  var choosenCharchters = []
  if (userOptions.lowerCase) {
    choosenCharchters = choosenCharchters.concat(lowerCasedCharacters) 
  }
  if (userOptions.upperCase) {
    choosenCharchters = choosenCharchters.concat(upperCasedCharacters)
  }
  if (userOptions.numbers) {
    choosenCharchters = choosenCharchters.concat(numericCharacters)
  }
  if (userOptions.special) {
    choosenCharchters = choosenCharchters.concat(specialCharacters)
  }
  var generatedPassword = ''
  for (var i = 0; i < userOptions.passwordLength; i++) {
    generatedPassword += getRandom(choosenCharchters)
  }
  return generatedPassword

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);