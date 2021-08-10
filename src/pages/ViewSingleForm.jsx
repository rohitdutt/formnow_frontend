import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Spinner from '../components/common/Spinner';
import HeaderCard from '../components/HeaderCard';
import Navbar from '../components/Navbar';
import ShowFieldCard from '../components/ShowFieldCard';
import ViewFormTabs from '../components/ViewFormTabs';
import { spinnerContext } from '../context/SpinnerProvider';
import { userContext } from '../context/UserProvider';
import SubmitedSuccessfully from "../components/common/SubmitedSuccessfully";
import NotTakingResponses from "../assets/notTakingResponses.svg"
import firebase from "../firebase/firebase";

const ViewSingleForm = () => {

    const [form , setForm] = useState(null);
    const [isModalShown , setIsModalShown] = useState(false);
    const [response , setResponse] = useState();
    const {setShowSpinner} = useContext(spinnerContext);
    const {db , setUser ,auth} = useContext(userContext);
    const {id} = useParams();
    const history = useHistory();
    const user = firebase.auth().currentUser;

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const formRef = await db.collection("response")
                .add({
                    formId: id,
                    response: response,
                    respondedAt: new Date().toString().split("GMT")[0]
                });
            console.log(formRef);
            setIsModalShown(true);
        }catch (e){
            console.log(e)
        }
    };

    useEffect( ()=>{
        setShowSpinner(true);
        const fetchForms= async () =>{
            console.log(id)
            const res = await db.collection('forms').doc(id).get();
            console.log(res.data())
            setForm(res.data());
            setShowSpinner(false);
        };
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                fetchForms();
            }else{
                history.push('/log-in')
            }
          });
    },[]);

    console.log(form)

    return (
        <div className={"h-screen w-full "}>
            <div className="inline-flex cursor-pointer absolute top-5 left-10"  onClick={()=>{
                user ? history.push('/organization-home') : history.push('/');
            }}>
                <p className={"text-2xl font-semibold text-gray-800 hover:text-indigo-500"}>Form now</p>
            </div>
            <div className={"h-auto"}>
                {
                    form && form.isActive
                    ?
                    <div className={"flex flex-col items-center justify-center"}>
                        <HeaderCard title={form ? form.title : ""} description={form ? form.description : ""}/>
                        {
                            form ? form.formFields.map( field =>(
                                <ShowFieldCard key={field.id} fieldId={field} type={field.fieldType} response={response} setResponse={setResponse} isRequired={field.isRequired}>{field.fieldName}</ShowFieldCard>
                            ))
                            : ""
                        }
                        <button type="button" className="py-2 px-4 my-5 w-1/5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={handleSubmit}>
                            Submit form
                        </button>
                    </div>
                    :
                    <div className={"p-4 flex flex-col items-center"}>
                        <div className={"h-72 w-96 m-8"}>
                            <img src={NotTakingResponses} alt={"not taking response"}/>
                        </div>
                        <div className={"text-center font-semibold text-lg text-gray-600"}>
                            <h6>This form is not taking responses anymore.</h6>
                            <p>If you think it is mistake then please contact creator of form.</p>
                        </div>
                    </div>
                }
            </div>
            <SubmitedSuccessfully isShown={isModalShown} setIsModalShown={setIsModalShown} />
            <Spinner/>
        </div>
     );
}

export default ViewSingleForm;
