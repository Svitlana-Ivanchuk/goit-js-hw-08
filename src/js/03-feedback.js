import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const messageEl = document.querySelector('.feedback-form textarea');
const emailEl = document.querySelector('input');
const STORAGE_KEY = 'feedback-form-state';

setTextInForm();

let formData = {
  email: '',
  message: '',
};

formEl.addEventListener('input', throttle(handelFormInput, 500));
formEl.addEventListener('submit', handelFormSubmit);

function handelFormSubmit(evt) {
  evt.preventDefoult();
  console.log('remove');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function handelFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function setTextInForm() {
  const savedForm = localStorage.getItem(STORAGE_KEY);
  if (savedForm) {
    const parsedSettings = JSON.parse(savedForm);
    messageEl.value = parsedSettings['message'];
    emailEl.value = parsedSettings['email'];
  }
}
