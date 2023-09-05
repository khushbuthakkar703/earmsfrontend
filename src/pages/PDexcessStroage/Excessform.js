import React, { useState, useEffect } from "react";
import makeAnimated from "react-select/animated";
import "./excess.scss";
import Select from "react-select";
import Breadcrumbs from "../../Component/Breadcrumbs";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../Component/Tables/Tables";
import apiRequest from "../../utils/helpers/apiRequest";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  dateConversion,
  datePrefillFormat,
  formatDateForRequest,
} from "../../utils/ConvertDates";
// Forms
const ExcessForm = () => {
  const [billList, setBillList] = useState();
  const [excessData, setExcessData] = useState();
  
  const getSaveData = async (p) => {
    const saveData = await apiRequest(
      "searchBillInwardReference"+`?referenceNumber=${p}`
    );
    
    console.log( saveData,"CCCCCC");
    if (saveData.error) {
      setBillList([])
  } else {
    setBillList(saveData?.data);
    console.log(saveData?.data,"BILLLLLLL");
  }
  };
  // useEffect(() => {
  //   console.log(billList, "BILL DATA");
  // }, [billList]);
  const handleBill = async (e) => {
    const res = await apiRequest("getBillInwardReferenceList", null, {
      referenceNumber: e,
    });
    console.log("getBillInwardReferenceList: ", res.data);
  };
  const getBillList = async () => {
    const res = await apiRequest("getBillInwardList");
    console.log(res,"getBillInwardList")
    if (res.error) {
      setBillList([]);
    } else {
      setBillList(res.data);
    }
  };
  const selectedData = (value) => {
    const fiteredData = billList?.filter((data) => {
      return value === data?.referenceNumber;
    });
    console.log(fiteredData, "FILELEL");
    const obj = {};

    for (let i = 0; i < fiteredData.length; i++) {
      Object.assign(obj, fiteredData[i]);
    }
    

    setExcessData(obj);
  };
  useEffect(() => {
    getBillList();
  }, []);

  const getAllSaveData = async (e) => {
    const postData = await apiRequest(
      "saveProductExcessStorage",
      newExcessData
    );
    console.log(postData);
  };
  const newExcessData = {};
  const recievedColumns = [
    {
      Header: "Product Name",
      accessor: "productName",
      // Cell: ({ row }) => {
      //   console.log(row.values);
      //   return <input type="text" className="form-control" name="productName"  value={excessData?.products?.productName}/>;
      // },
    },
    {
      Header: "Product Code",
      accessor: "productId",
     
      // Cell: ({ row }) => {
      //   console.log(row.values);
      //   return <input type="text" className="form-control" />;
      // },
    },
    {
      Header: "Product Type",
      accessor: "Producttype",
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <select className="form-control  form-select table-select">
            <option>Stock</option>
          </select>
        );
      },
    },
    {
      Header: "Lot",
      accessor: "lot",
      // Cell: ({ row }) => {
      //   console.log(row.values);
      //   return <input type="text" className="form-control" />;
      // },
    },
    {
      Header: "Batch No",
      accessor: "batchNo",
      // Cell: ({ row }) => {
      //   console.log(row.values);
      //   return <input type="text" className="form-control" />;
      // },
    },
    {
      Header: "Bin No",
      accessor: "bin",
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <select className="form-control  form-select table-select">
            <option></option>
          </select>
        );
      },
    },
    {
      Header: "TRN Type",
      accessor: "trntype",
      Cell: ({ row }) => {
        console.log(row.values);
        return <input type="text" className="form-control" />;
      },
    },
    {
      Header: "Excess/ Storage Type",
      accessor: "type",
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <select className="form-control  form-select table-select">
            <option></option>
          </select>
        );
      },
    },
    {
      Header: "Quantity",
      accessor: "quantity",
      Cell: ({ row }) => {
        console.log(row.values);
        return <input type="text" className="form-control" />;
      },
    },
    {
      Header: "Excess/Shortage",
      accessor: "Excess/Shortage",
      Cell: ({ row }) => {
        console.log(row.values);
        return <input type="text" className="form-control" />;
      },
    },
  ];

  const recievedData = [
    {
      productname: "Product 1",
      productcode: "P-001",
      Producttype: "Stock",
      lot: "12 ",
      batchno: "Batch 001 ",
      bin: " ",
      trntype: " R",
      type: " ",
      quality: " ",
    },
    {
      productname: "Product 1",
      productcode: "P-001",
      Producttype: "Stock",
      lot: "12 ",
      batchno: "Batch 001 ",
      bin: " ",
      trntype: " R",
      type: " ",
      quality: " ",
    },
  ];

  const recievedColumns1 = [
    {
      Header: "Bin No",
      accessor: "binno",
    },
    {
      Header: "Product",
      accessor: "product",
    },
    {
      Header: "Batch No",
      accessor: "batchno",
    },
    {
      Header: "Current Stock",
      accessor: "crntstck",
    },
    {
      Header: "Select",
      accessor: "Select",
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        );
      },
    },
  ];

  const recievedData1 = [
    {
      binno: "Bin-3456",
      product: "Product 1",
      batchno: "Batch001",
      crntstck: "2000",
    },
    {
      binno: "Bin-3456",
      product: "Product 1",
      batchno: "Batch001",
      crntstck: "2000",
    },
  ];

  return (
    <div>
      <h1 className="panel-header">Product Distruptancies</h1>
      <div className="df fw mt-2">
        <div>Product Distruptancies / Excess / Storage</div>
      </div>

      <form>
        <div className="theme-card mt-3">
          <div className="theme-card-header">
            <h6>Purchase Details</h6>
          </div>

          <div className="theme-card-content">
            <div className="df fw">
              <div className="form-group">
                <label className="form-label">Bill No</label>
                <Autocomplete
                  id="form-control height"
                  placeholder=""
                  freeSolo
                  options={
                    billList && billList.map((option) => option.referenceNumber)
                  }
                  onChange={(e, data) => {
                    selectedData(data);
                    console.log(data, "DODO");
                  }}
                  // value={data?.designation}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Bill No"
                      onChange={(e) => getSaveData(e.target.value)}
                    />
                  )}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Vendor Name </label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  value={excessData?.vendorName}
                  onChange={(e) => getAllSaveData(e)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Vendor ID </label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorId"
                  value={excessData?.vendorId}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Bill Date </label>
                <input
                  type="date"
                  className="form-control"
                  name="billDate"
                  value={dateConversion(excessData?.billDate)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Bill Inward Date </label>
                <input type="date" className="form-control"  name="receivedDate"
                  value={dateConversion(excessData?.receivedDate
                    )}/>
              </div>
              <div className="form-group">
                <label className="form-label">Bill Transaction Number </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">Accounting Firm </label>
                <input type="text" className="form-control" 
                 name="firmOrgName"
                 value={excessData?.firmOrgName}
                
                />
              </div>
            </div>
          </div>
        </div>

        <div className="custom-tab">
          <Tabs
            defaultActiveKey="Products"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Products" title="Products">
              <Table
                recievedColumns={recievedColumns}
                recievedData={excessData?.products}
              />
            </Tab>
          </Tabs>
        </div>
        <div className="custom-tab">
          <Tabs
            defaultActiveKey="Bin Details"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Bin Details" title="Bin Details">
              <Table
                recievedColumns={recievedColumns1}
                recievedData={recievedData1}
              />
            </Tab>
          </Tabs>
        </div>
        <div className="df df-sb theme-card-content">
          <button className="btn trasparent-btn m-2 btn-outline-primary">
            Cancel
          </button>
          <button className="btn primary-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExcessForm;
