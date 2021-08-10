import React from 'react';
import { Bar } from 'react-chartjs-2';

const chartData = {
    labels: [ 1, 2, 3, 4, 5],
    datasets: [
        {
            label: 'No. of people',
            data: [12, 19, 3, 5, 20,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
    barThickness: 20
};

const BarChart = ({data , formFields}) => {

    const fieldNames = []

    formFields.forEach(field =>{
        if(field.fieldType === "ratings"){
            fieldNames.push(field.fieldName)
        }
    })

    return (
        <>
            <div className={"w-3/6 h-40"}>
                <div className='header'>
                    <h1 className='title'>Heading</h1>
                </div>
                <Bar data={chartData} options={options} width={80} height={30}/>
            </div>
        </>
    );
}

export default BarChart;
