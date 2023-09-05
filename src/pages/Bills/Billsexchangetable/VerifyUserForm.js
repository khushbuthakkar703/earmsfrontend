import React, { useState } from 'react';
import apiRequest from '../../../utils/helpers/apiRequest';
import { Slide, toast } from 'react-toastify';
import ErrorToast from '../../../Component/CustomToast/ErrorToast';

const VerifyUserForm = ({ handeleSubmit, handleCancel }) => {
  const [formData, setFormData] = useState();

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className='modal-wrap'>
        <div className='modal-inner-wrap md-modal w-50'>
          <div className='modal-head'>
            <h4>Varify & Accept</h4>
          </div>
          <div className=''>
            <div className='form-group'>
              <div className='form-label'>Username</div>
              <input
                type='text'
                className='form-control'
                name='username'
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className='form-group'>
              <div className='form-label'>Password</div>
              <input
                type='password'
                className='form-control'
                name='password'
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <div className='df df-fe'>
              <button
                className='btn primary-bdr-btn mr-2'
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className='btn primary-btn'
                onClick={() => handeleSubmit(formData)}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyUserForm;
