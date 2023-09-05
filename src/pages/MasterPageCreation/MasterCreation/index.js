import React from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import Tables from '../../../Component/Tables/Tables';
import "./mastercreation.scss";

import Threedot from '../../../assets/threedot.svg'

const recievedColumns = [
    {
        Header: "Master Name",
        accessor: "name",

    },
    {
        Header: "Department",
        accessor: "dep"
    },
    {
        Header: "User Level",
        accessor: "level"
    },
    {
        Header: "Created By",
        accessor: "createdby"
    },
    {
        Header: "Created On",
        accessor: "createdon"
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
        name: "Shift Master",
        dep: "Admin",
        level: "Level 7 ",
        createdby: "Suresh Kumar",
        createdon: "10:00:00 Pm",
        action: "action"
    },
    {
        name: "Shift Master",
        dep: "Admin",
        level: "Level 7 ",
        createdby: "Suresh Kumar",
        createdon: "10:00:00 Pm",
        action: "action"
    }
]


const MasterCreation = () => {
    return (
        <div>
            <h1 className="panel-header">Employee</h1>
            <div className='df df-sb'>
                <Breadcrumbs />
                <button className='btn blue-btn'>+ Add Master</button>
            </div>
            <div className='df salary-filter my-2'>
                <div>
                    <select className="form-control  form-select">
                        <option>Master Name</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Department</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>User Level</option>
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

export default MasterCreation;