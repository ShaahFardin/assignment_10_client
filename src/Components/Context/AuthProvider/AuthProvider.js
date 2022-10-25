import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // SignIn with google
    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider);
    }
    // logout
    const logout = () =>{
        return signOut(auth);
    } 
    // create new user with email and pass
    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with email and apss
    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
        });
        return unsubscribe;
    },[]);
    const authInfo = { user, googleSignIn, logout, createNewUser, userLogin };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;