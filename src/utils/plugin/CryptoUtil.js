import CryptoJS from 'crypto-js/crypto-js'

// 默认的 KEY 与 iv 如果没有给
// const KEY = CryptoJS.enc.Utf8.parse("MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoTg48Ch9DBDoWdqhwV4ZmbbkEgJbJxByIn2qAJOsViQkO20kl0YxGVSX9/tXHoBGRUC3dGBwFPoxHFdgnR6shIjNj7ccuuk892e4lPMB/fnnNRE+8OQNMpFg9l7PAOZu4EFkhd55eWiMcNyGRicnVQjuwe13yRA70C0GmDx/hBxjwhZZ4pa1f8WGZeh0Q/7jZ8S4+dAnENLIo4AafbczDYsuA8HbfnmTFxebhjeblatIV1w0XPdLj0WgCRWvHlsh+CwgzyYyBufJim6VwLnKZYt7lt+aRyCLWxm4tG09pXmbDdr9y5mVdLQT1w8/QB9l8F8Q2r341PsSNRkDgTXv9AgMBAAECggEAXMRhTjCaGJtM1TLkFr/3gZ+62kNyWZXx0FBmKGmw9fbJelneEK1WrzGhtkVvWg/dfwX9sZ7nWvCl60ycDtKO/b1XLB5Uqmng4YusmvPIer2gr0aW2H1oVydCx/hFCI/4R9Ui+7JuJT1zmsq8gva6vAQ82EK3fqCKyXMm5Tvy61nRZYhVqjOcAhGO+hURtEthqOuIkfWIU/ChL0/ea6uvfwi84ETcuRNzWdc9ld+RUBzSN8OsEQ8McTNnhrensbXCbDvGUAm0vGZl/+81FhGXS88FpKrAG8tCO0rzcXh1Fub6fHozSSi9Hoc/+wQ8uvPhXOuUGtjELeOkz5FM4lwLoQKBgQDzcLJrs8Jffgj8KUUXGj/Y78u228omrhCSmfV9msGUMeVAMK1Yx7tcDAUtOMwNlKisRlUA6fEbqbAJty7rP9w7KVYatt9B7K05r00TzyYcAd5HowQ8h8u2rsv/Ax61U93NaLT9L5LuhBOvresDYAvbwoiUbOVJS+6kH36SJHv4eQKBgQCw/P0MmnwsmPrHgmRLXtAans+u3YAF0OcE56TLgsMW1jBrCiyzpgcL8rS+z4Hd93vZtRMcR8EWDElKb1mrNHRXW2x5dmxoi30PZi+SFKS3E7+98zvP6/TL+zWDMhhHgxKHmT6ITcWeNr/r1TNZg9SV8hso6TMtePrWhnEOY0+GpQKBgAgwyYAAK1EFL440YUO2uWE2KDd9y55jiuEz1uOj+lFfIGR5fsuW5MHjEaWE3LC0SLyLHT8Ln/YbTnX1ONnnayR+bow1jOtt6CIhuMkq1hBpK65jWLgkpYD+/pQU6cqWCMdpd3VxTVNDFFp70oVpjNyW/ftocop1yJCzEpIeMiGZAoGAZJw8IVkEc7m2/YkTCIFqXWef+fCyYRwC55fi50l7K1UxCvgqtykPYmxi8QE2+v4/ql+z8GSdz7HGTAkGeTuFU0+GV3nJYJjCy+kz65/OjsAsRIernaOtcfNo1R66DJTnCKxFjuhfCXRoH2EAIse9JkwNwnDmhdf7B84/IIW15H0CgYEAka42GcwJVzL1wylgYFpkMuPZbb22G7sYtVs7XDXh/hRCPk06qYLZe2316SHhNYONebd9+90PfRbNLTIc1/wEfXeweQa2o32MEyKxbWupecPbOf6f1w8AClb/fUD2GDfFmskiDeRqyrsfk3NTUDRAGvKk4mpXFaGcQ8nu9SrzZbQ=");
// const IV = CryptoJS.enc.Utf8.parse('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqE4OPAofQwQ6FnaocFeGZm25BICWycQciJ9qgCTrFYkJDttJJdGMRlUl/f7Vx6ARkVAt3RgcBT6MRxXYJ0erISIzY+3HLrpPPdnuJTzAf355zURPvDkDTKRYPZezwDmbuBBZIXeeXlojHDchkYnJ1UI7sHtd8kQO9AtBpg8f4QcY8IWWeKWtX/FhmXodEP+42fEuPnQJxDSyKOAGn23Mw2LLgPB2355kxcXm4Y3m5WrSFdcNFz3S49FoAkVrx5bIfgsIM8mMgbnyYpulcC5ymWLe5bfmkcgi1sZuLRtPaV5mw3a/cuZlXS0E9cPP0AfZfBfENq9+NT7EjUZA4E17/QIDAQAB');

  const KEY = CryptoJS.enc.Utf8.parse("4n7dyuBLNJ3Z3qx4");
  const IV = CryptoJS.enc.Utf8.parse("uNXmNYRJfBhWHgqy");
/**
 * AES加密 ：字符串 key iv  返回base64
 */
export function Encrypt(word, keyStr, ivStr) {
  let key = KEY
  let iv = IV

  if (keyStr) {
    key = CryptoJS.enc.Utf8.parse(keyStr);
    iv = CryptoJS.enc.Utf8.parse(ivStr);
  }

  let srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
  // console.log("-=-=-=-", encrypted.ciphertext)
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}
/**
 * AES 解密 ：字符串 key iv  返回base64
 *
 */
export function Decrypt(word, keyStr, ivStr) {
  let key  = KEY
  let iv = IV

  if (keyStr) {
    key = CryptoJS.enc.Utf8.parse(keyStr);
    iv = CryptoJS.enc.Utf8.parse(ivStr);
  }

  let base64 = CryptoJS.enc.Base64.parse(word);
  let src = CryptoJS.enc.Base64.stringify(base64);

  var decrypt = CryptoJS.AES.decrypt(src, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });

  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
