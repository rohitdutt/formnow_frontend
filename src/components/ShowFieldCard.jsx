import React from 'react';
import TextInput from './inputs/TextInput';

const ShowFieldCard = ({children , isRequired}) => {
    return ( 
        <div className="shadow-lg h-auto rounded-2xl w-2/5 p-4 m-2 bg-white dark:bg-gray-800 relative">
            <div className="flex h-auto items-center my-3">
                <p className="text-lg h-auto text-gray-600 font-semibold dark:text-gray-50 ml-2 p-2 break-all">
                    {children}
                </p>
            </div>
            <div className="mt-4 mb-2">
                <TextInput/>
            </div>
            <p className={`${isRequired ? 'block' : 'hidden'} absolute top-4 right-4`}>* Required</p>
        </div>
    );
}
 
export default ShowFieldCard;