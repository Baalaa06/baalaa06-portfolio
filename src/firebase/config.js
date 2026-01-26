import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCfVs8uFny8lhKoxeQVUx69HYfzFW83xwk",
  authDomain: "baalaa06-portfolio.firebaseapp.com",
  projectId: "baalaa06-portfolio",
  storageBucket: "baalaa06-portfolio.firebasestorage.app",
  messagingSenderId: "206976287546",
  appId: "1:206976287546:web:036c2e2d6b94e448c90603",
  measurementId: "G-1NCMMK98ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);