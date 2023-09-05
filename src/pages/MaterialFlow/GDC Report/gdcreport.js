import React from 'react';
import Tables from "../../../Component/Tables/Tables";
import "./gdcreport.scss"
import Threedot from "../../../assets/threedot.svg";
import { IoMdRadioButtonOn } from "react-icons/io";
import { useState,useEffect } from 'react';
import apiRequest from '../../../utils/helpers/apiRequest';

const recievedColumns = [
    {
        Header: "GDC Number",
        accessor: "gdcnumber",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
              <>
                 <p> <span className='link-clr'>GDC-001</span></p>
              </>
            )
        }
    },

    {
        Header: "Issued by(Dept)",
        accessor: "issuedbydept",
    },
    {
        Header: "Issued by(Bran)",
        accessor: "issuedbybran",
    },
    {
        Header: "Req By (Bran)",
        accessor: "reqbybran",
    },
    {
        Header: "Issued On",
        accessor: "issuedon",
    },
    {
        Header: "E-Will Bill",
        accessor: "willbill",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
              <>
              {row.values.willbill == "N/A" ? <span>N/A</span> :
               row.values.willbill == "EB-001" ? <span className='link-clr'>EB-001</span>:
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
//         gdcnumber: "RD-001",
//         issuedbydept: "Production",
//         issuedbybran: "Branch 1",
//         reqbybran: "Branch 2",
//         issuedon:"11 Mar 2022",
//         willbill:"N/A",
       
//         action: "action",
//     },
//     {
//         gdcnumber: "RD-001",
//         issuedbydept: "Production",
//         issuedbybran: "Branch 1",
//         reqbybran: "Branch 2",
//         issuedon:"11 Mar 2022",
//         willbill:"EB-001",
       
//         action: "action",
//     }, 
// ];
const GDCReport = () => {
    const[gdc,setGdc] = useState()
    const getGDCData = async () => {
        const res = await apiRequest('');
        
        console.log('GDC Report TABLE RES : ', res);
    
        if (res?.error) {
            setGdc([]);
        } else {
            setGdc(res.data);
        }
      };
    
      useEffect(() => {
        getGDCData();
      }, []);
    return (
        <div>
           <p className='employee-1'>Material Flow</p>
      <p className='employee-2'>Material Flow / GDC Report</p>
            <div className="df salary-filter my-2">
                <div>
                    <select className="form-control  form-select">
                        <option>GDC Num</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Source Dept</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Source Bran</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Destination Bran</option>
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

                <Tables recievedColumns={recievedColumns} recievedData={gdc} />
            </div>
        </div>
    );
};

export default GDCReport;