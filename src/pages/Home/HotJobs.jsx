import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
  const jobs = use(jobsPromise)

  return (
    <div>
      <h1 className='text-center text-4xl my-5 font-semibold'>Hot Jobs of the Day:</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
      {
        jobs.map(job=> <JobCard key={job._id} job={job} />)
      }
    </div>
    </div>
  );
};

export default HotJobs;