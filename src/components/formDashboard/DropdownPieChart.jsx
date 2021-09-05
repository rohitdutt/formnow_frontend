import React,{useState} from "react";
import Chart from "react-apexcharts";

const DropdownPieChart = ({data}) =>{

    let dropdownOptions = [];

    let name;

    const [options, setOptions]= useState({
        labels: dropdownOptions
    });
    const [series, setSeries]= useState([]);

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            // name = key;
            console.log(data[`${key}`])
            for (const subKey in data[`${key}`]) {
                if (Object.hasOwnProperty.call(data[`${key}`], subKey)) {
                    dropdownOptions.push(subKey)
                    setSeries(series => [...series, data[`${key}`][`${subKey}`]])
                }
            }
        }
    }

    return(
        <div className={"w-auto bg-white shadow-2xl m-2 border border-gray-200 flex flex-col items-center justify-center"}>
            <Chart options={options} series={series} type="donut" width="350"/>
            {/* <p>{name}</p> */}
        </div>
    )
}

export default DropdownPieChart;