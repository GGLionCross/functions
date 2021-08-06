import { firebaseAuth, firebaseDb, pGoogle } from "src/boot/firebase";
// import { Notify } from "quasar";

export async function handleAuthStateChanged({ commit, dispatch }) {
  // For custom cards, idea:
  // If user is logged in, append their cards to the cards object in state
  // If user is logged out, remove cards from state with property custom:true
  firebaseAuth.onAuthStateChanged(async (user) => {
    console.error("user:", user);
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
      commit("setCurrentUser", {});
    }
  });
}
export function userLogin({}) {
  firebaseAuth.signInWithPopup(pGoogle)
    .then((result) => {
      // If userId is not in RDB, add to RDB
      const userId = firebaseAuth.currentUser.uid;
      firebaseDb.ref("users/" + userId).once("value", (snapshot) => {
        let userDetails = snapshot.val();
        if (!userDetails) {
          let email = result.additionalUserInfo.profile.email;
          firebaseDb.ref("users/" + userId).set({
            email
          });
        }
      });
    })
    .catch((error) => {
      console.error(error);
      // Display the error to the user
      // let notifyObj = { type: "negative", message: error.message }
      // Notify.create(notifyObj);
    });
}
export function userLogout({}, payload) {
  firebaseAuth.signOut();
}
