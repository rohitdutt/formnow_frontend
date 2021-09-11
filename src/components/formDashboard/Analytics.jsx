import React, {useEffect, useState} from "react";
import Card from "./Card";
import {useHistory} from "react-router-dom";
import RatingDistribution from "./RatingDistribution";
import {CircularProgress} from "@material-ui/core";
import firebase from "../../firebase/firebase";
import { getDashboardData } from "../../httpResources/firebaseActions";
import DropdownPieChart from "./DropdownPieChart";

const Analytics = ({id}) =>{

    const [dashBoardData, setDashboardData] = useState({});
    const [dropdownFields, setdropDownFields] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const fetchDashboardData = async () =>{
        try {
            setdropDownFields([]);
            const res = await getDashboardData(id);
            if(res.status == 200){
                setDashboardData(res.data);
                for (const key in dashBoardData.dropdown) {
                    if (Object.hasOwnProperty.call(dashBoardData.dropdown, key)) {
                        const element = dashBoardData.dropdown[key];
                        const temp = {};
                        temp[`${key}`] = element;
                        setdropDownFields(dropdownFields => [...dropdownFields, temp]);
                    }
                }
            }else{
                throw "error"
            }
        }catch (e) {
            console.log(e)
        }
        setIsLoading(false)
    };

    
    useEffect(()=>{
        setIsLoading(true);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                fetchDashboardData();
            }else{
                setIsLoading(false);
                history.push('/log-in')
            }
        });
    },[]);

    return(
        isLoading || dashBoardData.ratings === undefined ?
            <div className={"h-full w-full flex justify-center items-center"}>
                <CircularProgress className={"mt-56 lg:mt-64"} color={"primary"}/>
            </div>
        :
            <div className={"w-full"}>
                <div className={"flex flex-col lg:flex-row w-full border-black gap-3"}>
                    <Card number={dashBoardData.noOfResponses} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-list" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                            <rect x={9} y={3} width={6} height={4} rx={2}></rect>
                            <line x1={9} y1={12} x2="9.01" y2={12}></line>
                            <line x1={13} y1={12} x2={15} y2={12}></line>
                            <line x1={9} y1={16} x2="9.01" y2={16}></line>
                            <line x1={13} y1={16} x2={15} y2={16}></line>
                        </svg>
                    }>No. of responses</Card>
                    <Card number={"Recently"} icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx={12} cy={12} r={9}></circle>
                            <polyline points="12 7 12 12 15 15"></polyline>
                        </svg>
                    }>Last Response at</Card>
                </div>
                <div>
                    {
                        Object.keys(dashBoardData.ratings).length === 0 ?
                            <p className={"text-center break-words font-semibold text-gray-700 mt-28 lg:mt-52"}>Either we don't have enough data to analyse it or We can't full fill your request at this moment</p> 
                        :
                            <RatingDistribution data={dashBoardData.ratings}/>
                    }
                </div>
            </div>
)};

export default Analytics;
