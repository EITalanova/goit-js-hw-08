
const form = document.querySelector('.feedback-form');
const dataSet = {
    email: document.querySelector('input[name="email"]'),
    message: document.querySelector('textarea[name="message"]'),
};

const KEY_STORAGE = "feedback-form-state";
// console.log(email);
// console.log(email.value);


function v(evt) {
    const emailValue = evt.target.value;
    // const messageValue = evt.target.value;
    // console.log(emailValue);
    // console.log(messageValue);

localStorage.setItem(KEY_STORAGE, JSON.stringify(emailValue));

};


form.addEventListener('input', v);
// dataSet.addEventListener('input', v);
