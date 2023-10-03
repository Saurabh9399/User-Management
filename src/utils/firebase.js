import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0VpluyA985CvzrQbt-554BDb95e8G8aY",
  authDomain: "user-management-1a7c8.firebaseapp.com",
  projectId: "user-management-1a7c8",
  storageBucket: "user-management-1a7c8.appspot.com",
  messagingSenderId: "857179749687",
  appId: "1:857179749687:web:8b3542c9fef3ba273ceeb2",
  measurementId: "G-GTNR8VEYT0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
