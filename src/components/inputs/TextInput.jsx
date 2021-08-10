import React from 'react';

const TextInput = ({response , setResponse , inputKey , fieldId }) => {
    return (
        <div className={"flex justify-center mt-2 mb-1"}>
            <div className="flex w-5/6">
                <input type="text" id="rounded-email" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your answer" onChange={e => setResponse && setResponse({...response , [fieldId] : [e.target.value][0]})}/>
            </div>
        </div>
    );
}

export default TextInput;
