
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBNBgUTrcFTBBetDBfQbSRzTdWia1vC9Ew",
  authDomain: "final-943e7.firebaseapp.com",
  projectId: "final-943e7",
  storageBucket: "final-943e7.appspot.com",
  messagingSenderId: "556076807639",
  appId: "1:556076807639:web:d3d3c9c291cc0f4b8fc792"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
