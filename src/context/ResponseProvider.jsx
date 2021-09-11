import React, { createContext, useState } from 'react';

export const responseContext = createContext();

const ResponseProvider = (props) => {

    const [responses, setResponses] = useState([]);
    const [formDetails , setFormsDetails] = useState(null);

    return (
        <responseContext.Provider
            value={{
                responses,
                setResponses,
                formDetails,
                setFormsDetails
            }}>
            {props.children}
        </responseContext.Provider>
    );
};

export default ResponseProvider;
