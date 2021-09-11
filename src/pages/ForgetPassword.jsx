import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import Logo from "../assets/logo.jpg";
import {userForgetPassword} from "../httpResources/signInSignOut";

const ForgetPassword = () =>{

    const [email , setEmail] = useState("");
    const [errorMessage , setErrorMessage] = useState("");
    const [isSendingEmail , setIsSendingEmail] = useState(false);
    const [isEmailSent , setIsEmailSent] = useState(false);

    const history = useHistory();

    const resetPassword = async () =>{
        setErrorMessage("");
        setIsEmailSent(false);
        setIsSendingEmail(true);
        try {
            await userForgetPassword(email);
            setIsEmailSent(true);
            setTimeout(()=>{
                history.push('/log-in')
            },10000);
        }catch (e) {
            setErrorMessage(e.message);
        }
        setIsSendingEmail(false);
    }

    return(
        <div className={"h-screen flex flex-col justify-center items-center relative px-6"}>
            <div className={"hidden lg:block absolute top-2 left-4"}>
                <img src={Logo} alt={"logo"}/>
            </div>
            <div className={"lg:hidden mb-16 -mt-32"}>
                <img height={90} width={110} src={Logo} alt={"logo"}/>
            </div>

            {
                isEmailSent ?
                    <div>
                        <h1 className="font-bebas-neue uppercase text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Email with instructions to reset password has been sent<br/> to given email address , please check your email.
                        </h1>
                        <p className={"mt-6"}>You will be redirected to login page within 10 seconds!</p>
                    </div>
                :
                    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-2xl dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                        <div className="self-center mb-2 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                            Reset your password
                        </div>
                        <div className="mt-2">
                            <form action="#" autoComplete="on">
                                <div className="flex flex-col mb-4">
                                    <div className="flex relative ">
                                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Your email" onChange={ e => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <p className={"text-red-600 mb-3"}>{errorMessage}</p>
                                <div className="flex w-full">
                                    <button className="py-2 px-4 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" onClick={resetPassword}>
                                        {
                                            isSendingEmail ?
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-dotted" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <line x1="7.5" y1="4.21" x2="7.5" y2="4.22"></line>
                                                    <line x1="4.21" y1="7.5" x2="4.21" y2="7.51"></line>
                                                    <line x1={3} y1={12} x2={3} y2="12.01"></line>
                                                    <line x1="4.21" y1="16.5" x2="4.21" y2="16.51"></line>
                                                    <line x1="7.5" y1="19.79" x2="7.5" y2="19.8"></line>
                                                    <line x1={12} y1={21} x2={12} y2="21.01"></line>
                                                    <line x1="16.5" y1="19.79" x2="16.5" y2="19.8"></line>
                                                    <line x1="19.79" y1="16.5" x2="19.79" y2="16.51"></line>
                                                    <line x1={21} y1={12} x2={21} y2="12.01"></line>
                                                    <line x1="19.79" y1="7.5" x2="19.79" y2="7.51"></line>
                                                    <line x1="16.5" y1="4.21" x2="16.5" y2="4.22"></line>
                                                    <line x1={12} y1={3} x2={12} y2="3.01"></line>
                                                </svg>
                                                :
                                                "Send password reset link"
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-between xs: mt-4">
                            <Link to={'/sign-up'} className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                                <span className="ml-2">
                                    You don&#x27;t have an account?
                                </span>
                            </Link>
                            <Link to={'/log-in'} className="mt-4 lg:mt-0 inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                                <span className="ml-2">
                                    Remembered password login now
                                </span>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ForgetPassword;
