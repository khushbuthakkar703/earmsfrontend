import React from 'react';
import '../Plantrewards.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../../Component/Tables/Tables'
import { IoMdRadioButtonOn } from "react-icons/io";
const PlantRewardsTable = () => {

    const recievedColumns = [
        {
            Header: "Employee Name",
            accessor: "ename",
         
        },
        
        {
            Header: "Employee Category",
            accessor: "ecatgry"
        },
        {
            Header: "Branch",
            accessor: "branch"
        },
        {
            Header: "Rewards Received",
            accessor: "rewardsreceived"
        },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
              <>
              {row.values.status == "Approvel" ? <span>< IoMdRadioButtonOn className='status-green'/>Approvel</span> :
               row.values.status == "Approvel Pending" ? <span>< IoMdRadioButtonOn className='status-yellow'/>Approvel Pending</span>:
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
    
    const recievedData = [
        {
          ename: 'John Doe',
          ecatgry: 'Staff',
          branch: "Branch 1",
          rewardsreceived: "2",
          status: 'Approvel Pending',
            action: 'action'
        }, 
        {
            ename: 'John Doe',
            ecatgry: 'Staff',
            branch: "Branch 1",
            rewardsreceived: "2",
            status: 'Approvel Pending',
            action: 'action'
        }, 
    ]
    return (
        <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Rewards</p>
                    <p className='employee-2'>Rewards</p>
                </div>
            </div>
            <div className='df salary-filter'>
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
         <div>
         <Table recievedColumns={recievedColumns} recievedData={recievedData} />
         </div>
   </div>
    );
};

export default PlantRewardsTable;