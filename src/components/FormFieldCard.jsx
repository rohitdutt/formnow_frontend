import React from 'react';
import "../styles/create-form.scss";

const FormFieldCard = ({setFormFields , formFields , field }) => {

    const handleChange= (e) =>{
        const index = formFields.findIndex(item => item.id === field.id);
        const tempField = formFields[index];
        console.log(tempField);
        tempField['fieldName'] = e.target.value;
        if (index === -1){
            // handle error
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
        console.log(tempField);
        tempField['isRequired'] = !tempField['isRequired'];
        if (index === -1){
            // handle error
            console.log('no match')
        }
        else
            setFormFields([
                ...formFields.slice(0,index),
                tempField,
                ...formFields.slice(index+1)
            ]);
    };

    return ( 
        <form className={"bg-white w-5/6 md:w-4/6 py-4 rounded-lg shadow-2xl my-2 relative"}>
            <div className={"flex flex-col justify-center items-center px-4 sm:px-10 py-2"}>
                {/* <label className="text-gray-700 dark:text-gray-200" for="username"></label> */}
                <p className={"text-xl font-semibold text-gray-600"}>Enter title for input</p>
                <input id="formtitle" type="text" className="block w-full md:w-3/6 px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-blue-500 focus:outline-none focus:ring focus:ring-purple-400" onChange={handleChange}/>
            </div>
            <div className={"flex flex-col justify-center items-start px-4 sm:px-10 py-2"}>
                {/* <label className="text-gray-700 dark:text-gray-200" for="username"></label> */}
                <label className="flex items-center relative w-max cursor-pointer select-none">
                    <span className="text-md mr-3">is Required</span>
                    <input type="checkbox" className="appearance-none transition-colors cursor-pointer w-9 h-4 rounded-full focus:outline-none bg-gray-500" onChange={handleIsRequired}/>
                    <span className="w-5 h-5 right-4 absolute rounded-full transform transition-transform bg-gray-300 toggle-circle" />
                </label>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-3 right-3 cursor-pointer text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={()=>setFormFields(formFields.filter(item => item.id !== field.id))}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </form>
     );
}
 
export default FormFieldCard;