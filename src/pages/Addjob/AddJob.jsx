import React from "react";

const AddJob = () => {
  return (
    <form>
      
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
          <input className="btn" type="radio" name="type" aria-label="On-Site"/>
          <input className="btn" type="radio" name="type" aria-label="Remote"/>
          <input className="btn" type="radio" name="type" aria-label="Hybrid"/>
        </div>
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <legend className="fieldset-legend">Job Category</legend>
        <select defaultValue="Job Category" name="category" className="select">
          <option disabled={true}>Pick a color</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>UI/UX</option>
        </select>
      </fieldset>

    </form>
  );
};

export default AddJob;
