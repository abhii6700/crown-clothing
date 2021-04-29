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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const cratedAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          cratedAt,
          ...additionalData
        })
      }catch(error){
          console.log('error creating user', error.message)
      }
    }
    
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;