import React from 'react';
import Tables from '../../../Component/Tables/Tables';

import Threedot from '../../../assets/threedot.svg'
import './productionentry.scss'
const recievedColumns = [
    {
        Header: "Journal Name",
        accessor: "journame",

    },
    {
        Header: "Department",
        accessor: "dep"
    },
    {
        Header: "Shift Date",
        accessor: "shiftdate"
    },
    {
        Header: "Batch Type",
        accessor: "batchtype"
    },
    {
        Header: "shifttype",
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
        journame: "Tea",
        dep: "Quality Control",
        shiftdate: "11 Mar 2022",
        batchtype: "Batch 1",
        shifttype: "Prod Shift 1",
        workcenter: 'Canteen Works',
        entredby: 'SureshKumar',
        action: "action"
    },
    {
        journame: "Tea",
        dep: "Quality Control",
        shiftdate: "11 Mar 2022",
        batchtype: "Batch 1",
        shifttype: "Prod Shift 1",
        workcenter: 'Canteen Works',
        entredby: 'SureshKumar',
        action: "action"
    },
    {
        journame: "Tea",
        dep: "Quality Control",
        shiftdate: "11 Mar 2022",
        batchtype: "Batch 1",
        shifttype: "Prod Shift 1",
        workcenter: 'Canteen Works',
        entredby: 'SureshKumar',
        action: "action"
    },
    {
        journame: "Tea",
        dep: "Quality Control",
        shiftdate: "11 Mar 2022",
        batchtype: "Batch 1",
        shifttype: "Prod Shift 1",
        workcenter: 'Canteen Works',
        entredby: 'SureshKumar',
        action: "action"
    }
]


const ProductionEntry = () => {
    return (
        <div>

            <div className='df df-sb'>
                <div>
                    <p className='employee-1'>Production</p>
                    <p className='employee-2'>Production</p>
                </div>

                <button className='btn blue-btn'>Add Production Entry</button>
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

export default ProductionEntry;