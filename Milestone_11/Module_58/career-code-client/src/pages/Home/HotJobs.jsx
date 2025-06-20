import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({ jobsPromise }) => {

    const jobs = use(jobsPromise)
    return (
        <>
            <h2 className='text-4xl font-bold text-center py-5'>Hot jobs of the Day:</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </>
    );
};

export default HotJobs;