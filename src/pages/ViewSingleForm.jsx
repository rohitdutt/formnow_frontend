import React, {useRef, useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import ShowFieldCard from '../components/ShowFieldCard';
import SubmitedSuccessfully from "../components/common/SubmitedSuccessfully";
import NotTakingResponses from "../assets/notTakingResponses.svg"
import {Alert, AlertTitle} from "@material-ui/lab";
import {Collapse} from "@material-ui/core";
import SplashScreen from "../components/common/SplashScreen";
import firebase from "../firebase/firebase";
import { fetchFormbyFormId, handleSubmitForm } from '../httpResources/firebaseActions';

const ViewSingleForm = () => {

    const [form , setForm] = useState(null);
    const [isModalShown , setIsModalShown] = useState(false);
    const [response , setResponse] = useState();
    const [joke , setJoke] = useState("");
    const [isAlertOpen , setIsAlertOpen] = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    
    const alertRef = useRef(null);
    const {id} = useParams();
    const history = useHistory();
    const user = firebase.auth().currentUser;

    useEffect(()=>{
        setIsLoading(true);
        fetchFormbyFormId(id, setForm, setIsLoading, setJoke);
    },[]);

    if(form && !form.isActive){
        return(
            <div className={"p-4 flex flex-col items-center"}>
                <div className={"h-72 w-96 m-8"}>
                    <img src={NotTakingResponses} alt={"not taking response"}/>
                </div>
                <div className={"text-center font-semibold text-lg text-gray-600"}>
                    <h6>This form is not taking responses anymore.</h6>
                    <p>If you think it is mistake then please contact creator of form.</p>
                </div>
            </div>
        )
    }

    return (
        isLoading ?
            <SplashScreen/>
        :
            <div className={"lg:h-screen bg-gray-200 relative"}>
                <Collapse ref={alertRef} in={isAlertOpen}>
                    <Alert severity="error" className={"relative m-2 mb-0"}>
                        <AlertTitle>Error</AlertTitle>
                        One or more required fields are not filled — <strong> Required fields are tagged with *required!</strong>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer absolute top-3 lg:top-6 right-4 lg:right-8 icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={()=> setIsAlertOpen(false)}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1={18} y1={6} x2={6} y2={18}></line>
                            <line x1={6} y1={6} x2={18} y2={18}></line>
                        </svg>
                    </Alert>
                </Collapse>
                <div className={"flex flex-col lg:flex-row h-full"}>
                    <div className={"w-full lg:w-2/6 p-2 lg:h-full"}>
                        <div className={"lg:h-full bg-white w-full rounded-lg shadow-2xl flex flex-col items-center relative"}>
                            <div className="inline-flex cursor-pointer my-3 lg:my-8"  onClick={()=>{
                                user ? history.push('/organization-home') : history.push('/');
                            }}>
                                <p className={"text-2xl font-semibold text-gray-800 hover:text-indigo-500"}>Form now</p>
                            </div>
                            <div className="flex h-auto flex-col justify-between">
                                <p className="text-gray-600 dark:text-white text-2xl font-semibold mx-4 text-center">
                                    {form ? form.title : ""}
                                </p>
                                {
                                    <p className="overflow-y-auto dark:text-gray-50 h-auto text-gray-700 text-md py-2 px-6 break-all lg:mt-4 max-h-80">
                                        {
                                            form && form.description != "" ?
                                                form.description
                                            :
                                                <>
                                                    <p className={"hidden lg:block mb-4 font-semibold text-gray-500"}>We couldn't find any description attached with this form so here's a joke for you :</p>
                                                    {joke}
                                               </>
                                        }
                                    </p>
                                }
                            </div>
                            <button type="button" className="hidden lg:block absolute bottom-0 py-2 px-4 my-5 w-3/5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={e => handleSubmitForm(e, setIsAlertOpen, response, alertRef, form, id, setIsModalShown)}>
                                Submit form
                            </button>
                        </div>
                    </div>
                    <div className={"w-full p-2 lg:h-screen overflow-y-auto "}>
                        <div className={"bg-white w-full min-h-full rounded-lg shadow-2xl p-4 flex flex-col items-center"}>
                            <p className={"text-xl text-center font-semibold text-gray-600"}>Respond here</p>
                            {
                                form ? form.formFields.map( field =>(
                                    <ShowFieldCard key={field.id} fieldId={field} type={field.fieldType} response={response} setResponse={setResponse} isRequired={field.isRequired}>{field.fieldName}</ShowFieldCard>
                                ))
                                : ""
                            }
                        </div>
                        <button type="button" className="lg:hidden py-2 px-4 my-3 lg:my-5 lg:mx-5 w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={e => handleSubmitForm(e, setIsAlertOpen, response, alertRef, form, id, setIsModalShown)}>
                            Submit form
                        </button>
                    </div>
                    <SubmitedSuccessfully isShown={isModalShown} setIsModalShown={setIsModalShown} />
                </div>
            </div>
    );
}

export default ViewSingleForm;
