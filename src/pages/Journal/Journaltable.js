import React from 'react';
import './journal.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../Component/Tables/Tables'
import { IoMdRadioButtonOn } from "react-icons/io";
import apiRequest from '../../utils/helpers/apiRequest';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import { Slide, toast } from 'react-toastify';

const JournalTable = () => {
    const navigate = useNavigate();
    
    const handleDeleteJournal = async (data) => {
        const res = await apiRequest('deleteJournal', null, null, `/${data.id}`)
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
            Header: "Primary Bye Product",
            accessor: "primaryByProduct"
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
            Header: "Entered By",
            accessor: "enteredBy",
           
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
                          <a class="dropdown-item" onClick={() => navigate('/panel/journalform', {state: row.original.id})}>View</a>
                          <a class="dropdown-item"  onClick={() => handleDeleteJournal(row.original)}>Delete</a>
                      </div>
                  </div>
              )
          }
      },
    ]
    const [journallist, setjournallist] = useState();
    const getJournalList = async () => {
        const res = await apiRequest('getJournalList');
        console.log("journal", res)
        if (res?.error) {
        setjournallist([]);
        } else {
        setjournallist(res.data);
        }
    }
    useEffect(() => {
        getJournalList();
    }, [])
    return (
        <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Journal</p>
                    <p className='employee-2'>Journal</p>
                </div>
            
              
            </div>
            <div className='df'>
                <div className=''>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Journal Name</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Department</option>
                    </select>
                </div>
                 <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Shift Type</option>
                    </select>
                </div>
                <div className=''>
                    <input type="Date" placeholder='Date From' required className="form-control pagecretion-input" />
                </div>
                <div className='pagecretion-input'>
                    <input type="Date" placeholder="Date To" required className="form-control pagecretion-input" />
                </div>
            </div>
         <div>
         <Table recievedColumns={recievedColumns} recievedData={journallist} />
         </div>
   </div>
    );
};

export default JournalTable;