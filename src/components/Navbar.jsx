import React, {useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../context/UserProvider';
import firebase from '../firebase/firebase';
import Dropdown from './Dropdown';

const Navbar = () => {

    // const {user} = useContext(userContext);
    const history = useHistory();
    const user = firebase.auth().currentUser;
    const {setUser , auth} = useContext(userContext);

    let loggedInUser;

    const handleSignout = async () =>{
        await auth.signOut();
        loggedInUser = null;
        history.push('/');
        setUser(null);
    };

    if(user){
        loggedInUser = (<a href="#" className="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2" onClick={handleSignout}>Sign out</a>)
    }else{
        loggedInUser = (<Link to={'/log-in'}><a href="#" className="px-2 py-2 text-sm font-semibold text-white rounded-md bg-purple-500 dark:text-gray-200 hover:bg-purple-700 hover:font-medium md:mx-2">Log in</a></Link>)
    }

    return ( 
        <nav className="px-6 py-3 shadow bg-white">
            <div className="items-center justify-between md:flex">
                <div className="flex items-center justify-between">
                    <Link to={"/"}>
                        <div>
                            <p className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300">Forms Now</p>
                        </div>
                    </Link>

                    {/* <!-- Mobile menu button --> */}
                    <div className="md:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                {/* <!-- Mobiles Menu open: "block", Menu closed: "hidden" --> */}
                <div className="flex flex-col mt-2 -mx-2 md:mt-0 md:flex-row md:block">
                    <a href="#" className="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Home</a>
                    <a href="#" className="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">About</a>
                    {/* <a href="#" className="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Contact</a> */}
                    {
                        loggedInUser
                    }
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;