import React, { use } from "react";
import { Link } from "react-router";

const ApplicationList = ({ applicationsPromise }) => {
  const applications = use(applicationsPromise);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Job Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app,i) => (
            <tr key={i}>
              <th>{i+1}</th>
              <td>{app.jobId}</td>
              <td><Link className="link-info link-hover" to={`/jobs/${app.jobId}`}>Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
