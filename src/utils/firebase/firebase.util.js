import { initializeApp } from "firebase/app";

import { 
  getAuth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged
 } from "firebase/auth";

import {
getFirestore,
doc,
getDoc,
setDoc
} from 'firebase/firestore';

// import { getAnalytics } from "firebase/analytic";
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI9xLXTxFzCJVrntE9i_vQxg0yrlpUwWE",
  authDomain: "kundum-8203c.firebaseapp.com",
  projectId: "kundum-8203c",
  storageBucket: "kundum-8203c.appspot.com",
  messagingSenderId: "980304055286",
  appId: "1:980304055286:web:7d400268940252d5d255d7",
  measurementId: "G-KW8289LTS2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, info = {}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...info
      })
    } catch (error) {
     console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async ( email, password) => {
if(!email || !password) return;

return await signInWithEmailAndPassword(auth, email,password)
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);


// const analytics = getAnalytics(app);

