import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import firebase from '../firebase/firebase'

export const userContext = createContext({user: null});

const UserProvider = (props) => {

  const [ user , setUser ] = useState(firebase.auth().currentUser);
  const [fireBase , setFireBase] = useState(firebase);
  const [auth , setAuth] = useState(firebase.auth());
  const [db , setDb] = useState(firebase.firestore())

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
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
              auth,
              db
            }}>
          {props.children}
        </userContext.Provider>
      );
};

export default UserProvider;
