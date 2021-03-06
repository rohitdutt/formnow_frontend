import React from 'react';

const LargeInput = ({response , setResponse , fieldId}) => {
    return (
        <div className={"flex justify-center mt-2 mb-1"}>
            <div className="flex w-full">
                <textarea id="description" placeholder={"Enter your answer here"} type="text" className="block w-full md:w-full px-2 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-blue-500 focus:outline-none focus:ring focus:ring-purple-400" onChange={e => setResponse && setResponse({...response, [fieldId]: [e.target.value][0]})}/>
            </div>
        </div>
    );
}

export default LargeInput;
