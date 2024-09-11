// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWOiYKzjy6Xq6O7KJhf9ilB1fE317k9dQ",
  authDomain: "cnproject-ff690.firebaseapp.com",
  projectId: "cnproject-ff690",
  storageBucket: "cnproject-ff690.appspot.com",
  messagingSenderId: "409008736789",
  appId: "1:409008736789:web:643404cadd39dc136a1c1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

