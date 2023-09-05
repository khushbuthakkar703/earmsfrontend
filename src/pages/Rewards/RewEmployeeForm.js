import React, { useEffect, useState } from 'react';
import './rewards.scss';
import { useLocation } from 'react-router-dom';
import RewardsUserDetailTab from './Rewemployeeformtab';
import apiRequest from '../../utils/helpers/apiRequest';
import { formatDateForRequest } from '../../utils/ConvertDates';
import { useNavigate } from 'react-router-dom';
// import apiRequest from '../../utils/helpers/apiRequest';
const RewardsUserDetail = () => {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [awardDate, setAwardDate] = useState([]);
  const location = useLocation();
  const [employeeForm, setEmployeeForm] = useState();
  const formData = location.state;
  console.log(formData, 'empid');
  // const getEmployeeFormData = async ()=>{

  //     console.log(formData,"empppp")
  //     setEmployeeForm(formData?.empForm);

  //     // setEmployeeForm(formData?.id)
  //     // console.log(formData?.id,"IDDDDD")
  //     console.log("eeeeeeeeeeeee",location.state)
  //     console.log(location.state,"STATEEE")
  //  }
  const getDateData = async () => {
    const res = await apiRequest(
      'getEmployeeDetailByAwardList' +
        `?id=${formData.id}&fromDate=${fromDate}&toDate=${toDate}`
    );
    console.log(res.data, 'dateee');
    if (res?.error) {
      setAwardDate([]);
    } else {
      setAwardDate(res.data);
      console.log(res.data, 'AWRD');
    }
  };
  const handleFromDateData = (e) => {
    const { name, value } = e.target;

     setFromDate(formatDateForRequest(value));
  };

  const handleTODateData = (e) => {
    const { name, value } = e.target;
    setToDate(formatDateForRequest(value));
  };

  useEffect(() => {
    if (fromDate && toDate) {
      getDateData();
    }
  }, [fromDate, toDate]);

  return (
    <div>
      <div>
        <p className='employee-1'>Rewards</p>
        <p className='employee-2'>Rewards</p>
      </div>
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>User Details</h6>
        </div>
        <div className='theme-card-content'>
          <div className='df fw'>
            <div className='form-group'>
              <label className='form-label'>Employee Name</label>
              <input
                type='text'
                required
                className='form-control'
                value={formData?.empForm.employeeName}
                readOnly
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Employee Category</label>
              <input
                type='text'
                required
                className='form-control'
                value={formData?.empForm.employeeCategory}
                readOnly
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Employee Designation</label>
              <input
                type='text'
                required
                className='form-control'
                value={formData?.empForm.designation}
                readOnly
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Branch</label>
              <input
                type='text'
                required
                className='form-control'
                value={formData?.empForm?.branchName}
                readOnly
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>From</label>
              <input
                type='Date'
                required
                className='form-control'
                onChange={(e) => handleFromDateData(e)}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>To</label>
              <input
                type='date'
                required
                className='form-control'
                onChange={(e) => handleTODateData(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <RewardsUserDetailTab awardDate={awardDate} />
      </div>
      <div className='df df-fe'>
      <button
            className='btn primary-btn'
            onClick={() => {
              navigate('/panel/rewards');
            }}
          >
            Close
          </button>
      </div>
    </div>
  );
};

export default RewardsUserDetail;
