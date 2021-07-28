import { firebaseAuth, firebaseDb } from "src/boot/firebase";
import { Notify } from "quasar";

export function handleAuthStateChanged({ commit, dispatch }) {
  // For custom cards, idea:
  // If user is logged in, append their cards to the cards object in state
  // If user is logged out, remove cards from state with property custom:true
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      const userId = firebaseAuth.currentUser.uid;
      firebaseDb.ref("users/" + userId).once("value", (snapshot) => {
        let userDetails = snapshot.val();
        commit("setCurrentUser", {
          ...userDetails,
          userId
        });
      });
    } else {
      // User is logged out
      commit("setCurrentUser", {});
    }
  });
}
export function userLogin({}, payload) {
  firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      // console.error(error);
      let notifyObj = { type: "negative" }
      switch(error.code) {
        case "auth/user-not-found":
          notifyObj.message = "Unregistered email";
          break;
        case "auth/wrong-password":
          notifyObj.message = "Incorrect password";
          break;
        default:
          notifyObj.message = error.message;
      }
      Notify.create(notifyObj);
    });
}
export function userLogout({}, payload) {
  firebaseAuth.signOut();
}
export function userRegister({}, payload) {
  firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log(response);
      const userId = firebaseAuth.currentUser.uid;
      firebaseDb.ref("users/" + userId).set({
        email: payload.email,
        username: payload.username
      });
    })
    .catch(error => {
      console.error(error.message);
      let notifyObj = { type: "negative", message: error.message }
      Notify.create(notifyObj);
    });
}
