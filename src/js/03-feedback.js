import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const messageEl = document.querySelector('.feedback-form textarea');
const emailEl = document.querySelector('input');
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
  if (messageEl.value === '' || emailEl === '') {
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
  const parsedSettings = JSON.parse(savedForm);
  console.log(savedForm);
  if (savedForm) {
    messageEl.value = parsedSettings['message'] || '';
    emailEl.value = parsedSettings['email'] || '';
  }
}
