import React from 'react';
import Breadcrumbs from '../../Component/Breadcrumbs';
import './leaverequest.scss';
import Table from '../../Component/Tables/Tables';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoMdRadioButtonOn } from 'react-icons/io';
import Profile from '../../assets/user.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../utils/helpers/apiRequest';
import { toast } from 'react-toastify';
import { Slide } from 'react-toastify';
import { storage_items } from '../../constants/constantValues';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
const Index = () => {
  const [request, setRequest] = useState();
  const [leaveReport, setleaveReport] = useState()
const handleDelete = async(data)  =>{
  const res = await apiRequest ('deleteLeaveDetails',null,null,`/${data.id}`)
  if(data.error){
    toast(<ErrorToast body= 'Failed to Delete'/>,{
      transition: Slide,
      hideProgressBar: true,
      autoClose: 2000,
    });      
    }else {
      toast(<SuccessToast body={res?.data?.message}/>,{
        transition: Slide,
      hideProgressBar: true,
      autoClose: 2000,
      })
      navigation('/panel/leaverequest')
    }
  }
  const recievedColumns = [
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
      Cell: ({ row }) => {
        // console.log(row.values.status);
        return (
          <>
            {row.values.status == 'Approve' ? (
              <span className='border' >
                <IoMdRadioButtonOn className='status-green' />
                Appproved
              </span>
            ) : row.values.status == 'rejected' ? (
              <span className='border' id='extra-bar'>
                <IoMdRadioButtonOn className='status-red'/>
                Rejected
              </span>
            ) : row.values.status == 'Request' ? (
              <span className='border' id='extra-bar' >
                <IoMdRadioButtonOn className='status-yellow' />
                Request
              </span>
            ) : null}
          </>
        );
      },
    },
    {
      Header: 'Appproved/Rejected by',
      accessor: 'apprdrejted',
      Cell: ({ row }) => {
        return (
          <div className='profile-images'>
            <img src={Profile} alt='username' title='username' />
            {row.values.apprdrejted}
          </div> //TODO:api for this
        );
      },
    },

    {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }) => {
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
              { row.original.status == 'Approve' ? 
                <a class='dropdown-item'
                  onClick={() => handleView(row.original)}
                  >View</a> : 
                <a class='dropdown-item'
                  onClick={() => handleEdit(row.original)}
                  >Edit</a>
              }
              <a class="dropdown-item" onClick={() =>handleDelete(row.original)}>Delete</a>
            </div>
          </div>
        );
      },
    },
  ];

  const navigation = useNavigate();

  const handleView = (data) => {
    navigation('/panel/leaverequestform', { state: {value: data, opt: 'view'} });
  };
  const handleEdit = (data) => {
    navigation('/panel/leaverequestform', { state: {value: data, opt: 'edit'} });
  };
  const getLeaveRequestData = async () => {
    const res = await apiRequest('getLeaveRequestListByUserId');
    if (res?.error) {
      setRequest([]);
    } else {
      setRequest(res.data);
    }
  };
  const getLeaveReqReport = async() => {
    const userData = JSON.parse(localStorage.getItem(storage_items.userdata)) 
    const res = await apiRequest('getLeaveRequestReport')
    console.log("REPORT: ", res.data)
    if (res.error) {
      setleaveReport([])
    } else {
      setleaveReport(res.data)
    }
  }
  useEffect(() => {
    getLeaveRequestData();
    getLeaveReqReport();
  }, []);

  return (
    <div>
      <h1 className='panel-header'>Employee</h1>
      <div className='df df-sb'>
        <div>Employee / Leave</div>
        <button
          className='btn blue-btn'
          onClick={() => navigation('/panel/leaverequestform', { state: {opt: 'new'} })}
        >
          + Apply Leave
        </button>
      </div>
      <div className='leave-details df'>
        <div className='df dc card-leave'>
          <p className='text-center'>
            Earned Leaves
            <br />
            <span>{ leaveReport?.earnedLeavesCount }</span>
          </p>
        </div>
        <div className='df dc card-leave'>
          <p className='text-center'>
            Leave With Wages
            <br />
            <span>{ leaveReport?.leaveWithWagesCount }</span>
          </p>
        </div>
        <div className='df dc card-leave'>
          <p className='text-center'>
            Maternity
            <br />
            <span>{ leaveReport?.maternityCount }</span>
          </p>
        </div>
        <div className='df dc card-leave'>
          <p className='text-center'>
            Loss Of Pay
            <br />
            <span>{ leaveReport?.lossOfPayCount }</span>
          </p>
        </div>
        <div className='df dc card-leave'>
          <p className='text-center'>
            Acceident Leave
            <br />
            <span>{ leaveReport?.accidentLeaveCount }</span>
          </p>
        </div>
        <div className='df dc card-leave'>
          <p className='text-center'>
            Remaining Leave
            <br />
            <span>{ leaveReport?.remainingLeaveCount }</span>
          </p>
        </div>
      </div>

      <div>
        {request && (
          <Table recievedColumns={recievedColumns} recievedData={request} />
        )}
      </div>
    </div>
  );
};

export default Index;
