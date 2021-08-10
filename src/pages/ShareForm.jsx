import React, { useState } from 'react';
import { useParams } from 'react-router';
import SelectUsers from '../components/shareForm/SelectUsers';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';


const ShareForm = () => {

    const {id} = useParams();

    const [personName, setPersonName] = useState([]);
    const [isSending , setIsSending] = useState(false);
    const [isSent , setIsSent] = useState(false);

    const sendMail = async () =>{
        setIsSending(true);
        try{
        const res = await axios.post('http://15.206.100.59:3001/send-form',{
            receiver: personName.join(),
            form_url: `http://localhost:3000/form/${id}`
        });
        console.log(res)
        if(res.status === 200){
            setIsSending(false);
            setIsSent(true);
        }
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className={"bg-white h-full"}>
            <p className={"text-gray-600 text-2xl font-bold p-4 border border-black"}>Form now</p>
            {
                isSent
                ?
                "Shared successfully"
                :
                <div className={" flex flex-col justify-center items-center"}>
                    <p className={"text-xl text-gray-500 my-4 font-semibold"}>Form Successfully created!</p>
                    <p className={"my-4"}>You can share this link : <span className={"bg-gray-200 p-2 rounded-xl"}>http://localhost:3000/form/{id}</span></p>
                    <p className={"mt-4 mb-2"}>now you can share forms with user within your organization</p>
                    <SelectUsers personName={personName} setPersonName={setPersonName}/>
                    <div className="flex items-center justify-between gap-4 w-40 mt-8 cursor-pointer">
                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg cursor-pointer" onClick={sendMail}>
                            {
                                isSending
                                ?
                                <CircularProgress style={{'color': 'white'}}/>
                                :
                                "Share"
                            }
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default ShareForm;
