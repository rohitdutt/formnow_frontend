import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


const DropdownInputField = ({field , setFormFields , formFields}) => {

    const [options , setOptions] = useState([]);

    const handleAddOptions = async (e) =>{
        const index = formFields.findIndex(item => item.id === field.id);
        const tempField = formFields[index]
        setOptions(oldArray => [...oldArray , {id: uuidv4() , fieldValue: ""}]);
        tempField["options"] = options
    };

    const handleChange = (e , id) =>{
        const fieldIdx = formFields.findIndex(item => item.id === field.id);
        const tempField = formFields[fieldIdx]
        const index = options.findIndex(item => item.id === id);
        const tempOption = options[index];
        tempOption['fieldValue'] = e.target.value;
        if (index === -1){
            console.log('no match')
        }
        else
            setOptions([
                ...options.slice(0,index),
                tempOption,
                ...options.slice(index+1)
            ]);
        tempField["options"] = options
    }

    return (
        <div className={"w-full flex flex-col items-center justify-center"}>
            {
                options && options.map((option , index)=>(
                    <div className={"flex justify-center items-center my-1 w-full"}>
                        <input id={option.id} key={option.id} value={option.fieldValue} placeholder={`enter option ${index+1}`} type="text" className="w-full block px-4 py-1 mt-0 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-blue-500 focus:outline-none focus:ring focus:ring-purple-400" onChange={e =>handleChange(e,option.id)}/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-gray-500 ml-1" viewBox="0 0 20 20" fill="currentColor"  onClick={()=>setOptions(options.filter(item => item.id !== option.id))}>
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                ))
            }
            <div className={"flex my-2"}>
                <p>add option : </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleAddOptions}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    );
}

export default DropdownInputField;
