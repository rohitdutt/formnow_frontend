import React , {useContext} from 'react';
import ResTable from "../components/formDashboard/ResTable";
import {responseContext} from "../context/ResponseProvider";

const ViewResponses = () => {

    const { responses } = useContext(responseContext);

    return (
        responses &&
        <div className={"mt-1 lg:mt-2 justify-center items-center"}>
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
    );
}

export default ViewResponses;
