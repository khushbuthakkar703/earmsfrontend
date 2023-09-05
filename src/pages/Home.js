import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigation = useNavigate();

  useEffect(() => {
    navigation('/signin');
  }, []);

  return <h1>Loading...</h1>;
};

export default Home;
