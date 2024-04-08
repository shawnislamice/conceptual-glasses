import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFoXvRqm_dctVP8vjXqLkoj3_b54vDkjE",
  authDomain: "glasses-authentication-93a7b.firebaseapp.com",
  projectId: "glasses-authentication-93a7b",
  storageBucket: "glasses-authentication-93a7b.appspot.com",
  messagingSenderId: "1035639873649",
  appId: "1:1035639873649:web:3009952312cf12fa393bd0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
