import React from 'react'
import Tables from '../../../Component/Tables/Tables';
import { BiDotsVerticalRounded } from "react-icons/bi";

const Welfare = () => {
    const recievedColumns = [
        {
            Header: 'Created By',
            accessor: 'createdby'
        },
        {
            Header: 'Food (%)',
            accessor: 'food'
        },
        {
            Header: 'Uniform (%)',
            accessor: 'uniform'
        },
        {
            Header: 'Transportation (%)',
            accessor: 'transport'
        },
        {
            Header: 'From Date',
            accessor: 'fdate'
        },
        {
            Header: 'To Date',
            accessor: 'tdate'
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

    const recievedData = [
        {
            createdby : 'Suresh Kumar',
            food : '33 %',
            uniform: '33 %',
            transport : '100 %',
            fdate : '11 Mar 2021',
            tdate : '11 Mar 2022',
            action: 'action'
        }
    ]
  return (
    <div>  
        <div className='bills-header'>
            <div>
                <p className='employee-1'>Welfare</p>
                <p className='employee-2'>Welfare / Welfare Contribution</p>
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

export default Welfare
