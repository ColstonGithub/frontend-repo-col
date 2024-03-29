export const WHITE_SPACES_REGEX_PASSWORD = /^(\S+$)/g;

export const NEW_PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[*.!@#$^&_+-])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

export const MOBILE_NUMBER_REGEX = /^(0\d{10}|[1-9]\d{9})$/;

export const PDF_FILE_REGEX = /^.*\.pdf$/;

export const EMAIL_REGEX =
  /^([0-9a-zA-Z]+['\-._+]?)+[0-9a-zA-Z]+[@]([0-9a-zA-Z]+[-]?){2,}[.](([a-zA-Z]+[-]?){2,}[.]){0,2}[a-zA-Z]{2,}$/;

export const tests = {
  lowerCase: /[a-z]+/,
  upperCase: /[A-Z]+/,
  digits: /\d+/,
  symbol: /[*.!@#$^&_+-]+/,
  length: /^.{10}$/,
};

export const PER_PAGE_LIMIT = 10;
