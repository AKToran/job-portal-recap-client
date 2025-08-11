import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import Spinner from '../Shared/Spinner';

const Home = () => {

  const jobsPromise = fetch('http://localhost:3000/jobs').then(res=>res.json());

  return (
    <div>
      <Banner/>
      <Suspense fallback={<Spinner/>}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;