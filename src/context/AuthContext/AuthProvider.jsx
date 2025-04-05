import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //manage profile
  const manageProfile = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  //login with google
  const handleGoogleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider);
  };

  //logout user
  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    handleGoogleLogin,
    manageProfile,
    logOut,
  };

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("stored captured", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("logIn token", res.data)
            setLoading(false);
          });
      } else {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/logout`,
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("logout", res.data);
            setLoading(false);
          });
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider
