import React, { useEffect } from 'react';
import Breadcrumbs from '../../Component/Breadcrumbs';
import './shiftallotment.scss';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Table from '../../Component/Tables/Tables';
import Profile from '../../assets/user.png';
import { useNavigate } from 'react-router-dom';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import { Slide, toast } from 'react-toastify';
import { useState } from 'react';
import apiRequest from '../../utils/helpers/apiRequest';

const Index = () => {
  const [shiftAllotment, setShiftAllotment] = useState();

  const handleDelete = async (rowId) => {
    console.log(rowId);
    const res = await apiRequest('deleteShiftAllotment', null, null, rowId);
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
    }
  };
  const recievedColumns = [
    {
      Header: 'Name',
      accessor: 'username',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <div className='profile-images'>
            <img src={Profile} alt='username' title='username' />
            {row.values.username}
          </div>
        );
      },
    },

    {
      Header: 'Shift',
      accessor: 'shiftName',
    },
    {
      Header: 'Week Off',
      accessor: 'weekOff',
    },
    {
      Header: 'From',
      accessor: 'fromDate',
    },
    {
      Header: 'To',
      accessor: 'toDate',
    },

    {
      Header: 'Exempted Shift',
      accessor: 'exemptedShift',
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
              <a class='dropdown-item' href='#'>
                Action
              </a>
              <a
                class='dropdown-item'
                onClick={() => handleDelete(row.original.id)}
              >
                Something
              </a>
            </div>
          </div>
        );
      },
    },
  ];

  let navigate = useNavigate();

  const getShiftAllotmentData = async () => {
    const res = await apiRequest('getShiftAllotmentList');
    console.log('SHIFT Allotment TABLE RES ::: ', res);
    if (res?.error) {
      setShiftAllotment([]);
    } else {
      const resposeData = res?.data;
      const allStaff = [];

      if (resposeData.length > 0) {
        resposeData.map((val) => {
          const allData = val;

          // console.log('VALUES', allData);
          if (val?.staffs?.length > 0) {
            console.log('adding staffs');
            val?.staffs.map((d) => {
              d['shift'] = allData.shiftName;
              d['exemptedShift'] = allData.exemptedShift;
              d['weekOff'] = allData.weekOff;
              d['fromDate'] = allData.fromDate;
              d['toDate'] = allData.toDate;
              d['toDate'] = allData.toDate;
              allStaff.push(d);
            });
          }
        });

        setShiftAllotment(allStaff);
      } else {
        setShiftAllotment([]);
      }
    }
  };
  useEffect(() => {
    getShiftAllotmentData();
  }, []);

  return (
    <div>
      
      <div className='df df-sb'>
      <div>
          <p className='employee-1'>Employee</p>
          <p className='employee-2'>Employee / Shift Exemption</p>
        </div>
        <button
          className='btn blue-btn'
          onClick={() => navigate('/panel/shiftallotmentform')}
        >
          + Add Exemption
        </button>
      </div>
      <div className='df salary-filter my-2'>
        <div>
          <input className='form-control' placeholder='Employee Name' />
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Employee Cat</option>
          </select>
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Depatment</option>
          </select>
        </div>

        <div>
          <select className='form-control  form-select'>
            <option>Shift</option>
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
        {shiftAllotment && (
          <Table
            recievedColumns={recievedColumns}
            recievedData={shiftAllotment}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
