import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDKEFbC6caAMHtbv9iysBNpxx6yL30NfOE",
    authDomain: "crwn-clothing-db-d7cd7.firebaseapp.com",
    projectId: "crwn-clothing-db-d7cd7",
    storageBucket: "crwn-clothing-db-d7cd7.appspot.com",
    messagingSenderId: "330440481297",
    appId: "1:330440481297:web:0b5bc9840bd4bec103afb0",
    measurementId: "G-B6QM1WHVT9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;