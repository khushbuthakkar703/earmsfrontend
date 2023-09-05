import React from "react";
import "./bilsforward.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from "../../../Component/Tables/Tables";
import { useState, useEffect } from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import apiRequest from "../../../utils/helpers/apiRequest";
import { Slide, toast } from "react-toastify";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import { useNavigate } from "react-router-dom";
import { formatDateForRequest } from "../../../utils/ConvertDates";

const Billsforward = () => {
  const navigate = useNavigate();
  const [billforward, setBillForward] = useState();
  const [branchList, setBranchList] = useState([]);
  const [branch, setbranch] = useState();
  const [branchVal, setBranchVal] = useState();
  const [todate, setToDate] = useState();
  const [fromDate, setFromDate] = useState();
  const [filteredData, setFilteredData] = useState();
  const [billNumber, setBillNumber] = useState();

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
      Header: "To Branch",
      accessor: "toBranchName",
    },
    {
      Header: "Forwarded",
      accessor: "forwardDate",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ row }) => {
        return (
          <>
            {row.values.status === "BillForwarded" ? (
              <span>
                <IoMdRadioButtonOn className="status-green" />
                forwarded
              </span>
            ) : row.values.status === "Pending" ? (
              <span>N/A</span>
            ) : null}
          </>
        );
      },
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
                class="dropdown-item"
                onClick={() => handleForward(row.original.id)}
              >
                Forward
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

  const getBillForwardData = async () => {
    const res = await apiRequest("getBillForwardList");
    console.log(res.data);

    if (res?.error) {
      setBillForward([]);
    } else {
      setBillForward(res.data);
    }

    const branchRes = await apiRequest("branchList");
    if (branchRes?.data) {
      setBranchList(branchRes.data);
    } else {
      setBranchList([]);
    }
  };

  const handleForward = (id) => {
    const dataToSend = {};
    dataToSend["id"] = id;
    dataToSend["for"] = "forward";
    console.log("data++++", dataToSend["for"]);
    navigate("/panel/billforwardform", { state: dataToSend });
  };

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;

    if (name === "branchId") {
      const branch = JSON.parse(value);
      setbranch(branch?.id);
      console.log(branch?.id, "PPP");
      console.log(branch, "frombranch");
    }

    if (name === "branch") {
      const branch = JSON.parse(value);
      setBranchVal(branch?.id);
      console.log(branch?.id, "PPP");
      console.log(branch, "tobranch");
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    const res = apiRequest("deleteBillForwardDetails", null, null, `/${id}`);
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
    }
  };

  useEffect(() => {
    getBillForwardData();
  }, []);

  const filterData = async () => {
    if (billNumber || branch || branchVal || fromDate || todate) {
      const data = await apiRequest(
        "filterBillList" +
          `?billFilterType=billForward${
            billNumber ? "&billNumber=" + billNumber : ""
          }${branch ? "&fromBranchId=" + branch : ""}${
            branchVal ? "&toBranchId=" + branchVal : ""
          }${fromDate ? "&dateFrom=" + fromDate : ""}${
            todate ? "&dateTo=" + todate : ""
          }`
      );

      if (data?.data) {
        setFilteredData(data?.data);
      } else {
        setFilteredData(billforward);
      }
    } else {
      setFilteredData(billforward);
    }
  };

  useEffect(() => {
    filterData();
  }, [branch, branchVal, fromDate, todate, billNumber]);

  return (
    <div className="staff-container">
      <div className="bills-header">
        <div>
          <p className="employee-1">Bills</p>
          <p className="employee-2">Bills / Billsforward</p>
        </div>
      </div>
      <div className="df salary-filter">
        {/* <div>
          <input
            className="form-control"
            placeholder="Bill No"
            onChange={(e) => {
              setBillNumber(e.target.value);
            }}
          />
        </div> */}
        <div>
          <input
            className="form-control"
            placeholder="Batch No"
            onChange={(e) => {
              setBillNumber(e.target.value);
            }}
          />
        </div>
        <div>
          <select
            className="form-control form-select"
            name="branchId"
            placeholder="From Branch"
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
            name="branch"
            placeholder="To Branch"
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
          recievedData={filteredData ? filteredData : billforward}
        />
      </div>
    </div>
  );
};

export default Billsforward;
