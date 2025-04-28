import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultsChart = () => {
    const marks = [
        {
          "id": 1,
          "name": "Alice",
          "math": 85,
          "english": 78,
          "science": 92
        },
        {
          "id": 2,
          "name": "Bob",
          "math": 74,
          "english": 88,
          "science": 81
        },
        {
          "id": 3,
          "name": "Charlie",
          "math": 90,
          "english": 85,
          "science": 87
        }
      ]
      
    return (
        <div>
            <LineChart width={800} height={500} data={marks}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='green'></Line>
                <Line dataKey='english' stroke='blue'></Line>                
                <Line dataKey='science' stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;