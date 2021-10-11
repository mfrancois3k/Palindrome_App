
let submit = document.getElementById('submit');

submit.addEventListener('click', itsaPalindrome);


function itsaPalindrome(input) {
  
  function itsaPalindrome(input) {
    let initialWord = input.toLowerCase();
    let initialWordReversed = initialWord.toString().split('').reverse().join('');

    
    return initialWord == initialWordReversed ? true : false;
    
  };
   
  
  let value = document.getElementById('wordCollector').value;
  
  let display = document.getElementById('displayText');

  if (isPalindrome(value) === true) {
    console.log(`The word ${value} is a palindrone!`)
    display.innerHTML = `The word ${value} is a palindrone!`;
  } else {
    console.log(`The word ${value} is not a palindrone.`)
    display.innerHTML = `The word ${value} is not a palindrone!`;
  }

  input.preventDefault(input);
  
};