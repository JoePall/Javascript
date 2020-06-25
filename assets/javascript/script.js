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
  password.updatePreferences();

  password.buildPassword();

  return password.value;
}

// Class for password
var password = {
  length: NaN,
  value: "",
  characters: [],

  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],

  // Updates user preferences for password
  updatePreferences: function () {
    this.characters = [];
    this.length = NaN;
    
    // Get user length of password preference
    do {
      this.length = parseInt(prompt("Please enter a password length between 8 and 128."));

      if ((this.length >= 8 && this.length <= 128) == false) {
        alert("Please select a number between 8 and 128.");
      }
    } while ((this.length >= 8 && this.length <= 128) == false)

    // Get user characters of password preference
    do {
      if (confirm("Press OK if you would like to use lower case letters?")) {
        this.characters = this.characters.concat(this.lowercase);
      }
      if (confirm("Press OK if you would like to use upper case letters?")) {
        this.characters = this.characters.concat(this.uppercase);
      }
      if (confirm("Press OK if you would like to use numbers?")) {
        this.characters = this.characters.concat(this.numbers);
      }
      if (confirm("Press OK if you would like to use special characters?")) {
        this.characters = this.characters.concat(this.specialCharacters);
      }

      if (this.characters.length <= 0) {
        alert("Please select select characters to be used.");
      }
    } while (this.characters.length <= 0)
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