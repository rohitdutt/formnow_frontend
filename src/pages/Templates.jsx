import React from 'react';
import UnderConstruction from '../assets/UnderConstruction.svg';
import {Link} from "react-router-dom";

const Templates = () =>{
    return(
        <div className={"h-screen w-screen bg-white flex flex-col lg:flex-row justify-center items-center space-y-20 lg:space-x-32"}>
            <img className={"w-4/6 lg:w-2/6"} alt={"template"} src={UnderConstruction}/>
            <div className={"flex flex-col justify-center items-center space-y-6"}>
                <p className={"text-center capitalize text-gray-600 break-words text-lg"}>WE DON't HAVE MUCH FOR YOU AT THIS MOMENT, WE ARE WORKING ON IT.</p>
                <Link to={'/organization-home'}>
                    <button type="button"
                            className=" w-32 py-4 px-4  bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Go back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Templates;