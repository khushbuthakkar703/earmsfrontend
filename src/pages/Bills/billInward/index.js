import React from "react";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import { IoMdRadioButtonOn } from "react-icons/io";
import "./billinward.scss";
import Threedot from "../../../assets/threedot.svg";
import Tables from "../../../Component/Tables/Tables";
import { useState, useEffect } from "react";
import apiRequest from "../../../utils/helpers/apiRequest";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { Slide, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { formatDateForRequest } from "../../../utils/ConvertDates";

const BillInward = () => {
  const [billInwardList, setbillInwardList] = useState();
  const [vendorList, setVendorList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [refNum, setRefNum] = useState();
  const [vendor, setVendor] = useState();
  const [branch, setbranch] = useState();
  const [batchNo, setBatchNo] = useState();
  const [fromDate, setFromDate] = useState();
  const [todate, setToDate] = useState();
  const [filteredData, setFilteredData] = useState();

  const navigate = useNavigate();

  const handleDelete = async (data) => {
    const res = apiRequest(
      "deleteBillInwardDetails",
      null,
      null,
      `/${data.id}`,
    );

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
    }
    getBillInwardData();
  };

  const getBillInwardData = async () => {
    const res = await apiRequest("getBillInwardList");

    if (res?.error) {
      setbillInwardList([]);
    } else {
      setbillInwardList(res.data);
    }
    const branchRes = await apiRequest("branchList");
    if (branchRes?.data) {
      setBranchList(branchRes.data);
    } else {
      setBranchList([]);
    }
    const vendorRes = await apiRequest("vendorList");

    if (vendorRes?.data) {
      setVendorList(vendorRes?.data);
    } else {
      setVendorList([]);
    }
  };

  useEffect(() => {
    getBillInwardData();
  }, []);

  const recievedColumns = [
    {
      Header: "Referance",
      accessor: "referenceNumber",
    },
    {
      Header: "Po Number",
      accessor: "poNumber",
    },
    {
      Header: "Vendor",
      accessor: "vendorName",
    },
    {
      Header: "Inwarded Branch",
      accessor: "inwardBranchName",
    },
    {
      Header: "Batch No",
      accessor: "batchNo",
    },
    {
      Header: "Received Date",
      accessor: "receivedDate",
    },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ row }) => {
        return (
          <>
            {row.values.status == "Inwarded" ? (
              <span>
                <IoMdRadioButtonOn className="status-green" />
                Inwarded
              </span>
            ) : row.values.status == "In Progress" ? (
              <span>
                <IoMdRadioButtonOn className="status-yellow" />
                In Progress
              </span>
            ) : row.values.status == "Pending" ? (
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
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={Threedot} alt="Threedot" title="Threedot" />
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                class="dropdown-item"
                onClick={() =>
                  navigate("/panel/billinwardform", {
                    state: { id: row.original.id, purpose: "edit" },
                  })
                }
              >
                Edit
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

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    if (name === "branchId") {
      const branch = JSON.parse(value);
      setbranch(branch?.id);
    }
    if (name === "vendorId") {
      const vendor = JSON.parse(value);
      setVendor(vendor?.id);
    }
  };

  const filterData = async () => {
    if (refNum || branch || vendor || fromDate || todate || batchNo) {
      const data = await apiRequest(
        "filterBillList" +
          `?billFilterType=billInward${
            refNum ? "&referenceNumber=" + refNum : ""
          }&${branch ? "&inwardBranchId=" + branch : ""}${
            batchNo ? "&batchNo=" + batchNo : ""
          }${vendor ? "&vendorId=" + vendor : ""}${
            fromDate ? "&dateFrom=" + fromDate : ""
          }${todate ? "&dateTo=" + todate : ""}`,
      );
      if (data?.data) {
        setFilteredData(data?.data);
      } else {
        setFilteredData(billInwardList);
      }
    } else {
      setFilteredData(billInwardList);
    }
  };

  useEffect(() => {
    filterData();
  }, [branch, vendor, refNum, fromDate, todate, batchNo]);

  return (
    <div>
      <h1 className="panel-header">Bills</h1>
      <div className="df df-sb">
        <Breadcrumbs />
        <button
          className="btn blue-btn"
          onClick={() =>
            navigate("/panel/billinwardform", { state: { purpose: "add" } })
          }
        >
          Inward Bill
        </button>
      </div>
      <div className="df salary-filter">
        <div>
          <input
            className="form-control"
            placeholder="Referance"
            onChange={(e) => setRefNum(e.target.value)}
          />
        </div>
        <div>
          <select
            className="form-control  form-select"
            name="vendorId"
            placeholder="Select Vendor"
            onChange={handleFormDataChange}
          >
            <option>Select vendor</option>
            {vendorList &&
              vendorList.map((val) => {
                return (
                  <option
                    className="dropdown-color"
                    style={{ color: "black" }}
                    value={JSON.stringify(val)}
                  >
                    {val.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div>
          <select
            className="form-control form-select"
            name="branchId"
            placeholder="Select Branch Name"
            onChange={handleFormDataChange}
          >
            <option>Select Branch Name</option>
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
            className="form-control"
            placeholder="Batch No"
            onChange={(e) => setBatchNo(e.target.value)}
          />
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
      <Tables
        recievedColumns={recievedColumns}
        recievedData={filteredData ? filteredData : billInwardList}
      />
    </div>
  );
};

export default BillInward;
