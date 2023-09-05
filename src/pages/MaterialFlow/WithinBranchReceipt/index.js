import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import Tables from '../../../Component/Tables/Tables';
import './Wpr.scss';
import Threedot from '../../../assets/threedot.svg';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../../utils/helpers/apiRequest';
import { toast } from 'react-toastify';
import { Slide } from 'react-toastify';
import SuccessToast from '../../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../../Component/CustomToast/ErrorToast';
const WithinPlantReceipt = () => {
  const [recievedData, setRecievedData] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async(data)  =>{
    const res = await apiRequest ('deleteMaterialWithInBranchReceipt',null,null,`/${data.id}`)
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
  
      }
    }
    const handleEdit = (id) => {
      console.log('id',id);
      navigate('/panel/wprForm', {state: id})
     
  }

  const getReciepeDetails = async () => {
    const res = await apiRequest('getMaterialWithInBranchReceiptList');
    const formattedData = [];
    console.log('pp',res);

    if (res.error) {
      setRecievedData([]);
    } 
    else {
      const data = [
        {
          id: 2,
          withInBranchReceiptId: 'WRN-2',
          requestId: "RQ - 1",
          issueId: 3,
          issuePerson: 'Alaguraja',
          issuePersonId: 1,
          requestFrom: null,
          requestFromDepartment: 'PURCHASE',
          requestFromDepartmentId: 1,
          requestFromBranch: 'v.v.v & sons',
          requestFromBranchId: 1,
          requestFromFirm: null,
          requestFromFirmId: null,
          issueFromDepartment: 'PURCHASE',
          issueFromDepartmentId: 1,
          issueFromBranch: 'v.v.v & sons',
          issueFromBranchId: 1,
          issueFromFirm: 'V.V.V & Sons',
          issueFromFirmId: 1,
          requestDate: '28/09/2022',
          requestDateString: '28 Sep 2022',
          receivedOnDate: null,
          receivedOnDateString: null,
          entryOnDate: null,
          entryOnDateString: null,
          status: 'Pending',
          issueDate: '29/09/2022',
          issueDateString: '29 Sep 2022',
          createdBy: 1,
          updatedBy: null,
          created_date: '2022-09-29T14:40:01.453',
          updated_date: null,
          withinBranchReceiptValue: {
            itemDetails: [
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
              {
                itemName: 'itemName',
                quantity: '150',
              },
            ],
          },
        },
      ];

      data.map((values) => {
        const currentData = values?.withinBranchReceiptValue;

        if (currentData) {
          const itemDetails = currentData?.itemDetails;
          if (itemDetails && itemDetails.length > 0) {
            itemDetails.map((val) => {
              val['id']=values?.id
              val['requestedByDepartment'] = values?.requestFromDepartment;
              val['requestedByBranch'] = values?.requestFromBranch;
              val['issuedByDepartment'] = values?.issueFromDepartment;
              val['issuedByBranch'] = values?.issueFromBranch;
              val['issueDate'] = values?.issueDate;
              val['status'] = values?.status;
              val['requestId'] = values?.requestId;
              

              formattedData.push(val);
            });
          }
        }
      });
    }

    console.log('FORMTATTED DATA VALUES ::: ', formattedData);
    setRecievedData(formattedData);
  };

  const recievedColumns = [
    {
      Header: 'MRN Num',
      accessor: 'name',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <>
            <Link to='#' className='material-link'>
              MRN-1014
            </Link>
          </>
        );
      },
    },

    {
      Header: 'Requeted Item',
      accessor: 'itemName',
    },
    {
      Header: 'Req By (Dep)',
      accessor: 'requestedByDepartment',
    },
    {
      Header: 'Req By (Bran)',
      accessor: 'requestedByBranch',
    },
    {
      Header: 'Issued By (Dept)',
      accessor: 'issuedByDepartment',
    },
    {
      Header: 'Issued By (Bran)',
      accessor: 'issuedByBranch',
    },
    {
      Header: 'Requested Date',
      accessor: 'issueDate',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <>
            {row.values.status === 'Request Sent' ? (
              <div>
                <IoMdRadioButtonOn className=' status-yellow' />
                Request Sent
              </div>
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
              <img src={Threedot} alt='Threedot' title='Threedot' />
            </button>
            <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <a class='dropdown-item'  onClick={() => handleEdit(row.original)}>
                view
              </a>
              <a class="dropdown-item" onClick={() =>handleDelete(row.original)}>Delete</a>
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getReciepeDetails();
  }, []);
  return (
    <div>
      <h1 className='panel-header'>Material Flow</h1>
      <Breadcrumbs />
      <div className='df salary-filter my-2'>
        <div>
          <select className='form-control  form-select'>
            <option>MRN Num</option>
          </select>
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Item Name</option>
          </select>
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Req By (Bran)</option>
          </select>
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Issued By (Bran)</option>
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
      <div className='wpr-table'>
        <Tables recievedColumns={recievedColumns} recievedData={recievedData} />
      </div>
    </div>
  );
};

export default WithinPlantReceipt;
