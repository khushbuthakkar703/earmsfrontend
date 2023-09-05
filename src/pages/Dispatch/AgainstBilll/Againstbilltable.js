import React from 'react';
import '../Dispatch.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../../Component/Tables/Tables'


const AgainstBillTable = () => {

    

    const recievedColumns = [
        {
            Header: "Bill Num",
            accessor: "billnum"
        },
        {
            Header: "Vendor Name",
            accessor: "vendorname",
        },
        {
            Header: "Bill Date",
            accessor: "billdate",
        },
       
        {
            Header: "Products",
            accessor: "products"
        },
        {
            Header: "Quantity",
            accessor: "quantity"
        },
        {
            Header: "Entered by",
            accessor: "enteredby"
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
            billnum: 'BO-32353',
            vendorname: 'Vendor-1',
            billdate: "11 Mar 2022",
            products: "33kg Ground Nut",
            quantity: '100',
            enteredby: 'John Doe',
            action: 'action'
        }, {
            
            billnum: 'BO-32353',
            vendorname: 'Vendor-1',
            billdate: "11 Mar 2022",
            products: "33kg Ground Nut",
            quantity: '100',
            enteredby: 'John Doe',
            action: 'action'
        }, {
           
            billnum: 'BO-32353',
            vendorname: 'Vendor-1',
            billdate: "11 Mar 2022",
            products: "33kg Ground Nut",
            quantity: '100',
            enteredby: 'John Doe',
            action: 'action'
        },{
           
            billnum: 'BO-32353',
            vendorname: 'Vendor-1',
            billdate: "11 Mar 2022",
            products: "33kg Ground Nut",
            quantity: '100',
            enteredby: 'John Doe',
            action: 'action'
      },
      {
       
        billnum: 'BO-32353',
        vendorname: 'Vendor-1',
        billdate: "11 Mar 2022",
        products: "33kg Ground Nut",
        quantity: '100',
        enteredby: 'John Doe',
        action: 'action'
    },
    
    ]


    return (
        <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Dispatch</p>
                    <p className='employee-2'>Dispatch / Against Bill</p>
                </div>
            
              
            </div>
            <div className='df'>
                <div className=''>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Bill No</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Vendor Name</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Products</option>
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

export default AgainstBillTable;