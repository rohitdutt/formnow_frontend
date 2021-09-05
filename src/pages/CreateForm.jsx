import React, {useRef , useContext , useEffect , useState} from 'react';
import "../styles/create-form.scss";
import { v4 as uuidv4 } from 'uuid';
import FormFieldCard from '../components/FormFieldCard';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../context/UserProvider';
import { spinnerContext } from '../context/SpinnerProvider';
import Spinner from '../components/common/Spinner';
import SelectEmployee from '../components/SelectEmployee';
import {Collapse, FormHelperText, TextField} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import {getOrganizationByUserId, handleCreateFormOrg, handleCreateFormUser} from "../httpResources/firebaseActions";
import {auth} from '../firebase/firebase';

const CreateForm = () => {

    const history = useHistory();
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [formFields , setFormFields] = useState([]);
    const [selectedType , setSelectedType] = useState("input")
    const [selected, setSelected] = useState("None");
    const [isAlertOpen , setIsAlertOpen] = useState(false);
    const [organization , setOrganization] = useState({
        name: "",
        employees: []
    });
    const [isErrorInEmployee , setIsErrorInEmployee] = useState(false);
    const [isErrorInTitle , setIsErrorInTitle] = useState(false);
    const {user} = useContext(userContext);
    const {setShowSpinner} = useContext(spinnerContext);
    const selectUserRef = useRef(null);
    const alertRef = useRef(null);


    const handleAddField = () =>{
        setFormFields(oldArray => [...oldArray , {id: uuidv4() , isRequired: false , fieldName: "" , fieldType: "input"}]);
    }
    
    useEffect(()=>{
        setShowSpinner(true);
        auth.onAuthStateChanged((user) => {
            if(user) {
                getOrganizationByUserId(setOrganization, setShowSpinner);
            }else{
                history.push('/log-in')
            }
          });
    },[])

    if(organization) {
        return (
            <div className={"lg:h-screen bg-gray-200 relative"}>
                <div className={"flex flex-row h-full"}>
                    <div className={"w-2/6 p-2 h-full"}>
                        <div
                            className={"h-full bg-white w-full rounded-lg shadow-2xl flex flex-col items-center relative"}>
                            <p className={"text-2xl font-semibold text-gray-600 my-8"}>{organization.name}</p>
                            {
                                organization.employees.length > 0 ?
                                    <div ref={selectUserRef} className={"flex items-center"}>
                                        <SelectEmployee isError={isErrorInEmployee} setSelected={setSelected}
                                                        selected={selected} employees={organization.employees}/>
                                    </div>
                                    :
                                    null
                            }
                            <div className={"mt-8 flex flex-col justify-center items-center py-2"}>
                                <TextField id="formtitle" label="Enter title" error={isErrorInTitle} className={"w-72"}
                                           variant={"outlined"} onChange={e => setTitle(e.target.value)}/>
                                <FormHelperText>{isErrorInTitle ? "Please enter title for form" : "Required*"}</FormHelperText>
                            </div>
                            <div className={"flex flex-col justify-center items-center py-2"}>
                                <TextField
                                    className={"w-72"}
                                    id="outlined-multiline-static"
                                    label="Enter description"
                                    multiline
                                    rows={6}
                                    variant="outlined"
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <button type="button"
                                    className={"border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 mx-4 my-6 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"}
                                    onClick={e => handleCreateFormOrg(e, setIsErrorInTitle, setIsErrorInEmployee, setIsAlertOpen, history, selected, formFields, title, alertRef, user, description)}>
                                Create form
                            </button>
                            <p className={"mx-4 absolute bottom-2 text-xs antialiased text-gray-500"}>You can start
                                designing your form clicking '+' sign on bottom right corner</p>
                        </div>
                    </div>
                    <div className={" w-full p-2 h-full overflow-y-scroll"}>
                        <div
                            className={"bg-white w-full min-h-full rounded-lg lg:shadow-2xl p-4 flex flex-col items-center"}>
                            <p className={"text-xl text-center font-semibold text-gray-600"}>Create your form</p>
                            {
                                formFields.length == 0 ?
                                    (
                                        <div className={"mt-40"}>
                                            <h1 className="font-bebas-neue uppercase text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                                To get started, please click '+' sign on bottom right corner of page
                                            </h1>
                                        </div>
                                    )
                                    :
                                    formFields.map((field) => (
                                        <FormFieldCard key={field.id} field={field} setFormFields={setFormFields}
                                                       formFields={formFields} selectedType={selectedType}
                                                       setSelectedType={setSelectedType}/>
                                    ))
                            }
                        </div>
                    </div>
                    <div
                        className={"absolute bottom-8 right-20 bg-indigo-600 text-white h-10 w-10 flex justify-center items-center rounded-full shadow-2xl cursor-pointer"}
                        onClick={handleAddField}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                        </svg>
                    </div>
                </div>
                <Spinner/>
            </div>
        );
    }

    return(
        <div className={"lg:h-screen bg-gray-200 relative"}>
            <Collapse ref={alertRef} in={isAlertOpen}>
                <Alert severity="error" className={"relative m-2 mb-0"}>
                    <AlertTitle>Error</AlertTitle>
                    One or more required fields are not filled — <strong> Required fields are tagged with *required!</strong>
                    <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer absolute top-3 lg:top-6 right-4 lg:right-8 icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={()=> setIsAlertOpen(false)}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1={18} y1={6} x2={6} y2={18}></line>
                        <line x1={6} y1={6} x2={18} y2={18}></line>
                    </svg>
                </Alert>
            </Collapse>
            <div className={"flex flex-col lg:flex-row h-full"}>
                <div className={"w-full lg:w-2/6 p-2 h-full"}>
                    <div className={"h-full bg-white w-full rounded-lg lg:shadow-2xl flex flex-col items-center relative"}>
                        <Link to={"/organization-home"}>
                            <p className={"uppercase text-2xl font-semibold text-indigo-600 my-3 lg:my-8 hover:underline"}>Formnow</p>
                        </Link>        
                        <div className={"lg:mt-8 w-full flex flex-col justify-center items-center py-2 px-4 lg:px-0"}>
                            <TextField color={'primary'} id="formtitle" label="Enter title" error={isErrorInTitle} className={"w-full lg:w-72"}
                                       variant={"outlined"} onChange={e => setTitle(e.target.value)}/>
                            <FormHelperText>{isErrorInTitle ? "Please enter title for form" : "Required*"}</FormHelperText>
                        </div>
                        <div className={"hidden lg:block flex flex-col justify-center items-center py-2 lg:py-8"}>
                            <TextField
                                className={"w-72"}
                                id="outlined-multiline-static"
                                label="Enter description"
                                multiline
                                rows={6}
                                variant="outlined"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div className={"lg:hidden w-full px-4 flex flex-col justify-center items-center py-2 lg:py-8"}>
                            <TextField
                                className={"w-full"}
                                id="outlined-multiline-static"
                                label="Enter description"
                                multiline
                                rows={3}
                                variant="outlined"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <button type="button"
                                className={"hidden lg:block border border-indigo-600 bg-indigo-600 text-white rounded-md px-4 py-2 mx-4 my-6 transition duration-500 ease select-none hover:bg-indigo-800 focus:outline-none focus:shadow-outline"}
                                onClick={e => handleCreateFormUser(e, setIsErrorInTitle, setIsErrorInEmployee, setIsAlertOpen, history, selected, formFields, title, alertRef, user, description)}>
                            Create form
                        </button>
                        <p className={"mx-4 mb-2 lg:mb-0 lg:absolute lg:bottom-2 text-xs antialiased text-gray-500"}>You can start
                            designing your form clicking '+' sign on bottom right corner</p>
                    </div>
                </div>
                <div className={" w-full p-2 h-full overflow-y-scroll"}>
                    <div className={"bg-white w-full min-h-full rounded-lg shadow-2xl p-2 lg:p-4 flex flex-col items-center"}>
                        <p className={"text-xl text-center font-semibold text-gray-600"}>Create your form</p>
                        {
                            formFields.length == 0 ?
                                (
                                    <div className={"mt-8 lg:mt-40"}>
                                        <h1 className="font-bebas-neue uppercase text-md text-center lg:text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                            To get started, please click '+' sign on bottom right corner of page
                                        </h1>
                                    </div>
                                )
                                :
                                formFields.map((field) => (
                                    <FormFieldCard key={field.id} field={field} setFormFields={setFormFields}
                                                   formFields={formFields} selectedType={selectedType}
                                                   setSelectedType={setSelectedType}/>
                                ))
                        }
                        <button type="button"
                                className={"w-ful lg:hidden border border-indigo-600 bg-indigo-600 text-white rounded-md px-4 py-2 mx-4 my-6 transition duration-500 ease select-none hover:bg-indigo-800 focus:outline-none focus:shadow-outline"}
                                onClick={e => handleCreateFormUser(e, setIsErrorInTitle, setIsErrorInEmployee, setIsAlertOpen, history, selected, formFields, title, alertRef, user, description)}>
                            Create form
                        </button>
                    </div>
                </div>
            </div>
            <Spinner/>
            <div
                className={"absolute bottom-10 lg:bottom-8 right-9 lg:right-12 bg-indigo-600 text-white h-10 w-10 flex justify-center items-center rounded-full shadow-2xl cursor-pointer"}
                onClick={handleAddField}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
            </div>
        </div>
    )
}

export default CreateForm;
