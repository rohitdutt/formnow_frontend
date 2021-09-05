import React from 'react';
import { useParams } from 'react-router-dom';
import ViewFormTabs from '../ViewFormTabs';
import ResponseProvider from "../../context/ResponseProvider";

const Dashboard = () => {

    const {id} = useParams();

    return (
        <ResponseProvider>
            <div className={"h-full bg-gray-300"}>
                <ViewFormTabs id={id}/>
            </div>
        </ResponseProvider>
    );
}

export default Dashboard;
