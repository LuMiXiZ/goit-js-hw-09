let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  } catch (error) {
    console.log('Error parsing localStorage data:');
  }
}

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  form.reset();
});
