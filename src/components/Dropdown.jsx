import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../context/UserProvider';
import firebase from '../firebase/firebase';
import "../styles/create-form.scss";

const Dropdown = ({children , user}) => {

    const history = useHistory();

    const {setUser} = useContext(userContext);

    return ( 
    //     <div classNameName="relative inline-flex">
    //         <svg classNameName="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
    //         <select classNameName="cursor-pointer text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
    //             <option>{children}</option>
    //             <option>
    //                 <p onClick={()=>{
    //                     console.log('signout')
    //                     firebase.auth().signOut();
    //                     setUser(null);
    //                     user = null ;
    //                     console.log(user);
    //                     history.push('/log-in');
    //                 }}>
    //                     Sign out
    //                 </p>
    //             </option>
    //         </select>
    //   </div>
    <div className="p-10">

        <div className="dropdown inline-block relative">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">{children}</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Sign</a></li>
            <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
            <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
            </ul>
        </div>
    </div>
    );
}
 
export default Dropdown;