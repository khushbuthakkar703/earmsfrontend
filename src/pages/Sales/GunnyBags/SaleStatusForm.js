import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from '../../../Component/Tables/Tables';

const SaleStatusForm = () => {
    const recievedColumns = [
        {
            Header: 'Product Name',
            accessor: 'productname'
        },
        {
            Header: 'Product ID',
            accessor: 'productid'
        },
        {
            Header: 'Quantity',
            accessor: 'qty'
        },
        {
            Header: 'Per Bag Price',
            accessor: 'perbagprice'
        },
        {
            Header: 'Total Amount',
            accessor: 'totamt'
        }
    ]

    const recievedData = [
        {
            productname : 'NO 2 Gunny Bag',
            productid : 'P-004',
            qty: '10',
            perbagprice : '77.65',
            totamt : '1,553'
        }
    ]
  return (
    <div>
        <div className='bills-header'>
            <div>
                <p className='employee-1'>Gunny Bag</p>
                <p className='employee-2'>Gunny Bag / Sale Status</p>
            </div>
        </div>
        <div className="card">
            <div className="card-header">Product Details</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="df">
                            <p>Vendor Name :</p>
                            <p>Vendor 1</p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="df">
                            <p>Vendor ID :</p>
                            <p>P-0001</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <div className="df">
                            <p>Date :</p>
                            <p>11 Mar 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <div className='custom-tab mt-3'>
        <Tabs
            defaultActiveKey="shift1"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="shift1" title="Product Detail">
            <Tables recievedColumns={recievedColumns} recievedData={recievedData} />
            </Tab>
        </Tabs>
        </div>
        <div className="df df-fe">
            <div>
                <button className='btn primary-btn'>Close</button>
            </div>
        </div>
    </div>
  )
}

export default SaleStatusForm
