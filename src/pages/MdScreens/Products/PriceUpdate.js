import React from 'react'
import Threedot from '../../../assets/threedot.svg';
import Tables from '../../../Component/Tables/Tables';

const PriceUpdate = () => {
    const recievedColumns = [
        {
            Header: 'Product Name',
            accessor: 'productname'
        },
        {
            Header: 'Product ID',
            accessor: 'productid'
        },
        {
            Header: 'Lot',
            accessor: 'lot'
        },
        {
            Header: 'Created Date',
            accessor: 'createdate'
        },
        {
            Header: 'Vendors',
            accessor: 'vendors'
        },
        {
            Header: 'Last Updated On',
            accessor: 'lastupdatedon'
        },
        {
            Header: 'Action',
            accessor: 'action',
            Cell: ({ row }) => {
                return(
                    <div class="dropdown">
                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={Threedot} alt="Threedot" title="Threedot" />
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
    const recievedData = [
        {
            productname: 'NO 2 Groundnut Seed Bag',
            productid: 'P-001',
            lot: '74 Kg',
            createdate: '11 Mar 2022',
            vendors: 'Vendor 1, +11 More',
            lastupdatedon: '11 Mar 2022',
            action: 'action'
        }
    ]
  return (
    <div>        
        <div className="panel-header">No.2 Products</div>
        <div className="df df-sb">
            <div>No.2 Product / Sesamee Seeds</div>
        </div>
        <div className='df salary-filter my-2 mt-3'>
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
                <input type="time" placeholder="Date From" required className="form-control" />
            </div>
            <div >
                <input type="time" placeholder="Date To" required className="form-control" />
            </div>
        </div>
        <Tables recievedColumns={recievedColumns} recievedData={recievedData} />
    </div>
  )
}

export default PriceUpdate
