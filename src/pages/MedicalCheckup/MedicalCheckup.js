import React from "react";
import Breadcrumbs from "../../Component/Breadcrumbs";
import Tables from "../../Component/Tables/Tables";
import "./MedicalCheckup.scss";
import { IoMdRadioButtonOn } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import User from "../../assets/user.png";
import { useState, useEffect } from "react";
import apiRequest from "../../utils/helpers/apiRequest";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-toastify";
import SuccessToast from "../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../Component/CustomToast/ErrorToast";
import { toast } from "react-toastify";
const MedicalCheckup = () => {
  const [checkup, setCheckup] = useState();
  const handleDelete = async (data) => {
    const res = await apiRequest(
      "deleteMedicalCheckupDetails",
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
      toast(<SuccessToast body={res?.data?.message} />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    }
  };
  const recievedColumns = [
    {
      Header: "Employee Name",
      accessor: "staffName",
      Cell: ({ row }) => {
        return (
          <div className="df">
            <img src={User} alt="username" title="username" />
            {row.values.staffName}
          </div>
        );
      },
    },

    {
      Header: "Firm",
      accessor: "orgName",
    },
    {
      Header: "Branch",
      accessor: "branchName",
    },
    {
      Header: "Category",
      accessor: "staffCategory",
    },
    {
      Header: "Last Medical Exam",
      accessor: "checkupDate",
    },
    {
      Header: "Checkup Type",
      accessor: "checkupType",
    },

    {
      Header: "Status",
      accessor: "status",
      Cell: ({ row }) => {
        return (
          <>
            {row.values.status == "Completed" ? (
              <span>
                <IoMdRadioButtonOn className="status-green" />
                Added
              </span>
            ) : row.values.status == "Pending" ? (
              <span>
                {" "}
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
            {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                class="dropdown-item"
                href=""
                onClick={() => handleView(row.original)}
              >
                Edit
              </a>
              <a
                class="dropdown-item"
                onClick={() => handleDelete(row.original)}
              >
                Delete
              </a> */}

            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                class="dropdown-item"
                href=""
                onClick={() => handleEdit(row.original)}
              >
                Edit
              </a>
              {/* <a
                class="dropdown-item"
                href=""
                onClick={() => handleView(row.original)}
              >
                View
              </a> */}
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

  const navigation = useNavigate();
  // const handleView = (data) => {
  //   navigation("/panel/medicalcheckupform", {
  //     state: { value: data, editform: true },
  //   });
  // };

  const handleEdit = (data) => {
    navigation("/panel/medicalcheckupform", {
      state: { value: data, editform: true },
    });
  };
  // const handleView = (data) => {
  //   navigation("/panel/medicalcheckupform", {
  //     state: { value: data, editform: false },
  //   });
  // };

  const getMedicalCheckupData = async () => {
    const res = await apiRequest("getMedicalCheckupList");
    console.log("MEDICALCHECKUP TABLE RES : ", res);

    if (res?.error) {
      setCheckup([]);
    } else {
      setCheckup(res.data.reverse());
    }
  };

  useEffect(() => {
    getMedicalCheckupData();
  }, []);
  return (
    <div>
      <div className="df df-sb">
        <div>
          <p className="employee-1">Employee</p>
          <p className="employee-2">Employee / MedicalCheckup</p>
        </div>
        <button
          className="btn blue-btn"
          onClick={() => navigation("/panel/medicalcheckupform")}
          // onClick={() =>
          //   navigation("/panel/medicalcheckupform", {
          //     state: { addform: true },
          //   })
          // }
        >
          + Add New
        </button>
      </div>
      <div className="df salary-filter my-2 mt-3">
        <div>
          <input className="form-control" placeholder="Employee Name" />
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Firm 1</option>
            <option>Firm 1</option>
            <option>Firm 1</option>
          </select>
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Branch</option>
          </select>
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Category</option>
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
      {<Tables recievedColumns={recievedColumns} recievedData={checkup} />}
    </div>
  );
};

export default MedicalCheckup;
