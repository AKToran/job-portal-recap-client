import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import ApplicationList from './ApplicationList';
import Spinner from '../Shared/Spinner';

const MyApplications = () => {
  const {user} = useAuth(); 
  const applicationsPromise = fetch(`http://localhost:3000/applications?email=${user.email}`).then(res=>res.json());

  return (
    <div>
      <Suspense fallback={<Spinner/>}>
        <ApplicationList applicationsPromise={applicationsPromise}/>
      </Suspense>
    </div>
  );
};

export default MyApplications;