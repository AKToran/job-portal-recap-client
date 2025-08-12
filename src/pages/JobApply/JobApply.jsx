import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  return (
    <div>
      <h3 className="text-3xl">Apply for Job: {jobId}</h3>
      <p>Job seeker: {user.email}</p>

      <form className="flex flex-col justify-center items-center bg-base-200 border-base-300 rounded-box border p-6 my-8">
        <h1 className="text-2xl font-semibold my-3">Applier information:</h1>
        <div>
          <label className="label">LinkedIn Profile</label> <br />
          <input type="url" className="input w-80" placeholder="linkedIn profile link" />
        </div>
        <div>
          <label className="label">Github Profile</label> <br />
          <input type="url" className="input w-80" placeholder="github profile link" />
        </div>
        <div>
          <label className="label">Resume</label> <br />
          <input type="text" className="input w-80" placeholder="resume link" />
        </div>

        <input className="btn my-3 w-80 font-semibold" type="submit" value="Submit" />

      </form>
    </div>
  );
};

export default JobApply;
