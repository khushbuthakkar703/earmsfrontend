import React, { useEffect, useState } from "react";
import "./bilsforward.scss";
import Billforwardformtab from "./billforwardformtab";
import { useLocation, useNavigate } from "react-router-dom";
import apiRequest from "../../../utils/helpers/apiRequest";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";

const Billforwardform = () => {
  const location = useLocation();
  const [branchList, setbranchList] = useState();
  const [billForwardList, setbillForwardList] = useState();
  const [billFor, setbillFor] = useState();
  const [selectedBill, setselectedBill] = useState();
  const [selectedBillId, setselectedBillId] = useState();
  const [selectedBillNo, setselectedBillNo] = useState();

  const navigation = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    if (!selectedBillNo) {
      setselectedBillNo(selectedBill.billNumber);
    }
    if (!selectedBill?.toBranch) {
      toast(
        <ErrorToast body="Please make sure all fields are filled in correctly" />,
        {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        }
      );
    } else {
      const reqData = {
        id: selectedBill?.id,
        billNumber: selectedBill?.billNumber,
        billDate: selectedBill?.billDate,
        fromBranch: selectedBill?.fromBranch,
        toBranch: selectedBill?.toBranch,
        billInwardDate: selectedBill?.billInwardDate,
        fromPerson: 3,
        forwardDate: date,
        batchNo: selectedBill?.batchNo,
        billForwardValue: selectedBill.billForwardValue,
      };

      const res = await apiRequest("updateBillForward", reqData);
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
        const resMdVerify = await apiRequest("mdVerify", {
          id: selectedBill?.id,
          verifyType: "BillForward",
        });
        navigation(-1);
      }
    }
  };

  const getBillForwardList = async () => {
    const res = await apiRequest("getBillForwardList");
    if (res.error) {
      setbillForwardList([]);
    } else {
      setbillForwardList(res.data);
    }
    console.log("selectedBill", billForwardList);
  };
  const getBillForwardDetails = async () => {
    const res = await apiRequest(
      "getBillForwardDetails",
      null,
      null,
      `/${selectedBillId}`
    );
    console.log("getBillForwardDetails: ", res);
    if (res.error) {
      setselectedBill([]);
    } else {
      setselectedBill(res.data);
    }
  };
  const getbranchList = async () => {
    const res = await apiRequest("branchList");
    setbranchList(res.data);
  };
  useEffect(() => {
    const data = location.state;
    setselectedBillId(data.id);
    setbillFor(data?.for);
    getBillForwardList();
    getbranchList();
  }, []);
  useEffect(() => {
    if (selectedBillId) {
      getBillForwardDetails();
    }
  }, [selectedBillId]);

  const handleBranch = (e) => {
    const { name, value } = e.target;
    setselectedBill((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div>
      <h1 className="panel-header">Employee</h1>
      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Bill Forward</h6>
        </div>
        <div className="theme-card-content">
          <div className="df fw">
            <div className="form-group">
              <label className="form-label">Bill No </label>
              <input
                type="text"
                className="form-control"
                readOnly
                value={selectedBill?.billNumber}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Bill Date </label>
              <input
                type="text"
                required
                className="form-control"
                value={selectedBill?.billDate}
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="form-label">Bill Inward Date</label>
              <input
                type="text"
                required
                className="form-control"
                value={selectedBill?.billInwardDate}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">From Branch</label>
              <select className="form-control  form-select" disabled>
                <option
                  value={
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={selectedBill?.fromBranchName}
                      readOnly
                    />
                  }
                >
                  {" "}
                  {selectedBill?.fromBranchName}
                </option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">From Person</label>
              <select className="form-control  form-select" disabled>
                <option value={selectedBill?.fromPersonName}>
                  {selectedBill?.fromPersonName}
                </option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">To Branch</label>
              <select
                className="form-control  form-select"
                name="toBranch"
                onChange={handleBranch}
                // value={selectedBill?.toBranch}
              >
                <option>Select </option>
                {branchList &&
                  branchList.map((val) => {
                    return (
                      <>
                        <option value={val.id}>{val.branchName}</option>
                      </>
                    );
                  })}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Forward Date</label>
              <input
                type="text"
                required
                className="form-control"
                value={date}
                readOnly
              />
            </div>
            {/* <div className="form-group">
              <label className="form-label">Batch No </label>
              <input
                type="text"
                required
                className="form-control"
                value={selectedBill?.batchNo}
                readOnly
              />
            </div> */}
          </div>
        </div>
      </div>
      <div>
        {selectedBill && (
          <Billforwardformtab recievedData={selectedBill?.billForwardValue} />
        )}
      </div>

      <div className="Forward-form-button">
        <div>
          <button className="btn btn-outline-primary bg-white m-2">
            Cancel
          </button>
        </div>
        <div>
          {billFor === "forward" && (
            <button
              className="btn primary-btn"
              type="submit"
              onClick={submitForm}
            >
              Forward
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Billforwardform;
