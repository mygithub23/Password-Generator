
// Collections
const num = '123456789';
const alphaLower = 'abcdefghijklmnopqrstuvwxy';
const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbole =  "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const allChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var pLength = 0;
let heyStack='';


//form 
const frmPass = document.querySelector('#frmPass'); //select form id
const btnPass = document.querySelector('#btnPass'); // select btn in form
const txtPassword = document.querySelector('#txtPassword'); // select textbox

const checkboxes = document.querySelector('.chartype');
const chkUpper = document.querySelector('input[value="uppercase"]');
const chkLower = document.querySelector('input[value="lowercase"]');
const chkNumber = document.querySelector('input[value="number"]');
const chkSymbole = document.querySelector('input[value="symbole"]');

chkLower.onclick = function () {
  if(this.checked) { 
    console.log(this.value)
    heyStack = ([...heyStack, ...alphaLower]).join('');
    console.log(heyStack)
  } else {
    tempStatck = [...heyStack];
    tempLower = Array.from(alphaLower);
    console.log("tempStack " + tempStatck);
    console.log("tempLower " + tempLower);
    tempStatck = tempStatck.filter(item => !tempLower.includes(item));
    console.log("tempStack join " + tempStatck.join(''));
    heyStack = (tempStatck).join(''); 
    console.log(heyStack);
  }
}

chkUpper.onclick = function () {
  if(this.checked) { 
    //console.log(this.value)
    heyStack = ([...heyStack, ...alphaUpper]).join('');
    //console.log(heyStack)
  } else {
    tempStatck = [...heyStack];
    tempArr = Array.from(alphaUpper);
    tempStatck = tempStatck.filter(item => !tempArr.includes(item));
    //console.log("tempStack join " + tempStatck.join(''));
    heyStack = (tempStatck).join(''); 
    //console.log(heyStack);
  }
}

chkNumber.onclick = function () {
  if(this.checked) { 
    //console.log(this.value)
    heyStack = ([...heyStack, ...num]).join('');
   //console.log(heyStack)
  } else {
    tempStatck = [...heyStack];
    tempArr = [...num];
    //console.log("tempStack: "  + tempStatck);
    //console.log("tempArr: " + tempArr);
    //tempStatck = tempStatck.filter(item => !tempArr.includes(item));
    console.log("tempStack join " + tempStatck.join(''));
    heyStack = (tempStatck).join(''); 
    console.log(heyStack);
  }
}
chkSymbole.onclick = function () {
  if(this.checked) { 
   // console.log(this.value)
    heyStack = ([...heyStack, ...symbole]).join('');
   // console.log(heyStack)
  } else {
    tempStatck = [...heyStack];
    tempArr = Array.from(Symbol);
    tempStatck = tempStatck.filter(item => !tempArr.includes(item));
    //console.log("tempStack join " + tempStatck.join(''));
    heyStack = (tempStatck).join(''); 
   // console.log(heyStack);
  }
}

// Nodes - assign range node to variable
const slider = document.querySelector('#formControlRange'); //slider
const pCounter = document.querySelector('#pRange');           // textbox to display password length

//UL
const passHistory = document.querySelector ('#passLog'); // select ul id



// Set slider default value
slider.value =8;
pCounter.textContent = '8';
// Update textbox with slider value which is the number of password char. 
slider.oninput = 
  function () {
    pCounter.textContent = this.value;
    //console.log(pCounter)
  }  

// Add event listentner to Slider to update password counter
slider.addEventListener('change', () => {
  pLength = slider.value;
  console.log('print pLenghth :--------------- ' + pLength);
} );

const checkEle = document.querySelector('.form-check-input');



// Generate password
const generatedPass = (() => {            
  pLength = slider.value;
  const randomInt = () => Math.floor(Math.random() * Math.floor(heyStack.length))
  // generate a new array from user's char types and length then joined 
  return (length = pLength) => Array.from({length}, () => heyStack[randomInt()]).join('');
  })();
  

// Process and generate a new password based on user requirement
btnPass.addEventListener('click', () => {

  /* for (let index = 0; index < 4; index++) {
    frmPass.elelements[i].
    
  }
 */
//filterChck();

  tempPass = generatedPass() ;
  txtPassword.value = tempPass;

  console.log("temppass: ---> " + tempPass);

  //Set date object
  let now = new Date();
  let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  
  // Create a new li elements and append the result history
  const savedPass = document.createElement('li');
  const tag = document.createElement('b');
  tag.append(`Your password ${time}`);
  savedPass.append(tag);
  savedPass.append(`:  ${txtPassword.value}`);
  console.log(savedPass);
  passHistory.append(savedPass);
});

frmPass.addEventListener('submit', function(e) {

  e.preventDefault();

})


 



