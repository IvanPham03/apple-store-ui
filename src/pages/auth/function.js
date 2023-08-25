const isValidEmail = email => {
  return /\S+@\S+\.\S+/.test(email);
};
const isValidPhone = phone => {
  return /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
};


export {
  isValidEmail, isValidPhone
}