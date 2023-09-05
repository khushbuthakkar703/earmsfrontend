import React, { useState, useEffect } from "react";
import apiRequest from "../../../utils/helpers/apiRequest";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from "../../../Component/Tables/Tables";
import { IoMdRadioButtonOn } from "react-icons/io";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { useNavigate } from "react-router-dom";
import "./binmaster.scss"
const BinMasterTable = () => {
    const navigate = useNavigate();
  const recievedColumns = [
    {
      Header: "Godown",
      accessor: "Name",
    },

    {
      Header: "Plant Name",
      accessor: "productClasifiedAs",
    },
    {
      Header: "Firm",
      accessor: "Picture",
    },
    {
      Header: "Bin Name",
      accessor: "nickName",
    },
    {
      Header: "Department Name",
      accessor: "QCTaskCategory",
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
              <a href="" class="dropdown-item" onClick={() => navigate("/panel/binmasterform")}>
                Edit
              </a>
              <a class="dropdown-item">Delete</a>
            </div>
          </div>
        );
      },
    },
  ];
  const receivedData = [
    {
        Name:"Iodine Monocloride A.R 50g",
        productClasifiedAs:"Consumables",
        nickName:"Iodine Monocloride",
        QCTaskCategory:"Laboratory"
    }
  ]
  return (
    <div>
      <div className="panel-header">Bin Master</div>
      <div className="df df-sb">
        <div>Master / Bin Master</div>
        <button
          className="btn blue-btn"
          onClick={() => navigate("/panel/binmasterform")}
        >
          + Add Bin
        </button>
      </div>

      <Table recievedColumns={recievedColumns} recievedData={receivedData} />
    </div>
  );
};

export default BinMasterTable;
