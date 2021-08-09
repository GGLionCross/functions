export function getCurrentUser(state) {
  return state.currentUser;
}
export function getCurrentUserId(state) {
  return state.currentUser.userId;
}
export function getHostedImages(state) {
  return state.hostedImages;
}
export function isUserLoggedIn(state) {
  return !!state.currentUser.userId;
}
