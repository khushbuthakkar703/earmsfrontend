import React, { useState, useEffect } from 'react';
import './rewards.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import apiRequest from '../../utils/helpers/apiRequest';
import moment from 'moment/moment';
const AwardsForm = () => {
  const [viewForm, setViewForm] = useState();
  const [empName, setEmpName] = useState();
  const [empId,setEmpId] = useState()
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [formaedFromDate, setFormaedFromDate] = useState('');
  const [formaedtoDate, setFormaedToDate] = useState('');
  const getEmployeeViewFormData = async () => {
    const res = await apiRequest(
      'getEmployeeDetailByAwardList' + `?fromDate=${formaedFromDate}&toDate=${formaedtoDate}`
      // 'getEmployeeDetailByAwardList' + "?fromDate=30/10/2022&toDate=05/11/2022"
     
    );
    console.log('EMPLOYEE VIEW FORM TABLE RES : ', res);
    if (res?.error) {
      setViewForm();
    } else {
      setViewForm(res.data.awardList);
      setEmpName(res.data.employeeName);
      setEmpId (res.data.employeeId)
      // console.log(viewForm,"DATAA")
    }
  };
  const getMonthDate = (date) => {
    const now = new Date(date);
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);   
    const setFDate = firstDay.toString().substring(4, 15);
    const setTDate = lastDay.toString().substring(4, 15);
   const formatedFirstDate = moment(firstDay).format("MM/DD/YYYY")
   const formatedlastDate = moment(lastDay).format("MM/DD/YYYY")
   console.log(firstDay,"DDDDDDDDDDDDDD")
   console.log(date,"iiiiiii");
    setFromDate(setFDate)
    setToDate(setTDate)
    setFormaedFromDate(formatedFirstDate)
    setFormaedToDate(formatedlastDate)
  };
  useEffect(() => {
    getMonthDate(location.state?.awardDate);
    getEmployeeViewFormData();
  }, [formaedFromDate,formaedtoDate]);
  const location = useLocation();
  // const formData = location.state;
  console.log(location.state, 'VIEWFORM');
  // console.log(location.state.awardDate, 'AWARDDATe');
  // console.log(formData.awardList,"AWARDLIST")
  const navigate = useNavigate();
  const recievedColumns = [
    {
      Header: 'Day',
      accessor: 'date',
    },
    {
      Header: 'Attendance',
      accessor: 'attendanceCount',
    },
    {
      Header: 'Productivity',
      accessor: 'productivityCount',
    },
    {
      Header: 'Training',
      accessor: 'trainingCount',
    },
    {
      Header: 'Maintainance',
      accessor: 'maintenanceCount',
    },
    {
      Header: 'Innovation',
      accessor: 'invocationCount',
    },
  ];

  const recievedData = [
    {
      day: '1 Jan 2022',
      attendance: '1',
      productivity: '1',
      training: '1',
      maintainance: '1',
      innovation: '1',
    },
    {
      day: '1 Jan 2022',
      attendance: '1',
      productivity: '1',
      training: '1',
      maintainance: '1',
      innovation: '1',
    },
    {
      day: '1 Jan 2022',
      attendance: '1',
      productivity: '1',
      training: '1',
      maintainance: '1',
      innovation: '1',
    },
    {
      day: '1 Jan 2022',
      attendance: '1',
      productivity: '1',
      training: '1',
      maintainance: '1',
      innovation: '1',
    },
  ];
  return (
    <div className='receive-forms'>
      <div className='bills-header'>
        <div>
          <p className='employee-1'>Awards</p>
          <p className='employee-2'>Awards</p>
        </div>
      </div>

      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>User Details</h6>
        </div>
        <div>
          <div className='billreceive-detail'>
            <div className='billdetail-left'>
              <div className='receiveform'>
                <div className='detail-receivebill-1'>
                  <p>Employee Name :</p>
                  <p>From Date :</p>
                </div>
                <div className='detail-receivebill-2'>
                  <p>{empName}</p>
                  <p>{fromDate}</p>
                </div>
              </div>
            </div>
            <div className='billdetail-right'>
              <div className='receiveform'>
                <div className='detail-receivebill-1'>
                  <p>Employee Id :</p>
                  <p>To Date :</p>
                </div>
                <div className='detail-receivebill-2'>
                  {/* <p>shiftDate</p> */}
                  <p>{empId}</p>
                  <p>{toDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='custom-tab'>
          <Tabs
            defaultActiveKey='scroes'
            id='uncontrolled-tab-example'
            className='mb-3'
          >
            <Tab eventKey='scroes' title='Scores'>
              <Table
                recievedColumns={recievedColumns}
                recievedData={viewForm}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className='df df-fe'>
        <div>
          <button
            className='btn primary-btn'
            onClick={() => {
              navigate('/panel/awardstable');
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default AwardsForm;
