import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../index";

const AuthContext: React.Context<any> = React.createContext(undefined);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const authState = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return authState;
  }, []);

  const values = {
    currentUser,
    register,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;