import React from 'react';
import './Production.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../Component/Tables/Tables'
import { IoMdRadioButtonOn } from "react-icons/io";
import apiRequest from '../../utils/helpers/apiRequest';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import { Slide, toast } from 'react-toastify';


const ProductionTable = () => {
    const handledelete = async (rowId) => {
        console.log(rowId)
        const res = apiRequest('deleteroductionEntry', null, null, `/${rowId}`)
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
    }
    const recievedColumns = [
        {
            Header: "Journal Name",
            accessor: "journalName",
        },        
        {
            Header: "Department",
            accessor: "department"
        },
        {
            Header: "Shift Date",
            accessor: "shiftDate"
        },
        {
            Header: "Batch Type",
            accessor: "batchType"
        },
        {
            Header: "Shift Type",
            accessor: "selectShift"
        },
        {
            Header: "Work Center",
            accessor: "workCenter"
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                    <>
                    {row.values.status ? <div >< IoMdRadioButtonOn className='status-yellow'/>Request Sent</div> : <div >< IoMdRadioButtonOn className='status-green'/>Request Sent</div>}
                    </>
                  
                 
                )
            }
        },
       
        {
          Header: "Action",
          accessor: "action",
          Cell: ({ row }) => {
              return (
                  <div class="dropdown">
                      <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className='action-icons'><BiDotsVerticalRounded /></div>
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" onClick={() => handleProduction(row.original)}>Edit</a>
                          <a class="dropdown-item" onClick={() => handledelete(row.original.id)}>Delete</a>
                      </div>
                  </div>
              )
          }
      },
    ]
    const navigate = useNavigate();
    const handleProduction = (data) => {
        navigate('/panel/productionform', {state: data});
    }
    const [productionState, setProductionState] = useState();
    const getProductionList = async () => {
        const res = await apiRequest('getProductionList');
        console.log('Production TABLE RES : ', res);
        if (res?.error) {
        setProductionState([]);
        } else {
        setProductionState(res.data);
        }
    }
    useEffect(() => {
        getProductionList();
    }, []);
    
    return (
        <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Production</p>
                    <p className='employee-2'>production</p>
                </div>
            
                <div>
                    <button className='btn blue-btn' onClick={() => navigate('/panel/productionform')}> Add Production Entry</button>
                </div>
            </div>
            <div className='df'>
                <div className=''>
                    <select className="form-control  form-select pagecretion-input"
                    >
                        <option>Journal Name</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Shift Date</option>
                    </select>
                </div>
                 <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Shift Type</option>
                    </select>
                </div>
                <div className=''>
                    <input type="Date" placeholder='From' required className="form-control pagecretion-input" />
                </div>
                <div className='pagecretion-input'>
                    <input type="Date" placeholder=" To" required className="form-control pagecretion-input" />
                </div>
            </div>
         <div>
         <Table recievedColumns={recievedColumns} recievedData={productionState} />
         </div>
   </div>
    );
};

export default ProductionTable;