import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const FirebaseContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const googleprovider = new GoogleAuthProvider();
  const gitHubProvider=new GithubAuthProvider()
  const twitterProvider=new TwitterAuthProvider()
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setUser(null)
    return signOut(auth);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleprovider);
  };
  const signInWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const signInWithTwitter = () => {
    return signInWithPopup(auth, twitterProvider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const myInfo = {
    createUser,
    logOut,
    signIn,
    user,
    signInWithGoogle,
    signInWithGitHub,
    signInWithTwitter,
  };
  return (
    <FirebaseContext.Provider value={myInfo}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
