import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   const googleProvider = new GoogleAuthProvider();
   

   const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
    
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  const updateUserProfile = (name) =>{
    return updateProfile(auth.currentUser, {
        displayName: name,
    })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    
    })
    return () => {
      unSubscribe();
    }
  }, [])

  const userInfo = {user,loading,createUser,signIn,logOut,updateUserProfile,googleSignIn}
  return (
      <AuthContext.Provider value={userInfo}>
          {children}
      </AuthContext.Provider>
  );
}

export default AuthProvider