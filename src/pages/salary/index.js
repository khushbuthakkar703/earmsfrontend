import React from 'react';
import Breadcrumbs from '../../Component/Breadcrumbs';
import './salary.scss';
import User from '../../assets/user.png';
import Threedot from '../../assets/threedot.svg';
import Tables from '../../Component/Tables/Tables';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../utils/helpers/apiRequest';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import { Slide, toast } from 'react-toastify';

// TODO:  after the API is updated will continue

const Salary = () => {

  const [salarydata, setSalaryData] = useState()
  
  const handleDelete = async (id) => {
    const res = await apiRequest('deleteSalaryDetails', null, null, `/${id}`)
    if (res.error) {
            toast(<ErrorToast body='Failed to delete' />, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 2000,
            });
        } else {
            toast(<SuccessToast body='Deleted SuccessFully' />, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 2000,
            });
            // navigate(-1);
        }
  }
  const recievedColumns = [
    {
      Header: 'Name',
      accessor: 'employeeName',
     
    },
    {
      Header: 'Employee ID',
      accessor: 'id',
      
    },
    {
      Header: 'Employee Category',
      accessor: 'employeeType',
    },
    {
      Header: 'Join Date',
      accessor: 'joindate',
      
    },
    {
      Header: 'Designation',
      accessor: 'designation',
    
    },
    {
      Header: 'Salary',
      accessor: 'basics',
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
              <img src={Threedot} alt='Threedot' title='Threedot' />
            </button>
            <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <a class='dropdown-item' href='#'>
                Action
              </a>
              <a class='dropdown-item' onClick={() => handleDelete(row.original.id)} >
                Delete
              </a>
            </div>
          </div>
        );
      },
    },
  ];

  
  let navigate = useNavigate();

  const getSalaryData = async () => {
    const res = await apiRequest('salaryList');
    const formattedData = [];
    console.log('SALARY TABLE RES : ', res);

    if (res?.error) {
      setSalaryData([]);
    } else {
      setSalaryData(res.data);
      res.data.map((values) => {
        const currentData = values?.staffs;
        if (currentData && currentData.length>0) {
            currentData.map((val) => {
              val['basics'] = values?.basics;
              formattedData.push(val);
            });
        }
        console.log('FORMTATTED DATA VALUES ::: ', formattedData);
        setSalaryData(formattedData);
      });
    }
  };

  useEffect(() => {
    getSalaryData();
  }, []);
  return (
    <div>
      <h1 className='panel-header'>Employee</h1>
      <div className='df df-sb'>
        <Breadcrumbs />
        <button
          className='btn blue-btn'
          onClick={() => navigate('/panel/salaryform')}
        >
          + Add Salary
        </button>
      </div>
      <div className='df salary-filter'>
        <div>
          <input className='form-control' placeholder='Employee Name' />
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Designation</option>
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
      <Tables recievedColumns={recievedColumns} recievedData={salarydata} />
    </div>
  );
};

export default Salary;
