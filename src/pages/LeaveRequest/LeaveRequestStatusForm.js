import React, { useState, useEffect } from 'react';
import './leaverequest.scss';
import Breadcrumbs from '../../Component/Breadcrumbs';
import { useLocation, useNavigate } from 'react-router-dom';
import convertDate from '../../utils/ConvertDates';
import { IoMdRadioButtonOn } from 'react-icons/io';

const LeaveRequestStatusForm = () => {
  const [leaveData, setLeaveData] = useState();

  const location = useLocation();
  const navigation = useNavigate();
  useEffect(() => {
    if (location.state) {
      setLeaveData(location.state);
    } else {
      navigation(-1);
    }
  }, []);
  return leaveData ? (
    <div>
      <h1 className='panel-header'>Employee</h1>
      <Breadcrumbs />
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>Leave Request</h6>
        </div>
        <div className='theme-card-content'>
          <div className='d-flex fw'>
            <div className='form-group'>
              <label className='form-label'>Leave type</label>
              <input
                className='form-control  form-select'
                value={leaveData?.leaveType}
                readOnly
              />
            </div>

            <div className='form-group'>
              <label className='form-label'>Leave From </label>
              <input
                type='date'
                value={convertDate(leaveData?.leaveFrom)}
                className='form-control'
                readOnly
              />
            </div>

            <div className='form-group'>
              <label className='form-label'>Leave To </label>
              <input
                type='date'
                value={convertDate(leaveData?.leaveTo)}
                className='form-control'
                readOnly
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Number of Days</label>
              <input
                type='text'
                value={leaveData?.noOfDays}
                className='form-control'
                readOnly
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Remaining Leave </label>
              <input
                type='text'
                value={leaveData?.remainingLeave}
                className='form-control'
                readOnly
              />
            </div>

            <div className='form-group'>
              <label className='form-label'>Leave Reason </label>
              <textarea
                rows='5'
                value={leaveData?.leaveReason}
                className='form-control'
                readOnly
              />
            </div>
          </div>
        </div>
        {console.log('REQ DATA', leaveData)}
        <div className='theme-card'>
          <div className='theme-card-header df'>
            <h6>Status : </h6>
            {leaveData.status == 'Approve' ? (
              <span className='border'>
                <IoMdRadioButtonOn className='status-green' />
                Appproved
              </span>
            ) : leaveData.status == 'rejected' ? (
              <span className='border' id='extra-bar'>
                <IoMdRadioButtonOn className='status-red' />
                Rejected
              </span>
            ) : leaveData.status == 'Request' ? (
              <span className='border' id='extra-bar'>
                <IoMdRadioButtonOn className='status-yellow' />
                Request
              </span>
            ) : null}
          </div>
          {leaveData.status == 'rejected' && (
            <div className='theme-card-content'>
              <p>Leave Rejected By : {leaveData?.rejectedBy}</p>
              <p>Reason For Rejection :</p>
              <textarea
                rows='5'
                value={leaveData?.reasonForRejection}
                className='form-control'
                readOnly
              />
            </div>
          )}
        </div>
      </div>
      <div className='df df-fe'>
        <button className='btn primary-btn' onClick={() => navigation(-1)}>
          Back
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LeaveRequestStatusForm;
