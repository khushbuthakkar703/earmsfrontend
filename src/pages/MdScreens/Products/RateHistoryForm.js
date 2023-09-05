import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from '../../../Component/Tables/Tables';
import { IoMdAddCircle } from "react-icons/io";

const RateHistoryForm = () => {
    const recievedColoumns = [
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Product 1',
            accessor: 'prod1'
        },
        {
            Header: 'Product 2',
            accessor: 'prod2'
        },
        {
            Header: 'Product 3',
            accessor: 'prod3'
        },
        {
            Header: 'Product 4',
            accessor: 'prod4'
        },
        {
            Header: 'Product 5',
            accessor: 'prod5'
        },
        {
            Header: 'Product 5',
            accessor: 'prod6'
        },
        {
            Header: 'Product 6',
            accessor: 'prod6'
        },
        {
            Header: 'Product 7',
            accessor: 'prod7'
        }
    ]
    const recievedData = [
        {
            date: '11 Jan 2022',
            prod1:'10%',
            prod2:'10%',
            prod3:'0%',
            prod4:'0%',
            prod5:'0%',
            prod6:'0%',
            prod7:'10%'
        },
        {
            date: '12 Jan 2022',
            prod1:'0%',
            prod2:'0%',
            prod3:'10%',
            prod4:'10%',
            prod5:'10%',
            prod6:'10%',
            prod7:'0%'
        }
    ]

  return (
    <div>
        <div className="panel-header">No.2 Products</div>
        <div className="df df-sb">
            <div>No.2 Product / Rate History</div>
        </div>
        <div className="card my-3">
            <div className="card-header bg-white">Add Product</div>
            <div className="theme-card-content">
                <div className="df fw">
                    <div className="form-group">
                        <label className="form-label">Vendor Name</label>
                        <input type="text" className="form-control" disabled />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Created On</label>
                        <input type="text" className="form-control" disabled />
                    </div>
                    <div className="form-group">
                        <label className="form-label">From Date</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">To Date</label>
                        <input type="date" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
              
    <div className='custom-tab mt-3'>
            
        <Tabs
            defaultActiveKey="page Fields"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="page Fields" title="Products">
            </Tab>
        </Tabs>
        <Tables recievedColoumns={recievedColoumns} recievedData={recievedData} />
        </div>
        
            <button className="btn primary-btn">Close</button>
    </div>
  )
}

export default RateHistoryForm
