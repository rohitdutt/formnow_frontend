import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FormsTable from '../components/FormsTable';
import Navbar from '../components/Navbar';
import { spinnerContext } from '../context/SpinnerProvider';
import { userContext } from '../context/UserProvider';
import Spinner from '../components/common/Spinner';
import { useHistory } from 'react-router-dom';
import NotFound from "../assets/not-found.svg";
import firebase from "firebase";


const ViewAllForms = () => {

    const [forms , setForms] = useState([]);
    const [statusChanged , setStatusChanged] = useState(false);
    const {setShowSpinner} = useContext(spinnerContext);
    const {db , auth , setUser} = useContext(userContext);
    const history = useHistory();

    const fetchForms = async () =>{
        const res = await db.collection('forms').where("organizationId","==" , auth.currentUser.uid).get();
        res.docs.forEach(form => {
            const data = form.data();
            data["formId"] = form.id;
            setForms(oldArray => [...oldArray , data]);
        });
        setShowSpinner(false);
    };

    console.log(firebase.auth().currentUser.getIdToken(true))
    useEffect(()=>{
        setShowSpinner(true);
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setForms([]);
                    fetchForms();
            }else{
                history.push('/log-in')
            }
          });
        setShowSpinner(false);
    },[statusChanged]);

    console.log(statusChanged)
    return (
            forms &&
            <div className={"h-auto w-full"}>
                <Navbar/>
                {
                    forms.length !== 0 ?
                        (<div className={"border-t"}>
                            <FormsTable data={forms} setStatusChanged={setStatusChanged} statusChanged={statusChanged}/>
                        </div>)
                        :
                        (
                            <div className={"w-full flex justify-center py-3"}>
                                <div className={"h-80 w-80 mt-16"}>
                                    <img src={NotFound} alt={"nothing found"}/>
                                    <p className={"text-center mt-8 capitalize text-indigo-500 text-xl font-semibold"}>COULDN'T FIND ANYTHING!</p>
                                </div>
                            </div>
                        )
                }
                <Spinner/>
            </div>
    );
};

export default ViewAllForms;
