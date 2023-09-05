import React from 'react'
import Tables from '../../../Component/Tables/Tables';
import { BiDotsVerticalRounded } from "react-icons/bi";

const Welfare = () => {
    const recievedColumns = [
        {
            Header: 'From Date',
            accessor: 'fdate'
        },
        {
            Header: 'To Date',
            accessor: 'tdate'
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
            fdate : '11 Mar 2021',
            tdate : '11 Mar 2022',
            food : '33 %',
            uniform: '33 %',
            transport : '100 %',
            action: 'action'
        }
    ]
  return (
    <div>  
        <div className='bills-header'>
            <div>
                <p className='employee-1'>Welfare</p>
                <p className='employee-2'>Welfare / Contribution Amount</p>
            </div>
        </div>
        <div className='df salary-filter my-2'>
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
