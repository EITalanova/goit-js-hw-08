import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const dataSet = {
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

const formData = {};
const KEY_STORAGE = 'feedback-form-state';

function entryData(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
};

function returnData() {
  const data = localStorage.getItem(KEY_STORAGE);
  const dataObj = JSON.parse(data);
 
  if (data) {
    dataSet.email.value = dataObj.email;
    dataSet.message.value = dataObj.message;

    formData['message'] = dataObj.message;
    formData['email'] = dataObj.email;
  }
};

function saveData(evt) {
  evt.preventDefault();

  const data = localStorage.getItem(KEY_STORAGE);
  const dataObj = JSON.parse(data);

  console.log('E-mail: ', dataObj.email);
  console.log('Message: ', dataObj.message);

  form.reset();
  localStorage.removeItem(KEY_STORAGE);
};

returnData();
form.addEventListener('input', throttle(entryData, 500));
form.addEventListener('submit', saveData);
