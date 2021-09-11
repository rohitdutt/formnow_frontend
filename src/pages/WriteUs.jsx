import React, {useState} from 'react';
import Logo from '../assets/logo.jpg';
import {useHistory, Link} from "react-router-dom";
import { sendFeedback } from '../httpResources/firebaseActions';

const WriteUs = () =>{

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [subject , setSubject] = useState("");
    const [message , setMessage] = useState("");
    const [error , setError] = useState(false);
    const [isSending , setIsSending] = useState(false);
    const [isSent , setIsSent] = useState(false);

    const history = useHistory();

    if(isSent == true){
        return (
            <div className={"h-screen w-screen flex flex-col items-center justify-center p-4"}>
                <h1 className="font-bebas-neue uppercase text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    We got your message and we will definitely look into it.
                </h1>
                <p className={"mt-6"}>You will be redirected to login page within 10 seconds!</p>
            </div>
        )
    }

    return(
        <div className={"h-auto lg:h-screen flex flex-col items-center justify-center relative"}>
            <div className={"hidden lg:block absolute top-2 left-4"}>
                <Link to={"/organization-home"}>
                    <img src={Logo} alt={"logo"}/>
                </Link>
            </div>
            <div className={"lg:hidden mb-6 mt-4"}>
                <img height={90} width={110} src={Logo} alt={"logo"}/>
            </div>
            <div className={"flex flex-col justify-between h-4/6"}>
                <p className={"text-2xl text-indigo-600 font-semisolid antialiased mb-4 lg:mb-0 "}>Write us here!</p>
                <input type="text" id="rounded-name" className="w-72 lg:w-96 h-10 mb-4 lg:mb-0 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Enter your name" onChange={e => setName(e.target.value)}/>
                <input type="email" id="rounded-email" className="w-72 lg:w-96 h-10 mb-4 lg:mb-0 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Enter your email" onChange={e => setEmail(e.target.value)}/>
                <input type="text" id="rounded-subject" className="w-72 lg:w-96 h-10 mb-4 lg:mb-0 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Enter subject" onChange={e => setSubject(e.target.value)}/>
                <textarea type="text" id="rounded-message" className="w-72 lg:w-96 h-40 mb-4 lg:mb-0 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Enter message" onChange={e => setMessage(e.target.value)}/>
                {
                    error ?
                            <p className={"text-xs mb-2 lg:mb-0 text-red-500"}>*All the fields are required so please fill all the fields</p>
                        :
                            null
                }
                <div className="w-24 flex border-2 border-indigo-600 rounded-lg px-3 py-2 text-indigo-600 cursor-pointer hover:bg-indigo-600 hover:border-indigo-700 hover:text-purple-200" onClick={async ()=> await sendFeedback(setIsSending, setError, setIsSent, history, name, email, subject, message)}>
                    {
                        !isSending ?
                           (<>
                               <p>Send</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 icon icon-tabler icon-tabler-send" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                    <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
                                </svg>
                           </>)
                            :
                            (
                                <div className={"w-full flex justify-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white animate-spin text-purple-500 icon icon-tabler icon-tabler-circle-dashed" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
                                        <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
                                        <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                                        <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
                                        <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
                                        <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
                                        <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
                                        <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
                                    </svg>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default WriteUs;