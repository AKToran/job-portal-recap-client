import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
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
    salaryRange
  } = job;

  return (
    <div className="card bg-base-100 shadow-sm">
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
        <h2 className="card-title">
          {title}
          <div className="badge badge-sm badge-secondary">{category}</div>
          <div className="badge badge-sm badge-secondary">{jobType}</div>
        </h2>
        <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <p>{description}</p>
        <div className="space-x-2">
          {
            requirements.map((req, i)=> <div key={i} className="badge badge-outline">{req}</div>)
          }
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/jobs/${_id}`} className="btn btn-primary font-bold">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
