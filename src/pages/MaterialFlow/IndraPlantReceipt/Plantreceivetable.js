import React from 'react';
import './plantreceive.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../../Component/Tables/Tables'
import { useState,useEffect } from 'react';
import apiRequest from '../../../utils/helpers/apiRequest';

const PlantReceiveTable = () => {
    const [indra,setIndra] = useState ()

    const recievedColumns = [
        {
            Header: "Hub No",
            accessor: "hubno",
        },
        
        {
            Header: "Docket No",
            accessor: "docketno"
        },
        {
            Header: "Req By(Dep)",
            accessor: "reqbydep"
        },
       
        {
            Header: "Req By(Bran)",
            accessor: "reqbybran"
        },
        {
            Header: "Issued By(Dep)",
            accessor: "issuedbydep",
          
        },
        {
            Header: "Issued By(Bran)",
            accessor: "issuedbyBran",
          
        },
        {
            Header: "Issued By",
            accessor: "issuedby",
        },
      
        {
            Header: "Issued On",
            accessor: "issuedon",
        },
        {
          Header: "Action",
          accessor: "action",
          Cell: ({ row }) => {
              console.log(row.values);
              return (
                  <div class="dropdown">
                      <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className='action-icons'><BiDotsVerticalRounded /></div>
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Something</a>
                      </div>
                  </div>
              )
          }
      },
    ]
    
    // const recievedData = [
    //     {
    //         hubno: 'Hub-001',
    //         docketno: 'DKT-123',
    //         reqbydep: "Production",
    //         reqbybran: 'Branch',
    //         issuedbydep:"Quality Control",
    //         issuedbyBran:"Branch 2",
    //         issuedby:"Suresh",
    //         issuedon:"11 Mar 2022",
    //         action: 'action'
    //     }, 
    //     {
          
    //         hubno: 'Hub-001',
    //         docketno: 'DKT-123',
    //         reqbydep: "Production",
           
    //         reqbybran: 'Branch',
    //         issuedbydep:"Quality Control",
    //         issuedbyBran:"Branch 2",
    //         issuedby:"Suresh",
    //         issuedon:"11 Mar 2022",
    //         action: 'action'
    //     }, 
       
     
    
    // ]
    const getIndraBranchReceiptData = async () => {
        const res = await apiRequest('getIntraBranchReceiptList');
        console.log('INDRA BRANCH RECEIPT TABLE RES : ', res);
    
        if (res?.error) {
            setIndra([]);
        } else {
            setIndra(res.data);
        }
      };
    
      useEffect(() => {
        getIndraBranchReceiptData();
      }, []);

    return (
        <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Material Flow</p>
                    <p className='employee-2'>Material Flow / Intra Branch Receipts</p>
                </div>
            </div>
            <div className='df  material-input'>
            <div>
                    <select className="form-control  form-select">
                        <option>Request Refer</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option> Docket No</option>
                    </select>
                </div>
                 <div>
                    <select className="form-control  form-select">
                        <option>Req By (Bran)</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Issued By (Bran)</option>
                    </select>
                </div>
               
                <div >
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
                <div >
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
            </div>
         <div>
         <Table recievedColumns={recievedColumns} recievedData={indra} />
         </div>
   </div>
    );
};

export default PlantReceiveTable;