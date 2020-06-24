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

  password.updatePreferences();

  password.updateCharactersUsed();

  password.buildPassword();

  result = password.value;

  return result;
}

// Class for password
var password = {
  hasLower: false,
  hasUpper: false,
  hasNumbers: false,
  hasSpecialCharacters: false,
  length: NaN,
  value: "",

  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
  characters: [],

  // Updates user preferences for password
  updatePreferences: function () {
    do {
      this.length = parseInt(prompt("Please enter a password length between 8 and 128."));

      if ((this.length >= 8 && this.length <= 128) == false) {
        alert("Please select a number between 8 and 128.");
      }
    } while ((this.length >= 8 && this.length <= 128) == false)

    do {
      this.hasLower = confirm("Press OK if you would like to use lower case letters?");
      this.hasUpper = confirm("Press OK if you would like to use upper case letters?");
      this.hasNumeric = confirm("Press OK if you would like to use numbers?");
      this.hasSpecialCharacters = confirm("Press OK if you would like to use special characters?");

      if ((this.hasLower || this.hasUpper || this.hasNumbers || this.hasSpecialCharacters) == false) {
        alert("You will also need to select some characters to be used.");
      }
    } while ((this.hasLower || this.hasUpper || this.hasNumbers || this.hasSpecialCharacters) == false)


  },

  // Updates the characters used for password generation
  updateCharactersUsed: function () {
    this.characters = [];
    if (this.hasLower) this.characters = this.characters.concat(this.lowercase);
    if (this.hasUpper) this.characters = this.characters.concat(this.uppercase);
    if (this.hasNumbers) this.characters = this.characters.concat(this.numbers);
    if (this.hasSpecialCharacters) this.characters = this.characters.concat(this.specialCharacters);
  },

  // Generates a password using the specified characters in the passwordBuilder class
  buildPassword: function () {
    this.value = "";
    for (let i = 0; i < this.length; i++) {
      var k = Math.floor(Math.random() * this.characters.length);
      this.value = this.value + this.characters[k];
    }
  }
}