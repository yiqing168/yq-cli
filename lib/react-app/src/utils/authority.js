// 获取用户权限
export function getAuthority() {
  return localStorage.getItem('application-authority');
}
// 设置用户权限
export function setAuthority(authority) {
  return localStorage.setItem('application-authority', authority);
}
// 用户token
export function getUserToken() {
  return localStorage.getItem('user');
}
// 用户token
export function setUserToken(token) {
  return localStorage.setItem('user', token);
}
export function removeToken() {
  localStorage.removeItem("user");
  localStorage.removeItem("application-authority");
}
export function redirectLogin() {
  removeToken();
  window.location.href = window.location.origin + "/login";
}