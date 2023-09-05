import React, { useState,useEffect } from 'react';
import Breadcrumbs from "../../Component/Breadcrumbs";
import "./fingerprint.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdRadioButtonOn } from "react-icons/io";
import Profile from '../../assets/user.png'
import Table from '../../Component/Tables/Tables'
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../utils/helpers/apiRequest';
const Fingerprint = () => {
const [fingerprint,setFingerprint] = useState()
    const recievedColumns = [
        {
            Header: "Name",
            accessor: "employeeName",
            Cell: ({ row }) => {
              console.log(row.values);
              return (
                  <div className="profile-images">
                      <img src={Profile} alt="username" title="username" />
                      {row.values.employeeName}
                  </div>
              )
          }
        },
        
        {
            Header: "Employee ID",
            accessor: "employeeId"
        },
        {
            Header: "Join Date",
            accessor: "joinDate"
        },
        {
            Header: "Designation",
            accessor: "designation"
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                <>
                {row.values.status == "Added" ? <span>< IoMdRadioButtonOn className='status-green'/>Approve</span> :
                    row.values.status == "Pending" ?<span> < IoMdRadioButtonOn className='status-red'/>Pending</span>:null
                    }
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
                      <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className='action-icons'><BiDotsVerticalRounded /></div>
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#" onClick={() => handleView(row.original)}>View</a>
                          
                       
                      </div>
                  </div>
              )
          }
      },
    ]
    
    // const recievedData = [
    //     {
    //         name: 'Susen Tret',
    //         employeeid: 1234,
    //         joindate: "1st Jan 2022",
    //         designation: "Apprentice",
    //         status: true,
    //         action: 'action'
    //     }, {
          
    //       name: 'John Doe',
    //       employeeid: 1234,
    //       joindate: "1st Jan 2022",
    //       designation: "Staff",
    //       status: false,
    //       action: 'action'
    //     }, {
    //       name: 'Elisa',
    //       employeeid: 1234,
    //       joindate: "1st Jan 2022",
    //       designation: "Apprentice",
    //       status: true,
    //       action:'action'
    //     },{
    //       name: 'Doe',
    //       employeeid: 1234,
    //       joindate: "1st Jan 2022",
    //       designation: "Apprentice",
    //       status: true,
    //       action: 'action'
    //   },
    //   {
    //     name:'John',
    //     employeeid: 1234,
    //     joindate: "1st Jan 2022",
    //     designation: "Apprentice",
    //     status: true,
    //     action: 'action'
    // },
    
    // ]
    const navigation = useNavigate();
    const handleView = (data) => {
        navigation('/panel/fingerprintform', { state: data });
      };
    let navigate = useNavigate();
    const getFingerprintData = async () => {
        const res = await apiRequest('fingerPrintList');
        console.log('FINGERPRINT TABLE RES : ', res);
    
        if (res?.error) {
            setFingerprint([]);
        } else {
            setFingerprint(res.data);
        }
      };
    
      useEffect(() => {
        getFingerprintData();
      }, []);
    return (
        <div>
          
            <div className='df df-sb'>
            <div>
          <p className='employee-1'>Employee</p>
          <p className='employee-2'>Employee / Fingerprint</p>
        </div>
                <button className='btn blue-btn' onClick={() => navigate('/panel/fingerprintform')}>Add Fingerprint</button>
            </div>
            <div className='df salary-filter my-2'>
                <div>
                    <input className='form-control' placeholder='Employee Name' />
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Employee Cat</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Depatment</option>
                    </select>
                </div>

                <div>
                    <select className="form-control  form-select">
                        <option>Status</option>
                    </select>
                </div>
                <div >
                    <input type="date" placeholder="Date From" required className="form-control" />
                </div>
                <div >
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
            </div>

            <div>
            <Table recievedColumns={recievedColumns} recievedData={fingerprint} />
            </div>
        </div>
    );
};

export default Fingerprint;