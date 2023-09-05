import React, { useState, useEffect } from 'react';
import makeAnimated from 'react-select/animated';
import './excess.scss';
import Select from 'react-select';
import Breadcrumbs from '../../Component/Breadcrumbs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';
import apiRequest from '../../utils/helpers/apiRequest';
import { useLocation, useNavigate } from 'react-router-dom';

// Forms
const ExcessViewForm = () => {
 const [billList, setBillList] = useState()
 const { state } = useLocation();
 const ViewData = state?.value;
 console.log(ViewData,"VIEW")
  const recievedColumns = [
    {
      Header: 'Product Name',
      accessor: 'productName'
    },
    {
      Header: 'Product Code',
      accessor: 'productCode'
     
    },
    {
      Header: 'Product Type',
      accessor: 'productType'
    },
    {
      Header: 'Lot',
      accessor: 'lot'
    
    },
    {
      Header: 'Batch No',
      accessor: 'batchNo'
    },
    {
      Header: 'Bin',
      accessor: 'bin',
      
     
    },
    {
      Header: 'TRN Type',
      accessor: 'trnType'
  
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Quality',
      accessor: 'quantity'
     
    },
    {
      Header: 'Excess/Shortage',
      accessor: 'Excess/Shortage'
     
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
        trntype : " R",
        type: " ",
        quality : " ",
     
    },
    {
        productname: "Product 1",
        productcode: "P-001",
        Producttype:"Stock",
        lot: "12 ",
        batchno: "Batch 001 ",
        bin : " ",
        trntype : " R",
        type: " ",
        quality : " ",
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
//   const handleBill = async (e) => {
//     const res = await apiRequest('getBillInwardReferenceList', null, { referenceNumber: e });
//     console.log('getBillInwardReferenceList: ', res.data

//   }
//   const getBillList = async () => {
//     const res = await apiRequest('getBillInwardList');
//     if (res.error) {
//       setBillList([])
//     } else {
//       setBillList(res.data)
//     }
//    }
//   useEffect(() => {
//     getBillList()
//   },[])
  return (
    <div>
      <h1 className='panel-header'>Product Distruptancies</h1>
      <div className='df fw mt-2'>
        <div>Product Distruptancies / Excess / Storage</div>
      </div>
      
      <form>
      <div className='theme-card mt-3'>
        <div className='theme-card-header'>
          <h6>Purchase Details</h6>
        </div>
       
          <div className='theme-card-content'>
            <div className='df fw'>
            <div className='form-group'>
                <label className='form-label'>Bill No </label>
                <input
                  type='text'
                  className='form-control' readOnly
                  value={ViewData?.billNumber
                  }
                />
              </div>
            <div className='form-group'>
                <label className='form-label'>Vendor Name </label>
                <input
                  type='text'
                  className='form-control' readOnly
                  value={ViewData?.vendorName }
                 
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Vendor ID </label>
                <input
                  type='text'
                  className='form-control'readOnly
                  value={ViewData?.vendorId
                  }
                />
              </div>
             
              <div className='form-group'>
                <label className='form-label'>Bill Date </label>
                <input
                  type='text'
                  className='form-control' readOnly
                  value={ViewData?.billDate }
                 
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Bill Inward Date </label>
                <input
                  type='text'
                  className='form-control' readOnly
                  value={ViewData?.billInwardDate
                  }
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Bill Transaction Number </label>
                <input
                  type='text'
                  className='form-control' readOnly
                   value={ViewData?.billTransactionNo }
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Accounting Firm </label>
                <input
                  type='text'
                  className='form-control' readOnly
                  value={ViewData?.firmName}
                  
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
          <Table recievedColumns={recievedColumns} recievedData={ViewData?.excessShortageProducts
} />
        </Tab>
      </Tabs>
    </div>
    
      <div className='df df-sb theme-card-content'>
            <button className='btn trasparent-btn m-2 btn-outline-primary'>Cancel</button>
           
          </div>
        </form>
    </div>
  );
};

export default ExcessViewForm;
