import React, { useState} from 'react';
import { useParams } from 'react-router';
import {Link, useHistory} from "react-router-dom";
import QRcode from 'qrcode.react';
import { sendMail } from '../httpResources/firebaseActions';

const ShareForm = () => {

    const {id} = useParams();

    const history = useHistory();
    const [personName, setPersonName] = useState([]);
    const [isSending , setIsSending] = useState(false);
    const [isSent , setIsSent] = useState(false);

    if(isSent){
        return(
            <div className={"h-screen flex justify-center items-center flex-col relative"}>
                <h1 className="font-bebas-neue uppercase text-sm lg:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Emails with link to form has been sent<br/> to given email address.
                </h1>
                <p className={"mt-6"}>You will be redirected to login page within 10 seconds!</p>
                <p className={"absolute top-4 text-center mt-4 text-gray-600 text-2xl font-bold p-4 "}>FORMNOW</p>
            </div>
        )
    }

    return (
        <div className={"bg-white h-full overflow-x-hidden"}>
            <Link to={"/organization-home"}>
                <p className={"text-center mt-4 text-indigo-600 text-2xl font-bold p-4 hover:underline"}>FORMNOW</p>
            </Link>
                <div className={"px-4 flex flex-col justify-center items-center"}>
                    <p className={"text-xl text-gray-500 my-4 font-semibold"}>Form Successfully created!</p>
                    <p className={"text-xs lg:text-lg break-words"}>Now you can share forms with user within your organization or family and friends</p>
                    <p className={"hidden lg:block my-4"}>You can share this link : <span className={"bg-gray-200 p-2 rounded-xl select-all"}>{`https://formsnow-40b50.web.app/form/${id}`}</span></p>
                    <p className={"lg:hidden mt-2 mb-1"}>You can share this link :</p>
                    <span className={"lg:hidden bg-gray-200 p-1 text-xs rounded-xl select-all"}>{`https://formsnow-40b50.web.app/form/${id}`}</span>
                    <QRcode className={"mt-4 lg:mt-2"} renderAs={"svg"} value={`https://formsnow-40b50.web.app/form/${id}`}/>
                    <p className={"mt-4 text-xs lg:text-xs break-words"}>Scan QR code or share form via email</p>
                    <div className="flex relative mt-3">
                        <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                </path>
                            </svg>
                        </span>
                        <input type="text" id="sign-in-email" className=" rounded-r-lg appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Enter emails here" onChange={e => setPersonName(e.target.value)}/>
                    </div>
                    <p className={"mt-4 text-xs lg:text-xs break-words"}>Email addresses must be comma seperated ig: abc@mail.com , xyz@mail.com</p>
                    <div className="flex items-center justify-between gap-4 w-40 mt-4 lg:mt-8 cursor-pointer">
                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg cursor-pointer" onClick={e=> sendMail(e, setIsSending, setIsSent, history, personName, id)}>
                            {
                                isSending
                                ?
                                    <div className={"w-full flex justify-center"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white animate-spin text-purple-500 icon icon-tabler icon-tabler-circle-dashed" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                                "Share"
                            }
                        </button>
                    </div>
                </div>
        </div>
    );
}

export default ShareForm;
