import React, {useContext, useEffect, useState} from "react";
import Card from "./Card";
import {spinnerContext} from "../../context/SpinnerProvider";
import {userContext} from "../../context/UserProvider";
import {useHistory} from "react-router-dom";
import RatingDistribution from "./RatingDistribution";
import BarChart from "../charts/BarChart";

const Analytics = ({id}) =>{

    const [responses , setResponses] = useState([]);
    const [formDetails , setFormsDetails] = useState(null);
    const [ratings , setRatings] = useState([1,2,3,4,5]);
    const {setShowSpinner} = useContext(spinnerContext);
    const {auth , setUser , db} = useContext(userContext);
    const history = useHistory();

    const fetchFormFields = async () =>{
        const res = await db.collection('forms').doc(id).get();
        setFormsDetails(res.data());
        setShowSpinner(false);
    };

    const fetchResponses = async () =>{
        const res = await db.collection('response').where("formId" , "==" , id).get();
        res.docs.forEach(response =>{
            setResponses(oldResponses => [...oldResponses , response.data()])
        })
    };

    useEffect(()=>{
        setShowSpinner(true);
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                fetchFormFields();
                if(responses.length === 0){
                    fetchResponses();
                }
            }else{
                history.push('/log-in')
            }
        });
    },[]);

    return(
        <div>
            <div className={"grid grid-cols-2 w-full border-black gap-3"}>
                <Card noOfResponses={responses.length}>No. of responses</Card>
                <Card noOfResponses={responses.length}>Last Response at</Card>
            </div>
            <div className={"grid grid-cols-2 gap-2 mt-2"}>
            {
                formDetails && formDetails.formFields.map(field =>(
                    field.fieldType === "ratings"
                        ?
                        <RatingDistribution key={field.id} id={field.id} ratings={ratings} setRatings={setRatings} responses={responses}>{field.fieldName}</RatingDistribution>
                        :
                        null
                ))
            }
            </div>
            {
                formDetails && <BarChart data={responses} formFields={formDetails.formFields}/>
            }
        </div>
)};

export default Analytics;
