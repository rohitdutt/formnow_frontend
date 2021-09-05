import React,{ useEffect} from 'react';
import "../styles/create-form.scss";
import DropdownInputField from './inputs/DropdownInputField';
import LargeInput from './inputs/LargeInput';
import RatingInput from './inputs/RatingInput';
import SelectInputType from './inputs/SelectInputType';
import TextInput from './inputs/TextInput';
import {TextField} from "@material-ui/core";

const FormFieldCard = ({setFormFields , formFields , field , selectedType , setSelectedType}) => {

    const handleChange= (e) =>{
        const index = formFields.findIndex(item => item.id === field.id);
        const tempField = formFields[index];
        tempField['fieldName'] = e.target.value;
        if (index === -1){
            console.log('no match')
        }
        else
            setFormFields([
                ...formFields.slice(0,index),
                tempField,
                ...formFields.slice(index+1)
            ]);
    };

    const handleIsRequired = () =>{
        const index = formFields.findIndex(item => item.id === field.id);
        const tempField = formFields[index];
        tempField['isRequired'] = !tempField['isRequired'];
        if (index === -1){
            console.log('no match')
        }
        else
            setFormFields([
                ...formFields.slice(0,index),
                tempField,
                ...formFields.slice(index+1)
            ]);
    };

    useEffect(()=>{
        const index = formFields.findIndex(item => item.id === field.id);
        const tempField = formFields[index];
        if (index === -1){
            console.log('no match')
        }
        else
            setFormFields([
                ...formFields.slice(0,index),
                tempField,
                ...formFields.slice(index+1)
            ]);
    },[])

    return (
        <form className={"bg-white w-full lg:w-5/6 py-4 rounded-lg shadow-2xl my-2 relative"}>
            <div className={"flex flex-col justify-center items-center px-4 sm:px-10 py-2 mt-4 lg:mt-0"}>
                <TextField id="formtitle" label="Enter title for field" className={"w-full lg:w-72"}
                           variant={"outlined"} onChange={handleChange}/>
            </div>
            <div className={"flex justify-center"}>
            {
                field.fieldType === "Dropdown"
                ?
                    <div className={"w-full px-4 lg:w-2/5"}>
                        <DropdownInputField isDisabled field={field} setFormFields={setFormFields}  formFields={formFields}/>
                    </div>
                :
                field.fieldType === "ratings"
                ?
                <div className={"w-full px-4 lg:w-2/5"}>
                    <RatingInput/>
                </div>
                :
                field.fieldType === "input"
                ?
                <div className={"w-full px-4 lg:w-2/5"}>
                    <TextInput isDisabled/>
                </div>
                :
                field.fieldType === "large input"
                ?
                <div className={"w-full px-4 lg:w-2/5"}>
                    <LargeInput/>
                </div>
                :
                null
            }
            </div>
            <div className={"flex flex-row justify-between items-center px-4 sm:px-10 py-2 "}>
                {/* <label className="text-gray-700 dark:text-gray-200" for="username"></label> */}
                <label className="flex items-center relative w-max cursor-pointer select-none">
                    <span className="text-md mr-3">is Required</span>
                    <input type="checkbox" className="appearance-none transition-colors cursor-pointer w-9 h-4 rounded-full focus:outline-none bg-gray-500" onChange={handleIsRequired}/>
                    <span className="w-5 h-5 right-4 absolute rounded-full transform transition-transform bg-gray-300 toggle-circle" />
                </label>
                <SelectInputType formFields={formFields} setFormFields={setFormFields} field={field}/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-3 right-3 cursor-pointer text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={()=>setFormFields(formFields.filter(item => item.id !== field.id))}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </form>
     );
}

export default FormFieldCard;
