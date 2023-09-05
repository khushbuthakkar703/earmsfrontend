import React from 'react';
import Breadcrumbs from '../../Component/Breadcrumbs';
import './dutytransfer.scss';
import User from '../../assets/user.png';
import Threedot from '../../assets/threedot.svg';
import Tables from '../../Component/Tables/Tables';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../utils/helpers/apiRequest';
import { Slide, toast } from 'react-toastify';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import { Link } from 'react-router-dom';

const DutyTransfer = () => {
  const handleDelete = async (data) => {
    const res = await apiRequest(
      'deleteDutyTransferDetails',
      null,
      { staffId: data.staffId },
      `/${data.transferId}`,
    );
    console.log(data, 'DATA');
    if (res.error) {
      toast(<ErrorToast body='Failed to delete' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else {
      toast(<SuccessToast body={res?.data?.message} />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
      // navigate(-1);
    }
  };
  const recievedColumns = [
    {
      Header: 'Name',
      accessor: 'employeeName',
    },
    {
      Header: 'Employee ID',
      accessor: 'staffId',
    },
    {
      Header: 'Current Department',
      accessor: 'currentDeptName',
    },
    {
      Header: 'Assigned Branch',
      accessor: 'currentBranchName',
    },
    {
      Header: 'Assigned Department',
      accessor: 'assignDeptName',
    },
    {
      Header: 'Assigned Date',
      accessor: 'assignedDate',
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }) => {
        console.log('rrrrr', row);
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
              <a
                class='dropdown-item'
                href='#'
                onClick={() => handleView(row.original)}
              >
                {' '}
                View{' '}
              </a>
              <a
                class='dropdown-item'
                onClick={() => handleDelete(row.original)}
              >
                Delete
              </a>
            </div>
          </div>
        );
      },
    },
  ];
  const navigation = useNavigate();
  const handleView = (data) => {
    navigation('/panel/dutytransferform', { state: data });
  };
  const [dutydata, setDutyData] = useState();
  let navigate = useNavigate();
  const getDutyTransferData = async () => {
    const res = await apiRequest('getDutyTransferAssignDutyFilterList');

    const formattedData = [];
    console.log('DUTYTRSNSFER TABLE RES : ', res);

    if (res?.error) {
      setDutyData([]);
    } else {
      setDutyData(res.data);
      res.data.map((values) => {
        const currentData = values?.assignDutyDetails;
        if (currentData && currentData.length > 0) {
          currentData.map((val) => {
            val['assignedDate'] = values?.assignedDate;
            formattedData.push(val);
          });
        }
      });
    }
    console.log('FORMTATTED DATA VALUES ::: ', formattedData);
    setDutyData(formattedData);
  };

  useEffect(() => {
    getDutyTransferData();
  }, []);
  return (
    <div>
      <div className='df df-sb'>
        <div>
          <p className='employee-1'>Employee</p>
          <p className='employee-2'>Employee / Duty</p>
        </div>
        <button
          className='btn blue-btn'
          onClick={() => navigate('/panel/dutytransferform')}
        >
          Transfer
        </button>
      </div>
      <div className='df salary-filter pt-4'>
        <div>
          <input className='form-control' placeholder='Employee Name' />
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Branch</option>
          </select>
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>From Dept</option>
          </select>
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>To Dept</option>
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
      <Tables recievedColumns={recievedColumns} recievedData={dutydata} />
    </div>
  );
};

export default DutyTransfer;
