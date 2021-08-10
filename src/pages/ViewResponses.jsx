import React , {useEffect , useContext, useState}from 'react';
import Spinner from '../components/common/Spinner';
import ResTable from "../components/formDashboard/ResTable";
import {responseContext} from "../context/ResponseProvider";

const ViewResponses = () => {

    const { responses } = useContext(responseContext);

    return (
    <div className={"mt-6 justify-center items-center"}>
        <div className={"flex justify-center "}>
            {
                responses.length !== 0
                ?
                    <ResTable/>
                :
                    <div className={"w-5/6 bg-white rounded py-10 flex justify-center"}>
                        Opps! No responses found
                    </div>
            }
        </div>
        <Spinner/>
    </div>
    );
}

export default ViewResponses;
