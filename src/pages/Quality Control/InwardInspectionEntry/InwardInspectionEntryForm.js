import React, { useState } from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import "./iie.scss";
import Arrow from '../../../assets/arrow.svg'
import SeedInitialTest from './SeedInitialTest';
import ValidateEntry from './ValidateEntry';
import SeedAfterDrying from './SeedAfterDrying';
import SeedBeforeDrying from './SeedBeforeDrying';
import SeedCleaningProcessReport from './SeedCleaningProcessReport';
import SeedOilOutrunCheckling from './SeedOilOutrunCheckling';
import SeedOilIVPVtest from './SeedOilIVPVtest';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {AiOutlineRight } from "react-icons/ai";
const InwardInspectionEntryForm = () => {
    const [userRole, SetUserRole] = useState('User')
    let [show, setShow] = useState(false)

    return (
        <div>
            <h1 className="panel-header">Inward Inspection Entry</h1>
            <Breadcrumbs />
            <div className="theme-card">
                <div className="theme-card-header">
                    {
                        userRole === 'Admin' ? (
                            <>
                                <h6>Add Master</h6>
                            </>
                        ) : (
                            <h6>Admin Entry</h6>
                        )
                    }
                </div>
                <div className="theme-card-content">
                    {
                        userRole === 'Admin' ? (
                            <div className="df fw">
                                <div className="form-group">
                                    <label className="form-label">Material </label>
                                    <select className="form-control  form-select">
                                        <option>Material</option>
                                    </select>                        
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Mode of Purchase</label>
                                    <select className="form-control  form-select">
                                        <option>Mode of Purchase</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Transaction Date </label>
                                    <input type="date" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Transaction </label>
                                    <select className="form-control  form-select">
                                        <option>Transaction </option>
                                    </select>
                                </div>


                            </div>
                        ) : (
                            <div className="row">
                                <div className='col-sm-6'>
                                    <div className='row'>
                                        <div className="col-6">Material :</div>
                                        <div className="col-6">Sesamee Seeds</div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="col-6">Transaction Date :</div>
                                        <div className="col-6">11 Mar 2022</div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="col-6">Lab report :</div>
                                        <div className="col-6">
                                            <button className="btn blue-btn">Download</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className="row mt-3">
                                        <div className='col-6'>Mode of Purchase :</div>
                                        <div className='col-6'>Direct</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className='col-6'>Transaction :</div>
                                        <div className='col-6'>Bill No : 40</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='custom-tab  journal-sesame'>
    <Tabs
  defaultActiveKey="Seed Initial Test"
  id="uncontrolled-tab-example"
  className="mb-3"
 >
  <Tab eventKey="Seed Initial Test"  title={
   <span>
  {"Seed Initial Test "} <AiOutlineRight className='tab-icon' />
   </span>
  }>
                <div className="theme-card-content">
                    <div className="df fw">
                         <SeedInitialTest />
                    </div>
                </div>
  </Tab>
  <Tab eventKey="Seed Before Drying"  title={
   <span>
  {"Seed Before Drying "} <AiOutlineRight className='tab-icon'/>
   </span>
  }>
                <div className="theme-card-content">
                    <div className="df fw">
                        <SeedBeforeDrying />
                    </div>
                </div>
  </Tab>

  <Tab eventKey="Seed After Drying"  title={
   <span>
  {"Seed After Drying "} <AiOutlineRight className='tab-icon'/>
   </span>
  }>
                <div className="theme-card-content">
                    <div className="df fw">
                        <SeedAfterDrying />
                    </div>
                </div>
  </Tab>


  <Tab eventKey="Seed Cleaning Process Report"  title={
   <span>
  {"Seed Cleaning Process Report "} <AiOutlineRight className='tab-icon'/>
   </span>
  }>
 
                <div className="theme-card-content">
                    <div className="df fw">
                         <SeedCleaningProcessReport /> 
                    </div>
                </div>
  </Tab>

  <Tab eventKey="Seed Oil Outrun Checking"  title={
   <span>
  {"Seed Oil Outrun Checking "} <AiOutlineRight className='tab-icon'/>
   </span>
  }>
                <div className="theme-card-content">
                    <div className="df fw">
                         <SeedOilOutrunCheckling />
                    </div>
                </div>
  </Tab>

  <Tab eventKey="Seed Oil IV PV Test"  title={
   <span>
  {"Seed Oil IV PV Test "} <AiOutlineRight className='tab-icon'/>
   </span>
  }>
                <div className="theme-card-content">
                    <div className="df fw">
                    <SeedOilIVPVtest />
                    </div>
                </div>
  </Tab>
</Tabs>
</div>


            
            <div className="df df-sb">
                <button className="btn primary-bdr-btn my-2">Cancel</button>
                <div>
                    {
                        userRole === 'Admin' ? (
                            <>
                                <button className="btn primary-btn mx-2" onClick={() => setShow(true)}>Validate Entry</button>
                                <button className="btn primary-btn">Save</button>
                                {show ?
                                    <ValidateEntry />
                                    : null}
                            </>
                        ) : (
                            <>
                                <button className="btn danger-btn mx-2">Reject</button>
                                <button className="btn success-btn">Approve</button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default InwardInspectionEntryForm;