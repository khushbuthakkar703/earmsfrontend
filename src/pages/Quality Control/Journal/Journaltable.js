import React from 'react';
import Tables from '../../../Component/Tables/Tables';

import Threedot from '../../../assets/threedot.svg'
import './Journal.scss'
const recievedColumns = [
    {
        Header: "Journal Name",
        accessor: "journame",

    },
    {
        Header: "Shift Date",
        accessor: "shiftdate"
    },
    {
        Header: "Primary Bye Product",
        accessor: "primaryproduct"
    },
    {
        Header: "Shift Type",
        accessor: "shifttype"
    },
    {
        Header: "Work Center",
        accessor: "workcenter"
    },
    {
        Header: "Entered by",
        accessor: "entredby"
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <div class="dropdown">
                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={Threedot} alt="Threedot" title="Threedot" />
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#s">Action</a>
                        <a class="dropdown-item" href="#s">Something</a>
                    </div>
                </div>
            )
        }
    },
]

const recievedData = [
    {
        journame: "Sesame Seed Cleaning",
        shiftdate: "11 Mar 2022",
        primaryproduct: "Idhaya,Grade Sesame Seed",
        shifttype: "Prod Shift 1",
        workcenter: 'Canteen Works',
        entredby: 'SureshKumar',
        action: "action"
    },
    {
        journame: "Sesame Seed Cleaning",
        shiftdate: "11 Mar 2022",
        primaryproduct: "Idhaya,Grade Sesame Seed",
        shifttype: "Prod Shift 1",
        workcenter: 'Canteen Works',
        entredby: 'SureshKumar',
        action: "action"
    },
    {
        journame: "Sesame Seed Cleaning",
        shiftdate: "11 Mar 2022",
        primaryproduct: "Idhaya,Grade Sesame Seed",
        shifttype: "Prod Shift 1",
        workcenter: 'Canteen Works',
        entredby: 'SureshKumar',
        action: "action"
    },
  
]


const QCJournalTable = () => {
    return (
        <div>

            <div className='df df-sb'>
                <div>
                    <p className='employee-1'>Journal</p>
                    <p className='employee-2'>Journal</p>
                </div>
            </div>
            <div className='df  my-2'>
                <div>
                    <select className="form-control  form-select select-size">
                        <option>Journal Name</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select select-size">
                        <option>Shift Date</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select select-size">
                        <option>Shift Type</option>
                    </select>
                </div>
                <div >
                    <input type="date" placeholder="Date From" required className="form-control input-size" />
                </div>
                <div >
                    <input type="date" placeholder="Date To" required className="form-control input-size" />
                </div>
            </div>
            <Tables recievedColumns={recievedColumns} recievedData={recievedData} />

        </div>
    );
};

export default QCJournalTable;