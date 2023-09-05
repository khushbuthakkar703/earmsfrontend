import React from 'react';
import './pagemenucreation.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../../Component/Tables/Tables'

const PageMenuCreationTable = () => {

    const recievedColumns = [
        {
            Header: "Page Name",
            accessor: "pagename",
         
        },
        
        {
            Header: "Department",
            accessor: "department"
        },
        {
            Header: "User Access Level",
            accessor: "useraccess"
        },
        {
            Header: "Created By",
            accessor: "createdby"
        },
        {
            Header: "Created On",
            accessor: "createdon"
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
            pagename: 'Shift Master',
            department: 'Admin',
            useraccess: "Level 7",
            createdby: "John Doe",
            createdon: '10:00:00 PM',
            action: 'action'
        }, {
            pagename: 'Shift Master',
            department: 'Admin',
            useraccess: "Level 7",
            createdby: "John Doe",
            createdon: '10:00:00 PM',
            action: 'action'
        }, {
            pagename: 'Shift Master',
            department: 'Admin',
            useraccess: "Level 7",
            createdby: "John Doe",
            createdon: '10:00:00 PM',
            action: 'action'
        },{
            pagename: 'Shift Master',
            department: 'Admin',
            useraccess: "Level 7",
            createdby: "John Doe",
            createdon: '10:00:00 PM',
            action: 'action'
      },
      {
        pagename: 'Shift Master',
        department: 'Admin',
        useraccess: "Level 7",
        createdby: "John Doe",
        createdon: '10:00:00 PM',
        action: 'action'
    },
    
    ]


    return (
        <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Page Creation</p>
                    <p className='employee-2'>Page Creation</p>
                </div>
            
                <div>
                    <button className='btn blue-btn'>+ Add Page</button>
                </div>
            </div>
            <div className='df'>
                <div className=''>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Master Name</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Department</option>
                    </select>
                </div>
                 <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>User Level</option>
                    </select>
                </div>
                <div className=''>
                    <input type="time" placeholder='From' required className="form-control pagecretion-input" />
                </div>
                <div className='pagecretion-input'>
                    <input type="time" placeholder=" To" required className="form-control pagecretion-input" />
                </div>
            </div>
         <div>
         <Table recievedColumns={recievedColumns} recievedData={recievedData} />
         </div>
   </div>
    );
};

export default PageMenuCreationTable;