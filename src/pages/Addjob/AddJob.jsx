import React from "react";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  }

  return (
    <div>
      <h3 className="text-3xl text-center mt-8 font-semibold">Please Fill this form to add a job:</h3>
      <form onSubmit={handleAddJob}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <legend className="fieldset-legend">Basic Info</legend>

        <label className="label">Job Title</label>
        <input type="text" name="title" className="input" placeholder="Title" />

        <label className="label">Company</label>
        <input type="text" name="company" className="input" placeholder="Company Name" />

        <label className="label">Location</label>
        <input type="text" name="location" className="input" placeholder="Company Location" />

        <label className="label">Logo</label>
        <input type="url" name="logo" className="input" placeholder="Company Logo URL" />
      </fieldset>

      
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <legend className="fieldset-legend">Job Type</legend>
        <div className="filter">
          <input className="btn filter-reset" type="radio" name="type" aria-label="All"/>
          <input className="btn" name="type" type="radio" name="type" aria-label="On-Site"/>
          <input className="btn" name="type" type="radio" name="type" aria-label="Remote"/>
          <input className="btn" name="type" type="radio" name="type" aria-label="Hybrid"/>
        </div>
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <legend className="fieldset-legend">Job Category</legend>
        <select defaultValue="Job Category" name="category" className="select">
          <option disabled={true}>Job Category</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>UI/UX</option>
        </select>
      </fieldset>

      {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            <div>
              <label className="label">Minimum Salary: </label> <br />
              <input
                type="text"
                name="min"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label> <br />
              <input
                type="text"
                name="max"
                className="input"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label> <br />
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea w-full"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </fieldset>

        {/* Job Requirements  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>

          <textarea
            className="textarea w-full"
            name="requirements"
            placeholder="Requirements (separate by comma)"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>

          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="Responsibilities (separate by comma)"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user.email}
            className="input"
            placeholder="HR Email"
          />
        </fieldset>

        <input className="btn my-4" type="submit" value="Add Job" />


    </form>
    </div>
  );
};

export default AddJob;
