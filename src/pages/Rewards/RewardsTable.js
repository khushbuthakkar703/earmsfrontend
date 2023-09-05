import React from 'react';
import './rewards.scss';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Table from '../../Component/Tables/Tables';
import { useEffect, useState } from 'react';
import apiRequest from '../../utils/helpers/apiRequest';
import { useNavigate } from 'react-router-dom';
import { IoMdRadioButtonOn } from 'react-icons/io';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import { Slide, toast } from 'react-toastify';
const RewardsList = () => {
  const handleDeleteAwards = async (data) => {
    const res = await apiRequest(
      'deleteAwardDetails',
      null,
      null,
      `/${data.id}`
    );
    console.log(res.data, 'DETEEE');
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
  const navigate = useNavigate();

  const [rewardsList, setRewardsList] = useState([]);
  const getRewardsListData = async () => {
    const res = await apiRequest('getAwardList');
    console.log('REWARDSLIST TABLE RES : ', res);

    if (res?.error) {
      setRewardsList([]);
    } else {
      setRewardsList(res.data);
    }
  };

  useEffect(() => {
    getRewardsListData();
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
      Header: 'Reward Name',
      accessor: 'awardCategory',
    },
    {
      Header: 'Date',
      accessor: 'awardDate',
    },
    {
      Header: 'Status',
      accessor: 'awardStatus',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <>
            {row.values.awardStatus == 'Issued' ? (
              <span>
                <IoMdRadioButtonOn className='status-green ' />
                Issued
              </span>
            ) : row.values.awardStatus == 'Pending' ? (
              <span>
                <IoMdRadioButtonOn className='status-red' />
                Pending
              </span>
            ) : null}
          </>
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
                onClick={() => {
                  navigate('/panel/createreward', {
                    state: { id: row.original.id, form: true },
                  });
                }}
              >
                View
              </a>
              <a
                class='dropdown-item'
                onClick={() => handleDeleteAwards(row.original)}
              >
                Delete
              </a>
            </div>
          </div>
        );
      },
    },
  ];

  const recievedData = [];
  return (
    <div className='staff-container'>
      <div className='bills-header'>
        <div>
          <p className='employee-1'>Rewards</p>
          <p className='employee-2'>Rewards</p>
        </div>

        <div>
          <button
            className='btn blue-btn'
            onClick={() => {
              navigate('/panel/createreward', { state: { form: false } });
            }}
          >
            Create Rewards
          </button>
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
        <Table recievedColumns={recievedColumns} recievedData={rewardsList} />
      </div>
    </div>
  );
};

export default RewardsList;
