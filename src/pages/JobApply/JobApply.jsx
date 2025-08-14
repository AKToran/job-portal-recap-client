import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          navigate('/myApplications');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleApplyForm}
        className="flex flex-col justify-center items-center bg-base-200 border-base-300 rounded-box border p-6 my-8"
      >
        <h3 className="text-2xl">
          Applying for Job:{" "}
          <Link className="link link-primary" to={`/jobs/${jobId}`}>
            Details
          </Link>{" "}
        </h3>
        <h1 className="text-2xl font-semibold my-3">Applier information:</h1>
        <div>
          <label className="label">LinkedIn Profile</label> <br />
          <input
            type="url"
            name="linkedIn"
            className="input w-80"
            placeholder="linkedIn profile link"
          />
        </div>
        <div>
          <label className="label">Github Profile</label> <br />
          <input
            type="url"
            name="github"
            className="input w-80"
            placeholder="github profile link"
          />
        </div>
        <div>
          <label className="label">Resume</label> <br />
          <input
            type="text"
            name="resume"
            className="input w-80"
            placeholder="resume link"
          />
        </div>

        <input
          className="btn my-3 w-80 font-semibold"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default JobApply;
