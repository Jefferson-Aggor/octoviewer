import React,{useState,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './chart.css'

import {Bar} from 'react-chartjs-2'

export const Chart = ({repo}) => {
    const [state,setState] = useState([]);
    // const [language,setLanuage] = useState([]);
    
    useEffect(()=>{
        AOS.init();
        let repoName = []
        let repoStars = []
        let repoForks = [];
       repo.map(data => {
            repoName.push(data.name)
            repoStars.push(data.stargazers_count)
            repoForks.push(data.forks_count);
           return setState({name: repoName, stars:repoStars, forks: repoForks});
       })
    },[repo])

    const graphData = (chartLabels,chartData, chartLabel)=>{
        const chart = {
            labels: chartLabels,
            datasets: [{
                label: chartLabel,
                data: chartData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                 
            }]
          }

          return chart;
    }
    

    return (
        <div className="details-charts">
            <div className='card' data-aos='fade-up'>
                <Bar data={graphData(state.name,state.stars,'Most Stars')}/>  
            </div>
            <div className='card' data-aos='fade-up' data-aos-delay='50'>
                <Bar data={graphData(state.name,state.forks,'Most Forks')}/>
            </div>
        </div>
        
    )
}
