import React, {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { userContext } from '../context/UserProvider';
import Logo from "../assets/logo.jpg";
import { handleSignUp } from '../httpResources/firebaseActions';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCreating , setIsCreating] = useState(false);
    const [isAccountCreated , setIsAccountCreated] = useState(false);
    const [isEmailAlreadyExist , setIsEmailAlreadyExist] = useState(false);
    const {setUser} = useContext(userContext);
    const history = useHistory();

    if(isAccountCreated){
        return(
            <div className={"h-screen w-screen flex justify-center items-center flex-col px-20"}>
                <h1 className="font-bebas-neue uppercase text-xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Your account has been created and a verification mail is sent please verify you email.
                </h1>
                <p className={"mt-6"}>You will be redirected within 5 seconds!</p>
            </div>
        )
    }

    return (
        <div className={"h-screen flex flex-col justify-center items-center relative p-5"}>
            <div className={"hidden lg:block absolute top-2 left-4"}>
                <img src={Logo} alt={"logo"}/>
            </div>
            <div className={"lg:hidden mb-12 -mt-8"}>
                <img height={90} width={110} src={Logo} alt={"logo"}/>
            </div>
            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow-2xl dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Create a new account
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Already have an account ?
                    <Link to={'log-in'} className="text-sm text-blue-500 underline hover:text-blue-700">
                        Sign in
                    </Link>
                </span>
                <div className="mt-8">
                    <form action="#" autoComplete="off">
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">
                                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                        </path>
                                    </svg>
                                </span>
                                <input type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Your email" onChange={(e)=> setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <div className="flex relative ">
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input type="password" id="sign-in-password" className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Your password" onChange={(e)=> setPassword(e.target.value)}    />
                                </div>
                            </div>
                            <p className={"-mt-5 text-sm text-red-500"}>{isEmailAlreadyExist ? "Account with provided email already exists." : null}</p>
                            <div className="flex w-full mt-8">
                                <button type="submit" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={e => handleSignUp(e, setIsCreating, setIsEmailAlreadyExist, setIsAccountCreated, setUser, history, email, password)}>
                                        {
                                            isCreating
                                            ?
                                            <div className={"w-full flex justify-center"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white animate-spin text-indigo-500 icon icon-tabler icon-tabler-circle-dashed" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                                            :
                                            "Sign up"
                                        }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}
 
export default SignUp;