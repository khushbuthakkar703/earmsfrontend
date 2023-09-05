import React, { useState } from 'react';
import makeAnimated from 'react-select/animated';
import './Splitconfig.scss';
import Select from 'react-select';
import Breadcrumbs from '../../Component/Breadcrumbs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';
import { IoMdAddCircle } from "react-icons/io";

// Forms
const SplitConfigForm = () => {
  
  const recievedColumns = [
    {
      Header: 'Product Name',
      accessor: 'productname',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
            <select className="form-control  form-select table-select">
                <option>Product 1</option>
            </select>
        )
    }
    },
    {
      Header: 'Product Code',
      accessor: 'productcode'
    },
    {
      Header: 'Quantity',
      accessor: 'quantity'
    },
    {
      Header: ' In Lot',
      accessor: 'inlot'
    },
    {
      Header: 'Split type',
      accessor: 'splittype',
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
      Header: 'Product type',
      accessor: 'producttype',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
            <select className="form-control  form-select table-select">
                <option></option>
            </select>
        )
    }
    },
   
    
   
    
   
   
   
  ]

  const recievedData = [
    {
        productname: "Product 1",
        productcode: "P-001",
        quantity:"",
        inlot: "",
        splittype: "",
        producttype : " ",
      
     
    },
    {
        productname: "Product 1",
        productcode: "P-001",
        quantity:"",
        inlot: "",
        splittype: "",
        producttype : " ",
      
    },
   
  ]

 

  return (
    <div>
      <h1 className='panel-header'>Employee</h1>
      <Breadcrumbs />
      <form>
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>Add Product</h6>
        </div>
       
          <div className='theme-card-content'>
            <div className='df fw'>
            <div className='form-group'>
                <label className='form-label'>Product Name </label>
                <select className="form-control  form-select">
                        <option></option>
                    </select>
              </div>
              <div className='form-group'>
                <label className='form-label'>Vendor ID </label>
                <input
                  type='text'
                  className='form-control'readOnly
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Quantity</label>
                <input
                  type='text'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Lot</label>
                <input
                  type='text'
                  className='form-control'
                />
              </div>
             
             
             
            
            </div>
          </div>
      </div>
      
    <div className='custom-tab'>
      <Tabs
        defaultActiveKey="Products"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Products" title="Products">
          <Table recievedColumns={recievedColumns} recievedData={recievedData} />
        </Tab>
      </Tabs>
      <button className='btn add-btn m-2 df dc'><IoMdAddCircle />Add More</button>
    </div>
   
      <div className='df df-sb theme-card-content'>
            <button className='btn trasparent-btn m-2 btn-outline-primary'>Cancel</button>
            <button className='btn primary-btn' type='submit'>
              Save
            </button>
          </div>
        </form>
    </div>
  );
};

export default SplitConfigForm;
