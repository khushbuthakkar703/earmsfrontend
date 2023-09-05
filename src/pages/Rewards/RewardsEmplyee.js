import React from 'react';
import './rewards.scss';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Table from '../../Component/Tables/Tables';
import { useEffect, useState } from 'react';
import apiRequest from '../../utils/helpers/apiRequest';
import { useNavigate } from 'react-router-dom';

const Rewards = () => {
  const [rewards, setRewards] = useState([]);
  const [empForm, setEmpForm] = useState({});
  // const [id,setId] = useState()
  const navigate = useNavigate();

  const getRewardsData = async () => {
    const res = await apiRequest('getEmployeeAwardList');
    console.log('REWARDS TABLE RES : ', res);
    if (res?.error) {
      setRewards([]);
    } else {
      setRewards(res.data);
      console.log(rewards.empId, 'employeeTABLE');
    }
  };
  const getRewardsFormData = async (id) => {
    const res = await apiRequest('getEmployeeDetailByAwardList' + `?id=${id}`);
    console.log('EMPLOYEE FORM TABLE RES : ', res);
    if (res?.error) {
      //setEmpForm({});
      //navigate('/panel/rewardsuserdetails',{ state: {empForm: {}} });
    } else {
      navigate('/panel/rewardsuserdetails', {
        state: { empForm: res.data, id: id },
      });
      //setEmpForm(res.data);
      console.log('DATA', res.data);
    }
  };
  useEffect(() => {
    getRewardsData();
    // getRewardsFormData ();
  }, []);

  const recievedColumns = [
    {
      Header: 'Employee Name',
      accessor: 'employeeName',
    },
    {
      Header: 'Employee Category',
      accessor: 'employeeCategory',
    },
    {
      Header: 'Branch',
      accessor: 'branchName',
    },
    {
      Header: 'Attendance',
      accessor: 'attendanceCount',
    },
    {
      Header: 'Productivity',
      accessor: 'maintenanceCount',
    },
    {
      Header: 'Training',
      accessor: 'productivityCount',
    },
    {
      Header: 'Maintainance',
      accessor: 'trainingCount',
    },
    {
      Header: 'Innovation',
      accessor: 'invocationCount',
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }) => {
        console.log(row.original, 'ROWV');
        return (
          <div class='dropdown'>
            <button
              class='dropdown-toggle'
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <div className='action-icons'>
                <BiDotsVerticalRounded />
              </div>
            </button>
            <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <a
                class='dropdown-item'
                onClick={() => {
                  getRewardsFormData(row.original.empId);
                  console.log(row.original.empId, 'NAVI');
                }}
              >
                {' '}
                View{' '}
              </a>
              <a class='dropdown-item' href='#'>
                Something
              </a>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='staff-container'>
      <div className='bills-header'>
        <div>
          <p className='employee-1'>Rewards</p>
          <p className='employee-2'>Rewards</p>
        </div>
      </div>
      <div className='df salary-filter'>
        <div>
          <select className='form-control  form-select'>
            <option>Employee Name</option>
          </select>
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Employee Cat</option>
          </select>
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Branch</option>
          </select>
        </div>
        <div>
          <input
            type='date'
            placeholder='Date From'
            required
            className='form-control'
          />
        </div>
        <div>
          <input
            type='date'
            placeholder='Date To'
            required
            className='form-control'
          />
        </div>
      </div>
      <div>
        <Table recievedColumns={recievedColumns} recievedData={rewards} />
      </div>
    </div>
  );
};

export default Rewards;
