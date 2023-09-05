import React, { useState,useEffect } from 'react';
import Tables from "../../../Component/Tables/Tables";
import "./otherbranrec.scss"
import Threedot from "../../../assets/threedot.svg";
import { IoMdRadioButtonOn } from "react-icons/io";
import apiRequest from '../../../utils/helpers/apiRequest';
const recievedColumns = [
    {
        Header: "Request ID",
        accessor: "reqid",
    },

    {
        Header: "Hub No",
        accessor: "hubno",
    },
    {
        Header: "Docket Num",
        accessor: "docketnum",
    },
    {
        Header: "Req By (Dep)",
        accessor: "reqbydep",
    },
    {
        Header: "Req By (Bran)",
        accessor: "reqbybran",
    },
    {
        Header: "Issued By (Bran)",
        accessor: "issuedbybran",
    },
    {
        Header: "Issued By",
        accessor: "issuedby",
    },
    {
        Header: "Issued Date",
        accessor: "issueddate",
    },

    {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
              <>
              {row.values.status == "Issued" ? <span>< IoMdRadioButtonOn className='status-green '/>Issued</span> :
               row.values.status == "Not Issued" ? <span>< IoMdRadioButtonOn className='status-yellow'/>Not Issued</span>:
               null}
              </>
            )
        }
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <div class="dropdown">
                    <button
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <img src={Threedot} alt="Threedot" title="Threedot" />
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">
                            Action
                        </a>
                        <a class="dropdown-item" href="#">
                            Something
                        </a>
                    </div>
                </div>
            );
        },
    },
];

// const recievedData = [
//     {
//         reqid: "RD-001",
//         hubno: "HB-123",
//         docketnum: "DKT-001",
//         reqbydep: "Production",
//         reqbybran:"Branch 1",
//         issuedbybran:"Branch 2",
//         issuedby:"Suresh",
//         issueddate:"11 Mar 2022",
//         status: "Issued",
//         action: "action",
//     },
//     {
//         reqid: "RD-001",
//         hubno: "HB-123",
//         docketnum: "DKT-001",
//         reqbydep: "Production",
//         reqbybran:"Branch 1",
//         issuedbybran:"Branch 2",
//         issuedby:"Suresh",
//         issueddate:"11 Mar 2022",
//         status: "Not Issued",
//         action: "action",
//     }, 
// ];
const OtherBranchReceipts = () => {
    const[otherReceipt,setOtherReceipt] = useState()
    const getOtherBranchReceiptData = async () => {
        const res = await apiRequest('getOtherBranchReceiptList');
        
        console.log('OTHER BRANCH RECEIPT TABLE RES : ', res);
    
        if (res?.error) {
            setOtherReceipt([]);
        } else {
            setOtherReceipt(res.data);
        }
      };
    
      useEffect(() => {
        getOtherBranchReceiptData();
      }, []);

    return (
        <div>
           <p className='employee-1'>Material Flow</p>
      <p className='employee-2'>Material Flow / Other Branch Receipts</p>
            <div className="df salary-filter my-2">
                <div>
                    <select className="form-control  form-select">
                        <option>Request Refer</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Docket Type</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Issued By (Dept)</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Issued By (Bran)</option>
                    </select>
                </div>
                <div>
                    <input type="date" placeholder="Date From" required className="form-control" />
                </div>
                <div>
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
            </div>
            <div className="wpr-table">

                <Tables recievedColumns={recievedColumns} recievedData={otherReceipt} />
            </div>
        </div>
    );
};

export default OtherBranchReceipts;