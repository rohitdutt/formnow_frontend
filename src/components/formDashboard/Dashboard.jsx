import React from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar';
import ViewFormTabs from '../ViewFormTabs';
import Card from './Card';
import ResponseProvider from "../../context/ResponseProvider";

const Dashboard = () => {

    const {id} = useParams();

    return (
        <ResponseProvider>
            <div className={"h-full bg-gray-300"}>
                {/* <Navbar/> */}
                <ViewFormTabs id={id}/>
            </div>
        </ResponseProvider>
    );
}

export default Dashboard;
