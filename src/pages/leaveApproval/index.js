import React from 'react';
import Breadcrumbs from '../../Component/Breadcrumbs';
import './leaveapproval.scss';
import User from '../../assets/user.png';
import Threedot from '../../assets/threedot.svg';
import Tables from '../../Component/Tables/Tables';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { useState, useEffect } from 'react';
import apiRequest from '../../utils/helpers/apiRequest';
import { useLocation, useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';

const Index = () => {
  const [approvel, setApprovel] = useState();
  const navigation = useNavigate();
  const location = useLocation();

  const recievedColumns = [
    {
      Header: 'Name',
      accessor: 'employeeName',
      Cell: ({ row }) => {
        // console.log(row.values);
        return (
          <div className='df'>
            <img src={User} alt='username' title='username' />
            {row.values.employeeName}
          </div>
        );
      },
    },
    {
      Header: 'Leave Type',
      accessor: 'leaveType',
    },
    {
      Header: 'Leave Reason',
      accessor: 'leaveReason',
    },
    {
      Header: 'From',
      accessor: 'leaveFrom',
    },
    {
      Header: 'To',
      accessor: 'leaveTo',
    },
    {
      Header: 'Status',
      accessor: 'status',
      width: 3000,
      Cell: ({ row }) => {
        return (
          <>
            {row.values.status === 'Approve' ? (
              <span className='border'>
                <IoMdRadioButtonOn className='status-green' />
                Approved
              </span>
            ) : row.values.status == 'Reject' ? (
              <span className='border' id='extra-bar'>
                <IoMdRadioButtonOn className='status-red' />
                Rejected
              </span>
            ) : row.values.status == 'Request' ? (
              <span className='border' id='extra-bar'>
                <IoMdRadioButtonOn className='status-yellow' />
                Request
              </span>
            ) : null}
          </>
        );
      },
    },
    {
      Header: 'Approved/Rejected by',
      Cell: ({ row }) => {
        console.log(row.values);
        return row.original.approveByName || row.original.rejectedByName ? (
          <div className='df dc'>
            <img src={User} alt='username' title='username' />
            {row.original.approveByName || row.original.rejectedByName}
          </div>
        ) : (
          <div> -</div>
        );
      },
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }) => {
        console.log('data row', row.original);
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
            <div class='dropdown-menu p-2' aria-labelledby='dropdownMenuButton'>
              {row.original.status === 'Request' && (
                <a
                  class='dropdown-item'
                  onClick={() => handleView(row.original)}
                >
                  Approve / Reject
                </a>
              )}
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

  const handleDelete = async (data) => {
    const res = await apiRequest(
      'deleteLeaveDetails',
      null,
      null,
      `/${data.id}`
    );
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
    getLeaveApprovelData();
  };

  const handleView = (data) => {
    navigation('/panel/leaveapprovalForm', { state: data });
  };

  const getLeaveApprovelData = async () => {
    const res = await apiRequest('getLeaveRequestList');
    console.log('Leave Approvel TABLE RES : ', res);

    if (res?.error) {
      setApprovel([]);
    } else {
      setApprovel(res.data);
    }
  };

  useEffect(() => {
    getLeaveApprovelData();
  }, []);
  return (
    <div>
      <h1 className='panel-header'>Employee</h1>
      <div className="df df-sb">
        <div>Employee / Leave (Approval)</div>
      </div>
      
      <div className='leave-details df'>
        <div className='df dc card-leave'>
          <p className='text-center'>
            Today Present
            <br />
            <span>15</span>
          </p>
        </div>
        <div className='df dc card-leave'>
          <p className='text-center'>
            Planned Leaves
            <br />
            <span>15</span>
          </p>
        </div>
        <div className='df dc card-leave'>
          <p className='text-center'>
            Unplanned Leaves
            <br />
            <span>15</span>
          </p>
        </div>
        <div className='df dc card-leave'>
          <p className='text-center'>
            Pending Request
            <br />
            <span>15</span>
          </p>
        </div>
      </div>
      <div className='df salary-filter'>
        <div>
          <input className='form-control' placeholder='Employee Name' />
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Leave type</option>
          </select>
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Leave Status</option>
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
      {approvel && (
        <Tables recievedColumns={recievedColumns} recievedData={approvel} />
      )}
    </div>
  );
};

export default Index;
