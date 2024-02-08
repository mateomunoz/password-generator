const passwordElement = document.getElementById('password');
const lengthSliderElement = document.getElementById('lengthSlider');
const buttonElement = document.getElementById('button');
const optionsElement = document.getElementById('options');

const PASSWORD_OPTIONS = {
  uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnñopqrstuvwxyzz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+{}[]<>',
  passwordLength: lengthSliderElement.value
};

let alowedCharacters = '';
let finalPassword = '';

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * alowedCharacters.length);
  return randomNumber;
};

const changeLengthText = () => {
  lengthSliderElement.textContent = `Length: ${PASSWORD_OPTIONS.passwordLength}`;
};

const updatePasswordLength = event => {
  PASSWORD_OPTIONS.passwordLength = event.target.value;
  changeLengthText();
};

const printFinalPassword = () => {
  passwordElement.value = finalPassword;
};

const generatePassword = () => {
  finalPassword = '';
  for (let index = 0; index < PASSWORD_OPTIONS.passwordLength; index++) {
    const randomPosition = generateRandomNumber();
    finalPassword += alowedCharacters.charAt(randomPosition);
  }
  printFinalPassword();
};

const disabledButton = isDisabled => {
  buttonElement.disabled = isDisabled;
};

const getCheckedOptions = () => {
  let isDisabled = true;
  alowedCharacters = '';
  const allCheckboxes = document.querySelectorAll('.option-input:checked');
  //input[type='checkbox']

  console.log(allCheckboxes);

  allCheckboxes.forEach(input => {
    const optionId = input.id;
    alowedCharacters += PASSWORD_OPTIONS[optionId];
    isDisabled = false;
  });

  console.log(alowedCharacters);
  disabledButton(isDisabled);
};
changeLengthText();
lengthSliderElement.addEventListener('input', updatePasswordLength);
buttonElement.addEventListener('click', generatePassword);
optionsElement.addEventListener('change', getCheckedOptions);
