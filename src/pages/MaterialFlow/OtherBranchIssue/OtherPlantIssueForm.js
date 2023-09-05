import React from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import "./opf.scss"
import { BsPrinter } from "react-icons/bs";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';
const WithinPlantReceiptForm = () => {
    const recievedColumns = [
        {
          Header: "Item",
          accessor: "item",
      
        },
        {
          Header: "Docket Type",
          accessor:"dockettype",
          Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }
        },
        {
          Header: "Quantity",
          accessor: "quanity"
        },
        {
          Header: "Dispatch Package Type",
          accessor: "dispatchpackagetype"
        },
        {
          Header: "Dispatch Package Quantity",
          accessor: "dispatchpackagequantity"
        },
      ]
      
      const recievedData = [
        {
            item: "Item 1",
            dockettype: "",
            quanity: "2000",
            dispatchpackagetype: "Box",
            dispatchpackagequantity:'200',
        
        },
        {
            item: "Item 1",
            dockettype: "",
            quanity: "2000",
            dispatchpackagetype: "Box",
            dispatchpackagequantity:'200',
      
        }
      ]
    return (
        <div>
              <div className='bills-header'>
                <div>
                    <p className='employee-1'>Material Flow</p>
                    <p className='employee-2'>Material Flow/ Other Branch Issue</p>
                </div>
            
                <div>
                    <button className='btn btn-secondary print-marerial'><BsPrinter />Print GDC</button>
                    <button className='btn btn-secondary print-marerial'><BsPrinter />Print E-Way bill</button>
                </div>
            </div>

            <div className="theme-card">
                <div className="theme-card-header">
                    <h6>Other Plant Issue</h6>
                </div>
                <div className="theme-card-content">
                    <div className="df fw">
                        <div className="form-group">
                            <label className="form-label">MRN No</label>
                            <input type="text" className="form-control" readOnly />
                        </div>


                        <div className="form-group">
                            <label className="form-label">Issue Reference</label>
                            <select className="form-control  form-select">
                                <option>Select</option>
                            </select>                        </div>
                        <div className="form-group">
                            <label className="form-label">Issue Mode</label>
                            <select className="form-control  form-select">
                                <option>Select</option>
                            </select>                        </div>
                        <div className="form-group">
                            <label className="form-label">Delivered By (Staff)</label>
                            <select className="form-control  form-select">
                                <option>Select</option>
                            </select>                        </div>
                        <div className="form-group">
                            <label className="form-label">Transport Mode</label>
                            <select className="form-control  form-select">
                                <option>Select</option>
                            </select>                        </div>
                        <div className="form-group">
                            <label className="form-label">Transport Vehicle Type</label>
                            <select className="form-control  form-select">
                                <option>Select</option>
                            </select>                        </div>
                        <div className="form-group">
                            <label className="form-label">Transport Vehicle (Number)</label>
                            <input type="text" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Dispatch On </label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="form-group">
                           <p>Material Return</p>
                            <input type="radio" className="" /><span className='yes'>yes</span>
                            <input type="radio" className="" /><span className='yes'>No</span>
                        </div>
                        <div className="form-group">
                           <p>Generate E-way Bill</p>
                            <input type="radio" className="" /><span className='yes'>yes</span>
                            <input type="radio" className="" /><span className='yes'>No</span>
                        </div>

                    </div>
                </div>
            </div>


            <div>
            <div className='custom-tab'>

                    <Tabs
                        defaultActiveKey="MRN-001"
                        id="uncontrolled-tab-example"
                        className="mb-3 first-tab"
                        >
                        <Tab eventKey="MRN-001" title="MRN-001">
                        <Table recievedColumns={recievedColumns} recievedData={recievedData} />
                        </Tab>
                        <Tab eventKey="MRN-002" title="MRN-002">
                       
                        </Tab>
                        <Tab eventKey="MRN-003" title="MRN-003">
                      
                        </Tab>
                    </Tabs>
            </div>

            </div>
            <div className="df df-sb">
                <button className="btn primary-bdr-btn m-2">Cancel</button>
                <button className="btn primary-btn">Verify & Dispatch</button>
            </div>
        </div>
    );
};

export default WithinPlantReceiptForm;