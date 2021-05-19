import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Spinner from "../components/common/Spinner";

const OrganizationHomepage = () => {

    useEffect(() => {
        
    }, [])

    return ( 
        <div className={"h-full bg-red-600"}>
            <Navbar/>
            <div className={"mt-40 flex justify-center items-center"}>
                <Link to={"/create-form"}>
                <div className="max-w-xs w-56 overflow-hidden rounded-lg shadow-2xl bg-white m-4">
                    <div className="px-6 py-4 flex flex-col text-center justify-center">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Create new form</h4>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                    </div>
                </div>
                </Link>
                <Link to={"/all-forms"}>
                    <div className="max-w-xs w-56 overflow-hidden rounded-lg shadow-2xl bg-white m-4">
                        <div className="px-6 py-4 flex flex-col text-center justify-center">
                            <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">View forms</h4>
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="max-w-xs w-56 overflow-hidden rounded-lg shadow-2xl bg-white m-4 cursor-pointer">
                    <div className="px-6 py-4 flex flex-col text-center justify-center">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Use templates</h4>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Spinner/>
        </div>
     );
}
 
export default OrganizationHomepage;