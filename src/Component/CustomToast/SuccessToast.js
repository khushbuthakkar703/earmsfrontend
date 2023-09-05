import React, { Fragment } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './CustomToast.scss';

const SuccessToast = ({ header = 'Success', body }) => {
  return (
    <div className='base-toast-div'>
      <FaCheckCircle className='custom-toast-succes-icon' />
      <div style={{ marginLeft: '10px' }}>
        <div className='base-toast-header'>
          <div>
            <h6 className='custom-toast-title-success'>{header}</h6>
          </div>
        </div>
        <div className='custom-toast-body-message'>
          <span>{body}</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessToast;
