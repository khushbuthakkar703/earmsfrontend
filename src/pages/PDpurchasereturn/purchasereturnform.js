import React, { useState, useEffect } from 'react';
import makeAnimated from 'react-select/animated';
import './purchasereturn.scss';
import Select from 'react-select';
import Breadcrumbs from '../../Component/Breadcrumbs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';
import { IoMdAddCircle } from "react-icons/io";
import convertDate, { formatDateForRequest } from "../../utils/ConvertDates";
import apiRequest from '../../utils/helpers/apiRequest';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SelectSearch from 'react-select-search';

// Forms
const PurchaseRetunForm = () => {
  
  const recievedColumns = [
    {
      Header: 'Product Name',
      accessor: 'productname'
    },
    {
      Header: 'Product Code',
      accessor: 'productcode'
    },
    {
      Header: 'Product Type',
      accessor: 'Producttype'
    },
    {
      Header: 'Lot',
      accessor: 'lot'
    },
    {
      Header: 'Batch No',
      accessor: 'batchno'
    },
    {
      Header: 'Bin',
      accessor: 'bin',
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
      Header: 'Current Stock',
      accessor: 'currentstock'
    },
    {
      Header: 'Return Quality',
      accessor: 'returnquality',
    
    },
    {
      Header: 'Quality',
      accessor: 'quality'
    },
    {
        Header: 'Reason',
        accessor: 'reason'
      },
   
   
   
  ]
  const recievedData = [
    {
        productname: "Product 1",
        productcode: "P-001",
        Producttype:"Stock",
        lot: "12 ",
        batchno: "Batch 001 ",
        bin : " ",
        currentstock : " ",
        returnquality: " ",
        reason : " ",
     
    },
    {
        productname: "Product 1",
        productcode: "P-001",
        Producttype:"Stock",
        lot: "12 ",
        batchno: "Batch 001 ",
        bin : " ",
        currentstock : " ",
        returnquality: " ",
        reason : " ",
    },
   
  ]
  const recievedColumns1 = [
    {
      Header: 'Bin No',
      accessor: 'binno'
    },
    {
      Header: 'Product',
      accessor: 'product'
    },
    {
      Header: 'Batch No',
      accessor: 'batchno'
    },
    {
      Header: 'Current Stock',
      accessor: 'crntstck'
    },
  ]
  const recievedData1 = [
    {
        binno: "Bin-3456",
        product: "Product 1",
        batchno:"Batch001",
        crntstck: "2000",
       
     
    },
    {
        binno: "Bin-3456",
        product: "Product 1",
        batchno:"Batch001",
        crntstck: "2000",
    },
   
  ]
  const [billInwardList, setbillInwardList] = useState()
  const [billNoList, setbillNoList] = useState()
  const [formData, setformData] = useState()
  const [billData, setbillData] = useState()

  const getBillInwardList = async () => {
    const res = await apiRequest('getBillInwardList');
    console.log("getBillInwardList:", res)
    if (res.error) {
      setbillInwardList([])
    } else { 
      setbillInwardList(res.data)
    }
  }
  const handleBillData = async(id) => {
    console.log(id)
    const res = await apiRequest('getBillInwardDetails', null, null, `/${id}`);
    console.log("bill data:", res)
    if (res.error) {
      setbillData([])
    } else {
      setbillData(res.data)
    }
  }
  // const handleBillData = async(queryPayload) => {
  //   const res = await apiRequest(`billInwardList?referenceNumber=${queryPayload}`);
  //   // setDesignation(designationRes .data);
  //   console.log('designationRes:', res);
  // }
  const handleBillChange = (val) => {
    console.log(val, "DEEEEE");
    setformData((prevState) => ({
      ...prevState,
      designation: val,
    }));
  }
  useEffect(() => {
    getBillInwardList();
  },[])
  return (
    <div>
      <h1 className='panel-header'>Employee</h1>
      <Breadcrumbs />
      <form>
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>Salary</h6>
        </div>
       
          <div className='theme-card-content'>
            <div className='df fw'>
              <div className='form-group'>
                <label className='form-label'>Bill No </label>
                <select className='form-control form-label' onChange={(e) => handleBillData(e.target.value)}>
                  <option>Select Bill Number</option>
                  {billInwardList && billInwardList.map((value) => {
                    return <option value={value.id}>{value.referenceNumber}</option>
                  })}
                </select>
                {/* <Autocomplete
                  id="form-control height"
                  placeholder="Bill Number"
                  freeSolo
                  options={billInwardList && billInwardList.map((option) => option)}
                  renderInput={(params) => <TextField {...params} label="Select Bill Number" onChange={(e) => handleBillData(e.target.value)} />}
                  onChange={(e) => (event, newValue)=>handleBillChange(newValue)}
                /> */}
              </div>
              <div className='form-group'>
                <label className='form-label'>Bill Date </label>
                <input
                  type='date'
                  className='form-control'
                  value={formatDateForRequest(billData?.billDate)}
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Bill Inward Date </label>
                <input
                  type='date'
                  className='form-control'
                />
              </div>
            <div className='form-group'>
                <label className='form-label'>Vendor Name </label>
                <input type="text" value={billData?.vendorName} className="form-control"/>
                {/* <select className="form-control  form-select">
                        <option>Vendor</option>
                    </select> */}
              </div>
              <div className='form-group'>
                <label className='form-label'>Vendor ID </label>
                <input
                  type='text'
                  className='form-control' readOnly
                  value={billData?.vendorId}
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Bill Transaction Number </label>
                <input
                  type='text'
                  className='form-control' readOnly
                  value={billData?.tcs}
                />
                {/* <select className="form-control  form-select">
                        <option>Vendor</option>
                    </select> */}
              </div>
              <div className='form-group'>
                <label className='form-label'>Accounting Firm </label>
                <select className="form-control  form-select">
                        <option>Vendor</option>
                    </select>
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
    <div className='custom-tab'>
      <Tabs
        defaultActiveKey="Bin Details"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Bin Details" title="Bin Details">
          <Table recievedColumns={recievedColumns1} recievedData={recievedData1} />
        </Tab>
      </Tabs>
    
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

export default PurchaseRetunForm;
