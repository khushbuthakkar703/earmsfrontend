import React from 'react'
import '../SalesReturn/salesreturn.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../Component/Tables/Tables'
import { useNavigate } from 'react-router-dom';

const SalesReturn = () => {

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
            Header: 'Ref No.',
            accessor: 'refno'
        },
        {
            Header: 'Ref Date',
            accessor: 'refdate'
        },
        {
            Header: 'Accounting Firm',
            accessor: 'accountinfirm'
        },
        {
            Header: 'Product',
            accessor: 'product'
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
            vendorid: 'V-001',
            refno: 'BO-32357',
            refdate: '11 Mar 2022',
            accountinfirm: 'V.V.V & Sons',
            product: 'Product 1',
            action: 'action'
        }
    ]
    let navigate = useNavigate();
  return (
    <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Product Distruptancies</p>
                    <p className='employee-2'>Product Distruptancies / Sales Return</p>
                </div>
                <div>
                    <button className='btn blue-btn' onClick={() => navigate('/panel/salesreturnform')}>Add Entry</button>
                </div>
            </div>
            <div className='df'>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Vendor Name</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Bill No</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Type</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Product</option>
                    </select>
                </div>
               
                <div className=' pagecretion-input'>
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
  )
}

export default SalesReturn
