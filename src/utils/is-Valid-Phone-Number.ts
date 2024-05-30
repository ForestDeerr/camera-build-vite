export function isValidPhoneNumber(phoneNumber: string) {
  const regex = /^(?:\+7|8)[\s-]?\(?9\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  return regex.test(phoneNumber);
}
