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
const ExcessEditForm = () => {
 const [billList, setBillList] = useState()
 const { state } = useLocation();
 const [editValueData,setEditValueData] = useState("")
 const editData = state?.value;
//  console.log(editData,"Edit")
 
 const getUpdateData = async ()=>{
  const getData = await apiRequest ("updateProductExcessStorage",updatedEditData )
  console.log(getData,"API")
  setEditValueData(editData,"USESTATE")
  setEditValueData((pre) =>({
    ...pre,
    id: editData?.id,
    vendorName:editData.vendorName,
    vendorId:editData.vendorId,
    billDate:editData.billDate,
    billInwardDate:editData.billInwardDate,
    billTransactionNo:editData.billTransactionNo,
    firmName:editData.firmName,

  }))
 }
 const handleEditDataChange = (e) => {
  const { name, value } = e.target;
  setEditValueData((prevState)=>({
    ...prevState,
    [name] : value,
  }))
  console.log(editValueData,"CHANGE VALUE")
 }
 const updatedEditData = {
  vendorName:editValueData.vendorName,
  vendorId:editValueData.vendorId,
  billDate:editValueData.billDate,
  billInwardDate:editValueData.billInwardDate,
  billTransactionNo:editValueData.billTransactionNo,
  firmName:editValueData.firmName,

 }
  const recievedColumns = [
    {
      Header: 'Product Name',
      accessor: 'productname',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input
          type='text'
          className='form-control' 
          value={editData?.excessShortageProducts?.productName}
         
        />
        )
    }
    },
    {
      Header: 'Product Code',
      accessor: 'productcode',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input
          type='text'
          className='form-control' 
          value={editData?.vendorName}
         
        />
        )
    }
    },
    {
      Header: 'Product Type',
      accessor: 'Producttype',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input
          type='text'
          className='form-control' 
          value={editData?.vendorName}
         
        />
        )
    }
    },
    {
      Header: 'Lot',
      accessor: 'lot',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input
          type='text'
          className='form-control' 
          value={editData?.vendorName}
         
        />
        )
    }
    },
    {
      Header: 'Batch No',
      accessor: 'batchno',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input
          type='text'
          className='form-control' 
          value={editData?.vendorName}
         
        />
        )
    }
    },
    {
      Header: 'Bin',
      accessor: 'bin',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
            <select className="form-control  form-select table-select">
                <option></option>
                <option>Bin 1</option>
                <option>Bin 2</option>
            </select>
        )
    }
    },
    {
      Header: 'TRN Type',
      accessor: 'trntype',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input
          type='text'
          className='form-control' 
          value={editData?.vendorName}
         
        />
        )
    }
    },
    {
      Header: 'Type',
      accessor: 'type',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
            <select className="form-control  form-select table-select">
                <option></option>
                <option>Type 1</option>
                <option>Type 2</option>
            </select>
        )
    }
    },
    {
      Header: 'Quality',
      accessor: 'quality',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input
          type='text'
          className='form-control' 
          value={editData?.vendorName}
         
        />
        )
    }
    },
    {
      Header: 'Excess/Shortage',
      accessor: 'Excess/Shortage',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input
          type='text'
          className='form-control' 
          value={editData?.vendorName}
         
        />
        )
    }
     
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
  const handleBill = async (e) => {
    const res = await apiRequest('getBillInwardReferenceList', null, { referenceNumber: e });
    console.log('getBillInwardReferenceList: ', res.data)

  }
  const getBillList = async () => {
    const res = await apiRequest('getBillInwardList');
    if (res.error) {
      setBillList([])
    } else {
      setBillList(res.data)
    }
   }
  useEffect(() => {
    getBillList()
    getUpdateData()
  },[])
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
                <select className='form-control form-select'
                onChange={(e) => handleBill(e.target.value)}>
                  <option>Select bill</option>
                  {billList && billList.map((val) => {
                    <option value={val.referenceNumber}>{ val?.referenceNumber }</option>
                  })}
                </select>
              </div>

            <div className='form-group'>
                <label className='form-label'>Vendor Name </label>
                <input
                  type='text'
                  className='form-control' 
                  value={editValueData?.vendorName}
                 onChange={(e)=>handleEditDataChange(e)}
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Vendor ID </label>
                <input
                  type='text'
                  className='form-control'
                  value={editValueData?.vendorId
                  }
                />
              </div>
            
              <div className='form-group'>
                <label className='form-label'>Bill Date </label>
                <input
                  type='date'
                  className='form-control'
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
                <label className='form-label'>Bill Transaction Number </label>
                <input
                  type='text'
                  className='form-control'
                  value={editValueData?.billTransactionNo
                  }
                 
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Accounting Firm </label>
                <input
                  type='text'
                  className='form-control'
                  value={editValueData?.firmName }

                 
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
          <Table recievedColumns={recievedColumns} recievedData={editData?.excessShortageProducts} />
        </Tab>
      </Tabs>
    </div>
    {/* <div className='custom-tab'>
      <Tabs
        defaultActiveKey="Bin Details"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Bin Details" title="Bin Details">
          <Table recievedColumns={recievedColumns1} recievedData={recievedData1} />
        </Tab>
      </Tabs>
    </div> */}
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

export default ExcessEditForm;
