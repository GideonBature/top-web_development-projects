const form = document.querySelector('form');
const errorMessage = document.querySelector('#errorMessage');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent the form from being submitted
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#cpassword').value;
  if (password !== confirmPassword) {
    errorMessage.style.display = 'block'; // show the error message
  } else {
    // the passwords match, so you can submit the form or perform other actions
    // ...
    e.default();
  }
});