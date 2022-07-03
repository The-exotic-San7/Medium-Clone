import { createContext } from "react";
import { auth } from "./firebase.js";

export const AuthContext =createContext();
export const  Owner=(props)=> {
 const owner = auth?.currentUser?.uid;  
 return(
    <AuthContext.Provider value={owner}>
        {props.children}
    </AuthContext.Provider>
 )
}
 
