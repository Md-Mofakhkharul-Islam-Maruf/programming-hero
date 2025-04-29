import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksCharts = ({ MarksPromise }) => {
    const marksDataRes = use(MarksPromise)
    const marksData = marksDataRes.data
    // console.log(marksData)
    const marksChartsData = marksData.map(studentData=>{
        const student ={
            id: studentData.id,
            name: studentData.name,
            math: studentData.subject.math,
            english: studentData.subject.english,
            science: studentData.subject.science
        }
        const avg =(student.math+student.english+student.science);
        student.avg= avg;
        return student;
    })
    console.log(marksChartsData)
    
    return (
        <div className='w-[500px] h-[500px] mx-auto'>
            <BarChart width={500} height={500} data={marksChartsData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'avg'}></YAxis>
                <Bar dataKey={'math'} fill='red'></Bar>
                <Bar dataKey={'english'} fill='green'></Bar>
                <Bar dataKey={'science'} fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksCharts;