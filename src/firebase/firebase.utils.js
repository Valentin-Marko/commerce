import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDg1vPT5GF5E2FRcmHMXZCyyvRf2ZXRR5A",
  authDomain: "crwn-db-f29e4.firebaseapp.com",
  projectId: "crwn-db-f29e4",
  storageBucket: "crwn-db-f29e4.appspot.com",
  messagingSenderId: "432196151638",
  appId: "1:432196151638:web:fd831beb2ea88be8820ef7",
  measurementId: "G-Y5KTCG7078",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
