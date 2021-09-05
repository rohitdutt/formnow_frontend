import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FormLinkModal from './common/FormLinkModal';
import EditFormDropdown from "./EditFormDropdown";
import {handleFormStatus} from "../httpResources/firebaseActions";

const FormsTable = ({data , setStatusChanged , statusChanged, isDeleteFired, setIsDeleteFired}) => {
    
    const [isModalShown , setIsModalShown] = useState(false);
    const [formId , setFormId] = useState("");
    
    return (
        <div className="container h-auto mx-auto px-4 lg:px-2 ">
            <div className="flex flex-row pt-8 mb-1 sm:mb-0 justify-between w-full">
                <h2 className="text-2xl leading-tight">
                    Forms
                </h2>
            </div>
            <div className="overflow-x-auto lg:overflow-visible">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-y-auto py-4">
                    <div className="max-h-96 inline-block min-w-full shadow rounded-lg overflow-visible">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-3 lg:px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs lg:text-sm uppercase font-bold">
                                        Title
                                    </th>
                                    <th scope="col" className="px-3 lg:px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs lg:text-sm uppercase font-bold">
                                        Created By
                                    </th>
                                    <th scope="col" className="px-3 lg:px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs lg:text-sm uppercase font-bold">
                                        Created at
                                    </th>
                                    <th scope="col" className="px-3 lg:px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs lg:text-sm uppercase font-bold">
                                        status
                                    </th>
                                    <th scope="col" className="px-3 lg:px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs lg:text-sm uppercase font-bold">
                                    </th>
                                    <th scope="col" className="px-3 lg:px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs lg:text-sm uppercase font-bold">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.map(item => (
                                            <tr key={item.formId}>
                                                <td className="break-words px-3 lg:px-5 py-5 border-b border-gray-200 bg-white text-xs lg:text-sm">
                                                    <Link to={`/dashboard/${item.formId}`}>
                                                        <p className="break-all text-gray-900 text-xs lg:text-sm whitespace-no-wrap hover:underline">
                                                            {item.title}
                                                        </p>
                                                    </Link>
                                                </td>
                                                <td className="px-3 lg:px-5 py-5 border-b border-gray-200 bg-white text-xs lg:text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.createdBy}
                                                    </p>
                                                </td>
                                                <td className="w-80 px-3 lg:px-5 py-5 border-b border-gray-200 bg-white text-xs lg:text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.timeStamp.split("GMT")[0]}
                                                    </p>
                                                </td>
                                                <td className="px-3 lg:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {
                                                        item.isActive
                                                        ?
                                                        <span className="relative inline-block px-2 lg:px-3 py-1 font-semibold text-green-900 leading-tight cursor-pointer" onClick={()=>handleFormStatus(item.formId , item.isActive, setStatusChanged, statusChanged)}>
                                                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                            </span>
                                                            <span className="relative">
                                                                active
                                                            </span>
                                                        </span>
                                                        :
                                                        <span className="relative inline-block px-2 lg:px-3 py-1 font-semibold text-red-900 leading-tight cursor-pointer" onClick={()=>handleFormStatus(item.formId , item.isActive, setStatusChanged, statusChanged)}>
                                                            <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full">
                                                            </span>
                                                            <span className="relative">
                                                                inactive
                                                            </span>
                                                        </span>
                                                    }
                                                </td>
                                                <td className="px-3 lg:px-5 py-5 w-1/6 border-b border-gray-200 bg-white  text-xs lg:text-sm">
                                                    <div href="#" className="text-indigo-600 hover:text-indigo-900 cursor-pointer underline" onClick={()=>{
                                                         setIsModalShown(true);
                                                         setFormId(item.formId);
                                                    }}>
                                                        Share form
                                                    </div>
                                                </td>
                                                <td className="z-1 px-2 lg:px-5 py-2 lg:py-5 border-b border-gray-200 bg-white text-sm">
                                                    <EditFormDropdown formId={item.formId} isDeleteFired={isDeleteFired} setIsDeleteFired={setIsDeleteFired}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                    </EditFormDropdown>
                                                </td>
                                            </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <FormLinkModal isShown={isModalShown} setIsModalShown={setIsModalShown} id={formId}/>
        </div>
     );
}

export default FormsTable;
