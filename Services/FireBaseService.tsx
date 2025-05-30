import { initializeApp } from 'firebase/app';  
import { connectAuthEmulator, getAuth,RecaptchaVerifier } from 'firebase/auth';  
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { Platform } from 'react-native';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMdm4v3VbFdz_-AQ7bbRrvw8QgvAQnkwE",
  authDomain: "fixmate-b583d.firebaseapp.com",
  projectId: "fixmate-b583d",
  storageBucket: "fixmate-b583d.firebasestorage.app",
  messagingSenderId: "134280658482",
  appId: "1:134280658482:web:782b314391eec578f4862b",
  measurementId: "G-6MPE7GFTG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Use Firebase services  
const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

const auth = getAuth(app);
connectAuthEmulator(auth, `http://${host}:9099`,  { disableWarnings: true });
const db = getFirestore(app);  
connectFirestoreEmulator(db, host, 8080);

export {app, auth, db };
