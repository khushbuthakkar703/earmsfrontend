import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import Tables from "../../../Component/Tables/Tables";
const BinMasterForm = () => {
  const [data, setData] = useState([
    { godown: "", plant: "", firm: "", bin: "", dept: "" },
  ]);
  const recievedColumns = [
    {
      Header: "Godown",
      accessor: "godown",
    },
    {
      Header: "Plant Name",
      accessor: "plant",
    },
    {
      Header: "Firm Name",
      accessor: "firm",
    },
    {
      Header: "Bin",
      accessor: "bin",
    },
    {
      Header: "DepartMent",
      accessor: "dept",
      Cell: ({ row }) => {
        return (
          <select
            className="" 
            // style={{ width: "150px" }}
            name="taxes"
          >
            <option>Select Taxes</option>
            <option>SGst</option>
            <option>CGst</option>
          </select>
        );
      },
    },
  ];
  return (
    <>
      <h1 className="panel-header">Bin Master</h1>
      <Breadcrumbs />
      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Bin Master</h6>
        </div>
        <div className="theme-card-content">
          <div className="">
            <label className="form-label">Select godown</label>
            <select className="form-control form-label " name="shiftType">
              {/* <option>Select Shift Type</option> */}
              <option> type 1</option>
              <option> type 2</option>
              <option> type 3</option>
            </select>
            <div className="">
              <label className="form-label">Select Plant</label>
              <select className="form-control form-label " name="shiftType">
                {/* <option>Select Shift Type</option> */}
                <option> type 1</option>
                <option> type 2</option>
                <option> type 3</option>
              </select>
            </div>
            <div className="">
              <label className="form-label">Create Bin</label>
              <select className="form-control form-label " name="shiftType">
                {/* <option>Select Shift Type</option> */}
                <option> type 1</option>
                <option> type 2</option>
                <option> type 3</option>
              </select>
            </div>
            <div className="">
              <label className="form-label">Firm Name</label>
              <select className="form-control form-label " name="shiftType">
                {/* <option>Select Shift Type</option> */}
                <option> type 1</option>
                <option> type 2</option>
                <option> type 3</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Tables recievedColumns={recievedColumns} recievedData={data} />
        </div>
      </div>
    </>
  );
};

export default BinMasterForm;
