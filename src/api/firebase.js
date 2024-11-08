// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBckvO5sZrIjrvDpmsY_SbfrnoRfySpSVE",
  authDomain: "mail-template-d8e73.firebaseapp.com",
  projectId: "mail-template-d8e73",
  storageBucket: "mail-template-d8e73.appspot.com",
  messagingSenderId: "835367572076",
  appId: "1:835367572076:web:fcdfa1ef837febddba3e49",
  measurementId: "G-SBC2EZ4LY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
