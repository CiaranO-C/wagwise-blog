function validateTruthyForm(isSignUp, form) {
  let error = null;
  const formData = new FormData(form);
  const { username, password, confirmPassword } = Object.fromEntries(
    formData.entries(),
  );
  const empties = isSignUp
    ? !username || !password || !confirmPassword
    : !username || !password;
  if (empties) error = "Please fill out all fields";
  return error;
}

function validateLength(min, max, data) {
  const length = data.length;

  if (length < min || length > max) return false;
  return true;
}

function isAlphaNumeric(value) {
  return /^[a-zA-Z0-9]+$/.test(value);
}

function validatePassword(password) {
  let error = null;
  if (password.length < 5) {
    error = "password must be at least 5 characters";
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/.test(password)) {
    error = "password must contain lowercase, uppercase and a number";
  }
  return error;
}

function validateConfirmPassword(password, confirmPassword) {
  let error = null;
  if (password !== confirmPassword) {
    error = "passwords do not match";
  }
  return error;
}

function validateUsername(username) {
  let error = null;
  if (!validateLength(3, 15, username)) {
    error = "username between 3-15 characters long";
  } else if (!isAlphaNumeric(username)) {
    error = "username can only be alphanumeric characters";
  }
  return error;
}

export {
  validateTruthyForm,
  validateLength,
  isAlphaNumeric,
  validatePassword,
  validateConfirmPassword,
  validateUsername,
};
