import React  from 'react';
import Tables from "../../../Component/Tables/Tables";
import "./withbranchreceive.scss"
import Threedot from "../../../assets/threedot.svg";
import { IoMdRadioButtonOn } from "react-icons/io";
import {useState,useEffect} from 'react'
import apiRequest from '../../../utils/helpers/apiRequest';
const recievedColumns = [
    {
        Header: "MRN Num",
        accessor: "mrnno",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
              <>
               <span className='link-clr'>MRN-001</span>
              </>
            )
        }
       
    },

    {
        Header: "Requested Item",
        accessor: "requesteditem",
    },
    {
        Header: "Req By (Dept)",
        accessor: "reqbydept",
    },
    {
        Header: "Issued By (Dep)",
        accessor: "isssuedydep",
    },
    {
        Header: "Requested Date",
        accessor: "reqdate",
    },
    {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
              <>
              {row.values.status == "Issued" ? <span>< IoMdRadioButtonOn className='status-green '/>Issued</span> :
               row.values.status == "Request Sent" ? <span>< IoMdRadioButtonOn className='status-yellow'/>Request Sent</span>:
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
                            Edit
                        </a>
                        <a class="dropdown-item" href="#">
                            Delete
                        </a>
                    </div>
                </div>
            );
        },
    },
];

// const recievedData = [
//     {
//         mrnno: "",
//         requesteditem: "Item 1",
//         reqbydept: "Production",
//         isssuedydep: "Admin",
//         reqdate:"11 Mar 2022",
//         status: "Request Sent",
//         action: "action",
//     },
//     {
//         mrnno: "",
//         requesteditem: "Item 1",
//         reqbydept: "Production",
//         isssuedydep: "Admin",
//         reqdate:"11 Mar 2022",
//         status: "Request Sent",
//         action: "action",
//     }, 
// ];
const WithinBranchReceive = () => {
    const[withinReceive,setWithinReceive] = useState ()
    const getWithinBranchReceiveData = async () => {
        const res = await apiRequest('getWithInBranchReceiveList');
        
        console.log('WITHIN BRSNCH RECEIVE TABLE RES : ', res);
    
        if (res?.error) {
            setWithinReceive([]);
        } else {
            setWithinReceive(res.data);
        }
      };
    
      useEffect(() => {
        getWithinBranchReceiveData();
      }, []);
    return (
        <div>
           <p className='employee-1'>Material Flow</p>
      <p className='employee-2'>Material Flow / WithinBranchReceive</p>
            <div className="df salary-filter my-2">
                <div>
                    <select className="form-control  form-select">
                        <option>MRN Num</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Item Name</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Req By (Dept)</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Issued By (Dept)</option>
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

                <Tables recievedColumns={recievedColumns} recievedData={withinReceive} />
            </div>
        </div>
    );
};

export default WithinBranchReceive;