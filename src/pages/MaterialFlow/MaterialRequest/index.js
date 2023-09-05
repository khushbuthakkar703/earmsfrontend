import React from "react";
import "./materialrequest.scss";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import Tables from "../../../Component/Tables/Tables";
import { useState, useEffect } from "react";
import Threedot from "../../../assets/threedot.svg";
import { IoMdRadioButtonOn } from "react-icons/io";
import apiRequest from "../../../utils/helpers/apiRequest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Slide } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";

const MaterialRequest = () => {
  const [mrequest, setMrequest] = useState();
  const [show, setShow] = useState(false);
  const [tracker, setTracker] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(0);

  let navigate = useNavigate();

  const recievedColumns = [
    {
      Header: "Request ID",
      accessor: "requestId",
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <div>
            <input type="checkbox" value="product 1" />
            <span className="mrn ">MRN-001</span>
          </div>
        );
      },
    },
    {
      Header: "Requeted Item",
      accessor: "itemName",
    },
    {
      Header: "Req By (Dep)",
      accessor: "requestFromDepartment",
    },
    {
      Header: "Req By (Bran)",
      accessor: "requestFromBranch",
    },
    {
      Header: "Req To (Dep)",
      accessor: "issueDepartment",
    },
    {
      Header: "Req to (Bran)",
      accessor: "issueBranch",
    },
    {
      Header: "Requested Date",
      accessor: "requestDate",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <div
            className="status"
            onClick={() => {
              setTracker(true);
              if (row.original.status === "Request Sent") {
                setCurrentStatus(1);
              }

              if (row.original.status === "Material Issued") {
                setCurrentStatus(2);
              }

              if (row.original.status === "Admin Issued") {
                setCurrentStatus(3);
              }

              if (row.original.status === "Admin revieved") {
                setCurrentStatus(4);
              }

              if (row.original.status === "Items recieved") {
                setCurrentStatus(5);
              }
            }}
          >
            {row.values.status == "Request Sent" ? (
              <span>
                <IoMdRadioButtonOn className="status-yellow" />
                Requested Sent
              </span>
            ) : null}
          </div>
        );
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => {
        console.log(row.values);
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
                onClick={() => {
                  navigate("/panel/materialrequestform", {
                    state: { id: row.original.id, form: false },
                  });
                }}
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

  const handleDelete = async (data) => {
    const res = await apiRequest(
      "deleteMaterialRequest",
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

  const getMaterialRequestData = async () => {
    const res = await apiRequest("getMaterialRequestList");
    const formattedData = [];
    console.log("MATERIEL REQUEST TABLE RES : ", res);
    if (res?.error) {
      setMrequest([]);
    } else {
      setMrequest(res.data);
      res.data.map((values) => {
        const currentData = values?.requestItems;
        if (currentData && currentData.length > 0) {
          currentData.map((val) => {
            val["requestId"] = values?.requestId;
            val["requestFromDepartment"] = values?.requestFromDepartment;
            val["requestFromBranch"] = values?.requestFromDepartment;
            val["requestDate"] = values?.requestFromDepartment;
            val["status"] = values?.status;
            formattedData.push(val);
          });
          //}
        }
      });
    }
    console.log("FORMTATTED DATA VALUES ::: ", formattedData);
    setMrequest(formattedData);
  };

  useEffect(() => {
    getMaterialRequestData();
  }, []);

  return (
    <div>
      <h1 className="panel-header">Material Flow</h1>

      <div className="df df-sb">
        <Breadcrumbs />
        <div className="d-flex df-fe">
          <button className="btn btn-primary mr" onClick={() => setShow(true)}>
            Download
          </button>
          <button
            className="btn blue-btn"
            onClick={() => {
              navigate("/panel/materialrequestform", { state: { form: true } });
            }}
          >
            Request Material
          </button>
        </div>
      </div>
      <div className="df salary-filter my-2">
        <div>
          <select className="form-control  form-select">
            <option>Request Name</option>
          </select>
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Item Name</option>
          </select>
        </div>
        <div>
          <select className="form-control  form-select">
            <option>Req By (Bran)</option>
          </select>
        </div>

        <div>
          <select className="form-control  form-select">
            <option>Req To (Bran)</option>
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
      <Tables recievedColumns={recievedColumns} recievedData={mrequest} />
      <div className="backdrop">
        {show ? (
          <div className="verify-popup">
            <div className="Verify-form">
              <h6 className="verify-heading">Limit Exceeded</h6>
              <form className="verify-input">
                <div>
                  <p className="popup-content">
                    The selection has exceeded the set limit would you like to
                    download?
                  </p>
                </div>

                <div className="verify-buttons">
                  <button
                    className="btn cancel-button"
                    onClick={() => setShow(false)}
                  >
                    Cancel
                  </button>
                  <button className="btn btn-bg-color">Download</button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>

      <div className="backdrop">
        {tracker ? (
          <div className="verify-popup ">
            <div className="Verify-form wd ">
              <div className="tracter-parent">
                <h6 className="verify-heading">Status Tracker</h6>
                <form className="verify-input width">
                  <div className="df-sb d-flex pd-50 circle-parent">
                    <div className="line1">
                      <div className="line"></div>
                    </div>
                    <div className="status-circle"></div>
                    <div className="status-circle"></div>
                    <div className="status-circle"></div>
                    <div className="status-circle"></div>
                    <div className="status-circle"></div>
                  </div>
                  <div>
                    <p>Material Request</p>
                    <p>Material Issue</p>
                  </div>
                  <p></p>
                </form>
                <div className="verify-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={() => setTracker(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MaterialRequest;
