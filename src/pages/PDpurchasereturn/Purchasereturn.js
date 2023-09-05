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
import moment from 'moment'
import { storage_items } from '../../constants/constantValues';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SelectSearch from 'react-select-search';

// Forms
const PurchaseRetunForm = () => {
  
  const recievedColumns = [
    {
      Header: 'Product Name',
      accessor: 'productName'
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
        accessor: 'batchno',
    //   Cell: ({row}) => {billData?.batchNo}
    },
    {
      Header: 'Bin',
      accessor: 'bin',
      Cell: ({ row }) => {
        // console.log(row.values);
        return (
            <select className="form-control  form-select table-select"
            onChange={(e) => handleBinData(e.target.value)}>
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
      Header: 'Return Quantity',
      accessor: 'returnquantity',
        Cell: ({ row }) => {
            return (
            <input type="number" className="form-control" />
        )
    }
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
    const [firm, setFirm] = useState()
    const [productist, setproductist] = useState()
    const [isBillSelected, setisBillSelected] = useState(false)
    const [isBinSlected, setisBinSlected] = useState(false)

  const getBillInwardList = async () => {
    const res = await apiRequest('getBillInwardList');
    // console.log("getBillInwardList:", res)
    if (res.error) {
      setbillInwardList([])
    } else { 
        setbillInwardList(res.data)
        const bill = (res.data && res.data.map(({ id, referenceNumber }) => {
            // console.log("QQQQQ", referenceNumber)
            return {id, referenceNumber}
        }))
        // setbillNoList(bill)
    }
    
      const selectedOrg = JSON.parse(localStorage.getItem(storage_items.selectedOrg))   
      setFirm(selectedOrg?.name)
  }
  const handleBillData = async(id) => {
    // console.log(id)
    const res = await apiRequest('getBillInwardDetails', null, null, `/${id}`);
    console.log("bill data:", res.data)
    if (res.error) {
      setbillData([])
    } else {
      setbillData(res.data)
        setproductist(res.data.products)
        setisBillSelected(true)
    }
    
  }
  const handleBillChange = (val) => {
    console.log(val, "DEEEEE");
    setformData((prevState) => ({
      ...prevState,
      designation: val,
    }));
  }
  const getBillNoList = async () => {
    const res = await apiRequest('billNumberList')
    if (res.error) {
      setbillNoList([])
    } else {      
      setbillNoList(res.data)
    }
  }
  const handleBinData = (e) => {
        console.log("Selectedbin: ", e)
        setisBinSlected(true)
  }
  useEffect(() => {
    getBillInwardList();
  }, [])
  useEffect(() => {
        // console.log("XXXXXXXXXXXXXx", billNoList)
    getBillNoList()
  },[])
  return (
      <div>
      <h1 className='panel-header'>Employee</h1>
    <p className="employee-2">Product Distruptancies / Purchase Return</p>
      <form>
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>Salary</h6>
        </div>       
          <div className='theme-card-content'>
            <div className='df fw'>
              <div className='form-group'>
                <label className='form-label'>Bill No </label>
                {/* <Select
                                  className='form-control form-label'
                                  onChange={(e) => handleBillData(e.target.value)}
                                  isSearchable="true"
                                  options={billNoList.referenceNumber}
                   /> */}
                  {/* <option>Select Bill Number</option>
                  {billInwardList && billInwardList.map((value) => {
                    return <option value={value.id}>{value.referenceNumber}</option>
                  })}
                </Select> */}
                <select
                    className='form-control form-label'
                    onChange={(e) => handleBillData(e.target.value)}
                    isSearchable="true"
                >
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
                    name='billDate'
                  value={moment(billData?.billDate, 'DD/MM/YYYY').format('YYYY-MM-DD')}
                //   value={billData?.billDate}
                //   value='1989/15/11'
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Bill Inward Date </label>
                <input
                  type='date'
                  className='form-control'
                  value={moment(billData?.receivedDate, 'DD/MM/YYYY').format('YYYY-MM-DD')}
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
                <input type='text'
                    className="form-control"
                    readOnly
                    value={firm}
                />
              </div>
            
            </div>
          </div>
      </div>
      {isBillSelected && 
      
    <div className='custom-tab'>
      <Tabs
        defaultActiveKey="Products"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
                      <Tab eventKey="Products" title="Products">
                          {productist && (
                              
          <Table recievedColumns={recievedColumns} recievedData={productist} />
                          )}
        </Tab>
      </Tabs>
    </div>
              }
              {isBinSlected && 
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
              }
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