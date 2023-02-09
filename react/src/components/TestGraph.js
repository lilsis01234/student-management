import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import React, {useState, useEffect} from "react";
ChartJS.register( 
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
  );
function TestGraph({stat}) {
  let [category, setCategory] = useState({
    datasets: [],
});
let[sexe,setSexe]=useState({
  datasets:[],
})
let [chartOptions, setChartOptions] = useState({});

useEffect(() => {
  setCategory({
      labels: [ "L1", "L2", "L3","M1","M2"],
      datasets: [
          {
              label: "Nombre d'étudiants",   
              data: [stat[0].niv, stat[0].niv2, stat[0].niv3, stat[0].niv4, stat[0].niv5],
              backgroundColor: [
                "rgba(75,192,192,1)",
                "red",
                "#50AF95",
                "#f3ba2b",
                "#2a71d0",
                
              ],
          },
      
      ],
  });
  setSexe({
    labels:['etudiants','etudiantes'],
    datasets:[
      {
        label:"Classement par sexe",
        data:[stat[0].mas,stat[0].fem],
        backgroundColor:[
          "blue",
          "red",
        ]
      }
    ]
  })
  setChartOptions({
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title:{
            dsiplay: true,
            text: ""
        },
    },
});    
}, [stat])

return (
    <div className="row">
       <div className="col-5 ml-5 mr-2">
                <Pie options={chartOptions} data={category}/> 
            </div>
            <div className="col-5 ml-5 mr-2">
                <Pie options={chartOptions} data={sexe}/> 
            </div>
    </div>
  )
}

export default TestGraph
