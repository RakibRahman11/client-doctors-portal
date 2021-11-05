import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../components/Pages/LoginInformation/LoginAccount/Firebase/firebase.init";

initFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const createUser = (email, password, name, history, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName:name}
                setUser(newUser)
                const destination = location?.state?.from || '/'
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                .then(() => {})
                .catch((error) => {});
                history.replace(destination)
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const googleSignIn = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {

        }).catch((error) => {
            setAuthError(error.message)
        })
            .finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {
                const uid = user.uid;
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])
    return {
        user,
        createUser,
        logOut,
        authError,
        loginUser,
        googleSignIn,
        isLoading
    }
}


export default useFirebase;