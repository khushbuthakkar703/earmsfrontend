import React, { useEffect } from "react";
import "../Billsforward/bilsforward.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from "../../../Component/Tables/Tables";
import { IoMdRadioButtonOn } from "react-icons/io";
import { useState } from "react";
import apiRequest from "../../../utils/helpers/apiRequest";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { Slide, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Billsexchangetable = () => {
  const [exchange, setExchange] = useState();
  const [billNo, setBillNo] = useState();
  const [filteredData, setFilteredData] = useState();

  const navigate = useNavigate();
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
      Header: "Vendor Name",
      accessor: "billExChangesValue.VendorName",
    },
    {
      Header: "Bill Amount",
      accessor: "billExChangesValue.Amount",
    },
    {
      Header: "Bill Inwarded Date",
      accessor: "billInwardDate",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ row }) => {
        return (
          <>
            {row.values.status === "Exchanged" ? (
              <span>
                <IoMdRadioButtonOn className="status-green" />
                Bill Exchanged
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
              <a
                className="dropdown-item"
                onClick={() => handleEdit(row.original.id)}
              >
                Edit
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
  const handleEdit = (id) => {
    navigate("/panel/billsexchange", { state: id });
  };
  const handleDelete = (id) => {
    console.log("deleted id: ", id);
    const res = apiRequest("deleteBillExchangeDetails", null, null, `/${id}`);
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
    getBillExchangeData();
  };

  const getBillExchangeData = async () => {
    const res = await apiRequest("getBillExchangeList");
    if (res?.error) {
      setExchange([]);
    } else {
      setExchange(res.data);
    }
  };

  useEffect(() => {
    getBillExchangeData();
  }, []);

  const filterData = async () => {
    if (billNo) {
      const data = await apiRequest(
        "filterBillList" +
          `?billFilterType=billExchange${billNo ? "&billNumber=" + billNo : ""}`
      );
      if (data?.data) {
        setFilteredData(data?.data);
      } else {
        setFilteredData(exchange);
      }
    } else {
      setFilteredData(exchange);
    }
  };

  useEffect(() => {
    filterData();
  }, [billNo]);

  return (
    <div className="staff-container">
      <div className="bills-header">
        <div>
          <p className="employee-1">Bills</p>
          <p className="employee-2">Bills / Bills Exchange</p>
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
          <select className="form-control  form-select">
            <option>From Branch</option>
          </select>
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Receive Branch</option>
          </select>
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Status</option>
          </select>
        </div>
        <div>
          <input
            type="date"
            placeholder="Date From"
            required
            className="form-control"
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Date To"
            required
            className="form-control"
          />
        </div>
      </div>
      <div>
        <Table
          recievedColumns={recievedColumns}
          recievedData={filteredData ? filteredData : exchange}
        />
      </div>
    </div>
  );
};

export default Billsexchangetable;
