import React from 'react';
import LargeInput from './inputs/LargeInput';
import RatingInput from './inputs/RatingInput';
import TextInput from './inputs/TextInput';
import DropdownInput from "./inputs/DropdownInput";

const ShowFieldCard = ({children , type , fieldId , response  , setResponse , isRequired}) => {
    return (
        <div className="shadow-lg h-auto rounded-2xl w-full lg:w-2/5 p-4 m-2 bg-white dark:bg-gray-800 relative">
            <div className="flex h-auto items-center my-2">
                <p className="text-lg h-auto text-gray-600 font-semibold dark:text-gray-50 ml-2 p-1 break-all">
                    {children}
                </p>
            </div>
            <div>
                {
                    type === "Dropdown"
                    ?
                        <DropdownInput response={response} setResponse={setResponse} fieldId={fieldId} isRequired={isRequired}/>
                    :
                    type === "ratings"
                    ?
                        <RatingInput response={response} setResponse={setResponse} fieldId={fieldId.fieldName} isRequired={isRequired}/>
                    :
                    type === "large input"
                    ?
                        <LargeInput response={response} setResponse={setResponse} fieldId={fieldId.fieldName} isRequired={isRequired}/>
                    :
                        <TextInput response={response} setResponse={setResponse} fieldId={fieldId.fieldName} isRequired={isRequired}/>
                }
            </div>
            <p className={`${isRequired ? 'block' : 'hidden'} absolute top-2 right-4 text-sm text-red-500`}>* Required</p>
        </div>
    );
}

export default ShowFieldCard;
