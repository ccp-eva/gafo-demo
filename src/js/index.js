mdc.ripple.MDCRipple.attachTo(document.getElementById('button-center-item'));
const button = document.getElementById('button-center-item');
let continueIDOK = false;
let continueVOK = false;

// FOR INPUT FORM
const textField = document.querySelector('.mdc-text-field__input');

// define what happens on input
const handleInput = (event) => {
  event.preventDefault();
  // to get most recent value, get element fresh
  // count number of characters and display the count
  document.querySelector('.mdc-text-field-character-counter').innerHTML = 
    `${document.querySelector('.mdc-text-field__input').value.length} / 8`;

  continueIDOK = (document.querySelector('.mdc-text-field__input').value.length === 8);
  // enable button when eight characters are entered
  button.disabled = !(continueIDOK && continueVOK);
};

textField.addEventListener('keyup', handleInput, { capture: false });

// FOR STUDY VERSION
// get both radio buttons
const radios = document.getElementsByName('radios');
let studyversion = null;

// when users click on a button...
for (radio in radios) {
  radios[radio].onclick = function() {
    
    // if first 'yes' button is selected, save consent as true
    if (this.getAttribute('id') == 'radio-box') {
      studyversion = 'box';
    
    // if second 'no' button is selected, save consent as false
    } else if (this.getAttribute('id') == 'radio-hedge') {
      studyversion = 'hedge';

    // should never reach here, just for security
    } else {
      studyversion = 'hedge';
    }

    continueVOK = true;
    
    // enable submit button
    button.disabled = !(continueIDOK && continueVOK);
  }
}

// FOR CONTINUE BUTTON
// define what happens on button click
const handleContinueClick = (event) => {
  event.preventDefault();
  const subjID = document.querySelector('.mdc-text-field__input').value;

  // inhouse variable hardcoded to true for kiga version
  window.location.href = `https://ccp-odc.eva.mpg.de/gafo-demo/experiment.html?inhouse=true&ID=${subjID}&v=${studyversion}`;
};

button.addEventListener('click', handleContinueClick, { capture: false });