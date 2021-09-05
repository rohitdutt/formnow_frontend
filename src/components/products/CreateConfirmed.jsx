import React from 'react';
import firebase from "../../firebase/firebase";
import { useHistory } from 'react-router';

const CreateConfirmed = ({isShown , setIsModalShown}) => {

    const history = useHistory();

    const handleClose = async () =>{
        setIsModalShown(false);
        firebase.auth().signOut();
        history.push('/')
    };

    return ( 
        <div className={`${isShown ? 'fixed' : 'hidden'} top-0 left-0 z-50 w-screen h-screen flex items-center justify-center`} style={{background: "rgba(1, 2, 0.5, 0.9)"}}>
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-2/6 m-auto">
                <div className="w-full h-full text-center">
                    <div className="flex h-full flex-col justify-center">
                        <svg className="h-12 w-12 mt-4 m-auto text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        <p className="text-gray-600 dark:text-gray-100 text-md py-2 px-6 text-justify">
                            Your organization account is now created ,you need to first confirm your account using link sent to your given email then you can use our templates or create you own form and do amazing things.
                        </p>
                        <div className="flex items-center justify-between gap-4 w-full mt-8">
                            <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={handleClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CreateConfirmed;