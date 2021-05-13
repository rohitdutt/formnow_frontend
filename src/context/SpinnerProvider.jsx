import React, { createContext, useState } from 'react';

export const spinnerContext = createContext();

const SpinnerProvider = (props) => {

  const [ showSpinner , setShowSpinner ] = useState(false);

    return (
        <spinnerContext.Provider
            value={{
             showSpinner,
             setShowSpinner
            }}>
          {props.children}
        </spinnerContext.Provider>
      );
};

export default SpinnerProvider;
