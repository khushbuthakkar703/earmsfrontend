import React from 'react';
import './staffTable.scss';
import Profile from '../../../../assets/user.png';
import Table from '../../../../Component/Tables/Tables';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../../../utils/helpers/apiRequest';
import { toast } from 'react-toastify';

import { Slide } from 'react-toastify';
import SuccessToast from '../../../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../../../Component/CustomToast/ErrorToast';
const StaffTable = () => {
  const [staffData, setStaffData] = useState();
  const handleDelete = async(data)  =>{
    const res = await apiRequest ('deleteUserDetails',null,null,`/${data.id}`)
    if(data.error){
      toast(<ErrorToast body= 'Failed to Delete'/>,{
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
        
      }else {
        toast(<SuccessToast body="Successfully Deleted"/>,{
          transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
        })
  
      }
    }
  const recievedColumns = [
    {
      Header: 'Name',
      accessor: 'name',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <div className='profile-images'>
            {/* <button>Checking</button> */}
            <img src={Profile} alt='username' title='username' />
            {row?.original?.username}
          </div>
        );
      },
    },

    {
      Header: 'Employee Type',
      accessor: 'employeeType',
    },
    {
      Header: 'Join Date',
      accessor: 'created_date',
    },
    {
      Header: 'Designation',
      accessor: 'designation',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <div>
            <IoMdRadioButtonOn className='status-icons' />
            Working
          </div>
        );
      },
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }) => {
        console.log(row.values);
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
              
                onClick={() => handleView(row.original.id)}
              >
                View
              </a>
              <a class="dropdown-item" onClick={() =>handleDelete(row.original)}>Delete</a>
              {/* <a class='dropdown-item' href='#'>
                Something
              </a> */}
            </div>
          </div>
        );
      },
    },
  ];

  const navigation = useNavigate();
  const handleView = (data) => {
    navigation('/panel/staff', { state: data });
  };

  const getStaffData = async () => {
    const res = await apiRequest('allListUser');
    console.log('STAFF TABLE RES : ', res);

    if (res?.error) {
      setStaffData([]);
    } else {
      setStaffData(res.data);
    }
  };

  useEffect(() => {
    getStaffData();
  }, []);
  return (
    <div className='staff-container'>
      <p className='employee-1'>Employee</p>
      <p className='employee-2'>Employee/Staff</p>
      <div className='df salary-filter'>
        <div>
          <input className='form-control' placeholder='Employee Name Id' />
        </div>
        <div>
          <input className='form-control' placeholder='Employee Type' />
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Designation</option>
          </select>
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Status</option>
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
        {staffData && (
          <Table recievedColumns={recievedColumns} recievedData={staffData} />
        )}
      </div>
    </div>
  );
};

export default StaffTable;
