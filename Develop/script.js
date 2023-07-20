// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  var characterLength = 8;
  var choiceArr = []

  var upperCasedArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
  var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numberArr = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialcharArr = [ '!', '@', '#', '$', '%', '^', '&','*'];
function generatePassword(){
  var password = ""
  for(var i=0; i < characterLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password=password+choiceArr[randomIndex];
  }
  return password;
}
//Prompts
function getprompts(){
  characterLength= parseInt(prompt("how many characters do you want your password to be? (8-128 characters"))
  if(isNaN(characterLength) || characterLength <8 || characterLength > 128){
    alert("Character length has to be a number, 8-128 digits. Please try again.");
    return false;
  }
  
  if(confirm("Would you like lowercase letters in your password?")){
    choiceArr = choiceArr.concat(lowercaseArr);
  }
  if(confirm("Would you like uppercase letters in your password?")){
    choiceArr = choiceArr.concat(upperCasedArr);
  }
  if(confirm("Would you like numbers in your password?")){
    choiceArr = choiceArr.concat(numberArr);
  }
  if(confirm("Would you like special characters in your password?")){
    choiceArr = choiceArr.concat(specialcharArr);
  }
  return true
}
   
// Write password to the #password input
function writePassword() {
  var correctprompts = getprompts();
  
  if (correctprompts){
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
