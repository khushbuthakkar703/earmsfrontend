import React, { useEffect } from "react";
import "./billreceive.scss";
import Billsreceiveformtab from "./Billsreceiveformtab";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../../utils/helpers/apiRequest";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
const Billsreceiveform = () => {
  const [billreceive, setBillReceive] = useState();
  console.log("billreceive", billreceive);
  let [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  console.log("formdata", formData);
  const location = useLocation();
  const navigation = useNavigate();

  const getBillReceiveDetails = async (id) => {
    const res = await apiRequest("getBillReceiveDetails", null, null, `/${id}`);
    if (res.error) {
      setBillReceive([]);
    } else {
      setBillReceive(res.data);
    }
  };

  useEffect(() => {
    if (location.state) {
      setBillReceive(location.state);
      getBillReceiveDetails(location.state);
    }
  }, []);

  const handleFormDataUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await apiRequest("checkuser", formData);
    if (res.error) {
      toast(<ErrorToast body="Request Failed" />, {
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
      const resUpdate = await apiRequest("updateBillReceive", {
        id: billreceive.id,
        status: "Completed",
      });
      navigation(-1);
    }
  };

  return (
    <div className="receive-forms">
      <p className="employee-1">Bills</p>
      <p className="employee-2">Bill / Bill Receive</p>

      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Bill Receive</h6>
        </div>
        <div>
          <div className="billreceive-detail">
            <div className="billdetail-left">
              <div className="receiveform">
                <div className="detail-receivebill-1">
                  <p>Bill NO:</p>
                  <p>From Department:</p>
                  <p>Exchange Date:</p>
                </div>
                <div className="detail-receivebill-2">
                  <p>{billreceive?.billNumber}</p>
                  <p>{billreceive?.fromDepartmentName}</p>
                  <p>{billreceive?.exchangeDate}</p>
                </div>
              </div>
            </div>
            <div className="billdetail-right">
              <div className="receiveform">
                <div className="detail-receivebill-1">
                  <p>Bill Date:</p>
                  <p>From Person:</p>
                  <p>Received Department:</p>
                </div>
                <div className="detail-receivebill-2">
                  <p>{billreceive?.billDate}</p>
                  <p>{billreceive?.fromPersonName}</p>
                  <p>{billreceive?.receivedBranchName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Billsreceiveformtab receivedata={billreceive?.billReceiveValue} />
      </div>

      <div className="Forward-form-button">
        <div>
          <button className="btn btn-outline-primary bg-white m-2">
            Cancel
          </button>
        </div>
        <div>
          <button className="btn primary-btn" onClick={() => setShow(true)}>
            Verify & Accept
          </button>
        </div>
      </div>
      <div className="backdrop">
        {show ? (
          <div className="verify-popup">
            <div className="Verify-form">
              <h6 className="verify-heading">Accept & Verify</h6>
              <form className="verify-input">
                <div>
                  <label>Username</label>
                  <br></br>
                  <input
                    type="text"
                    name="username"
                    onChange={handleFormDataUpdate}
                    value={formData.username}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <br></br>
                  <input
                    type="text"
                    name="password"
                    onChange={handleFormDataUpdate}
                    value={formData.password}
                  />
                </div>
                <div className="verify-buttons">
                  <button
                    className="btn cancel-button"
                    onClick={() => setShow(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Verify
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Billsreceiveform;
