import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Spinner from '../components/common/Spinner';
import HeaderCard from '../components/HeaderCard';
import Navbar from '../components/Navbar';
import ShowFieldCard from '../components/ShowFieldCard';
import { spinnerContext } from '../context/SpinnerProvider';
import { userContext } from '../context/UserProvider';

const ViewSingleForm = () => {

    const [form , setForm] = useState(null);
    const [response , setResponse] = useState();
    const {setShowSpinner} = useContext(spinnerContext);
    const {db , setUser ,auth} = useContext(userContext);
    const {id} = useParams();
    const history = useHistory();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setResponse({...response , respondedAt : new Date().toString().split("GMT")[0]})
        const formRef = await db.collection("response")
            .add({
                formId: id,
                response: response,
            });
            console.log(formRef);
            history.push('/');
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
        <div className={"bg-green-300 h-screen w-full"}>
            <div className={"h-auto bg-blue-500"}>
                <Navbar/>
                <div className={"flex flex-col items-center justify-center"}>
                    <HeaderCard title={form ? form.title : ""} description={form ? form.description : ""}/>
                    {
                        form ? form.formFields.map( field =>(
                            <ShowFieldCard fieldId={field.id} type={field.fieldType} response={response} setResponse={setResponse} isRequired={field.isRequired}>{field.fieldName}</ShowFieldCard>
                        ))
                        : ""
                    }
                    <button type="button" className="py-2 px-4 my-5 w-1/5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={handleSubmit}>
                        Submit form
                    </button>
                </div>
            </div>
            <Spinner/>
        </div>
     );
}
 
export default ViewSingleForm;