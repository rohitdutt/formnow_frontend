import React, {useContext, useEffect} from 'react';
import {Route, useHistory} from "react-router-dom";
import {userContext} from "../context/UserProvider";
import firebase from "firebase/compat";
import { spinnerContext } from '../context/SpinnerProvider';

const PrivateRoute = ({ children, ...rest }) =>{

    const {setShowSpinner} = useContext(spinnerContext)
    let {auth} = useContext(userContext);
    const history = useHistory();

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
            }else{
                setShowSpinner(false);
                history.push('/log-in')
            }
        });
    },[auth])


    return (
        <Route
            {...rest}
            render={children}
        />
    );
}

export default PrivateRoute