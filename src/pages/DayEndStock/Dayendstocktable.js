import React from 'react';
import './dayendstock.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../Component/Tables/Tables'


const DayEndStockTable = () => {

    

    const recievedColumns = [
        {
            Header: "Date",
            accessor: "date"
        },
        {
            Header: "Audited By",
            accessor: "auditedby",
        },
        {
            Header: "Accounted By",
            accessor: "accountedby",
        },
       
        {
            Header: "Branch",
            accessor: "branch"
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
            date: '11 Mar 2022',
            auditedby: '11 Mar 2022',
            accountedby: "John Doe",
            branch: "Batch 1",
            action: 'action'
        }, {
            date: '11 Mar 2022',
            auditedby: '11 Mar 2022',
            accountedby: "John Doe",
            branch: "Batch 1",
            action: 'action'
        }, {
            date: '11 Mar 2022',
            auditedby: '11 Mar 2022',
            accountedby: "John Doe",
            branch: "Batch 1",
            action: 'action'
        },{
            date: '11 Mar 2022',
            auditedby: '11 Mar 2022',
            accountedby: "John Doe",
            branch: "Batch 1",
            action: 'action'
      },
      {
        date: '11 Mar 2022',
            auditedby: '11 Mar 2022',
            accountedby: "John Doe",
            branch: "Batch 1",
            action: 'action'
    },
    
    ]


    return (
        <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Day End Stock</p>
                    <p className='employee-2'>Day End Stock</p>
                </div>
            
                <div>
                    <button className='btn blue-btn'> Add Entry</button>
                </div>
            </div>
            <div className='df'>
                <div className=''>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Audited By</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Accounted By</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Branch</option>
                    </select>
                </div>
               
                <div className=''>
                    <input type="Date" placeholder='From' required className="form-control pagecretion-input" />
                </div>
                <div className='pagecretion-input'>
                    <input type="Date" placeholder=" To" required className="form-control pagecretion-input" />
                </div>
            </div>
         <div>
         <Table recievedColumns={recievedColumns} recievedData={recievedData} />
         </div>
   </div>
    );
};

export default DayEndStockTable;