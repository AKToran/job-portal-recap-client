import React, { use } from 'react';

const ApplicationList = ({applicationsPromise}) => {
  const applications = use(applicationsPromise);
  return (
    <div>
      list
      {applications.length}
    </div>
  );
};

export default ApplicationList;