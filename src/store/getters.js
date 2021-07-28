export function getCurrentUser(state) {
  return state.currentUser;
}
export function isUserLoggedIn(state) {
  return !!state.currentUser.userId;
}
