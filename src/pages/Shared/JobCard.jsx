import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    description,
    company,
    company_logo,
  } = job;

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex gap-2">
          <figure>
            <img src={company_logo} alt="logo" />
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
          <div className="badge badge-secondary">{category}</div>
          <div className="badge badge-secondary">{jobType}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info font-bold">Details</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
