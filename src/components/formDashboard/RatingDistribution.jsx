import React , {useState} from 'react';
import Chart from "react-apexcharts";


const RatingDistribution= ({data}) =>{

    const chartTitles = [];
    
    const [series,setSeries] = useState([{
                name: '1 stars',
                data: []
            }, {
                name: '2 stars',
                data: []
            }, {
                name: '3 stars',
                data: []
            },{
                name: '4 stars',
                data: []
            },{
                name: '5 stars',
                data: []
            }]);

        const [options , setOptions]= useState({
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: chartTitles,
            },
            yaxis: {
                title: {
                    text: 'No. of responses'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        });

    for(const key in data) {
        if(data.hasOwnProperty(key)){
            chartTitles.push(key.toString());
            series.forEach(item=>{
                item.data.push(data[key][item.name.split(' ')[0] - 1]);
            })
        }
    }

        return (
            <div id="chart" className={"m-2 lg:m-4"}>
                <h5 className={"text-center mt-5 font-semibold text-gray-600"}>Ratings distribution</h5>
                <Chart options={options} series={series} type="bar" height={350} />
            </div>
        )
    }

export default RatingDistribution;