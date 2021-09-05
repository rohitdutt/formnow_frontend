import React, {useContext} from "react";
import {responseContext} from "../../context/ResponseProvider";


const ResTable = () => {

    const {responses} = useContext(responseContext);

    const getKeys = () =>{
        if(responses !== undefined) {
            return Object.keys(responses[0]);
        }
    }
    const getHeader = () =>{
        const keys = getKeys();
        return keys.map((key , index)=>{
            return <th className="px-6 py-3 w-60 break-word text-left text-xs font-medium text-black font-semibold uppercase tracking-wider" key={key}>{key.toUpperCase()}</th>
        })
    }

    const getRowsData = () =>{
        var items = responses;
        if(responses !== undefined){
        var keys = getKeys();
        return items.map((row, index)=>{
            return <tr className={"w-80 break-all"} key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
        }
    }
    if(responses === undefined) {
        return(<p>Loading ... </p>)
    }
    return (
        <div className="flex flex-col h-5/6 w-full lg:px-8">
            <div className="-my-2 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block w-full">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-200 w-20">
                                <tr>{
                                        getHeader()
                                }</tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 h-full overflow-auto">
                                {getRowsData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        return <td className="px-1 lg:px-6 py-1 lg:py-3 break-words h-auto text-gray-600" key={index}>{props.data[key]}</td>
    })
}

export default ResTable;


