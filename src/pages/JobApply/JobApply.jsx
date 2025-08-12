import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const JobApply = () => {
  const { id:jobId } = useParams();
  const { user } = useAuth();

  return (
    <div>
      <h3 className="text-3xl">Apply for Job: {jobId}</h3>
      <p>Job seeker: {user.email}</p>
    </div>
  );
};

export default JobApply;