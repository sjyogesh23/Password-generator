// Get the password length input element
var lengthInput = document.getElementById("length");

// Get the include letters, numbers, and symbols input elements
var includeLettersInput = document.getElementById("include_letters");
var includeNumbersInput = document.getElementById("include_numbers");
var includeSymbolsInput = document.getElementById("include_symbols");

// Get the generate password button and password output element
var generateButton = document.getElementById("generate_password");
var passwordOutput = document.getElementById("password");

// Define a function to generate a random password
function generatePassword() {
  // Define the character sets for letters, numbers, and symbols
  var letterCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharset = "0123456789";
  var symbolCharset = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Initialize the character set for the password
  var charset = "";

  // Add letters to the character set if the include letters checkbox is checked
  if (includeLettersInput.checked) {
    charset += letterCharset;
  }

  // Add numbers to the character set if the include numbers checkbox is checked
  if (includeNumbersInput.checked) {
    charset += numberCharset;
  }

  // Add symbols to the character set if the include symbols checkbox is checked
  if (includeSymbolsInput.checked) {
    charset += symbolCharset;
  }

  // Generate the password using random characters from the character set
  var password = "";
  for (var i = 0; i < lengthInput.value; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  // Set the password output value
  passwordOutput.value = password;
}

// Add a click event listener to the generate password button
generateButton.addEventListener("click", generatePassword);
