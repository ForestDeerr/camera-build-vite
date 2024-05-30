export function formatPhoneNumber(phoneNumber: string) {
  // Удалить все символы, кроме + в начале цифр
  let cleanedNumber = phoneNumber.replace(/(?!^\+)\D/g, '');
  // Проверить, начинается ли номер с +
  if (!cleanedNumber.startsWith('+')) {
    // Если номер не начинается с +, добавить его в начале
    cleanedNumber = `+${ cleanedNumber}`;
  }
  return cleanedNumber;
}
