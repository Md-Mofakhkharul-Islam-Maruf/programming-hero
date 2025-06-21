import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router';

const JobCard = ({ job }) => {

    const { title, _id, location, description, company, company_logo, requirements, salaryRange } = job
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <div className='flex items-center gap-x-2'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className='text-4xl'>{company}</h3>
                    <p className='flex items-center'><FaLocationDot />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                    }
                </div>
                <div className='card-actions justify-end'>
                    <Link to={`/jobs/${_id}`}><button className='btn bg-primary text-white font-bold rounded-lg'>Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;