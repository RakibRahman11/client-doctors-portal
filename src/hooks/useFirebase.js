import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../components/Pages/LoginInformation/LoginAccount/Firebase/firebase.init";

initFirebase()

const useFirebase = () => {
const [user, setUser] = useState({})
const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const createUser = (email, password) => {
        isLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => { })
            .finally(()=>setIsLoading(false));
    }

    const logOut = () =>{
        isLoading(true)
        signOut(auth).then(() => {
            
        }).catch((error) => {})
        .finally(()=>setIsLoading(false));
        
    }
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            isLoading(true)
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
        isLoading
    }
}


export default useFirebase;