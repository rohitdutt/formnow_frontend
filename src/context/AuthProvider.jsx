import React, { createContext, useState } from 'react';

export const firebaseAuth = createContext();

const AuthProvider = (props) => {

  const [ userInfo , setUserInfo ] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  return (
      <firebaseAuth.Provider
          value={{
            userInfo,
            setUserInfo,
            errors
          }}>
        {props.children}
      </firebaseAuth.Provider>
    );
};

export default AuthProvider;
