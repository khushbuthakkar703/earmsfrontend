import React, { useEffect, useState } from "react";
import Table from "../../Component/Tables/Tables";
import { useLocation, useNavigate } from "react-router-dom";
import apiRequest from "../../utils/helpers/apiRequest";
import Calender from "../../Component/Calender/Calender";

const ShiftRotationView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const data = state?.value;
  console.log("data", data);
  // const data = state.data;

  const [shiftRotation, setShiftRotation] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);

  const getShiftRotationData = async () => {
    const res = await apiRequest("");
    console.log("SHIFT ROTATION TABLE RES : ", res.data);

    if (res?.error) {
      setShiftRotation([]);
    } else {
      setShiftRotation(res.data);
    }
    const branchRes = await apiRequest("branchList");
    if (branchRes?.data) {
      setBranchList(branchRes.data);
    } else {
      setBranchList([]);
    }
    const dept = await apiRequest("departmentList");
    // console.log('dept list: ', dept.data);
    if (dept.error) {
      setDepartmentList([]);
    } else {
      setDepartmentList(dept.data);
    }
  };

  useEffect(() => {
    getShiftRotationData();
  }, []);

  const recievedColumns = [
    {
      Header: "Employee Name",
      accessor: "employeeName",
    },
    {
      Header: "Employee ID",
      accessor: "staffId",
    },
    {
      Header: "Designation",
      accessor: "",
    },
    {
      Header: "Employee Category",
      accessor: "employeeCategory",
    },
    {
      Header: "Shift Rotation From",
      accessor: "fromDate",
    },
    {
      Header: "Shift Rotation To",
      accessor: "toDate",
    },
  ];

  return (
    <div>
      <div>
        <p className="employee-1">Employee</p>
        <p className="employee-2">Employee / Shift Rotation / Shift View</p>
      </div>
      <form>
        <div className="theme-card">
          <div className="theme-card-header">
            <h6>Shift View</h6>
          </div>
          <div className="theme-card-content">
            <div className="d-flex fw">
              <div className="form-group">
                <label className="form-label">Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="employeeName"
                  // onChange={handleFormReceiveUpdate}
                  // value={formData.receivedDate}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Employee Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="employeeCategory"
                  // onChange={handleFormReceiveUpdate}
                  // value={formData.receivedDate}
                />
              </div>
            </div>
            <div className="d-flex fw">
              <div className="form-group">
                <label className="form-label">Month Category</label>
                <select id="month" className="form-control form-select">
                  <option value="" selected="selected">
                    Select Month
                  </option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Select Week</label>
                <select id="month" className="form-control form-select">
                  <option value="" selected="selected">
                    Select Week
                  </option>
                  <option value="1">All Shift</option>
                  <option value="1">Week 1</option>
                  <option value="2">Week 2</option>
                  <option value="3">Week 3</option>
                </select>
              </div>
            </div>
            <div>
              {/* <Table
                recievedColumns={recievedColumns}
                recievedData={shiftRotation}
              /> */}
              <Calender />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShiftRotationView;
