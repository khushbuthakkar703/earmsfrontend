import React from 'react';
import "../Dispatch.scss";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import Threedot from '../../../assets/threedot.svg'
import Tables from '../../../Component/Tables/Tables';

const recievedColumns = [
    {
        Header: "Product Name",
        accessor: "productname",

    },
    {
        Header: "Lot",
        accessor: "lot"
    },
    {
        Header: "Avalable Qty.",
        accessor: "availableqty"
    },
    {
        Header: "Order Qty in KG/Bundles",
        accessor: "bundles"
    },
    {
        Header: "Unit Rate",
        accessor: "unitrate"
    },
    {
        Header: "Cess 1%",
        accessor: "cess1p"
    },
    {
        Header: "GST 5%",
        accessor: "gst"
    },
    {
        Header: "Sale  TCS 0.1%",
        accessor: "tcs"
    },
    {
        Header: "Total Amount",
        accessor: "total"
    }
]

const recievedData = [
    {
        productname: "Gnut Seed",
        lot: "73kg",
        availableqty: "2000",
        bundles: "1000",
        unitrate: "100",
        cess1p: "10",
        gst: "25",
        tcs: "5",
        total: "10000"
    },
    {
        productname: "Gnut Seed",
        lot: "73kg",
        availableqty: "2000",
        orderqty: '1000',
        bundles: "1000",
        unitrate: "100",
        cess1p: "10",
        gst: "25",
        tcs: "5",
        total: "10000"
    }
]
const AgainstOrderWithPrice = () => {
    return (
        <div>
            <h1 className="panel-header">Dispatch</h1>
            <Breadcrumbs />
            {/* <div className='df salary-filter my-2'>
                <div>
                    <select className="form-control  form-select">
                        <option>Order Num</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Vendor Name</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Broker Name</option>
                    </select>
                </div>
                <div >
                    <input type="time" placeholder="Date From" required className="form-control" />
                </div>
                <div >
                    <input type="time" placeholder="Date To" required className="form-control" />
                </div>
            </div>
            <Tables recievedColumns={recievedColumns} recievedData={recievedData} /> */}
            <div className="card">
                <div className="card-header">
                        Against order
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-sm-5">          
                                <div className="form-group">
                                    <label htmlFor='Password' className='form-label'>
                                    Order Number{' '}
                                    </label>
                                    <select className='form-control  form-select'>
                                        <option>select</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-5">     
                                <div className="form-group">
                                    <label htmlFor='vendorName' className='form-label'>
                                    Vendor Number{' '}
                                    </label>
                                    <select className='form-control  form-select'>
                                        <option>select</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">          
                                <div className="form-group">
                                    <label htmlFor='orderDate' className='form-label'>
                                    Order Date{' '}
                                    </label>
                                    <input className='form-control' type='date' />
                                </div>
                            </div>
                            <div className="col-sm-5">     
                                <div className="form-group">
                                    <label htmlFor='brokerName' className='form-label'>
                                    Broker Name{' '}
                                    </label>
                                    <select className='form-control  form-select'>
                                        <option>select</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="form-group">
                                    <label htmlFor='brokerName' className='form-label'>
                                    Cess{' '}
                                    </label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-header">Producer Details</div>
                <div className="card-body">
                    <Tables recievedColumns={recievedColumns} recievedData={recievedData} />
                </div>
            </div>
        </div>
    );
};

export default AgainstOrderWithPrice;