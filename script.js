// Assignment Code

 var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specials=["!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":",","];
var numbers=["1","2","3", "4", "5", "6", "7", "8", "9", "0"];
var password="";
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
// Write password to the #password input

function writePassword() {
  var password = generatePassword();//gererates password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
var sm=confirm("do you want a lower case letter");
 var lg=confirm("do you want an upper case letter");
 var num=confirm("do you want a number");
 var spc=confirm("do you want a special character");
 var lng=prompt("how long do you want your password to be. It must be between 8 128 characters");
while( lng<8||lng>128){
  var lng=prompt("length must be between 8 and 128");// prevents functioning until user follows criteria
}
// for loop that creates the password based off of criteria
for( var i=0;i<lng;i++){//
  
if(sm==true&&password.length<lng){
 password = letters[Math.floor(Math.random()*(26))].toLowerCase() + password;

}

if(lg==true&&password.length<lng){
  password = letters[Math.floor(Math.random()*(26))] + password;
 
 }
 

if(num==true&&password.length<lng){
  password = numbers[Math.floor(Math.random()*(10))] + password;
 
 }
 if(spc==true&&password.length<lng){
  password = specials[Math.floor(Math.random()*(17))] + password;

 }

 }alert("This is your password "+ password);
}








