import firebase from 'firebase';
import 'firebase/firestore'

const app = firebase.initializeApp({

    apiKey: "AIzaSyAWoMEwaXdxw0BV3Vhwj1E_AOf6py1id3Y",
    authDomain: "ecommerce-coderhouse-2021.firebaseapp.com",
    projectId: "ecommerce-coderhouse-2021",
    storageBucket: "ecommerce-coderhouse-2021.appspot.com",
    messagingSenderId: "257222051529",
    appId: "1:257222051529:web:a0a07c5d13b4e80bc82f18"
 });

 export const getFirebase = () => app

 export const getFirestore = () => firebase.firestore(app)

 export const db = firebase.firestore()
