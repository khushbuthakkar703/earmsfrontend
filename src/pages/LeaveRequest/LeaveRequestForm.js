import React from 'react';
import './leaverequest.scss';
import Breadcrumbs from '../../Component/Breadcrumbs';
import { useState, useEffect } from 'react';
// Forms
import schema from './requestschema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Slide, toast } from 'react-toastify';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import apiRequest from '../../utils/helpers/apiRequest';
import { storage_items } from '../../constants/constantValues';
import convertDate, { formatDateForRequest, datePrefillFormat } from "../../utils/ConvertDates";
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';

const LeaveRequestForm = () => {
  const initialData = {    
        leaveType: '',
        remainingLeave : '',
        noOfDays : '',
        leaveReason : ''
  }
  const [dateGap, setDateGap] = useState(0);
  const [remainingLeave, setRemainingLeave] = useState(15);
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [minDate, setminDate] = useState()
  const [leaveData, setLeaveData] = useState(initialData)
  const [leaveId, setLeaveId] = useState()
  const [errors, setErrors] = useState()
  const [status, setStatus] = useState()
  const curDate = new Date()
  const navigator = useNavigate();
  const { state } = useLocation();
  const [leaveReport, setleaveReport] = useState()
  const handleApplyLeave = async (e) => {    
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem(storage_items.userdata))
    const reqData = {
      userId : userData?.id,
      employeeName : userData?.username,
      leaveType : leaveData?.leaveType,
      leaveFrom : moment(dateFrom, 'YYYY-MM-DD').format('DD/MM/YYYY'),
      leaveTo : moment(dateTo, 'YYYY-MM-DD').format('DD/MM/YYYY'),
      remainingLeave : remainingLeave,
      noOfDays : dateGap,
      leaveReason : leaveData?.leaveReason
    }
    if (
      !leaveData?.leaveType || 
      !leaveData?.leaveReason || 
      !dateTo || 
      !dateFrom
      ) {
      console.log("check filled leave type: ", reqData) 
      if (!leaveData?.leaveType) setErrors((prevState) => ({ ...prevState, leaveType: "Leave type is mandatory" }))
      if (!leaveData?.leaveReason) setErrors((prevState) => ({ ...prevState, leaveReason: "Reason for leave is mandatory" }))
      if (!dateTo) setErrors((prevState) => ({ ...prevState, leaveTo: "Start date of leave is mandatory" }))
      if (!dateFrom) setErrors((prevState) => ({ ...prevState, leaveFrom: "End date of leave is mandatory" }))
    } else {
      const res = await apiRequest('leaveRequest', reqData)
      console.log(res)
      if (res.error) {
        console.log(res.error);
        toast(<ErrorToast body={res.error} />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
        // return;
      } else {
  
        toast(<SuccessToast body='Leave requested successfully' />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
        navigator('/panel/leaverequest')
      }
    }
  }
  const calculateDateGap = () => {
    console.log("after convert: ", dateFrom, dateTo)
    const newStartDate = new Date(dateFrom);
    const newEndDate = new Date(dateTo);
    const one_day = 1000 * 60 * 60 * 24;

    const noOfDays = Math.ceil(
      (newEndDate.getTime() - newStartDate.getTime()) / one_day
    );

    setDateGap(noOfDays);
  };
  const getData = () => {
    setDateFrom(leaveData?.leaveFrom)
    setDateTo(leaveData?.leaveTo)
    setDateGap(leaveData?.noOfDays)
  }
  const getMinDate = () => {  
    setminDate(moment(curDate).format("YYYY-MM-DD"))
  }
  const handleleaveForm = (e) => {
    const { name, value } = e.target;
    if (name === 'leaveFrom' || name === 'leaveTo') {
      setLeaveData((prevState) => ({
        ...prevState,
        [name]: formatDateForRequest(value),
      }));
      
    } else {
      setLeaveData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
      
  }
  
  const getLeaveDetails = async (id) => {
    // console.log("opt edit before", id)
    const res = await apiRequest(
      "getLeaveDetails",
      null,
      null,
      `/${id}`
    );
    if (res.error) {
      setLeaveData([]);
    } else {
      setLeaveData((pre) => ({
        ...pre,
        id: res.data?.id,
        leaveType: res.data?.leaveType,
        leaveReason: res.data?.leaveReason,
        status: res.data?.status
      }))
      setRemainingLeave(res.data?.remainingLeave)
      setDateGap(res.data?.noOfDays)
      setDateTo(moment(res.data?.leaveTo,'DD/MM/YYYY').format('YYYY-MM-DD'))
      setDateFrom(moment(res.data?.leaveFrom,'DD/MM/YYYY').format('YYYY-MM-DD'))
      // setDateFrom(res.data?.leaveFrom)
    }    
  }
  const handleUpdateLeave = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem(storage_items.userdata)) 
    const reqUpdateData = {
      id: leaveData?.id,
      userId: userData?.id,
      employeeName: userData?.username,
      leaveType: leaveData?.leaveType,
      leaveFrom : formatDateForRequest(dateFrom),
      leaveTo: formatDateForRequest(dateTo),
      remainingLeave: remainingLeave,
      noOfDays: dateGap,
      leaveReason: leaveData?.leaveReason,
      status: leaveData?.status
    }
    const res = await apiRequest('updateLeaveRequest', reqUpdateData)
      if (res.error) {
        console.log(res.error);
        toast(<ErrorToast body={res.error} />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
        // return;
      } else {
  
        toast(<SuccessToast body={res.message} />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
        navigator('/panel/leaverequest')
      }
  }
  const getLeaveReqReport = async() => {
    const userData = JSON.parse(localStorage.getItem(storage_items.userdata)) 
    const res = await apiRequest('getLeaveRequestReport')
    if (res.error) {
      setleaveReport([])
    } else {
      setleaveReport(res.data)
    }
  }
  useEffect(() => {
    // const minDate = new Date()
    getMinDate()
    if (dateFrom && dateTo) {
      calculateDateGap();
    }
  }, [dateFrom, dateTo]);
  useEffect(() => {
    // console.log("Leave status: ", state.opt)
    if (state) {
      setStatus(state?.opt)
      setLeaveId(state?.value?.id)
      getLeaveDetails(state?.value?.id)
    }
    // getData();
  }, [])
  useEffect(() => {
    getLeaveReqReport();
  }, [])
  return (
    <div>
      <h1 className='panel-header'>Employee</h1>
      <div className="df df-sb">
        <div>Employee / Leave</div>
      </div>
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>Leave Request</h6>
        </div>
        <form>
          <div className='theme-card-content'>
            <div className='d-flex fw'>
              <div className='form-group'>
                <label className='form-label'>Leave type</label>
                {leaveReport?.remainingLeaveCount}
                <select
                  className='form-control  form-select'
                  name='leaveType'
                  onChange={(e) => handleleaveForm(e)}
                  value={leaveData.leaveType}
                >
                  <option>Leave type</option>
                  <option value='AcceidentLeave'>Acceident Leave</option>
                  {leaveReport && leaveReport?.remainingLeaveCount == 0 && 
                    <option value='LossOfPay'>Loss Of Pay</option>
                  }
                  {leaveReport && leaveReport?.remainingLeaveCount > 0 && 
                    <option value='LeaveWithWages'>Leave With Wages</option>
                  } 
                  <option value='Maternity'>Maternity</option>
                </select>
                    <p style={{color: "red"}}>{errors?.leaveType}</p>
              </div>
              <div className='form-group'>
                <label className='form-label'>Leave From </label>
                <input
                  type='date'
                  className='form-control'
                  name='leaveFrom'
                  value={datePrefillFormat(dateFrom)}
                  onChange={(e) => setDateFrom(e.target.value)}
                  min={minDate}
                  />
                  <p style={{color: "red"}}>{errors?.leaveFrom}</p>
              </div>
              <div className='form-group'> 
                <label className='form-label'>Leave To </label>
                  <input
                  type='date'
                  className='form-control'
                  name='leaveTo'
                  // value='2022-11-18'
                  value={datePrefillFormat(dateTo)}
                  onChange={(e) => setDateTo(e.target.value)}
                  min={dateFrom}
                />
                    <p style={{color: "red"}}>{errors?.leaveTo}</p>
              </div>
              <div className='form-group'>
                <label className='form-label'>Number of Days</label>
                <input
                  type='text'
                  className='form-control'
                  name='noOfDays'
                  readOnly
                  value={parseInt(dateGap)}
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Remaining Leave </label>
                <input
                  type='text'
                  className='form-control'
                  readOnly
                  name='remainingLeave'
                  onChange={(e) => handleleaveForm(e)}
                  value={remainingLeave}
                />
              </div>

              <div className='form-group'>
                <label className='form-label'>Leave Reason </label>
                <textarea
                  rows='5'
                  className='form-control'
                  name='leaveReason'
                  onChange={(e) => handleleaveForm(e)}
                  value={leaveData?.leaveReason}
                />
                    <p style={{color: "red"}}>{errors?.leaveReason}</p>
              </div>
            </div>
          </div>
          
          <div className='df df-sb'>
            <button className='btn primary-bdr-btn m-2' onClick={() => navigator('/panel/leaverequest')}>Cancel</button>
            {state && state?.opt === 'view' ?
              "" : 
                state?.opt === 'edit' ?
                  <button className='btn primary-btn' onClick={handleUpdateLeave}>
                    Update
                  </button>
                  :  
                <button className='btn primary-btn' onClick={handleApplyLeave}  >
                    Apply Leave
                  </button> 
                
            }
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequestForm;
