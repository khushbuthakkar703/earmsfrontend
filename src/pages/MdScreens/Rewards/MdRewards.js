import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Tables from '../../../Component/Tables/Tables';

const MdRewards = () => {
    const recievedColumns = [
        {
            Header: 'Employee Name',
            accessor: 'employeename'
        },
        {
            Header: 'Employee Category',
            accessor: 'employeecategory'
        },
        {
            Header: 'Branch',
            accessor: 'branch'
        },
        {
            Header: 'Rewards Received',
            accessor: 'rewardsreceived'
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ row }) => {
                return (
                    <><input type="radio" checked /><span> Approval Pending</span></>
                )
            }
        },
        {
            Header: 'Action',
            accessor: 'action',
            Cell: ({ row }) => {
                return (
                    
                  <div className="dropdown">
                      <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className='action-icons'><BiDotsVerticalRounded /></div>
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" onClick={() => navigate('/panel/rewardsform')} >Approve</a>
                          <a className="dropdown-item" href="#">Something</a>
                      </div>
                  </div> 
                )
            }
        }
    ]

    const recievedData = [
        {
            employeename: 'John Doe',
            employeecategory: 'Staff',
            branch: 'Branch 1',
            rewardsreceived: '2',
            status: 'Approval Pending',
            action: 'action'
        }
    ]
    let navigate = useNavigate();
  return (
    <div>     
        <div className='bills-header'>
            <div>
                <p className='employee-1'>Rewards</p>
                <p className='employee-2'>Rewards</p>
            </div>
            <div className='df salary-filter my-2'>
                <div>
                    <select className="form-control  form-select">
                        <option>Employee Name</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Employee Cat</option>
                    </select>
                </div>

                <div>
                    <select className="form-control  form-select">
                        <option>Branch</option>
                    </select>
                </div>
                <div >
                    <input type="date" placeholder="Date From" required className="form-control" />
                </div>
                <div >
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
            </div>
        </div>
        <div>
            <Tables recievedColumns={recievedColumns} recievedData={recievedData} />
        </div>
    </div>
  )
}

export default MdRewards
