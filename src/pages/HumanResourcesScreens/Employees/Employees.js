import React, { useState, useEffect } from "react";
import "./humanResources.scss";
import apiRequest from "../../../utils/helpers/apiRequest";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from "../../../Component/Tables/Tables";
import { IoMdRadioButtonOn } from "react-icons/io";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { useNavigate } from "react-router-dom";
import { formatDateForRequest } from "../../../utils/ConvertDates";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CircularProgress } from "@mui/material";
const Employees = () => {
  const [employeeList, setemployeeList] = useState();
  const [employeeName, setEmployeeName] = useState();
  const [designation, setDesignation] = useState();
  const [designationFilter, setDesignationFilter] = useState();
  const [status, setStatus] = useState();
  // const [statusFilter, setStatusFilter] = useState();
  const [toDate, setToDate] = useState();
  const [fromDate, setFromDate] = useState("");
  const [employeId, setEmployeId] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (data) => {
    const res = await apiRequest(
      "deleteUserDetails",
      null,
      null,
      `/${data.id}`
    );
    if (data.error) {
      toast(<ErrorToast body="Failed to Delete" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else {
      toast(<SuccessToast body="Successfully Deleted" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
      const res = await apiRequest("allListUser");
      console.log(res.data, "EMPLOYEETABLE");
      if (res.error) {
        toast(<ErrorToast body="Failed to fetch user list" />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
      } else {
        setemployeeList(res.data);
      }
    }
  };
  const getEmployeeFilter = async () => {
    // const [status, setStatus] = useState();
    if (
      employeeName ||
      employeId ||
      designationFilter ||
      status ||
      fromDate ||
      toDate ||
      employeeName === undefined
    ) {
      const filterDate = await apiRequest(
        "filterListUser" +
          `?${employeeName ? "employeeName=" + employeeName : ""}${
            employeId ? "&employeeId=" + employeId : ""
          }${designationFilter ? "&designationId=" + designationFilter : ""}${
            status ? "&status=" + status : ""
          }${fromDate ? "&startDate=" + fromDate : ""}${
            toDate ? "&endDate=" + toDate : ""
          }`
      );
      console.log(filterDate?.data, "FilterValue");
      setFilterData(filterDate?.data);
      setLoading(false);
    }
    // http://localhost:8080/api/filterListUser?employeeName=mahesh&employeeId=1&designationId=1&status=0&startDate=10/08/2021&endDate=10/08/2023
  };
  useEffect(() => {
    console.log(filterData, "FILter");
  }, [filterData]);
  const getDesignation = async (queryPayload) => {
    const designationRes = await apiRequest(
      `designationList?designation=${queryPayload}`
    );
    setDesignation(designationRes?.data);
    console.log("designationRes:", designationRes);
  };
  // const getStatus = async(status) =>{
  //   const statusRes = await apiRequest(`statusList?status=${status}`);
  //   setStatus(statusRes?.data);
  //   console.log('statusRes:', statusRes);
  // }

  const handleDesignation = (val) => {
    const desc = designation.find((e) => {
      return e.name === val;
    });
    setDesignationFilter(desc?.id);
  };
  // const handleStatus = (val) => {
  //   console.log(val,"SSSSSS");
  //   setStatusFilter(val)
  // };

  const getallListUser = async (e) => {
    const res = await apiRequest("allListUser");
    console.log(res.data, "EMPLOYEETABLE");
    if (res.error) {
      toast(<ErrorToast body="Failed to fetch user list" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else {
      setemployeeList(res.data);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    // getallListUser();
  }, []);
  useEffect(() => {
    getDesignation();
  }, []);
  useEffect(() => {
    getEmployeeFilter();
  }, [employeeName, employeId, status, toDate, fromDate, designationFilter]);
  useEffect(() => {
    console.log(employeId, "LLLLL");
  }, [employeeName, employeId, status, toDate, fromDate, designationFilter]);
  //  employeId, status, toDate, fromDate, designationFilter]);

  const recievedColumns = [
    {
      Header: "Name",
      accessor: "employeeName",
    },

    {
      Header: "Employee ID",
      accessor: "id",
    },
    {
      Header: "Join Date",
      accessor: "joiningDate",
    },
    {
      Header: "Designation",
      accessor: "designationName",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => {
        //   console.log(row.values);
        return (
          <div class="dropdown">
            <button
              class="dropdown-toggle"
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
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                href=""
                onClick={(e) => {
                  navigate("/panel/employeeForm", {
                    state: { id: row.original.id, editForm: true },
                  });
                }}
                class="dropdown-item"
              >
                Edit
              </a>
              <a
                href=""
                onClick={(e) => {
                  navigate("/panel/viewemployee", {
                    state: { id: row.original.id},
                  });
                }}
                class="dropdown-item"
              >
                view
              </a>
              <a
                class="dropdown-item"
                onClick={() => handleDelete(row.original)}
              >
                Delete
              </a>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="panel-header">Employee</div>
      <div className="df df-sb margin-bottom">
        <div>Employee / Add Employee</div>
        <button
          className="btn blue-btn"
          onClick={() => navigate("/panel/employeeForm")}
        >
          + Add Employee
        </button>
      </div>
      <div className="df salary-filter ">
        <div>
          <input
            className="form-control"
            placeholder="Employee  ID"
            onChange={(e) => setEmployeId(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            placeholder="Employee Name"
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
          />
        </div>
        <div>
          <Autocomplete disableClearable
            className="auto"
            
            freeSolo
            options={designation && designation.map((option) => option?.name)}
            sx={
              {
              ' .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
             
            }
          }
            onChange={(event, newValue) => handleDesignation(newValue)}
            value={designation?.designationName}
            renderInput={(params) => (
              <TextField
              placeholder="designation"
              {...params} variant="outlined"
                onChange={(e) => getDesignation(e.target.value)}
              />
            )}
          />
        </div>
        <div>
          <select
            className="form-control  form-select"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Status</option>
            <option className="dropdown-color" value="0">
              Working
            </option>
            <option className="dropdown-color" value="1">
              Relived
            </option>
          </select>
        </div>
        <div>
          <input
            type="date"
            placeholder="Date From"
            required
            className="form-control"
            onChange={(e) => {
              const fromDate = e.target.value;
              setFromDate(formatDateForRequest(fromDate));
            }}
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Date To"
            required
            className="form-control"
            onChange={(e) => {
              const toDate = e.target.value;
              setToDate(formatDateForRequest(toDate));
            }}
          />
        </div>
      </div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // margin:"5%",
            width:"100%",
            height:"50vh",
          }}
        >
          <CircularProgress style={{width:"40px"}} className="fff" color="secondary" />
        </div>
      ) : (
        <Table recievedColumns={recievedColumns} recievedData={filterData} />
      )}
    </div>
  );
};

export default Employees;
