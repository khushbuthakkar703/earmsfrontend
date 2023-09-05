import React from 'react';
import '../Plantrewards.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../../Component/Tables/Tables'
import { IoMdRadioButtonOn } from "react-icons/io";
const PlantPurchaseTable = () => {

    const recievedColumns = [
        {
            Header: "PO Number",
            accessor: "ponumber",
         
        },
        
        {
            Header: "Vendors",
            accessor: "vendors"
        },
        {
            Header: "PO Representative",
            accessor: "porep"
        },
        {
            Header: "Purchase Item",
            accessor: "purchaseitem"
        },
        {
            Header: "Vendor Score",
            accessor: "vendorscore",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                 <span className='link-clr'>80</span>
                  </>
                )
            }

        },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
              <>
              {row.values.status == "Approved" ? <span>< IoMdRadioButtonOn className='status-green'/>Approvel</span> :
               row.values.status == "Pending" ? <span>< IoMdRadioButtonOn className='status-yellow'/>Pending</span>:
               row.values.status == "Rejected" ? <span>< IoMdRadioButtonOn className='status-red'/>Rejected</span>:
               null}
              </>
            )
        }
      
    },
    {
        Header: "Total",
        accessor: "total"
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
            ponumber: 'POO-001',
            vendors: 'Vendor 1',
            porep: "Suresh",
            purchaseitem: "seeds",
            vendorscore:"",
            status: 'Pending',
            total:"N/A",
            action: 'action'
        }, 
        {
            ponumber: 'POO-001',
            vendors: 'Vendor 1',
            porep: "Suresh",
            purchaseitem: "seeds",
            vendorscore:"",
            status: 'Approved',
            total:"N/A",
            action: 'action'
        }, 
        {
            ponumber: 'POO-001',
            vendors: 'Vendor 1',
            porep: "Suresh",
            purchaseitem: "seeds",
            vendorscore:"",
            status: 'Rejected',
            total:"N/A",
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
            <div >
                    <input type="text" placeholder="Proposal" required className="form-control" />
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Vendor</option>
                    </select>
                </div>
                 <div>
                    <select className="form-control  form-select">
                        <option>Item</option>
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

export default PlantPurchaseTable;