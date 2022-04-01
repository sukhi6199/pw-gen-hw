function generatePassword(){
  //TODO: your code goes here
  let userNumber = prompt('Input length of password from 8-128');
  let uconfirm = confirm(`Confirm lenght of ${userNumber} characters?`)
  let convert = + userNumber;
   
 if (userNumber == convert && convert > 7 && uconfirm === true && convert <= 128){
    alert('Here is your random password! Please click again for new password');
   } else {
     alert('Sorry that is not a number! Please try again, pick from 8-128!')
     return 'NOT A PASSWORD! Try Again!';
    }
  
  
  let randomLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  let randomNumber = ['1','2','3','4','5','6','7','8','9','0'];
  
  let randomSpecial =['!','@','#','$','%','^','*'];

  let randomPW = randomLetter.concat(randomNumber, randomSpecial);

  let genAnswer = [];
  
  if (uconfirm === true) {
       genAnswer.push(randomPW.join('').toUpperCase());
     
  }
  if(uconfirm === true) { 
      genAnswer.push(randomPW.join('').toLowerCase());
   } else {
    return;
  }
  let facts = genAnswer.join('');
  let uPass = ' ';

  for ( let i = 0; i < convert; i++){
     
  uPass += facts.charAt(Math.floor(Math.random() * facts.length));

}
  return uPass;
}



// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
