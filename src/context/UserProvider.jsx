import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat";

export const userContext = createContext({user: null});

const UserProvider = (props) => {

    const firebaseAuth = getAuth();
    const [ user , setUser ] = useState("");
  const [fireBase , setFireBase] = useState(firebase);

  useEffect(()=>{
    firebaseAuth.onAuthStateChanged(userAuth =>{
            setUser(userAuth);
    })
  })
  
    return (
        <userContext.Provider
            value={{
              user,
              setUser,
              fireBase,
              setFireBase,
            }}>
          {props.children}
        </userContext.Provider>
      );
};

export default UserProvider;
