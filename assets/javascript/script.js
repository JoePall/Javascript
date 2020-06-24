// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var result = "";

  passwordBuilder.getCriteria();

  passwordBuilder.updateCharacters();

  passwordBuilder.buildPassword();

  // THEN my input should be validated and at least one character type should be selected

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  result = passwordBuilder.password;

  return result;
}

var passwordBuilder = {
  hasLower: false,
  hasUpper: false,
  hasNumbers: false,
  hasSpecialCharacters: false,
  length: NaN,
  password: "",

  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
  characters: [],

  getCriteria: function () {
    this.length = parseInt(prompt("Please enter a password length between 8 and 128."));
    this.hasLower = confirm("Would you like to use lower case letters?");
    this.hasUpper = confirm("Would you like to use upper case letters?");
    this.hasNumeric = confirm("Would you like to use numbers?");
    this.hasSpecialCharacters = confirm("Would you like to use special characters?");
  },

  updateCharacters: function () {
    this.characters = [];
    if (this.hasLower) this.characters = this.characters.concat(this.lowercase);
    if (this.hasUpper) this.characters = this.characters.concat(this.uppercase);
    if (this.hasNumbers) this.characters = this.characters.concat(this.numbers);
    if (this.hasSpecialCharacters) this.characters = this.characters.concat(this.specialCharacters);
  },

  buildPassword: function () {
    this.password = "";
    for (let i = 0; i < this.length; i++) {
      var k = Math.floor(Math.random() * this.characters.length);
      this.password = this.password + this.characters[k];
    }
    console.log(this.password);
    
  }
}