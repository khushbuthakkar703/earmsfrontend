import React from 'react'
import Breadcrumbs from '../../../Component/Breadcrumbs';
import Table from '../../../Component/Tables/Tables';
import Threedot from '../../../assets/threedot.svg';
import { useNavigate } from 'react-router-dom';

function PriceUpdate() {
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
            accessor: 'createddate'
        },
        {
            Header: 'Vendors',
            accessor: 'vendors'
        },
        {
            Header: 'Last Updated On',
            accessor: 'lastupdated'
        },
        {
            Header: 'Action',
            accessor: 'action',
            Cell: ({row}) => {
                return (
                    <div class='dropdown'>
                    <button
                        class='dropdown-toggle'
                        type='button'
                        id='dropdownMenuButton'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                    >
                        <img src={Threedot} alt='Threedot' title='Threedot' />
                    </button>
                    <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                        <a class='dropdown-item'  onClick={() => navigate('/panel/priceupdateform')}>
                        Update
                        </a>
                        <a class='dropdown-item' onClick={() => navigate('')}>
                        Edit
                        </a>
                    </div>
                    </div>
                );
            }
        }
    ]
    const recievedData = [
        {
            productname: 'NO 2 Gunny Bag',
            productid: 'P-001',
            lot: '74 Kg',
            createddate: '11 Mar 2022',
            vendors: 'Vendor 1, +11 More',
            lastupdated: '11 Mar 2022',
            action: 'action',
    Cell: ({ row }) => {
      console.log(row.values);
      return (
        <div class='dropdown'>
          <button
            class='dropdown-toggle'
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <img src={Threedot} alt='Threedot' title='Threedot' />
          </button>
          <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <a class='dropdown-item' href='#'>
              Action
            </a>
            <a class='dropdown-item' href='#'>
              Something
            </a>
          </div>
        </div>
      );
    },
        }
    ]

    let navigate = useNavigate();
  return (
    <div>
        <div className="panel-header">Sales</div>
        <div className='df df-sb'>
            <Breadcrumbs />
            {/* <button
            className='btn blue-btn'
            onClick={() => navigate('/panel/priceupdateform', { replace: true })}
            >
            + Add Product
            </button> */}
        </div>
        <div className='df salary-filter my-2'>
          <div>
            <select className='form-control  form-select'>
              <option>Product Name</option>
            </select>
          </div>

          <div>
            <select className='form-control  form-select'>
              <option>Vendor Name</option>
            </select>
          </div>
          <div>
            <input
              type='date'
              placeholder='Date From'
              required
              className='form-control'
            />
          </div>
          <div>
            <input
              type='date'
              placeholder='Date To'
              required
              className='form-control'
            />
          </div>
        </div>
        <Table recievedColumns={recievedColumns} recievedData={recievedData} /> 
    </div>
  )
}

export default PriceUpdate
