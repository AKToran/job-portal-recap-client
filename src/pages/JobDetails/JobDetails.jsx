import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
  const job = useLoaderData();
    const {
    _id,
    title,
    location,
    jobType,
    category,
    description,
    company,
    company_logo,
    requirements,
    salaryRange,
    responsibilities,
    status
  } = job;

  return (
    <div className="card bg-base-100 shadow-lg my-12 lg:p-12">
          <div className="card-body">
            <div className="flex gap-2">
              <figure>
                <img className="w-16" src={company_logo} alt="logo" />
              </figure>
              <div>
                <h3 className="text-2xl font-semibold">{company}</h3>
                <div className="flex items-center gap-0.5">
                  {" "}
                  <FaMapMarkerAlt /> {location}
                </div>
              </div>
            </div>
            <h2 className="text-xl font-semibold">
              {title}
              <div className="badge ms-1 badge-sm badge-secondary">{category}</div>
            </h2>
            <p className="font-semibold">Job Type: {jobType}</p>
            <p className='font-semibold'>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
            <p className='text-lg'>{description}</p>
            <h3 className='text-lg font-semibold'>Required Skills:</h3>
            <div className="space-x-2">
              {
                requirements.map((req, i)=> <div key={i} className="badge badge-outline">{req}</div>)
              }
            </div>
            <h3 className='text-lg font-semibold'>Responsibilities:</h3>
            <div className="space-x-2">
              {
                responsibilities.map((res, i)=> <li key={i} className="">{res}</li>)
              }
            </div>
            <p className='font-semibold'>Status: {status}</p>
            <div className="card-actions justify-end mt-4">
              <Link to={`/apply/${_id}`} className="btn btn-primary font-bold">Apply Now</Link>
            </div>
          </div>
        </div>
  );
};

export default JobDetails;