import React, { useEffect, useState } from 'react';
import './signin.scss';
import EyeIcon from '../../assets/Eye.svg';
import { storage_items } from '../../constants/constantValues';
// Form validation
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import schema from './signin-form.schema';
import apiRequest from '../../utils/helpers/apiRequest';
import { Slide, toast } from 'react-toastify';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigate();

  const handleSignin = async (data) => {
    const res = await apiRequest('login', data);

    if (res?.error) {
      toast(<ErrorToast body='Failed to signin' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else {
      await localStorage.setItem(
        storage_items.accessToken,
        res.data?.accessToken
      );
      await localStorage.setItem(
        storage_items.refreshToken,
        res.data?.refreshToken
      );

      delete res?.data?.accessToken;
      delete res?.data?.refreshToken;
      delete res?.data?.tokenType;

      await localStorage.setItem(
        storage_items.userdata,
        JSON.stringify(res.data)
      );
      toast(<SuccessToast body='Signin Success' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });

      navigation('/');
      window.location.reload(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(storage_items.accessToken)) {
      navigation('/panel/fingerprint');
    }
  }, []);

  return (
    <div className='login-container df dc'>
      <div className='login-wrapper'>
        <h1>Login</h1>
        {console.log('USER SIGNIN ERRORs:', errors)}
        <form onSubmit={handleSubmit(handleSignin)}>
          <div className='form-group'>
            <label htmlFor='email' className='form-label'>
              Email{' '}
            </label>
            <input
              {...register('username')}
              className='form-control'
              id='email'
              name='username'
            />
            <p className='error-text'>{errors?.username?.message}</p>
          </div>

          <div className='form-group'>
            <label htmlFor='Password' className='form-label'>
              Password{' '}
            </label>
            <div className='input-icon-wrap'>
              <input
                {...register('password')}
                type='password'
                className='form-control'
                id='password'
                name='password'
              />
              <img src={EyeIcon} alt='eyeicon' className='input-img' />
            </div>
            <p className='forget-pwd'>Forget Password ?</p>
            <p className='error-text'>{errors?.password?.message}</p>
          </div>

          <button className='gradient-btn' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
