import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Tables from '../../../Component/Tables/Tables';

const SaleStatus = () => {
    const recievedColumns = [
        {
            Header: 'Vendor Name',
            accessor: 'vendorname'
        },
        {
            Header: 'Vendor ID',
            accessor: 'vendorid'
        },
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Total Quantity',
            accessor: 'totalqty'
        },
        {
            Header: 'Per Bag Cost',
            accessor: 'perbagcost'
        },
        {
            Header: 'Total Amount',
            accessor: 'totalamt'
        },
        {
            Header: 'Status',
            accessor: 'status'
        },
        {
            Header: 'Action',
            accessor: 'action',
            Cell: ({row}) => {
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
        }
    ]

    const recievedData =[
        {
            vendorname: 'Vendor 1',
            vendorid: 'NO 2 Gunny Bag',
            date: '11 Mar 2022',
            totalqty: '20',
            perbagcost: '77.65',
            totalamt: '1,553',
            status: 'Completed',
            action: 'action'
        },
        {
            vendorname: 'Vendor 1',
            vendorid: 'NO 2 Gunny Bag',
            date: '11 Mar 2022',
            totalqty: '20',
            perbagcost: '77.65',
            totalamt: '1,553',
            status: 'Completed',
            action: 'action'
        }
    ]
  return (
    <div>  
        <div className='bills-header'>
            <div>
                <p className='employee-1'>Gunny Bag</p>
                <p className='employee-2'>Gunny Bag / Sale Status</p>
            </div>
        </div>
        <div className='df salary-filter my-2'>
            <div>
                <select className="form-control  form-select">
                    <option>Product Name</option>
                </select>
            </div>
            <div>
                <select className="form-control  form-select">
                    <option>Vendor Name</option>
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
            <Tables recievedColumns={recievedColumns} recievedData={recievedData} />
        </div>
    </div>
  )
}

export default SaleStatus
