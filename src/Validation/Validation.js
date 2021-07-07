export function chkEmail(email) {
  var regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regExp.test(email) ? true : false;
}

export function chkPwd(pw) {
  var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
  return !reg_pwd.test(pw) ? false : true;
}

export function chkName(name) {
  if (name === '') {
    return false;
  } else {
    return true;
  }
}

export function chkAddress(address) {
  if (address === '') {
    return false;
  } else {
    return true;
  }
}
