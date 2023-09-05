import React from "react";
import Breadcrumbs from "../../Component/Breadcrumbs";
import "./MedicalCheckup.scss";
import Vaccination from "./Vaccination";
import { useState, useEffect } from "react";
import schema from "./medicalschema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import convertDate, { formatDateForRequest } from "../../utils/ConvertDates";
import PhysicalExamination from "./Medicalexamination";
import apiRequest from "../../utils/helpers/apiRequest";
import { storage_items } from "../../constants/constantValues";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../Component/CustomToast/ErrorToast";
import { useLocation, useNavigate } from "react-router-dom";
import moment from 'moment/moment';

const MedicalCheckupForm = () => {
  const navigate = useNavigate();
  const [medicalCheckupData, setMedicalCheckupData] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [staff, setStaff] = useState([]);
  const [checkUpData, setCheckUpData] = useState();
  const [recievedDataPhysicalTable, setRecievedDataPhysicalTable] = useState([
    { id: 1, examno: "Exam 1" },
  ]);

  const [recievedDataVaccinationTable, setRecievedDataVaccinationTable] =
    useState([{ id: 1, dose: "Dose 1" }]);
  console.log(
    "recievedDataVaccinationTableaDEAS",
    recievedDataVaccinationTable
  );
  const [departmentList, setDepartmentList] = useState([]);
  const [dataToUpdateVaccineTable, setDataToUpdateVaccineTable] = useState();
  const [dataToUpdatePhysicalTable, setDataToUpdatePhysicalTable] = useState();
  const [orgList, setOrgList] = useState();
  const [medicalCheckup, setMedicalCheckup] = useState("Vaccination");
  const [checkMedicalDetails, setCheckMedicalDetails] = useState();
  console.log("checkMedicalDetails", checkMedicalDetails);
  const [medicalCheckId, setMedicalCheckId] = useState();

  const location = useLocation();

  const { state } = useLocation();
  const data = state?.value;

  const initialData = {
    orgId: "",
    deptId: "",
    branchId: "",
    checkupDate: "",
    staffCategory: "admin",
    staffId: 1,
    checkupType: "",
    medicalCheckUpValue: {
      option1: {
        dose: "",
        vaccinationName: "",
        vaccineFor: "",
        vaccinationDate: "",
        uploadProof: "",
      },
      option2: {
        dose: "",
        vaccinationName: "",
        vaccineFor: "",
        vaccinationDate: "",
        uploadProof: "",
      },
    },
  };
  const [medicalData, setMedicalData] = useState(initialData);
  // console.log("medicalData555", medicalData);

  const [tableData, setTableData] = useState([
    {
      id: 1,
      orgId: 1,
      deptId: null,
      branchId: 1,
      staffCategory: "staffCategory",
      staff: "staff",
      checkupDate: null,
      checkupType: "vaccution",
      createdBy: 1,
      updatedBy: null,
      created_date: "2022-09-15T16:48:15.974",
      updated_date: null,
      medicalCheckUpValue: {
        vaccinationDate: "22/09/2022",
        dose: "dose1",
        uploadProof: "base64",
        vaccinationName: "dose1",
        vaccineFor: "alagu",
      },
    },
    {
      id: 2,
      orgId: 1,
      deptId: null,
      branchId: 1,
      staffCategory: "staffCategory",
      staff: "staff",
      checkupDate: null,
      checkupType: "vaccution",
      createdBy: null,
      updatedBy: 1,
      created_date: null,
      updated_date: "2022-09-15T16:52:08.115",
      medicalCheckUpValue: {
        vaccinationDate: "22/09/2022",
        dose: "dose1",
        uploadProof: "base64",
        vaccinationName: "dose1",
        vaccineFor: "alagu",
      },
    },
    {
      id: 3,
      orgId: 1,
      deptId: null,
      branchId: 1,
      staffCategory: "staffCategory",
      staff: "staff",
      checkupDate: null,
      checkupType: "vaccution",
      createdBy: 1,
      updatedBy: null,
      created_date: "2022-09-15T16:53:17.923",
      updated_date: null,
      medicalCheckUpValue: {
        vaccinationDate: "22/09/2022",
        dose: "dose1",
        uploadProof: "base64",
        vaccinationName: "dose1",
        vaccineFor: "alagu",
      },
    },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleMedicalForm = (e) => {
    const { name, value } = e.target;
    if (name == "branchList") {
      setMedicalData((prevState) => ({
        ...prevState,
        branchId: parseInt(value),
      }));
    } else {
    }
  };

  const organisation = JSON.parse(localStorage.getItem("selectedOrg"));

  const branch = JSON.parse(localStorage.getItem("selectedBranch"));

  const handleUpdateVaccinationTable = () => {
    const currentData = recievedDataVaccinationTable;

    const updatedData = currentData.map((data) => {
      console.log("Updated Data", data);

      if (data.id === dataToUpdateVaccineTable?.id) {
        delete dataToUpdateVaccineTable?.id;
        return { ...data, ...dataToUpdateVaccineTable };
      }

      return data;
    });

    setRecievedDataVaccinationTable(updatedData);
  };
  const handleUpdatePhysicalTable = () => {
    const currentData = recievedDataPhysicalTable;

    const updatedData = currentData.map((data) => {
      if (data.id === dataToUpdatePhysicalTable?.id) {
        delete dataToUpdateVaccineTable?.id;
        return { ...data, ...dataToUpdatePhysicalTable };
      }

      return data;
    });

    // console.log("Updateddddd Data", updatedData);

    setRecievedDataPhysicalTable(updatedData);
  };
  const getOrgList = async () => {
    const res = await apiRequest("OrganizationList");
    if (res.error) {
      setOrgList([]);
    } else {
      setOrgList(res.data);
    }
  };

  const getBranchList = async () => {
    const res = await apiRequest("branchList");
    if (res.error) {
      setBranchList([]);
    } else {
      setBranchList(res.data);
    }
  };

  const medicalFormSubmit = (data) => {
    const formattedData = medicalCheckup.map((val) => {
      return val?.value;
    });
    data["medicalCheckup"] = formattedData;
    // console.log("medicalCheckup FORM DATA: ", data);
  };

  const getData = async () => {
    //TODO: change staff category, staff ID to dynamic

    const userList = await apiRequest("allListUser");
    if (userList?.data) {
      setStaff(userList?.data);
    } else {
      setStaff([]);
    }
    const branchRes = await apiRequest("branchList");
    // console.log('branchList: ', branchRes);
    setBranchList(branchRes.data);
    const res = await apiRequest("departmentList");
    // console.log('lll', res);

    if (res.error) {
      setDepartmentList([]);
    } else {
      setDepartmentList(res.data);
    }
  };

  const formatData = () => {
    const modifiedData = [];

    tableData.map((val) => {
      const medicalCheckupData = val.medicalCheckUpValue;
      const newData = Object.assign(medicalCheckupData, val);
      delete newData.medicalCheckUpValue;
      modifiedData.push(newData);
    });
    setMedicalCheckupData(modifiedData);
  };

  const handleChangeVaccinationTable = (e, id) => {
    const data = {};
    if (data[e.target.name] === "vaccinationDate") {
      console.log(e.target.value,"DDD");
      
    }
    data[e.target.name] = e.target.value;
    data["id"] = id;

    setDataToUpdateVaccineTable(data);
    // console.log(dataToUpdateVaccineTable,"OOOOO");
  };

  const handleChangePhysicalTable = (e, id) => {
    const data = {};

    data[e.target.name] = e.target.value;
    data["id"] = id;

    setDataToUpdatePhysicalTable(data);
  };

  const saveData = async () => {
    if (medicalCheckup === "Vaccination") {
      const arrayToObject = (recievedDataVaccinationTable) => {
        const res = {};
        for (let i = 0; i < recievedDataVaccinationTable.length; i++) {
          const key = "option " + parseInt(i + 1);
          res[key] = recievedDataVaccinationTable[i];
          delete res[key]["id"];
        }
        return res;
      };
      console.log(arrayToObject(recievedDataVaccinationTable));
      console.log(recievedDataVaccinationTable);
      const reqData = {
        orgId: medicalData?.orgId,
        deptId: medicalData?.deptId,
        branchId: medicalData?.branchId,
        checkupDate: formatDateForRequest(medicalData?.checkupDate),
        staffCategory: medicalData?.staffCategory,
        staffId: medicalData?.staffId,
        checkupType: medicalCheckup,
        medicalCheckUpValue: arrayToObject(recievedDataVaccinationTable),
      };
      console.log(reqData, "FFINA");
      const res = await apiRequest("saveMedicalCheckup", reqData);
      if (res.error) {
        toast(<ErrorToast body={res.data.error} />, {
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
        navigate("/panel/medicalcheckup");
      }
    } else {
      console.log(recievedDataPhysicalTable);
      const physicalExamination = (recievedDataPhysicalTable) => {
        const res = {};
        for (let i = 0; i < recievedDataPhysicalTable.length; i++) {
          const key = "option " + parseInt(i + 1);
          res[key] = recievedDataPhysicalTable[i];
          delete res[key]["id"];
        }
        return res;
      };
      const reqData = {
        orgId: medicalData?.orgId,
        deptId: medicalData?.deptId,
        branchId: medicalData?.branchId,
        checkupDate: formatDateForRequest(medicalData?.checkupDate),
        staffCategory: medicalData?.staffCategory,
        staffId: medicalData?.staffId,
        checkupType: medicalCheckup,
        medicalCheckUpValue: physicalExamination(recievedDataPhysicalTable),
      };
      console.log(reqData, "FFINA");
      const res = await apiRequest("saveMedicalCheckup", reqData);
      if (res.error) {
        toast(<ErrorToast body={res.data.error} />, {
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
        navigate("/panel/medicalcheckup");
      }
    }
  };
  const updateData = async () => {
    if (medicalCheckup === "Vaccination") {
      const arrayToObject = (recievedDataVaccinationTable) => {
        const res = {};
        for (let i = 0; i < recievedDataVaccinationTable.length; i++) {
          const key = "option " + parseInt(i + 1);
          res[key] = recievedDataVaccinationTable[i];
          delete res[key]["id"];
        }
        return res;
      };
      console.log(arrayToObject(recievedDataVaccinationTable));
      console.log(recievedDataVaccinationTable);
      const reqData = {
          id: medicalCheckId,
          orgId: medicalData?.orgId,
          deptId : medicalData?.deptId,
          branchId : medicalData?.branchId,
          checkupDate : formatDateForRequest(medicalData?.checkupDate),
          staffCategory : medicalData?.staffCategory,
          staffId : medicalData?.staffId,
          checkupType : medicalCheckup,
          medicalCheckUpValue : arrayToObject(recievedDataVaccinationTable)
      };
      console.log(reqData, "UPDATE");
      const res = await apiRequest("saveMedicalCheckup", reqData);
      if (res.error) {
        toast(<ErrorToast body={res.data.error} />, {
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
        navigate("/panel/medicalcheckup");
      }
    } else {
      console.log(recievedDataPhysicalTable);
      const physicalExamination = (recievedDataPhysicalTable) => {
        const res = {};
        for (let i = 0; i < recievedDataPhysicalTable.length; i++) {
          const key = "option " + parseInt(i + 1);
          res[key] = recievedDataPhysicalTable[i];
          delete res[key]["id"];
        }
        return res;
      };
      const reqData = {
        id: medicalCheckId,
        orgId: medicalData?.orgId,
        deptId: medicalData?.deptId,
        branchId: medicalData?.branchId,
        checkupDate: formatDateForRequest(medicalData?.checkupDate),
        staffCategory: medicalData?.staffCategory,
        staffId: medicalData?.staffId,
        checkupType: medicalCheckup,
        medicalCheckUpValue: physicalExamination(recievedDataPhysicalTable),
      };
      console.log(reqData, "UPDATE WITH PHYSICAL EXAMINAITON");
      const res = await apiRequest("saveMedicalCheckup", reqData);
      if (res.error) {
        toast(<ErrorToast body={res.data.error} />, {
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
        navigate("/panel/medicalcheckup");
      }
    }
  };
  const medicalCheckupDetails = async (id) => {
    const res = await apiRequest(
      "getMedicalCheckupDetails",
      null,
      null,
      `/${id}`
    );
    if (res.error) {
      setCheckMedicalDetails([]);
    } else {
      setCheckMedicalDetails(res.data);
      var checkupDateInput = res.data.checkupDate;
      var checkupDateOutput = checkupDateInput.replace(
        /(\d\d)\/(\d\d)\/(\d{4})/,
        "$3-$1-$2"
      );
      setMedicalData((prevState) => ({
        ...prevState,
        branchId: res.data.branchId,
        deptId: res.data.deptId,
        orgId: res.data.orgId,
        staffName: res.data.staffName,
        staffCategory: res.data.staffCategory,
        checkupDate: checkupDateOutput,
        checkupType: res.data.checkupType,
        medicalCheckUpValue: res.data.medicalCheckUpValue,
        staffId: res.data.staffId,
      }));
      let recievedDataVaccination = [];
      for (const option in res.data.medicalCheckUpValue) {
        const value = res.data.medicalCheckUpValue[option];
        var medicalInput =
          res.data.checkupType === "Vaccination"
            ? value.vaccinationDate
            : value.examinationDate;
        var medicalOutput = medicalInput.replace(
          /(\d\d)\/(\d\d)\/(\d{4})/,
          "$3-$1-$2"
        );
        if (res.data.checkupType === "Vaccination") {
          recievedDataVaccination.push({
            dose: value.dose,
            vaccinationName: value.vaccinationName,
            vaccineFor: value.vaccineFor,
            vaccinationDate: medicalOutput,
          });
          setRecievedDataVaccinationTable(recievedDataVaccination);
        } else {
          recievedDataVaccination.push({
            examno: value.examno,
            examinationDate: value.examinationDate,
            examinationName: value.examinationName,
            vaccineFor: value.vaccineFor,
          });
          setRecievedDataPhysicalTable(recievedDataVaccination);
        }
      }
    }
  };

  const handleAddMoreVaccinationTable = () => {
    const totalLength = recievedDataVaccinationTable.length;
    setRecievedDataVaccinationTable((oldData) => [
      ...oldData,
      { id: totalLength + 1, dose: ` Dose ${totalLength + 1}` },
    ]);
  };

  const handleAddMorePhysicalTable = () => {
    const totalLength = recievedDataPhysicalTable.length;
    setRecievedDataPhysicalTable((oldData) => [
      ...oldData,
      { id: totalLength + 1, examno: `Exam ${totalLength + 1}` },
    ]);
  };

  useEffect(() => {
    if (location.state?.value.id) {
      setMedicalCheckId(location.state.value.id);
      medicalCheckupDetails(location.state.value.id);
    }
  }, []);

  useEffect(() => {
    formatData();
    getData();
  }, []);

  useEffect(() => {
    getOrgList();
    getBranchList();
    handleUpdateVaccinationTable();
  }, [dataToUpdateVaccineTable]);

  useEffect(() => {
    handleUpdatePhysicalTable();
  }, [dataToUpdatePhysicalTable]);
  return (
    <div>
      <h1 className="panel-header">Employee</h1>
      <div>Employee / Medical Checkup</div>
      <form className="mt-3" onSubmit={handleSubmit(medicalFormSubmit)}>
        <div className="theme-card">
          <div className="theme-card-header">
            <h6>Medical Checkup</h6>
          </div>
          <div className="theme-card-content">
            <div className="d-flex fw">
              <div className="form-group">
                <label className="form-label">Select Company</label>
                <select
                  className="form-control  form-select"
                  name={organisation.name}
                  value={medicalData?.orgId}
                  onChange={(e) => {
                    setMedicalData((prevState) => ({
                      ...prevState,
                      orgId: parseInt(e.target.value),
                    }));
                  }}
                  disabled={state?.editform === false ? true : ""}
                >
                  <option>Select Company</option>
                  {orgList &&
                    orgList.map((val) => (
                      <option value={val.idOrg}>{val.name}</option>
                    ))}
                  {/* <option value={organisation?.idOrg}>
                    {organisation.name}
                  </option> */}

                  {/* <option>Select Company</option>
                  <option>Select Company</option> */}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Select Branch</label>
                <select
                  className="form-control  form-select"
                  name={"branchList"}
                  // value ={medicalData?.}
                  onChange={handleMedicalForm}
                  value={medicalData?.branchId}
                  disabled={state?.editform === false ? true : ""}
                >
                  <option>Select Branch</option>
                  {/* <option>{branch.branchName}</option> */}
                  {branchList.length > 0 &&
                    branchList.map((val) => (
                      <option value={val.id}>{val.branchName}</option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Select Department</label>
                <select
                  className="form-control  form-select"
                  name="selectdepat"
                  value={medicalData?.deptId}
                  onChange={(e) => {
                    setMedicalData((prevState) => ({
                      ...prevState,
                      deptId: parseInt(e.target.value),
                    }));
                  }}
                  disabled={state?.editform === false ? true : ""}
                >
                  <option>Select Department</option>
                  {departmentList &&
                    departmentList.map(
                      (val) =>
                        val?.name && (
                          <option value={val?.id}>{val?.name}</option>
                        )
                    )}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Select Staff Category</label>
                <select
                  className="form-control  form-select"
                  value={medicalData?.staffCategory}
                  onChange={(e) => {
                    setMedicalData((prevState) => ({
                      ...prevState,
                      staffCategory: e.target.value,
                    }));
                  }}
                  disabled={state?.editform === false ? true : ""}
                >
                  <option>Staff Category</option>
                  <option value={"staff"}>Staff </option>
                  <option value={"admin"}>Admin </option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Select Staff</label>
                <select
                  className="form-control  form-select"
                  value={medicalData?.staffId}
                  onChange={(e) => {
                    setMedicalData((prevState) => ({
                      ...prevState,
                      staffId: e.target.value,
                    }));
                  }}
                  disabled={state?.editform === false ? true : ""}
                >
                  <option>Select Staff</option>
                  {staff &&
                    staff.map((e) => {
                      return <option value={e.id}>{e.employeeName}</option>;
                    })}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Select Checkup Date </label>
                <input
                  type="date"
                  className="form-control"
                  name="selectcheckupdate"
                  value={moment(medicalData?.checkupDate).format("YYYY-MM-DD")}
                  onChange={(e) => {
                    setMedicalData((prevstate) => ({
                      ...prevstate,
                      checkupDate: e.target.value,
                    }));
                  }}
                  disabled={state?.editform === false ? true : ""}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Checkup Type</label>
                <select
                  className="form-control  form-select"
                  name="checkuptype"
                  value={medicalData?.checkupType}
                  onChange={(e) => {
                    setMedicalData((prevState) => ({
                      ...prevState,
                      checkupType: e.target.value,
                    }));
                  }}
                  disabled={state?.editform === false ? true : ""}
                >
                  <option value={"Vaccination"}>Vaccination</option>
                  <option value={"Physical Examination"}>
                    Physical Examination
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {medicalData?.checkupType === "Vaccination" ? (
          <Vaccination
            handleAddMoreVaccinationTable={handleAddMoreVaccinationTable}
            recievedDataVaccinationTable={recievedDataVaccinationTable}
            handleChangeVaccinationTable={handleChangeVaccinationTable}
            state={state}
          />
        ) : (
          <PhysicalExamination
            handleAddMorePhysicalTable={handleAddMorePhysicalTable}
            recievedDataPhysicalTable={recievedDataPhysicalTable}
            handleChangePhysicalTable={handleChangePhysicalTable}
            state={state}
          />
        )}
        <div className="df df-sb">
          <button className="btn primary-bdr-btn m-2" onClick={() => navigate("/panel/medicalcheckup")}>Cancel</button>
          {state?.editform ?
            <button className="btn primary-btn" onClick={updateData}>
            Update
          </button> : 
          <button className="btn primary-btn" onClick={saveData}>
            Save
          </button>
          } 
        </div>
      </form>
    </div>
  );
};

export default MedicalCheckupForm;
