import React from 'react';
import "./iie.scss";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import Threedot from '../../../assets/threedot.svg'
import Tables from '../../../Component/Tables/Tables';


const recievedColumns = [
    {
        Header: "Material",
        accessor: "material",

    },
    {
        Header: "Mode of Purchase",
        accessor: "mode"
    },
    {
        Header: "Transaction",
        accessor: "transaction"
    },
    {
        Header: "Transaction Date",
        accessor: "date"
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
        material: "Suresh Kumar",
        mode: "Direct",
        transaction: "Bill No 40 - Lorry..",
        date: "11 Mar 2022",
        action: "action"
    }, {
        material: "Suresh Kumar",
        mode: "Direct",
        transaction: "Bill No 40 - Lorry..",
        date: "11 Mar 2022",
        action: "action"
    }, {
        material: "Suresh Kumar",
        mode: "Direct",
        transaction: "Bill No 40 - Lorry..",
        date: "11 Mar 2022",
        action: "action"
    }
]

const InwardInspectionEntry = () => {
    return (
        <div>
            <h1 className="panel-header">Inward Inspection Entry</h1>
            <Breadcrumbs />
            <div className='df salary-filter my-2'>
                <div>
                    <select className="form-control  form-select">
                        <option>Material</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Mode of Pur</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Transaction</option>
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
    );
};

export default InwardInspectionEntry;