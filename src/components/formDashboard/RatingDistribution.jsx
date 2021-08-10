import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts'

const RatingDistribution = ({children , responses , ratings , setRatings , id}) =>{

    const [options , setOptions] = useState({
        labels: [ "1 star" , "2 star" , "3 star" , "4 star" , "5 star"],
        legend: {
            position: 'right'
        },
        colors: ['#EF4444' , '#34D399' , '#fB0' , '#3B82F6' , '#4ca1a3']
    });
    const handleOnLoad = () =>{
        responses.map((response,index) => {
            let g = [...ratings];
            g[response.response[id]-1] = g[response.response[id]-1] + 1;
            console.log(g);
            setRatings(g);
            console.log(ratings);
        })
    }
    useEffect(()=>{
        handleOnLoad();
    },[])
        return (
            <div className={"width-full bg-white rounded py-2 flex flex-col justify-center"}>
                <div className={"my-1 px-4 break-words text-center font-semibold text-gray-500"}>{children + " " +"ratings"}</div>
                <div className="donut flex justify-center">
                    <Chart options={options} series={ratings} type="donut" width="380" />
                </div>
            </div>
        );
};

export default RatingDistribution;
