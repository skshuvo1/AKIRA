
submitBtn = () => {
const emailField = document.getElementById('email-field');
const emailValue = emailField.value;
const passwordField = document.getElementById('password-field');
const passwordValue = passwordField.value;
emailField.value = '';
passwordField.value = '';
setToLocalStorage(emailValue, passwordValue)
}

const getStored = () => {
  let users = {};
  const userStored = localStorage.getItem('users');
  if(userStored){
    users = JSON.parse(userStored)
  }
  return users;
}

const setToLocalStorage = (emailValue, passwordValue) => {
const users = getStored();
users[emailValue] = passwordValue;
const userStringified = JSON.stringify(users);
localStorage.setItem('user info', userStringified)
}
submitBtn();

