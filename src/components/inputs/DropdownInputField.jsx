import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const DropdownInputField = ({options , setOptions}) => {

    const handleChange = (e) => {
        const index = options.findIndex(item => item.id === e.target.id);
        const tempField = options[index];
        tempField['value'] = e.target.value;
        if (index === -1){
            console.log('no match')
        }
        else
            setOptions([
                ...options.slice(0,index),
                tempField,
                ...options.slice(index+1)
            ]);
        console.log(options)
    };

    const handleAddOptions = () =>{
        setOptions(oldArray => [...oldArray , {id: uuidv4() , value: ""} ])
    };

    console.log(options)
    return ( 
        <div className={"w-full flex flex-col items-center justify-center"}>
            {
                options.map((option , index)=>(
                    <input id={option.id} key={option.id} placeholder={`enter option ${index+1}`} type="text" className="block md:w-2/5 px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-blue-500 focus:outline-none focus:ring focus:ring-purple-400" onChange={handleChange}/>
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