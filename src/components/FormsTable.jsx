import React , { useState }from 'react';
import { Link } from 'react-router-dom';
import FormLinkModal from './common/FormLinkModal';
import MoreOptions from './MoreOptions';

const FormsTable = ({data}) => {
    const [isModalShown , setIsModalShown] = useState(false);
    const [formId , setFormId] = useState("");

    return ( 
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
            <div className="py-8">
                <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                    <h2 className="text-2xl leading-tight">
                        Forms
                    </h2>
                    <div className="text-end">
                        <form className="flex w-full max-w-sm space-x-3">
                            <div className=" relative ">
                                <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name"/>
                            </div>
                            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Filter
                            </button>
                        </form>
                    </div>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                        Title
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                        Created By
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                        Created at
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                        status
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                        {/* options */}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(item => (
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {/* <div className="flex items-center">
                                                        <div className="ml-3"> */}
                                                            <Link to={`/responses/${item.formId}`}>
                                                                <p className="text-gray-900 whitespace-no-wrap hover:underline">
                                                                    {item.title}
                                                                </p>
                                                            </Link>
                                                        {/* </div>
                                                    </div> */}
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.createdBy}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.timeStamp.split("GMT")[0]}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                        </span>
                                                        <span className="relative">
                                                            active
                                                        </span>
                                                    </span>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div href="#" className="text-indigo-600 hover:text-indigo-900 cursor-pointer underline" onClick={()=>{
                                                         setIsModalShown(true);
                                                         setFormId(item.formId);
                                                    }}>
                                                        Share form
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">      
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
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