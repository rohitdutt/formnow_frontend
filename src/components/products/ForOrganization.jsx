import React from 'react';
import { Link } from 'react-router-dom';

const ForOrganization = () => {
    return ( 
        <div>
            <div className="shadow-2xl rounded-2xl w-64 bg-indigo-500 dark:bg-gray-800 p-5 m-10">
                <div className="text-white  items-center justify-between">
                    <p className="text-3xl font-medium mb-4 break-all">
                        Organization <br/>/Institutes
                    </p>
                    <p className="text-3xl font-bold flexx">
                        200Rs.
                        <span className="font-thin text-right text-sm">
                            {"  month"}
                        </span>
                    </p>
                </div>
                <p className="text-white text-md mt-4">
                    Plan include :
                </p>
                <ul className="text-sm text-white w-full mt-6 mb-6">
                    <li className="mb-3 flex items-center ">
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        Unlimite forms
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        Own customizations
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        Unlimited Templates
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        Free premium dashboard
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        And much more
                    </li>
                </ul>
                <Link to={"/create-organization"}>
                    <button type="button" className="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100 ">
                        Choose plan
                    </button>
                </Link>
            </div>
        </div>
     );
}
 
export default ForOrganization;