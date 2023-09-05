import React from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import Tables from "../../../Component/Tables/Tables";
import "./imi.scss"
import Threedot from "../../../assets/threedot.svg";
import { IoMdRadioButtonOn } from "react-icons/io";
import { useState,useEffect } from 'react';
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
               row.values.status == "Not Issued" ? <span>< IoMdRadioButtonOn className='status-red'/>Not Issued</span>:
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
//         status: "Issued",
//         action: "action",
//     }, {
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
const WithinBranchDis = () => {
    const[branchDis,setBranchDis] = useState()
    const getWithinDisData = async () => {
        const res = await apiRequest('getWithInBranchDistributionList');
        console.log('WITHIN BRANCH DIST TABLE RES : ', res);
    
        if (res?.error) {
            setBranchDis([]);
        } else {
            setBranchDis(res.data);
        }
      };
    
      useEffect(() => {
        getWithinDisData();
      }, []);
    return (
        <div>
           <p className='employee-1'>Material Flow</p>
      <p className='employee-2'>Material Flow / Within Branch Disrtibution</p>
            <div className="df salary-filter my-2">
                <div>
                    <select className="form-control  form-select">
                        <option>Request Refer</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Docket No</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Req By (Dept)</option>
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

                <Tables recievedColumns={recievedColumns} recievedData={branchDis} />
            </div>
        </div>
    );
};

export default WithinBranchDis;