import React, { useState, useEffect } from "react";
import apiRequest from "../../../utils/helpers/apiRequest";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { IoMdRadioButtonOn } from "react-icons/io";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { useNavigate } from "react-router-dom";
import Table from "../../../Component/Tables/Tables";

const MenuTable = () => {
  const navigate = useNavigate();
  const recievedColumns = [
    {
      Header: "Date",
      accessor: "date",
    },
    {
        Header: "Breakfast",
        accessor: "Breakfast",
      },
      {
        Header: "Lunch",
        accessor: "lunch",
      }, 
      {
        Header: "Snacks",
        accessor: "snacks",
      }, 
      {
        Header: "Dinner",
        accessor: "Dinner",
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
              <a href="" class="dropdown-item" onClick={() => navigate("/panel/menuform")}>
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
      Name: "Iodine Monocloride A.R 50g",
      productClasifiedAs: "Consumables",
      nickName: "Iodine Monocloride",
      QCTaskCategory: "Laboratory"
    }
  ]
  return (
    <div>
      <div className="panel-header">Canteen</div>
      <div className="df df-sb">
        <div>Canteen / Canteen Menu</div>
      
      </div>
      <div className='df filter-size margin-top'>
        <div>
          <select className="form-control  form-select">
            <option>Break Fast</option>
          </select>
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Lunch</option>
          </select>
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Dinner</option>
          </select>
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Snacks</option>
          </select>
        </div>
        <div>
          <input
            type='date'
            placeholder='Date From'
            required
            className='form-control'
            onC
          />
        </div>
        <div>
          <input
            type='date'
            placeholder='Date TO'
            required
            className='form-control'
            onC
          />
        </div>
      </div>


      <Table recievedColumns={recievedColumns} recievedData={receivedData} />
    </div>
  );
};

export default MenuTable;
