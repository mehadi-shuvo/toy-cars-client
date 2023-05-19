import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const addNameAndPhoto = (currentUser, name, photo)=>{
        return updateProfile(auth.currentUser, {displayName: name, photoURL:photo})
    }

    const login = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setLoading(false)
            setUser(loggedUser);
        })

        return ()=>{
            unsubscribe();
        }
    },[]);

    const LoginGoogle =(GoogleProvider)=>{
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }

    const authInfo ={
        user,
        loading,
        createUser,
        login,
        addNameAndPhoto,
        LoginGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;