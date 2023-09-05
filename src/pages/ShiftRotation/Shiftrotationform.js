import React, { useEffect } from "react";
import makeAnimated from "react-select/animated";
import "./shiftrotation.scss";
import ShiftRotationTab from "./Shifttotationtab";
import schema from "./shiftrottionschema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import { Slide, toast } from "react-toastify";

import {
  category,
  dayNames,
  storage_items,
} from "../../constants/constantValues";
import { formatEmployeeDataWithDataInKey } from "../../utils/helpers/formatEmployeeData";
import apiRequest from "../../utils/helpers/apiRequest";
import ErrorToast from "../../Component/CustomToast/ErrorToast";
import SuccessToast from "../../Component/CustomToast/SuccessToast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import convertDate, {
  dateConverter,
  datePrefillFormat,
  formatDateForRequest,
} from "../../utils/ConvertDates";

const ShiftRotationForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const data = state?.value;
  console.log(state,"STATE");
  // const data = state.data;

  const shiftReqData = {
    branchId: "",
    deptID: "",
    shiftName: "",
    fromDate: "",
    toDate: "",
    weekOff: "",
    category: "",
    noOfEmployees: "",
    shift1: "",
    shift2: "",
    shift3: "",
    shift1Staffs: [],
    shift2Staffs: [],
    shift3Staffs: [],
  };
  const [departmentList, setDepartmentList] = useState([]);
  const [formData, setFormData] = useState(shiftReqData);
  const [resData, setResData] = useState([]);

  const [employees, setEmployees] = useState([{ label: "", value: "" }]);
  const [shiftList, setShiftList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [shift1, setShift1] = useState([]);
  const [shift2, setShift2] = useState([]);
  const [shift3, setShift3] = useState([]);
  const [branchName, setBranchName] = useState({});
  const [departmentName, setDepartmentName] = useState();
  const [shiftName, setShiftName] = useState();

  useEffect(() => {}, [branchName]);
  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    if (name === "branchId") {
      const branch = JSON.parse(value);
      setFormData((prevState) => ({
        ...prevState,
        branchId: value,
      }));
      setBranchName(branch.branchName);
    } else {
    }
    // filterEmployee();
  };

  const filterEmployee = (e) => {
    // const { name, value } = e.target;
    // const parser = JSON.parse(employees);
    const filteredList = employees?.filter((empList) => {
      const parser = empList?.value;
      console.log(parser, "PAE");
      return (
        parser?.branchId === formData?.branchId ||
        parser?.deptId === formData?.deptID ||
        parser?.category === formData?.category
      );
      // if (name == "branchId") {
      //   return parser?.branchId === value;
      // }
      // if (name == "branchId") {
      //   return parser?.branchId === value;
      // }
      // if (name == "branchId") {
      //   return parser?.branchId === value;
      // }
    });
    console.log(filteredList, "FFFKF");
    setEmployees(filteredList);
  };
  // useEffect(() => {
  //   console.log(employees, "EMPLOYEES");
  // }, [employees]);
  const handleShift1 = (e) => {
    console.log(e, "EEEE");
    const shift1 = [];
    e.map((e) => {
      const value = JSON.parse(e.value);
      shift1.push(value);
    });
    let finalList = JSON.parse(JSON.stringify(employees));
    console.log(finalList, "FINALLIST1");
    finalList.pop(e);
    setEmployees(finalList);
    // const reshift = [...shift1]
    // setShift1((prev) => [...prev, ...shift1]);
    setShift1(shift1);
    setFormData((prevState) => ({
      ...prevState,
      shift1Staffs: e,
      shift1: shift1.length.toString(),
    }));
  };
  const handleShift2 = (e) => {
    const shift2 = [];
    e.map((e) => {
      const value = JSON.parse(e.value);
      shift2.push(value);
    });
    let finalList = JSON.parse(JSON.stringify(employees));
    console.log(finalList, "FINALLIST2");
    finalList.pop(e);
    console.log(finalList, "LIST");
    setEmployees(finalList);
    setShift2(shift2);

    setFormData((prevState) => ({
      ...prevState,
      shift2Staffs: e,
      shift2: shift2.length.toString(),
    }));
  };

  const handleShift3 = (e) => {
    console.log(e, "EMPLOYEEDETAIOL");
    const shift3 = [];
    e.map((e) => {
      const value = JSON.parse(e.value);
      shift3.push(value);
    });
    let finalList = JSON.parse(JSON.stringify(employees));
    console.log(finalList, "FINALLIST3");
    finalList.pop(e);
    setEmployees(finalList);
    setShift3(shift3);

    setFormData((prevState) => ({
      ...prevState,
      shift3Staffs: e,
      shift3: shift3.length.toString(),
    }));
  };

  const getEmployeeList = async () => {
    if (state?.editForm) {
      setFormData((prev) => ({
        ...prev,
        branchId: data?.branchId,
        deptID: data?.deptID,
        shiftId: data?.shiftId,
        fromDate: data?.fromDate,
        toDate: data?.toDate,
        weekOff: "",
        category: data?.category,
        noOfEmployees: data?.noOfEmployees,
        shift1: data?.shift1,
        shift2: data?.shift2,
        shift3: data?.shift3,
        shift1Staffs: data?.shift1Staffs,
        shift2Staffs: data?.shift2Staffs,
        shift3Staffs: data?.shift3Staffs,
      }));

      setBranchName(data?.branchName);
      setDepartmentName(data?.deptName);
      setShiftName(data?.shiftName);
      setShift1(data?.shift1Staffs);
      setShift2(data?.shift2Staffs);
      setShift3(data?.shift3Staffs);

      //set prefilled shift 1 data

      const shift1Data = [];
      data?.shift1Staffs?.map((e) => {
        const currentData = {
          label: e?.employeeName,
          value: JSON.stringify({
            // staffId: e?.staffId,
            // branchId: e?.branchId,
            // deptId: e?.deptId,
            empId: e?.id,
            // employeeName: e?.employeeName,
            // designation: e?.designation,
            // category: e?.employeeType,
            weekOff: "sunday",
          }),
        };
        shift1Data.push(currentData);
      });
      console.log(shift1Data, "Shift 1");
      setFormData((prev) => ({ ...prev, shift1Staffs: shift1Data }));

      //set prefilled shift 2 data

      const shift2Data = [];
      data?.shift2Staffs?.map((e) => {
        const currentData = {
          label: e?.employeeName,
          value: JSON.stringify({
            // staffId: e?.staffId,
            // branchId: e?.branchId,
            // deptId: e?.deptId,
            empId: e?.id,
            // employeeName: e?.employeeName,
            // designation: e?.designation,
            // category: e?.employeeType,
            weekOff: "sunday",
          }),
        };
        shift2Data.push(currentData);
      });
      console.log(shift2Data, "Shift 2");
      setFormData((prev) => ({ ...prev, shift2Staffs: shift2Data }));

      //set prefilled shift 3 data

      const shift3Data = [];
      data?.shift3Staffs?.map((e) => {
        const currentData = {
          label: e?.employeeName,
          value: JSON.stringify({
            // staffId: e?.staffId,
            // branchId: e?.branchId,
            // deptId: e?.deptId,
            empId: e?.id,
            // employeeName: e?.employeeName,
            // designation: e?.designation,
            // category: e?.employeeType,
            weekOff: "sunday",
          }),
        };
        shift3Data.push(currentData);
      });
      console.log(shift3Data, "Shift 3");

      setFormData((prev) => ({ ...prev, shift3Staffs: shift3Data }));
    }

    const res = await apiRequest("allListUser");

    if (res?.error) {
      setEmployees([]);
    } else {
      const fotmattedData = [];
      console.log(res?.data, "DATA");

      res.data.map((val) => {
        const currentData = {
          label: val?.employeeName,
          value: JSON.stringify({
            staffId: val?.id,
            // branchId: val?.branchId,
            // deptId: val?.deptId,
            empId: val?.id,
            employeeName: val?.employeeName,
            designation: val?.designationName,
            // category: val?.employeeType,
            weekOff: "1",
          }),
        };

        fotmattedData.push(currentData);
      });
      console.log("lll");
      setEmployees(fotmattedData);
      setFormData((prev) => ({
        ...prev,
        ["noOfEmployees"]: "15",
      }));
    }
  };
  const weekOff = (e, id) => {
    console.log(e, "EE");
    console.log(id, "ID");
  };
  useEffect(() => {
    console.log(state?.value, "Stateuse");
    getEmployeeList();
  }, [state?.value]);
  useEffect(() => {
    console.log("Form data",formData);
    // getEmployeeList();
  }, [formData]);
  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formSubmit = async (e) => {
    e.preventDefault();

    if (state?.editForm) {
      const staff1 = formData?.shift1Staffs?.map((val) => {
        return JSON.parse(val?.value);
      });
      console.log(staff1, "FFF");
      const updateData = {
        id: data?.id,
        branchId: parseInt(formData?.branchId),
        deptID: formData?.deptID,
        shiftId: formData?.shiftId,
        fromDate: dateConverter(formData?.fromDate),
        toDate: dateConverter(formData?.toDate),
        weekOff: "sunday",
        category: formData?.category,
        noOfEmployees: formData?.noOfEmployees,
        shift1: formData?.shift1,
        shift2: formData?.shift2,
        shift3: formData?.shift3,
        shift1Staffs: formData?.shift1Staffs?.map((val) => {
          return JSON.parse(val?.value);
        }),
        shift2Staffs: formData?.shift2Staffs?.map((val) => {
          return JSON.parse(val?.value);
        }),
        shift3Staffs: formData?.shift3Staffs?.map((val) => {
          return JSON.parse(val?.value);
        }),
      };
      console.log(updateData, "UPDATEDFORM");
      if (updateData?.branchId && updateData?.deptID && updateData?.shiftId) {
        const updateShiftResponse = await apiRequest(
          "updateShiftRotation",
          updateData,
        );
        try {
          if (updateShiftResponse.data) {
            toast(<SuccessToast body="updated successfully" />, {
              transition: Slide,
              hideProgressBar: true,
              autoClose: 2000,
            });
            navigate("/panel/shiftrotation");
          } else {
            toast(<ErrorToast body="Failed to update" />, {
              transition: Slide,
              hideProgressBar: true,
              autoClose: 2000,
            });
          }
        } catch (err) {}
      } else {
        toast(<ErrorToast body="Fields should not be empty" />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
      }
    } else {
      const reqData = {
        branchId: parseInt(formData?.branchId),
        deptID: formData?.deptID,
        toDate: dateConverter(formData?.toDate),
        shift1Staffs: formData?.shift1Staffs
          ?.map((val) => {
            return JSON.parse(val?.value);
          })
          .map(({ employeeName, designation, staffId, ...rest }) => {
            return rest;
          }),
        shift2Staffs: formData?.shift2Staffs
          ?.map((val) => {
            return JSON.parse(val?.value);
          })
          .map(({ employeeName, designation, staffId, ...rest }) => {
            return rest;
          }),
        shift3Staffs: formData?.shift3Staffs
          ?.map((val) => {
            return JSON.parse(val?.value);
          })
          .map(({ employeeName, designation, staffId, ...rest }) => {
            return rest;
          }),
        shiftName: formData?.shiftName,
      };
      if (
        reqData?.branchId &&
        reqData?.shift1Staffs &&
        reqData?.toDate &&
        reqData?.deptID
      ) {
        console.log(reqData, "RQQ");
        const shiftresponse = await apiRequest("saveShiftRotation", reqData);
        try {
          if (shiftresponse.data) {
            toast(<SuccessToast body="saved successfully" />, {
              transition: Slide,
              hideProgressBar: true,
              autoClose: 2000,
            });
            navigate("/panel/shiftrotation");
          }
        } catch (err) {
          toast(<ErrorToast body="Failed to save Data" />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
        }
        console.log(reqData, "REQ DATA");
      } else
        toast(<ErrorToast body="Fill all the fields" />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
    }
  };

  // const getDataById = async ()=>{
  //   if(state){
  //     const res = await apiRequest('getShiftRotationDetails/'+ state.id)
  //
  //   }
  // }

  const getData = async () => {
    const branchRes = await apiRequest("branchList");

    setBranchList(branchRes.data);

    // setSelectedBranch(selectedBranchData);
    const resShift = await apiRequest("listAllShifts");

    if (resShift.error) {
      setShiftList([]);
    } else {
      setShiftList(resShift.data);
    }
    const res = await apiRequest("departmentList");

    if (res.error) {
      setDepartmentList([]);
    } else {
      setDepartmentList(res.data);
    }
  };
  useEffect(() => {
    getData();
    // getDataById();
  }, []);
  useEffect(() => {
    console.log(formData, "FORM");
  }, [formData]);
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <div>
        <p className="employee-1">Employee</p>
        <p className="employee-2">Employee / Shift Rotation</p>
      </div>
      <form>
        <div className="theme-card">
          <div className="theme-card-header">
            <h6>Shift Rotation</h6>
          </div>

          <div className="theme-card-content">
            <div className="df fw">
              {/* <div className="form-group">
                <label className="form-label">From Date</label>
                {}
                <input
                  // readOnly={state?.fromDate != " "}
                  type="date"
                  required
                  // id="datePickerId"
                  min={today}
                  placeholder="From Date"
                  className="form-control"
                  name="fromDate"
                  {...register("fromDate")}
                  value={datePrefillFormat(formData?.fromDate)}
                  onChange={(e) => {
                    console.log(e.target.value, "DATEEE");
                    setFormData((prevState) => ({
                      ...formData,
                      fromDate: e.target.value,
                    }));
                  }}
                />
              </div> */}
              <div className="form-group">
                <label className="form-label">To Date</label>
                <input
                  type="date"
                  placeholder="To Date"
                  min={today}
                  // placeholder={datePrefillFormat(formData?.fromDate) == 'Invalid date'? 'To Date': datePrefillFormat(formData?.fromDate)  }
                  value={datePrefillFormat(formData?.toDate)}
                  required
                  className="form-control"
                  name="toDate"
                  {...register("toDate")}
                  // value={''}
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...formData,
                      toDate: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Branch </label>

                <select
                  className="form-control form-select"
                  name="branchId"
                  {...register("branchId")}
                  value={formData?.branchId}
                  onChange={handleFormDataChange}
                  // defaultValue={branchName}
                >
                  <option>Select Branch</option>
                  {branchList.length > 0 &&
                    branchList.map((val) => (
                      <option value={val?.id}>{val.branchName}</option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Department</label>
                <select
                  readOnly={true}
                  className="form-control  form-select"
                  name="deptID"
                  {...register("deptID")}
                  value={formData?.deptID}
                  // onChange={handleFormDataChange}
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...formData,
                      deptID: parseInt(e.target.value),
                    }));
                    // filterEmployee();
                  }}
                >
                  <option>Select Department</option>
                  {departmentList &&
                    departmentList.map(
                      (val) =>
                        val?.name && (
                          <option value={val?.id}>{val?.name}</option>
                        ),
                    )}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-control  form-select"
                  name="category"
                  {...register("category")}
                  value={formData?.category}
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      category: e.target.value,
                    }));
                    // filterEmployee();
                  }}
                >
                  <option>Select Category </option>
                  {category &&
                    category.map((val) => <option value={val}>{val}</option>)}
                </select>
              </div>
              {/* <div className="form-group">
                <label className="form-label">Week off</label>
                <select
                  className="form-control  form-select"
                  name="weekOff"
                  {...register("weekOff")}
                  value={formData?.weekOff}
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      weekOff: e.target.value,
                    }));
                    
                  }}
                >
                  {dayNames && dayNames.map((val) => <option>{val}</option>)}
                  <option>Week off-02</option>
                </select>
              </div> */}
              <div className="form-group">
                <label className="form-label">Select Shift Name</label>
                <select
                  className="form-control  form-select"
                  name="shiftName"
                  {...register("shiftId")}
                  value={formData?.shiftId}
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      shiftName: e.target.value,
                    }));
                  }}
                >
                  <option> Select Shift </option>
                  {shiftList &&
                    shiftList.map(
                      (val) =>
                        val?.name && (
                          <option value={val?.id}>{val?.name}</option>
                        ),
                    )}
                </select>
              </div>
              {/* <div className="form-group">
                <label className="form-label">Total no of employees </label>
                <input
                  type="text"
                  name="totalEmployees"
                  required
                  value={formData?.noOfEmployees}
                  className="form-control"
                />
              </div> */}
              {employees && (
                <div className="form-group">
                  <label className="form-label">shift1 </label>
                  <Select
                    isMulti
                    options={employees}
                    components={animatedComponents}
                    name="shift1"
                    value={formData?.shift1Staffs}
                    onChange={handleShift1}
                  />
                </div>
              )}

              {employees && (
                <div className="form-group">
                  <label className="form-label">shift2 </label>
                  <Select
                    isMulti
                    name="shift2"
                    options={employees}
                    components={animatedComponents}
                    value={formData?.shift2Staffs}
                    onChange={handleShift2}
                  />
                </div>
              )}
              {employees && (
                <div className="form-group">
                  <label className="form-label">shift3 </label>
                  <Select
                    name="shift3"
                    isMulti
                    options={employees}
                    // components={animatedComponents}
                    value={formData?.shift3Staffs}
                    onChange={handleShift3}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <ShiftRotationTab
            shift1Data={shift1 ? shift1 :""}
            shift2Data={shift2 ? shift2 :""}
            shift3Data={shift3 ? shift3 :""}
            weekOff={weekOff}
          />
        </div>

        <div className="Forward-form-button">
          <div>
            <button
              className="btn btn-outline-primary cancel-btn bg-white m-2"
              onClick={() => navigate("/panel/shiftrotation")}
            >
              Cancel
            </button>
          </div>
          <div>
            <button
              className="btn primary-btn"
              type="submit"
              onClick={formSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShiftRotationForm;
