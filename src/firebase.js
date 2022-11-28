import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCiMyxbcTXM_gXX9S0zPt_Ijpk0jSyskhA",
  authDomain: "social-media-b7b71.firebaseapp.com",
  projectId: "social-media-b7b71",
  storageBucket: "social-media-b7b71.appspot.com",
  messagingSenderId: "725034684756",
  appId: "1:725034684756:web:095ef49a699a686d9eb8c1"
};

export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);
