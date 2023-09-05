import './CustomToast.scss';

import React, { Fragment } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const ErrorToast = ({ header = 'Error', body }) => {
  return (
    <div className='base-toast-div'>
      <FaTimesCircle className='custom-toast-error-icon' />
      <div style={{ marginLeft: '10px' }}>
        <div className='base-toast-header'>
          <div>
            <h6 className='custom-toast-title-error'>{header}</h6>
          </div>
        </div>
        <div className='custom-toast-body-message'>
          <span>{body}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorToast;
