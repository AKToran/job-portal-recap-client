import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

  const authInfo = {
    name: "abul"
  }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;