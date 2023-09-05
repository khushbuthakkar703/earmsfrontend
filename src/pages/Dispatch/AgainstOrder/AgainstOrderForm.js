import React from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import "../Dispatch.scss";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';

const recievedColumns = [
    {
        Header: "Product Name",
        accessor: "name",

    },
    {
        Header: "Lot",
        accessor: "lot"
    },
    {
        Header: "Box Quantity",
        accessor: "box"
    },
    {
        Header: "Piece Quantity",
        accessor: "Piece"
    },

]

const recievedData = [
    {
        name: "Gnut Seed",
        lot: "73kg",
        box: "100",
        Piece: "10000"

    }
]
const AgainstOrderForm = () => {
    return (
        <div>
            <h1 className="panel-header">Dispatch</h1>
            <Breadcrumbs />
            <div className="theme-card">
                <div className="theme-card-header">
                    <h6>Against Order</h6>
                </div>
                <div className="theme-card-content">
                    <div className="df fw">
                        <div className="form-group">
                            <label className="form-label">Order Number </label>
                            <select className="form-control  form-select">
                                <option>Select </option>
                            </select>              </div>
                        <div className="form-group">
                            <label className="form-label">Vendor Name</label>
                            <select className="form-control  form-select">
                                <option>Select </option>
                            </select>              </div>


                        <div className="form-group">
                            <label className="form-label">Order Date</label>
                            <input type="date" placeholder="Date From" required className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='custom-tab'>

                <Tabs
                    defaultActiveKey="productdetails"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="productdetails" title="Product Details">
                        <Table recievedColumns={recievedColumns} recievedData={recievedData} />
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

export default AgainstOrderForm;