import React, { useEffect } from "react";
import "./shiftrotation.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from "../../Component/Tables/Tables";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SuccessToast from "../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../Component/CustomToast/ErrorToast";
import { Slide, toast } from "react-toastify";
import apiRequest from "../../utils/helpers/apiRequest";
import { formatDateForRequest } from "../../utils/ConvertDates";

const ShiftRotation = () => {
  const [shiftRotation, setShiftRotation] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);

  const [branch, setbranch] = useState();
  const [dept, setDept] = useState();
  const [fromDate, setFromDate] = useState();
  const [todate, setToDate] = useState();
  const [category, setCAtegory] = useState();
  const [filteredData, setFilteredData] = useState();

  const navigation = useNavigate();

  const handleView = (data) => {
    console.log("hh", data);
    navigation("/panel/shiftrotationview", {
      state: { value: data, editForm: true },
    });
  };
  const handleDelete = async (id) => {
    const res = await apiRequest("deleteShiftRotation", null, null, `/${id}`);
    if (res.error) {
      toast(<ErrorToast body="Failed to delete" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else {
      toast(<SuccessToast body="Deleted SuccessFully" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
      getShiftRotationData();
    }
  };
  let navigate = useNavigate();

  const getShiftRotationData = async () => {
    const res = await apiRequest("getShiftRotationList");
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
  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    if (name === "branchId") {
      const branch = JSON.parse(value);
      setbranch(branch?.id);
      console.log(branch?.id, "PPP");
    } else {
    }

    console.log("daada", branch);
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
      Header: "Employee Category",
      accessor: "category",
    },
    {
      Header: "Designation",
      accessor: "designation",
    },

    {
      Header: "Shift Rotation From",
      accessor: "fromDate",
    },
    {
      Header: "Shift Rotation To",
      accessor: "toDate",
    },

    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => {
        // console.log(row.values);
        return (
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="action-icons">
                <BiDotsVerticalRounded />
              </div>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" onClick={() => handleView(row.original)}>
                View
              </a>
              <a
                className="dropdown-item"
                onClick={() => handleDelete(row.original.id)}
              >
                Delete
              </a>
            </div>
          </div>
        );
      },
    },
  ];
  const filterData = async () => {
    // if (branch && todate && dept && fromDate && category) {
    //   const data = await apiRequest(
    //     "filterShiftRotationList" +
    //       `?branchId=${branch}&departmentId=${dept}${
    //         category ? "&employeeCategory=" + category : ""
    //       }&dateFrom=${fromDate}&dateTo=${todate}`
    //   );
    //   if (data?.data) {
    //     setFilteredData(data?.data);
    //   } else {
    //     setFilteredData([]);
    //   }
    // }
    if (branch) {
      const data = await apiRequest(
        "filterShiftRotationList" +
          `?branchId=${branch}${dept ? "&departmentId=" + dept : ""}${
            category ? "&category=" + category : ""
          }${fromDate ? "&dateFrom=" + fromDate : ""}${
            todate ? "&dateTo=" + todate : ""
          }`,
      );
      if (data?.data) {
        setFilteredData(data?.data);
      } else {
        setFilteredData([]);
      }
    }
    // if (branch && todate && dept) {
    //   const data = await apiRequest(
    //     "filterShiftRotationList" +
    //       `?branchId=${branch}&departmentId=${dept}&dateTo=${todate}`
    //   );
    //   if (data?.data) {
    //     setFilteredData(data?.data);
    //   } else {
    //     setFilteredData([]);
    //   }
    // }

    // if (branch && todate) {
    //   const data = await apiRequest(
    //     "filterShiftRotationList" + `?branchId=${branch}&dateTo=${todate}`
    //   );
    //   if (data?.data) {
    //     setFilteredData(data?.data);
    //   } else {
    //     setFilteredData([]);
    //   }
    // }
    // if (branch) {
    //   const data = await apiRequest(
    //     "filterShiftRotationList" + `?branchId=${branch}`
    //   );
    //   console.log(data);
    //   if (data?.data) {
    //     console.log(data?.data, "dataaa");
    //     setFilteredData(data?.data);
    //   } else {
    //     setFilteredData([]);
    //   }
    // }
    // if (branch && dept) {
    //   const data = await apiRequest(
    //     "filterShiftRotationList" + `?branchId=${branch}&departmentId=${dept}`
    //   );
    //   console.log(data);
    //   if (data?.data) {
    //     console.log(data?.data, "dataaa");
    //     setFilteredData(data?.data);
    //   } else {
    //     setFilteredData([]);
    //   }
    // }
    // if (branch && dept && fromDate) {
    //   const data = await apiRequest(
    //     "filterShiftRotationList" +
    //       `?branchId=${branch}&departmentId=${dept}&dateFrom=${fromDate}`
    //   );
    //   if (data?.data) {
    //     setFilteredData(data?.data);
    //   } else {
    //     setFilteredData([]);
    //   }
    // }
  };

  useEffect(() => {
    filterData();
  }, [branch, dept, category, fromDate, todate]);

  return (
    <div>
      <div className="bills-header">
        <div>
          <p className="employee-1">Employee</p>
          <p className="employee-2">Employee / Shift Rotation</p>
        </div>
        <div>
          <button
            className="btn blue-btn"
            onClick={() => navigate("/panel/shiftrotationform")}
          >
            + Assign Shift{" "}
          </button>
        </div>
      </div>
      <div className="df salary-filter my-2">
        <div className="form-group">
          <select className="form-control  form-select" name="handoverType">
            <option>Select Employee Name</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control  form-select" name="handoverType">
            <option>Select Category</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control  form-select" name="handoverType">
            <option>Select Designation</option>
          </select>
        </div>

        {/* <div className="form-group">
          <select
            className="form-control form-select"
            name="branchId"
            placeholder="Select Branch Name"
            // value={dateTo}
            onChange={handleFormDataChange}
          >
            <option>Select Branch Name</option>
            {branchList.length > 0 &&
              branchList.map((val) => (
                <option className="dropdown-color" value={JSON.stringify(val)}>
                  {val.branchName}
                </option>
              ))}
          </select>
        </div> */}

        {/* <div className="form-group">
          <select
            className="form-control  form-select"
            name="handoverType"
            onChange={(e) => {
              setDept(e.target.value);
              console.log(dept);
            }}
          >
            <option> Department </option>
            {departmentList &&
              departmentList.map((val) => {
                return (
                  <option className="dropdown-color" value={val.id}>
                    {val.name}
                  </option>
                );
              })}
          </select>
        </div> */}

        {/* <div className="form-group">
          <select className="form-control  form-select">
            <option>Employee Cat</option>
          </select>
        </div> */}

        <div className="form-group">
          <input
            type="date"
            placeholder="Date From"
            required
            className="form-control"
            onChange={(e) => {
              const d = e.target.value;
              setFromDate(formatDateForRequest(d));
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            placeholder="Date To"
            required
            className="form-control"
            onChange={(e) => {
              const d = e.target.value;
              setToDate(formatDateForRequest(d));
            }}
          />
        </div>
      </div>
      <div>
        <Table
          recievedColumns={recievedColumns}
          recievedData={filteredData ? filteredData : shiftRotation}
        />
      </div>
    </div>
  );
};

export default ShiftRotation;
