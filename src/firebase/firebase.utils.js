import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCtEmr53BUwULvXQ7c16Tbj1_oHZmUeFvA",
  authDomain: "senior-react-dev-course.firebaseapp.com",
  databaseURL: "https://senior-react-dev-course.firebaseio.com",
  projectId: "senior-react-dev-course",
  storageBucket: "senior-react-dev-course.appspot.com",
  messagingSenderId: "563638513468",
  appId: "1:563638513468:web:3f62c573fe967b4dcb7839",
  measurementId: "G-PV103ML76N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // get a query reference
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //get a snapshot
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(" error creating user ", error.message);
    }
  }
  // console.log(snapShot);
  //this function will always return a userref
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
