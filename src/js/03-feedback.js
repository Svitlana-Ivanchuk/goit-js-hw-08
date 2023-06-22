import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const messageEl = document.querySelector('textarea');
const emailEl = document.querySelector('input');
const btnSubmit = document.querySelector('button');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

formEl.addEventListener('input', throttle(handelFormInput, 500));
formEl.addEventListener('submit', handelFormSubmit);

setTextInForm();

function handelFormSubmit(evt) {
  evt.preventDefault();

  if (messageEl.value === '' || emailEl.value === '') {
    return;
  }

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);
  evt.target.reset();
}

function handelFormInput(evt) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function setTextInForm() {
  const savedForm = localStorage.getItem(STORAGE_KEY);
  const parsedForm = JSON.parse(savedForm);

  if (parsedForm) {
    messageEl.value = parsedForm['message'] || '';
    emailEl.value = parsedForm['email'] || '';
  }
}
