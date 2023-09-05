import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Tables from "../../../Component/Tables/Tables";
import "./dpentry.scss";
import StoreProductsTable from "./StoreProductsTable";
import { BsPrinter } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import convertDate from "../../../utils/ConvertDates";
import apiRequest from "../../../utils/helpers/apiRequest";

const DpEntryViewForm = () => {
  const location = useLocation();
  const data = location?.state;
  const [viewForm, setViewForm] = useState();
  const [IslooryTab, setIslorryTab] = useState(false);
  const navigation = useNavigate();

const viewDpEntry = ()=>{
    setViewForm(data)
}
  useEffect(()=>{
    viewDpEntry();
  },[])
  useEffect(()=>{
    console.log(viewForm,"VIEWEW");
  },[viewForm])
  const lorryFright = (e) => {
    let check = e.target.value;
    if (check === "yes") {
        setIslorryTab(true);
    } else {
        setIslorryTab(false);
    }
  };
  const recievedBinColumns = [
    {
      Header: "Bin ID",
      accessor: "binid",
    },
    {
      Header: "Bin Capacity",
      accessor: "bincapacity",
    },

    {
      Header: "Current Stock in Bin",
      accessor: "cstock",
    },
    {
      Header: "Bin Contents",
      accessor: "bcontents",
    },
    {
      Header: "Capacity Left",
      accessor: "capleft",
    },
    {
      Header: "Select Bin",
      accessor: "sbin",
      Cell: ({ row }) => {
        return (
          <>
            <input type="checkbox" />
          </>
        );
      },
    },
  ];

  const recievedBinData = [
    {
      binid: "Bin 1",
      bincapacity: "8000",
      cstock: "4000",
      bcontents: "Red Seeds",
      capleft: "4000",
      sbin: "",
    },
    {
      binid: "Bin 2",
      bincapacity: "8000",

      cstock: "4000",
      bcontents: "Red Seeds",
      capleft: "4000",
      sbin: "",
    },
  ];

  return (
    <div>
      <div className="bills-header">
        <div>
          <p className="employee-1">Bills/ Direct Purchase Entry</p>
        </div>

        <div>
          <button className="btn dark-blue-btn">
            <BsPrinter />
            Print
          </button>
        </div>
      </div>
      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Storage</h6>
        </div>
        <div className="theme-card-content df fw">
          <div className="form-group ">
            <label className="form-label">Batch No : </label>
            <input
              type="text"
              className="form-control"
              readOnly
              value={viewForm?.batchNo}
            />
          </div>
          <div className="form-group ">
            <label className="form-label">Reference Number :</label>
            <input
              type="text"
              className="form-control"
              readOnly
              value={viewForm?.referenceNo}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Select Branch</label>
            <input
              type="text"
              className="form-control"
              value={viewForm?.branchName}
              readOnly
            />
          </div>
          <div className="form-group ">
            <label className="form-label">Date of Storage :</label>
            <input
              type="text"
              className="form-control"
              value={viewForm?.storageDate}
              readOnly
            />
          </div>
          <div className="form-group">
            <p>Lorry Fright</p>
            <input
              type="radio"
              id="yes"
              name="age"
              value="yes"
              onChange={(e) => lorryFright(e)}
            />
            <label for="yes" className="yes">
              yes
            </label>
            <input
              type="radio"
              id="No"
              name="age"
              value="no"
              onChange={(e) => lorryFright(e)}
            />
            <label for="No">No</label>
            {/* <input type="radio" className="" /><span className='yes'>yes</span>
                            <input type="radio" className="" /><span className='yes'>No</span> */}
          </div>
        </div>
      </div>

      <StoreProductsTable IslooryTab={IslooryTab} />
      {/* <div className='custom-tab'>
                <Tabs
                    defaultActiveKey="Storage"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="Storage" title="Bin Details">
                        <Tables recievedColumns={recievedBinColumns} recievedData={recievedBinData} />
                    </Tab>
                </Tabs>
            </div> */}
      <div className="df df-sb">
        <button className="btn primary-bdr-btn my-2">Cancel</button>
        <button className="btn primary-btn">Save</button>
      </div>
    </div>
  );
};

export default DpEntryViewForm;
