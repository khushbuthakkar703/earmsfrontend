import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import apiRequest from "../../../utils/helpers/apiRequest";
import "./billexchange.scss";
import BillexchangeTab from "./BillexchangeTab";
import VerifyUserForm from "./VerifyUserForm";
import { Slide, toast } from "react-toastify";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import verified from "../../../assets/verified.png";

const BillExchangeForm = () => {
  const location = useLocation();
  const [billExchangeById, setbillExchangeById] = useState();
  const [billExchangeList, setbillExchangeList] = useState();
  const [selectedBillId, setselectedBillId] = useState();
  const [selectedBillNo, setselectedBillNo] = useState();
  const [departmentList, setDepartmentList] = useState();
  const [billDetails, setBillDetails] = useState();
  const [handOverType, setHandOverType] = useState();
  const [orgList, setOrgList] = useState();
  const [selectedDept, setSelectedDept] = useState();
  const [selectedOrg, setSelectedOrg] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [userData, setUserData] = useState({});

  const navigation = useNavigate();

  const getUserDetails = async () => {
    const res = await apiRequest("headerDetails");
    if (res.error) {
      setUserData({});
    } else {
      setUserData(res.data?.userDetails);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleDept = (deptId) => {
    setSelectedDept(deptId);
  };
  const handlBranch = (e) => {
    setSelectedOrg(e.target.value);
  };

  const getBillExchangeList = async () => {
    const resList = await apiRequest("getBillExchangeList");

    if (resList.error) {
      setbillExchangeList([]);
    } else {
      setbillExchangeList(resList.data);
    }
  };

  const handlHandoverType = (e) => {
    console.log(e.target.value);
    setHandOverType(e.target.value);
  };

  const getDepartmentList = async () => {
    const dept = await apiRequest("departmentList");
    if (dept.error) {
      setDepartmentList([]);
    } else {
      setDepartmentList(dept.data);
    }
  };

  const getOrganizationList = async () => {
    const org = await apiRequest("OrganizationList");
    if (org.error) {
      setOrgList([]);
    } else {
      setOrgList(org.data);
    }
  };

  const getBillExchangeDetails = async () => {
    const res = await apiRequest(
      "getBillExchangeDetails",
      null,
      null,
      `/${selectedBillId}`
    );
    if (res.error) {
      setbillExchangeById([]);
    } else {
      setbillExchangeById(res.data);
      setBillDetails(res.data?.billExChangesValue);
      setselectedBillNo(res.data?.billNumber);
    }
  };

  const handleExchange = async () => {
    const reqData = {
      id: billExchangeById?.id,
      billNumber: selectedBillNo,
      billDate: billExchangeById?.billDate,
      handOverType: handOverType,
      handOverToBranch: selectedOrg,
      handOverToDepartment: selectedDept,
      handOverDate: date,
      billInwardDate: billExchangeById?.billInwardDate,
      exchangeInitiativePerson: userData?.id,
      batchNo: billExchangeById?.batchNo,
      billExChangesValue: billDetails,
    };
    const res = await apiRequest("updateBillExchange", reqData);

    if (res.error) {
      toast(<ErrorToast body={res.error} />, {
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
    navigation(-1);
  };

  const handleVerification = async (formData) => {
    const reqData = {
      username: formData.username,
      password: formData.password,
    };
    console.log("username", reqData.username);
    const res = await apiRequest("checkuser", reqData);
    if (res.error) {
      toast(<ErrorToast body={res.error} />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else {
      setModalOpen(false);
      setIsVerified(true);
    }
  };

  useEffect(() => {
    // const data = location.stat
    console.log(location.state);
    setselectedBillId(location.state);
    getBillExchangeList();
    getDepartmentList();
    getOrganizationList();
  }, []);

  useEffect(() => {
    if (selectedBillId) {
      getBillExchangeDetails();
    }
  }, [selectedBillId]);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div>
      <h1 className="panel-header">Bills</h1>
      {/* {console.log("departmentList: ", departmentList)} */}
      <Breadcrumbs />
      {/* {console.log('BILL DETAILS', billDetails)} */}
      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Bill Exchange</h6>
        </div>{" "}
        <div className="theme-card-content">
          <div className="df fw">
            <div className="form-group">
              <label className="form-label">Bill No</label>
              <input
                type="text"
                className="form-control  form-select"
                readOnly
                value={selectedBillNo}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Bill Date</label>
              <input
                type="text"
                className="form-control"
                value={billExchangeById?.billDate}
                readOnly
              />
            </div>
            <div className="form-group">
              <div className="form-label">Handover Type</div>
              <select className="form-control" onChange={handlHandoverType}>
                <option></option>
                <option value="otherBranch">Other Branch</option>
                <option value="interBranch">Inter Branch</option>
              </select>
            </div>
            {handOverType === "otherBranch" && (
              <div className="form-group">
                <label className="form-label">Handed Over To Branch</label>
                <select
                  className="form-control form-select"
                  onChange={handlBranch}
                >
                  <option></option>
                  {orgList &&
                    orgList.map((val) => {
                      return <option value={val.idOrg}>{val.name}</option>;
                    })}
                </select>
              </div>
            )}
            <div className="form-group">
              <label className="form-label">Handed Over To Department</label>
              <select
                className="form-control  form-select"
                name="handoverType"
                onChange={(e) => handleDept(e.target.value)}
              >
                <option></option>
                {departmentList &&
                  departmentList.map((val) => {
                    return <option value={val.id}>{val.name}</option>;
                  })}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Handed Over Date</label>
              <input
                type="text"
                className="form-control"
                name="handOverData"
                value={date}
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="form-label">Exchange Initiate Person</label>
              <input
                type="text"
                className="form-control"
                readOnly
                value={userData.employeename}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Bill Inwarded Date</label>
              <input
                type="text"
                placeholder="Date From"
                readOnly
                className="form-control"
                value={billExchangeById?.billInwardDate}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Batch No</label>
              <input
                type="text"
                className="form-control"
                name="batchNo"
                value={billExchangeById?.batchNo}
              />
            </div>
            {handOverType === "interBranch" && (
              <div className="form-group">
                <label className="form-label">Exchange Person</label>
                <input
                  type="text"
                  className="form-control"
                  // name='handOverData'
                  // value={username}
                  readOnly
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {billDetails && <BillexchangeTab billDetails={[billDetails]} />}
      <div className="df df-sb  my-2">
        <button className="btn primary-bdr-btn">Cancel</button>

        {/* <button className='btn primary-btn' onClick={handleExchange} disabled>Exchange Bill</button> */}

        {/* image test */}
        <div>
          {handOverType === "interBranch" &&
            (isVerified ? (
              //   <button className='btn success-btn'>Verified</button>
              <img src={verified} alt="verified" />
            ) : (
              <button
                className="btn primary-btn"
                onClick={() => setModalOpen(true)}
              >
                Verify
              </button>
            ))}

          <button
            className="btn primary-btn"
            onClick={handleExchange}
            style={{ marginLeft: 20 }}
            disabled={!isVerified && handOverType === "interBranch"}
          >
            Exchange Bill
          </button>
        </div>
      </div>

      {modalOpen && (
        <VerifyUserForm
          handeleSubmit={handleVerification}
          handleCancel={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default BillExchangeForm;
