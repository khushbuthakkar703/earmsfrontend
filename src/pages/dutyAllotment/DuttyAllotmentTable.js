import React from "react";
import Breadcrumbs from "../../Component/Breadcrumbs";
import Tables from "../../Component/Tables/Tables";
import "./duttyallotment.scss";
import User from "../../assets/user.png";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../utils/helpers/apiRequest";
import Threedot from "../../assets/threedot.svg";
import { useState, useEffect } from "react";
import DutyAllotment from "./index";
import { Slide, toast } from "react-toastify";
import ErrorToast from "../../Component/CustomToast/ErrorToast";
import SuccessToast from "../../Component/CustomToast/SuccessToast";

const DutyAllotmentTable = () => {
  const [dutyData, setDutyData] = useState([]);
  const handleDelete = async (data) => {
    const res = await apiRequest(
      "deleteDutyDetails",
      null,
      null,
      `/${data.allotmentId}`,
    );
    if (res.error) {
      toast(<ErrorToast body="Failed to delete" />, {
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
      // navigate(-1);
    }
  };
  const recievedColumns = [
    {
      Header: "Name",
      accessor: "staffName", //TODO:name from api
      // Cell: ({ row }) => {
      //     console.log(row.values);
      //     return (
      //         <div className="df">
      //             <img src={User} alt="username" title="username" />
      //             {row.values.name}
      //         </div>
      //     )
      // }
    },
    {
      Header: "Employee ID",
      accessor: "staffId",
    },
    {
      Header: "Current Duty",
      accessor: "currentDuty",
    },
    {
      Header: "Assigned Duty",
      accessor: "assignDuty",
    },
    {
      Header: "Assigned Shift",
      accessor: "assignedShift",
    },
    {
      Header: "Assigned Duty Date",
      accessor: "assignedDate",
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => {
        console.log("row#######", row);
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
              <img src={Threedot} alt="Threedot" title="Threedot" />
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                class="dropdown-item"
                href="#"
                onClick={() => handleView(row.original)}
              >
                {" "}
                View{" "}
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
  const navigation = useNavigate();
  const handleView = (data) => {
    navigation("/panel/dutyAllotment", { state: data });
  };
  const navigate = useNavigate();

  console.log("dutyData5533355", dutyData);

  const navigateToform = () => {
    // 👇️ navigate to /contacts
    navigate("/panel/dutyAllotment", { state: { form: true } });
  };

  const getDutyAllotmentData = async () => {
    const res = await apiRequest("getAssignDutyFilterList");
    console.log("DUTYALLOTMENT TABLE RES : ", res);

    if (res?.error) {
      setDutyData([]);
    } else {
      // setDutyData(res);
      if (res?.data) {
        const formattedData = [];

        const allData = res?.data;
        console.log("allData : ", allData);
        allData.map((val) => {
          const currentData = val;

          if (currentData?.assignDutyDetails.length) {
            currentData?.assignDutyDetails.map((data) => {
              data["assignedDate"] = currentData?.assignedDate;
              data["assignedShift"] = currentData?.assignedShift;
              formattedData.push(data);
            });
          }
        });
        setDutyData(formattedData);
      }
    }
  };

  const handleChange = (e) => {
    // const data = dutyData.filter((user) =>
    //   JSON.stringify(user).match(new RegExp(search, "gi")),
    // );
    // console.log(data);
  };

  useEffect(() => {
    getDutyAllotmentData();
  }, []);
  return (
    <div>
      <div className="df df-sb">
        <div>
          <p className="employee-1">Employee</p>
          <p className="employee-2">Employee / Duty</p>
        </div>
        <button className="btn blue-btn" onClick={navigateToform}>
          + Add Duty
        </button>
      </div>
      <div className="df salary-filter my-2">
        <div>
          <input
            className="form-control"
            // value={search}
            onChange={handleChange}
            placeholder="Employee Name"
          />
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Shift</option>
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
      {dutyData && (
        <Tables recievedColumns={recievedColumns} recievedData={dutyData} />
      )}
    </div>
  );
};

export default DutyAllotmentTable;
