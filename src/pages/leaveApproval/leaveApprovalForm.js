import React, { useEffect } from 'react';
import makeAnimated from 'react-select/animated';
import './leaveapproval.scss';

import { useState } from 'react';
import Breadcrumbs from '../../Component/Breadcrumbs';
import apiRequest from '../../utils/helpers/apiRequest';
import { useLocation, useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import convertDate, { formatDateForRequest } from "../../utils/ConvertDates";
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
const animatedComponents = makeAnimated();

const LeaveApprovalForm = () => {
  const [userRole, SetUserRole] = useState('Admin');
  const [reasonForRejection, setReasonForRejection] = useState('');
  const [formData, setFormData] = useState();
  const [isRejected, setIsRejected] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccept = async () => {
    const reqBody = {
      id: formData.id,
      userId: formData.userId,
      employeeName: formData.employeeName,
      leaveType: formData.leaveType,
      leaveFrom: formData.leaveFrom,
      leaveTo: formData.leaveTo,
      remainingLeave: formData.remainingLeave,
      noOfDays: formData.noOfDays,
      leaveReason: formData.leaveReason,
      status: 'Approve',
    };

    const res = await apiRequest('leaveRejectOrApprove', reqBody);

    if (res.error) {
      toast(<ErrorToast body='Failed to approve, please try again' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }

    toast(<SuccessToast body='Leave Approved' />, {
      transition: Slide,
      hideProgressBar: true,
      autoClose: 2000,
    });

    navigate(-1);
  };
  const handleReason = (e) => {
    // setReasonForRejection(e.target.value)
    const { name, value } = e.target;
    setReasonForRejection((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  }
  const handleReject = async () => {
    if (!reasonForRejection) {
      toast(<ErrorToast body='Reason for rejection is required' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });

      return;
    }

    const reqBody = {
      id: formData.id,
      userId: formData.userId,
      employeeName: formData.employeeName,
      leaveType: formData.leaveType,
      leaveFrom: formData.leaveFrom,
      leaveTo: formData.leaveTo,
      remainingLeave: formData.remainingLeave,
      noOfDays: formData.noOfDays,
      leaveReason: formData.leaveReason,
      status: 'Reject',
      reasonForRejection: reasonForRejection.reason
    };

    const res = await apiRequest('leaveRejectOrApprove', reqBody);

    if (res.error) {
      toast(<ErrorToast body='Failed to reject, please try again' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }

    toast(<SuccessToast body='Leave Rejected' />, {
      transition: Slide,
      hideProgressBar: true,
      autoClose: 2000,
    });

    navigate(-1);
  };

  useEffect(() => {
    console.log(location.state)
    setFormData(location.state);
  }, []);

  return (
    <div>
      {console.log('LEAVE FORM DATA', formData)}
      <h1 className='panel-header'>Employee</h1>
      <div className="df df-sb">
        <div>Employee / Leave (Approval)</div>
      </div>
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>Leave Approval</h6>
        </div>
        <div className='theme-card-content'>
          <div className='df fw'>
            {userRole === 'Admin' ? (
              <>
                <div className='form-group'>
                  <label className='form-label'>Employee Name</label>
                  <input
                    type='text'
                    className='form-control'
                    readOnly
                    value={formData?.employeeName}
                  />
                </div>
              </>
            ) : (
              ''
            )}
            <div className='form-group'>
              <label className='form-label'>Leave type </label>
              {/* <select className='form-control  form-select'>
                <option>Casual</option>
              </select> */}
              <input
                type='text'
                className='form-control'
                readOnly
                value={formData?.leaveType}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Leave From </label>
              <input
                type='text'
                className='form-control '
                readOnly
                value={formData?.leaveFrom}
              />
            </div>

            <div className='form-group'>
              <label className='form-label'>Leave To </label>
              <input
                type='text'
                className='form-control'
                readOnly
                value={formData?.leaveTo}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Number of Days </label>
              <input
                type='text'
                className='form-control'
                readOnly
                value={formData?.noOfDays}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Remaining Leave </label>
              <input
                type='text'
                className='form-control'
                readOnly
                value={formData?.remainingLeave}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Leave Reason </label>
              <textarea
                rows='5'
                type='text'
                className='form-control'
                readOnly
                value={formData?.leaveReason}
              />
            </div>
          </div>
        </div>
        {userRole === 'Admin' ? (
          <>
            <div className='dc df w-100'>
              <button
                className='btn danger-btn'
                onClick={() => setIsRejected(true)}
              >
                Reject
              </button>
              <button className='btn m-2 green-bdr-btn' onClick={handleAccept}>
                Approve
              </button>
            </div>
          </>
        ) : (
          <>
            <div className='w-100 card-header mb-3 theme-card-content'>
              <strong>Status :</strong> <input type='radio' checked /> Rejected
            </div>
            <div className='theme-card-content'>
              Leave Rejected By : John Doe
            </div>
          </>
        )}
        {isRejected && (
          <div className='theme-card-content'>
            <div>
              <div className='form-group w-100'>
                <label className='form-label'>Reason For Rejection </label>
                <textarea
                  rows='5'
                  type='text'
                  className='form-control'
                name="reason"
                onChange={(e) => handleReason(e)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {userRole !== 'Admin' ? (
        <div className='df df-fe'>
          <button className='btn primary-btn'>Back</button>
        </div>
      ) : (
        isRejected && (
          <div className='df df-fe'>
            <button className='btn danger-btn' onClick={handleReject}>
              Submit
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default LeaveApprovalForm;
