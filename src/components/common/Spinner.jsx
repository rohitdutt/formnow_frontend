import React from 'react';
import { useContext } from 'react';
import { spinnerContext } from '../../context/SpinnerProvider';
import "./spinner.scss";

const Spinner = () => {

    const {showSpinner} = useContext(spinnerContext);

    return ( 
        <div className={`${showSpinner ? "fixed" : "hidden"} top-0 left-0 z-50 w-screen h-screen flex items-center justify-center`} style={{background: "rgba(1, 2, 0.5, 0.9)"}}>
            <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
                <div className="loader-dots block relative w-20 h-5 mt-2">
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-indigo-500"></div>
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-indigo-500"></div>
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-indigo-500"></div>
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-indigo-500"></div>
                </div>
                <div className="text-gray-500 text-xs font-light mt-2 text-center">
                    Please wait...
                </div>
            </div>
        </div>  
    );
}
 
export default Spinner;
