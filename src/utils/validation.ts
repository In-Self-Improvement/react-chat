export const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const checkEmailLength = (email: string) => {
  const maxLength = 254;
  return email.length <= maxLength;
};
