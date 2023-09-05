import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from '../../../Component/Tables/Tables';
import { BiDotsVerticalRounded } from "react-icons/bi";

const Welfare = () => {
    const recievedColumns = [
        {
            Header: 'Welfare name',
            accessor: 'welfarename'
        },
        {
            Header: 'Total Amount',
            accessor: 'totamt'
        },
        {
            Header: 'Payable (%)',
            accessor: 'payable'
        },
        {
            Header: 'Payable Amount',
            accessor: 'payableamt'
        }
    ]

    const recievedData = [
        {
            welfarename : 'Food',
            totamt : '18,000',
            payable : '33',
            payableamt: '6000'
        },
        {
            welfarename : 'Uniform',
            totamt : '18,000',
            payable : '33',
            payableamt: '6000'
        },
        {
            welfarename : 'Transportation',
            totamt : '18,000',
            payable : '100',
            payableamt: '18000'
        },
        {
            payableamt: 'Total Payable Amount : 30,000'
        }
    ]
  return (
    <div>  
        <div className='bills-header'>
            <div>
                <p className='employee-1'>Welfare</p>
                <p className='employee-2'>Welfare / Contribution Amount</p>
            </div>
        </div>
        <div className="card">
            <div className="card-header bg-white">Welfare Contribution</div>
            <div className="theme-card-content">
                <div className="df df-fw">
                    <div className="form-group">
                        <label className="form-label">From Date</label>
                        <input type="date" className='form-control'  />
                    </div>
                    <div className="form-group">
                        <label className="form-label">To Date</label>
                        <input type="date" className='form-control'  />
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
                <Tab eventKey="shift1" title="Amount Breakdown">
                <Tables recievedColumns={recievedColumns} recievedData={recievedData} />
                </Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default Welfare
