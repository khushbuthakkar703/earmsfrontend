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
        Header: "Available Qty",
        accessor: "availabltqty"
    },
    {
        Header: "Order Qty",
        accessor: "orderqty"
    },
    {
        Header: "Order Qty in KG/Bundles",
        accessor: "kg"
    },
    {
        Header: "Unit Rate",
        accessor: "unit"
    },
    {
        Header: "Amount",
        accessor: "amount"
    },
    {
        Header: "Cess 1%",
        accessor: "cess1"
    },
    {
        Header: "Cess 5%",
        accessor: "cess5"
    },
    {
        Header: "Sale  TCS 0.1%",
        accessor: "sale"
    },
    {
        Header: "Total Amount",
        accessor: "totalamount"
    },
]

const recievedData = [
    {
        name: 'Gnut Seed',
        lot: '73kg',
        availabltqty: '2000',
        orderqty: '1000',
        kg: '100',
        unit: '100',
        amount: '100',
        cess1: "10",
        cess5: "25",
        sale: "5",
        totalamount: "10000 "

    },
    {
        name: 'Gnut Seed',
        lot: '73kg',
        availabltqty: '2000',
        orderqty: '1000',
        kg: '100',
        unit: '100',
        amount: '100',
        cess1: "10",
        cess5: "25",
        sale: "5",
        totalamount: "10000 "

    }
]
const AgainstOrderWithPriceForm = () => {
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
                        <div className="form-group">
                            <label className="form-label">Broker Name</label>
                            <select className="form-control  form-select">
                                <option>Select </option>
                            </select>              </div>
                        <div className="form-group">
                            <label className="form-label">Broker Name</label>
                            <input type="text" className="form-control" readonly />
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

export default AgainstOrderWithPriceForm;