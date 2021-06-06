const showErrorMessages = 'show-error-message';
//disable-eslint-next-line
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;
import isEmail from 'validator/lib/isEmail';

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  hideErrorMessages(form);
  checkForEmptyInputs(username, email, password, password2);
  checkEmail(email);
  checkPassword(password, password2);
  if (shouldSendForms(form)) ClearFields(form);
});

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + showErrorMessages).forEach((item) => {
    item.classList.remove(showErrorMessages);
  });
}
function showErrorMessage(msg: string, input: HTMLInputElement): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerHTML = msg;
  formFields.classList.add(showErrorMessages);
}

function checkForEmptyInputs(...inputs: HTMLInputElement[]): void {
  inputs.map((input) => {
    if (!input.value)
      showErrorMessage('Esse campo não pode ficar vazio', input);
  });
}
function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage('Email inválido', input);
}
function checkPassword(
  inputPassword: HTMLInputElement,
  inputPassword2: HTMLInputElement,
): void {
  if (inputPassword.value.length < 1 || inputPassword2.value.length < 1)
    showErrorMessage(
      'As senhas devem conter mais que 8 caracteres',
      inputPassword,
    );
  if (inputPassword.value !== inputPassword2.value)
    showErrorMessage('As senhas devem ser iguais', inputPassword2);
}

function shouldSendForms(form: HTMLFormElement): boolean {
  let send = null;
  const haveErrorMessage = !!form.querySelectorAll('.' + showErrorMessages);
  if (haveErrorMessage) send = false;
  send = true;
  return send;
}

function ClearFields(form: HTMLFormElement) {
  const inputs = form.querySelectorAll('input');
  inputs.forEach((input) => (input.value = ''));
  console.log('enviado');
}
