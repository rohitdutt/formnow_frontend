import React from 'react';
import { useState } from 'react';
import "../styles/create-form.scss";
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../components/Navbar';
import FormFieldCard from '../components/FormFieldCard';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { userContext } from '../context/UserProvider';
import { useEffect } from 'react';
import { spinnerContext } from '../context/SpinnerProvider';
import Spinner from '../components/common/Spinner';
import SelectEmployee from '../components/SelectEmployee';

const CreateForm = () => {

    const history = useHistory();
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState([]);
    const [formFields , setFormFields] = useState([]);
    const [selectedType , setSelectedType] = useState("input")
    const [options , setOptions] = useState([]);
    const [selected, setSelected] = useState("Select your name");
    const [organization , setOrganization] = useState({
        name: "",
        employees: []
    });
    const {db , user , auth} = useContext(userContext);
    const {setShowSpinner} = useContext(spinnerContext);

    const fetchOrganization = async () =>{
        const res = await db.collection("organization").doc(auth.currentUser.uid).get();
        console.log(res.data());
        setOrganization(res.data());
        setShowSpinner(false);
    };
    const handleAddField = () =>{
        setFormFields(oldArray => [...oldArray , {id: uuidv4() , isRequired: false , fieldName: "" , fieldType: "input"}]);
        console.log(formFields);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formRef = await db.collection("forms")
            .add({
                organizationId: user.uid,
                createdBy: selected,
                title: title,
                description: description,
                formFields: formFields,
                options : options ,
                timeStamp: new Date().toString()
            });
            console.log(formRef);
            history.push('/');
    };

    useEffect(()=>{
        setShowSpinner(true);
        auth.onAuthStateChanged((user) => {
            if (user) {
                fetchOrganization();
            }else{
                history.push('/log-in')
            } 
          });
    },[])

    console.log(selected);

    return ( 
        <div className={"h-auto bg-gray-200 relative"}>
            <Navbar/>
            <div className={"py-5 px-10 flex justify-center items-center bg-gray-200"}>
                <p className={"text-2xl font-semibold text-gray-600"}>{organization.name}</p>
            </div>
            <div className={"py-5 px-10 flex justify-center items-center bg-gray-200"}>
                Select form belongs to whom : <SelectEmployee setSelected={setSelected} selected={selected} employees={organization.employees}/>
            </div>
            <div className={"py-5 px-10 flex justify-center items-center bg-gray-200"}>
                <p className={"text-2xl font-semibold text-gray-600"}>Creact your form</p>
            </div>
            <div className={"flex flex-col items-center"}>
                <form className={"bg-white w-5/6 md:w-4/6 py-4 rounded-lg shadow-2xl"}>
                    <div className={"flex flex-col justify-center items-center px-4 sm:px-10 py-2"}>
                        {/* <label className="text-gray-700 dark:text-gray-200" for="username"></label> */}
                        <p className={"text-xl font-semibold text-gray-600"}>Enter title for your form</p>
                        <input id="formtitle" type="text" className="block w-full md:w-3/6 px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-blue-500 focus:outline-none focus:ring focus:ring-purple-400" onChange={ e => setTitle(e.target.value)}/>
                    </div>
                    <div className={"flex flex-col justify-center items-center px-4 sm:px-10 py-2"}>
                        <p className={"text-xl font-semibold text-gray-600"}>Enter description for form</p>
                        <textarea id="description" type="text" className="block w-full md:w-3/6 px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-blue-500 focus:outline-none focus:ring focus:ring-purple-400" onChange={ e => setDescription(e.target.value)}/>
                    </div>
                </form>
                {
                        formFields.map((field)=>(
                            <FormFieldCard key={field.id} field={field} setFormFields={setFormFields} formFields={formFields} options={options} setOptions={setOptions} selectedType={selectedType} setSelectedType={setSelectedType}/>
                        ))
                }
                <button type="button" className={"border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 mx-4 my-6 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"} onClick={handleSubmit}>
                    Create form
                </button>
                <div className={"absolute bottom-8 right-8 bg-indigo-500 text-white h-10 w-10 flex justify-center items-center rounded-full shadow-2xl cursor-pointer"} onClick={handleAddField}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
            </div>  
            <Spinner/>
        </div>
    );
}
 
export default CreateForm;