import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage_items } from '../constants/constantValues';

const AuthScreen = ({ children }) => {
  const navigator = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem(storage_items.accessToken);
    if (!authToken) {
      navigator('/signin');
    }
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AuthScreen;
