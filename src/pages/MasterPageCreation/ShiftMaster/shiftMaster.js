import React, { useState, useEffect } from "react";
import apiRequest from "../../../utils/helpers/apiRequest";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from "../../../Component/Tables/Tables";
import { IoMdRadioButtonOn } from "react-icons/io";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import "./shiftMaster.scss";
const ShiftMasterTable = () => {
  const navigate = useNavigate();
  const [shiftTableData, setShiftTableData] = useState([]);
  const [shiftLoading, setShiftLoading] = useState(true);

  //Get Table Data
  const getAllShifts = async () => {
    const shiftMasterResponse = await apiRequest("listAllShifts");
    console.log(shiftMasterResponse, "SHIFT TABLE");
    if (shiftMasterResponse?.data) {
      setShiftTableData(shiftMasterResponse?.data);
      setShiftLoading(false);
    } else {
      setShiftTableData([]);
    }
  };

  //View Data
  const viewData = (val, e) => {
    e.preventDefault();
    navigate("/panel/shiftmasterviewform", { state: { val } });
  };

  //Delete Record
  const handleDelete = async (e) => {
    //  e.preventDefault();
    const deleteRecord = await apiRequest("shifts", null, null, `/${e}`);
    if (deleteRecord.error) {
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
      getAllShifts();
    }
  };

  useEffect(() => {
    getAllShifts();
  }, []);
  useEffect(() => {
    console.log(shiftLoading, "SHIFT");
  }, [shiftLoading]);

  const recievedColumns = [
    {
      Header: "Shift Category",
      accessor: "categoryname",
    },

    {
      Header: "Shift Type",
      accessor: "categorytype",
    },
    {
      Header: "In Time",
      accessor: "intime",
    },
    {
      Header: "Out Time",
      accessor: "outtime",
    },
    {
      Header: "Monday",
      accessor: "mon",
    },
    {
      Header: "Tuesday",
      accessor: "tue",
    },
    {
      Header: "Wednesday",
      accessor: "wed",
    },
    {
      Header: "Thursday",
      accessor: "thu",
    },
    {
      Header: "Friday",
      accessor: "fri",
    },
    {
      Header: "Saturday",
      accessor: "sat",
    },
    {
      Header: "Sunday",
      accessor: "sun",
    },
    {
      Header: "Delay Time",
      accessor: "ldelay",
    },
    {
      Header: "Lunch Time",
      accessor: "lunchtime",
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
                class="dropdown-item"
                onClick={(e) => {
                  viewData(row?.values, e);
                }}
              >
                View
              </a>
              <a
                href=""
                class="dropdown-item"
                onClick={() => navigate("/panel/shiftmastereditform",{state:{val:row?.original}})}
              >
                Edit
              </a>
              <a
                class="dropdown-item"
                onClick={() => handleDelete(row?.original?.id)}
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
      <div className="panel-header">Shift Master</div>
      <div className="df df-sb">
        <div>Master / Shift Master</div>
        <button
          className="btn blue-btn"
          onClick={() => navigate("/panel/shiftmasterform")}
        >
          + Add Shift
        </button>
      </div>

      {shiftLoading ? (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <CircularProgress className="fff" color="secondary" />
        </div>
      ) : (
        <Table
          recievedColumns={recievedColumns}
          recievedData={shiftTableData}
        />
      )}
    </div>
  );
};

export default ShiftMasterTable;
