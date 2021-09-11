import React, {useContext, useState, useEffect}from 'react';
import FormsTable from '../components/FormsTable';
import Navbar from '../components/Navbar';
import { userContext } from '../context/UserProvider';
import { Link, useHistory } from 'react-router-dom';
import SplashScreen from "../components/common/SplashScreen";
import firebase from "../firebase/firebase";
import { getFormsByUserId } from '../httpResources/firebaseActions';
import NotFound from "../assets/not-found.svg";

const ViewAllForms = () => {

    const [forms , setForms] = useState([]);
    const [isDeleteFired, setIsDeleteFired] = useState(false)
    const [statusChanged , setStatusChanged] = useState(false);
    const [isFetchingForms , setIsFetchingForms] = useState(false);
    const { setUser} = useContext(userContext);
    const history = useHistory();

    const fetchForms = async () =>{
        try {
            const res = await getFormsByUserId(firebase.auth().currentUser.uid);
            if(res == "error"){
                throw "error";
            }
            res.docs.forEach(form => {
                const data = form.data();
                data["formId"] = form.id;
                setForms(oldArray => [...oldArray, data]);
            });
        }catch (e) {
            console.log(e);
        }
    };

    useEffect(()=>{
        setIsFetchingForms(true);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setForms([]);
                    fetchForms().then(r => setIsFetchingForms(false));
            }else{
                history.push('/log-in')
            }
          });
    },[statusChanged, isDeleteFired]);

    return (
            isFetchingForms ?
                <SplashScreen/>
            :
                <div className={"h-auto w-full"}>
                    <Navbar/>
                    {
                        forms.length === 0 
                        ?
                            <div className={"h-full flex flex-col items-center justify-center mt-20"}>
                                <img height={100} width={300} src={NotFound} alt={"not found"}/>
                                <p className="p-4 mt-16 text-left lg:text-center font-bebas-neue uppercase text-sm sm:text-md font-black flex flex-col leading-none dark:text-white text-gray-800">
                                    We could not found any form for you , create a form now , click <Link className={"text-indigo-600 hover:underline"} to={"/create-form"}>here</Link>
                                </p>
                            </div>
                        :
                            <div className={"border-t h-auto"}>
                                <FormsTable setIsDeleteFired={setIsDeleteFired} isDeleteFired={isDeleteFired} data={forms} setStatusChanged={setStatusChanged} statusChanged={statusChanged}/>
                            </div>
                    }
                </div>
    );
};

export default ViewAllForms;
