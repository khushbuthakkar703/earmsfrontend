import React, { useEffect } from "react";
// import "./shiftrotation.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
// import Table from "../../../Component/Tables";
import Table from "../../Component/Tables/Tables";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import SuccessToast from "../../Component/CustomToast/SuccessToast";
// import ErrorToast from "../../Component/CustomToast/ErrorToast";
import { Slide, toast } from "react-toastify";
import apiRequest from "../../utils/helpers/apiRequest";
import moment from "moment";
import { formatDateForRequest } from "../../utils/ConvertDates";
// import { formatDateForRequest } from "../../utils/ConvertDates";

const ViewShiftsTable = () => {
  const [shiftRotation, setShiftRotation] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  const [dateList, setDateList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [shiftList, setShiftList] = useState([]);
  const [branch, setbranch] = useState();
  const [dept, setDept] = useState();
  const [fromDate, setFromDate] = useState();
  const [todate, setToDate] = useState();
  const [category, setCAtegory] = useState();
  const [filteredData, setFilteredData] = useState();
  const today = new Date().toISOString().split("T")[0];
  const navigation = useNavigate();

  const handleView = (data) => {
    console.log("hh", data);
    navigation("/panel/shiftrotationform", {
      state: { value: data, editForm: true },
    });
  };
  //   const handleDelete = async (id) => {
  //     const res = await apiRequest("deleteShiftRotation", null, null, `/${id}`);
  //     if (res.error) {
  //       toast(<ErrorToast body="Failed to delete" />, {
  //         transition: Slide,
  //         hideProgressBar: true,
  //         autoClose: 2000,
  //       });
  //     } else {
  //       toast(<SuccessToast body="Deleted SuccessFully" />, {
  //         transition: Slide,
  //         hideProgressBar: true,
  //         autoClose: 2000,
  //       });
  //       getShiftRotationData();
  //     }
  //   };
  let navigate = useNavigate();

  const getShiftData = async () => {
    const resShift = await apiRequest("listAllShifts");

    if (resShift.error) {
      setShiftList([]);
    } else {
      console.log("SHIFTS", resShift?.data);
      setShiftList(resShift.data);
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

  const getDate = () => {
    let dateArray = [];
    let finalarr = [];
    if (fromDate && todate) {
      let currentDate = moment(fromDate);
      let end = moment(todate);
      while (currentDate <= end) {
        dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
        currentDate = moment(currentDate).add(1, "days");
      }
      console.log("DATE", dateArray);
      dateArray?.map((e) => {
        const obj = { Header: e, accessor: "shiftName" };
        finalarr.push(obj);
      });
      console.log(finalarr, "AOPOP");
      recievedColumns?.push(...finalarr);
      // setDateList(finalarr);
      const val = JSON.parse(JSON.stringify(dateList));
      const columns = [...recievedColumns, ...finalarr];
      // const columns = [].concat(dateList,recievedColumns)
      console.log(columns, "COLUMNS");
      setTableColumns(columns);
    }
  };

  useEffect(() => {
    getShiftData();
    getDate();
  }, []);
  useEffect(() => {
    getDate();
  }, [fromDate, todate]);

  const recievedColumns = [
    {
      Header: "EmployeeId",
      accessor: "empId",
    },
    {
      Header: "EmployeeName",
      accessor: "empName",
    },
    // {
    //   Header: "Action",
    //   accessor: "action",
    //   Cell: ({ row }) => {
    //     console.log(row.values);
    //     return (
    //       <div className="dropdown">
    //         <button
    //           className="dropdown-toggle"
    //           type="button"
    //           id="dropdownMenuButton"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           <div className="action-icons">
    //             <BiDotsVerticalRounded />
    //           </div>
    //         </button>
    //         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //           {/* <a class="dropdown-item" onClick={() => handleView(row.original)}>
    //             View
    //           </a> */}
    //           <a
    //             className="dropdown-item"
    //             // onClick={() => handleDelete(row.original.id)}
    //           >
    //             Delete
    //           </a>
    //         </div>
    //       </div>
    //     );
    //   },
    // },
  ];
  // useEffect(() => {
  //   console.log(recievedColumns,"POPOJ");
  // }, [recievedColumns]);
  useEffect(() => {
    console.log(tableColumns, "KASKAS");
  }, [tableColumns]);
  useEffect(() => {
    console.log(filteredData, "fiucj");
  }, [filteredData]);
  const filterData = async () => {
    if (branch && todate && fromDate) {
      const data = await apiRequest(
        "ViewShifts" +
          `?branchId=${branch}&dateFrom=${fromDate}&dateTo=${todate}`,
      );
      const formattedData = [];
      if (data?.data) {
        data?.data.map((val) => {
          const current = val?.shifts;
          if (current && current.length > 0) {
            current?.map((e) => {
              e["empId"] = val?.empId;
              e["empName"] = val?.empName;
              formattedData.push(e);
            });
          }
        });
        setFilteredData(formattedData);
      } else {
        setFilteredData([]);
      }
    }
    // if (branch) {
    //   const data = await apiRequest(
    //     "filterShiftRotationList" +
    //       `?branchId=${branch}${dept ? "&departmentId=" + dept : ""}${
    //         category ? "&category=" + category : ""
    //       }${fromDate ? "&dateFrom=" + fromDate : ""}${
    //         todate ? "&dateTo=" + todate : ""
    //       }`
    //   );
    //   if (data?.data) {
    //     setFilteredData(data?.data);
    //   } else {
    //     setFilteredData([]);
    //   }
    // }
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
  }, [branch, fromDate, todate]);

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
          <select
            className="form-control form-select"
            name="branchId"
            placeholder="Select Branch Name"
            // value={dateTo}
            onChange={handleFormDataChange}
          >
            <option> Branch </option>
            {branchList.length > 0 &&
              branchList.map((val) => (
                <option className="dropdown-color" value={JSON.stringify(val)}>
                  {val.branchName}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
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
        </div>
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
        <div className="form-group">
          <select
            className="form-control form-select"
            name="branchId"
            placeholder="Select Branch Name"
            // value={dateTo}
            onChange={handleFormDataChange}
          >
            <option>Select Shift</option>
            {shiftList &&
              shiftList.map(
                (val) =>
                  val?.name && (
                    <option className="dropdown-color" value={val?.shiftname}>{val?.shiftname}</option>
                  ),
              )}
          </select>
        </div>
        <div className="form-group">
          <select
            className="form-control form-select"
            name="branchId"
            placeholder="Select Branch Name"
            // value={dateTo}
            onChange={handleFormDataChange}
          >
            <option> Shift NO</option>
            {shiftList &&
              shiftList.map(
                (val) =>
                  val?.name && (
                    <option className="dropdown-color" value={val?.shiftnumber}>{val?.shiftnumber}</option>
                  ),
              )}
          </select>
        </div>
      </div>
      <div>
        <Table recievedColumns={recievedColumns} recievedData={filteredData} />
      </div>
    </div>
  );
};

export default ViewShiftsTable;
