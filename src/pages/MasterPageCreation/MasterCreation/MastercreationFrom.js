import React from 'react';
import Breadcrumbs from "../../../Component/Breadcrumbs";
import "./mastercreation.scss";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';
import { IoMdAddCircle } from "react-icons/io";
import makeAnimated from 'react-select/animated';
import Select from 'react-select'

const options = [
    { value: 'Staff 1', label: 'Staff 1' },
    { value: 'Staff 2', label: 'Staff 2' },
    { value: 'Staff 3', label: 'Staff 3' }
]
const animatedComponents = makeAnimated();

const recievedColumns = [
    {
        Header: "Field Names",
        accessor: "names",

    },
    {
        Header: "Field Type",
        accessor: "fieldtype",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option>Currency</option>
                </select>
            )
        }
    },
    {
        Header: "Possible Values",
        accessor: "values",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <Select isMulti options={options} components={animatedComponents}
                />
            )
        }
    },
    {
        Header: "Data/Selection Type",
        accessor: "datatype",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option>Currency</option>
                </select>
            )
        }
    },
    {
        Header: "Max Length (Char)",
        accessor: "length"
    },
    {
        Header: "Created by",
        accessor: "createdby"
    },
    {
        Header: "Created On",
        accessor: "createdon"
    },
    {
        Header: "Updated By",
        accessor: "updatedby"
    },
    {
        Header: "Updated On",
        accessor: "updatedon"
    },
]

const recievedData = [
    {
        names: "Field 1",

        fieldtype: "Currency",
        values: "Dollar     X",
        datatype: "Multiple Value Select",
        length: "200 ",

        createdby: "Suresh Kumar",
        createdon: "Suresh Kumar ",
        updatedby: "Suresh Kumar",
        updatedon: "Suresh Kumar"

    }
]

const MastercreationFrom = () => {
    return (
        <div>
            <h1 className="panel-header">Master Creation</h1>
            <Breadcrumbs />
            <div className="theme-card">
                <div className="theme-card-header">
                    <h6>Add Master</h6>
                </div>
                <div className="theme-card-content">
                    <div className="df fw">


                        <div className="form-group">
                            <label className="form-label">Component Name </label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Department</label>
                            <select className="form-control  form-select">
                                <option>Department</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">User Access Level</label>
                            <select className="form-control  form-select">
                                <option>User Access Level</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Created By</label>
                            <select className="form-control  form-select">
                                <option>Created By</option>
                            </select>

                        </div>
                        <div className="form-group">
                            <label className="form-label">Created On </label>
                            <input type="text" className="form-control" readOnly />
                        </div>

                    </div>
                </div>
            </div>
            <div className='custom-tab'>
                <Tabs
                    defaultActiveKey="masterfields"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="masterfields" title="Master Fields">
                        <Table recievedColumns={recievedColumns} recievedData={recievedData} />
                        <button className='btn add-btn m-2 df dc'><IoMdAddCircle />Add More</button>

                    </Tab>


                </Tabs>

            </div>
            <div className="df df-sb">
                <button className="btn primary-bdr-btn m-2">Cancel</button>
                <button className="btn primary-btn">Save</button>
            </div>
        </div>
    );
};

export default MastercreationFrom;