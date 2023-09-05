import React from 'react';
import './storage.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../../Component/Tables/Tables'
import { IoMdRadioButtonOn } from "react-icons/io";

const StorageTable = () => {

    const recievedColumns = [
        {
            Header: "Reference",
            accessor: "reference",
        },
        
        {
            Header: "Product",
            accessor: "product"
        },
        {
            Header: "Batch No",
            accessor: "batchno"
        },
        {
            Header: "Branch",
            accessor: "branch"
        },
        {
            Header: "Bin No",
            accessor: "binno"
        },
        {
            Header: "Stored Quantity",
            accessor: "storedquan"
        },
        {
            Header: "Stored Date",
            accessor: "storeddate"
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
            reference: 'POOo-01',
            product: 'Product 1',
            batchno: "01234",
            branch: "Branch 1",
            binno: 'Bin 1',
            storedquan:'70',
            storeddate: "11 Aug 2022",
            action: 'action'
        }, {
            reference: 'POOo-01',
            product: 'Product 1',
            batchno: "01234",
            branch: "Branch 1",
            binno: 'Bin 1',
            storedquan:'70',
            storeddate: "11 Aug 2022",
            action: 'action'
        }, {
            reference: 'POOo-01',
            product: 'Product 1',
            batchno: "01234",
            branch: "Branch 1",
            binno: 'Bin 1',
            storedquan:'70',
            storeddate: "11 Aug 2022",
            action: 'action'
        },{
            reference: 'POOo-01',
            product: 'Product 1',
            batchno: "01234",
            branch: "Branch 1",
            binno: 'Bin 1',
            storedquan:'70',
            storeddate: "11 Aug 2022",
            action: 'action'
      },
      {
        reference: 'POOo-01',
        product: 'Product 1',
        batchno: "01234",
        branch: "Branch 1",
        binno: 'Bin 1',
        storedquan:'70',
        storeddate: "11 Aug 2022",
        action: 'action'
    },
    
    ]


    return (
        <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Storage</p>
                    <p className='employee-2'>Storage</p>
                </div>
            
               
            </div>
            <div className='df'>
            <div className='pagecretion-input'>
                    <input type="text" placeholder="Reference" required className="form-control pagecretion-input" />
                </div>
                <div className=''>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Vendor</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Branch</option>
                    </select>
                </div>
                 <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Batch No</option>
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

export default StorageTable;