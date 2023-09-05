import React from "react";
// import '../Billsforward/bilsforward.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from "../../../Component/Tables/Tables";
import "./billreceive.scss";
import { useState, useEffect } from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import apiRequest from "../../../utils/helpers/apiRequest";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { Slide, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { formatDateForRequest } from "../../../utils/ConvertDates";

const Billsreceive = () => {
  const navigate = useNavigate();

  const [receive, setReceive] = useState();
  const [branchList, setBranchList] = useState([]);
  const [toBranch, setToBranch] = useState();
  const [fromBranch, setFromBranch] = useState();
  const [billNo, setBillNo] = useState();
  const [fromDate, setFromDate] = useState();
  const [todate, setToDate] = useState();
  const [filteredData, setFilteredData] = useState();

  const recievedColumns = [
    {
      Header: "Bill No",
      accessor: "billNumber",
    },
    {
      Header: "Bill Date",
      accessor: "billDate",
    },
    {
      Header: "From Branch",
      accessor: "fromBranchName",
    },
    {
      Header: "From Person",
      accessor: "fromPersonName",
    },
    {
      Header: "Receive Branch",
      accessor: "receivedBranchName",
    },
    {
      Header: "Received Date",
      accessor: "receivedDate",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ row }) => {
        return (
          <>
            {row.values.status === "Completed" ? (
              <span>
                <IoMdRadioButtonOn className="status-green" />
                Completed
              </span>
            ) : row.values.status === "Pending" ? (
              <span>
                <IoMdRadioButtonOn className="status-red" />
                Pending
              </span>
            ) : null}
          </>
        );
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => {
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
                class="dropdown-item"
                onClick={() =>
                  navigate("/panel/billsreceiveform", {
                    state: row.original.id,
                  })
                }
              >
                Update
              </a>
              <a
                class="dropdown-item"
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

  const handleDelete = async (id) => {
    const res = apiRequest("deleteBillReceiveDetails", null, null, `/${id}`);
    if (res.error) {
      toast(<ErrorToast body="Failed to Delete" />, {
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
      getBillReceiveData();
    }
  };

  const getBillReceiveData = async () => {
    const res = await apiRequest("getBillReceiveList");
    if (res.error) {
      setReceive([]);
    } else {
      setReceive(res.data);
    }
    const branchRes = await apiRequest("branchList");
    if (branchRes?.data) {
      setBranchList(branchRes.data);
    } else {
      setBranchList([]);
    }
  };

  useEffect(() => {
    getBillReceiveData();
  }, []);

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    if (name === "fromBranch") {
      const Frombranch = JSON.parse(value);
      setFromBranch(Frombranch?.id);
    }
    if (name === "receivedDate") {
      const Tobranch = JSON.parse(value);
      setToBranch(Tobranch?.id);
    }
  };

  const filterData = async () => {
    if (billNo || fromBranch || toBranch) {
      const data = await apiRequest(
        "filterBillList" +
          `?billFilterType=billReceive${billNo ? "&billNumber=" + billNo : ""}${
            fromBranch ? "&fromBranchId=" + fromBranch : ""
          }${toBranch ? "&toBranchId=" + toBranch : ""}${
            fromDate ? "&dateFrom=" + fromDate : ""
          }${todate ? "&dateTo=" + todate : ""}`
      );
      if (data?.data) {
        setFilteredData(data?.data);
      } else {
        setFilteredData(receive);
      }
    } else {
      setFilteredData(receive);
    }
  };

  useEffect(() => {
    filterData();
  }, [billNo, toBranch, fromBranch, fromDate, todate]);

  return (
    <div className="staff-container">
      <div className="bills-header">
        <div>
          <p className="employee-1">Bills</p>
          <p className="employee-2">Bills / Bills Receive</p>
        </div>
      </div>
      <div className="df salary-filter">
        <div>
          <input
            className="form-control"
            placeholder="Bill No"
            onChange={(e) => setBillNo(e.target.value)}
          />
        </div>
        <div>
          <select
            className="form-control form-select"
            name="fromBranch"
            placeholder="Select Branch Name"
            onChange={handleFormDataChange}
          >
            <option>From Branch</option>
            {branchList.length > 0 &&
              branchList.map((val) => (
                <option
                  className="dropdown-color"
                  style={{ color: "black" }}
                  value={JSON.stringify(val)}
                >
                  {val.branchName}
                </option>
              ))}
          </select>
        </div>
        <div>
          <select
            className="form-control form-select"
            name="receivedDate"
            placeholder="Select Branch Name"
            onChange={handleFormDataChange}
          >
            <option>To Branch</option>
            {branchList.length > 0 &&
              branchList.map((val) => (
                <option
                  className="dropdown-color"
                  style={{ color: "black" }}
                  value={JSON.stringify(val)}
                >
                  {val.branchName}
                </option>
              ))}
          </select>
        </div>
        <div>
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
        <div>
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
          recievedData={filteredData ? filteredData : receive}
        />
      </div>
    </div>
  );
};

export default Billsreceive;
