// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialcharacter = [ '!', '@', '#', '$', '%', '^', '&','*'];
function generatePassword()
{ 
  let lengthchar=window.prompt("Password Length: ","8");
  let length=parseInt(lengthchar);
  if (length>=8 && length<=128)
  {
    let useNumbers=window.confirm("Do you want Numbers included");
    let useUpperCasedCharacters=window.confirm("Do you want Upper Case Characters included");
    let useSpecialcharacter=window.confirm("Do you want Special Characters included");
    let result="";
    let i=0;
    //All you need to do is generate password
    do 
    {
      i=i+1;
    }
  }
 
}







  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
