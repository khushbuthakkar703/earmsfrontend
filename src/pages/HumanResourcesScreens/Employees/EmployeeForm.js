import React, { useState, useEffect } from "react";
import "./humanResources.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DependancyForm from "./DependencyForm";
import BankDetailsForm from "./BankDetailsForm";
import OtherDetailForm from "./OtherDetailForm";
import getBase64 from "../../../utils/getBase64";
import apiRequest from "../../../utils/helpers/apiRequest";
import convertDate, {
  dateConversion,
  dateConverter,
  datePrefillFormat,
  formatDateForRequest,
} from "../../../utils/ConvertDates";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { useLocation, useNavigate } from "react-router-dom";
import { category } from "../../../constants/constantValues";
import { makeStyles } from "@material-ui/core/styles";
import { string } from "yup";
const useStyles = makeStyles({
  paper: {
    border: "5px solid black"
  }
});
export const handleOnInput = (e) => {
  if (e.target.name === "aadharNo") {
    let maxNum = 12;
    if (e.target.value.length > maxNum) {
      e.target.value = e.target.value.slice(0, maxNum);
    }
  } else {
    let maxNum = 10;
    if (e.target.value.length > maxNum) {
      e.target.value = e.target.value.slice(0, maxNum);
    }
  }
};
const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState("");
  const [deptName, setDeptName] = useState();
  const [branchName, setBranchName] = useState();
  const [branchList, setBranchList] = useState([]);
  const [bloodGroup, setBloodGroup] = useState([]);
  const [firm, setfirm] = useState([]);
  const [otherFormData, setOtherFormData] = useState();
  const [bankData, setBankData] = useState();
  const [mStatus, setMStatus] = useState();
  const [userList, setuserList] = useState();
  const [designation, setDesignation] = useState([]);
  const [list, setList] = useState([{ id: 1 }]);
  const [deleteMore, setDeleteMore] = useState([{ id: 1 }]);
  const [deptList, setDeptList] = useState([{ id: 1 }]);
  const [bankErrors, setBankErrors] = useState({});
  const [adharError, setAdharError] = useState({});
  const [deptError, setDeptError] = useState({});
  const [branchError, setBranchError] = useState({});
  const [orgError, setOrgError] = useState({});
  const [desigError, setDesigError] = useState({});
  const[qualifications,setQualifications] = useState([])
  const [employeeById,setEmployeeById] = useState()
  const navigate = useNavigate();
  const { state } = useLocation();
  // const [addForm, setAddForm] = useState();
  const data = state?.id;
  console.log(data, "GGGG");
  console.log(data?.deptId, "DDDDD");

  let uploadPic;

  const handleMStatusDataChange = (e) => {
    setMStatus(e.target.value);
  };

  const handleMainFormDataChange = (e) => {
    const { name, value } = e.target;
    console.log(value, "OOO");
    setEmployeeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // if (name === "joiningDate") {
    //   // console.log(value, "DDD");
    //   setEmployeeData((prevState) => ({
    //     ...prevState,
    //     [name]: value,
    //   }));
    // } else {
    //   console.log(value, "OOO");
    //   setEmployeeData((prevState) => ({
    //     ...prevState,
    //     [name]: value,
    //   }));
    // }
  };

  const handleDesignationChange = (val, event) => {
    console.log(val,"DDDDD");
    const desc = designation.find((e) => {
      return e.name === val;
    });
    
    setEmployeeData((prevState) => ({
      ...prevState,
      designation: desc?.id,
    }));
  };

  const handleQualificationChange = (val, event) => {
   console.log(val,"QUALIFICATIOn");
    setEmployeeData((prevState) => ({
      ...prevState,
      qualification: val,
    }));
  };
  const getData = async () => {
    const branchRes = await apiRequest("branchList");
    console.log("Branch: ", branchRes);
    setBranchList(branchRes.data);
  };

  const getBloodGroup = async () => {
    const bloodRes = await apiRequest("bloogroupList");
    console.log(bloodRes, "BLOOD");
    setBloodGroup(bloodRes.data);
  };
const getEmployeeById = async ()=> {
  const byIdres = await apiRequest("userProfile",null,null,`/${data}`)
  setEmployeeById(byIdres?.data)
  console.log(byIdres?.data,"BYID");
}
useEffect(() => {
  if(state?.editForm){
    getEmployeeById()
  }
}, []);


  const getFirm = async () => {
    const firmRes = await apiRequest("OrganizationList");
    setfirm(firmRes.data);
    console.log("Firm:", firmRes);
  };

  const getDesignation = async (queryPayload) => {
    // let params = queryPayload ? queryPayload : ""
    console.log(queryPayload,"DESIGN")
    const designationRes = await apiRequest(
      `designationList?designation=${queryPayload}`,
    );
    setDesignation(designationRes.data);
    console.log("designationRes:", designationRes);
  };

const getQualification = async (qualiData)=>{
  
  const qualificationRes = await apiRequest(`qualificationList?qualification=${qualiData}`)
  setQualifications(qualificationRes.data)
  console.log(qualificationRes.data,"QUALIFICATION");

}

  const handleOtherDataChange = (e) => {
    const { name, value } = e.target;
    setAdharError((prevState) => ({
      ...prevState,
      [name]: "",
    }));

    setOtherFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBankData = (e) => {
    const { name, value } = e.target;
    setBankErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
    setBankData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddMore = () => {
    const totalLength = list.length;
    setList((oldData) => [...oldData, { id: totalLength + 1 }]);
  };
  const handleDeleteAdd = () => {
    // setList((oldData) => [...oldData, { id: totalLength - 1 }]);
    if (list.length === 1) {
      console.log("NO");
    } else {
      let val = JSON.parse(JSON.stringify(list));
      val?.pop();
      setList(val);
    }
  };
  const handleFileUpload = async (e) => {
    console.log(getBase64(e.target.files[0]), "PPPP");
    uploadPic = await getBase64(e.target.files[0]);
  };
  useEffect(() => {
    console.log("INPUT BLOOD",employeeData?.bloodGroupId);
  }, [employeeData]);

  useEffect(() => {
    console.log("BloodGroupID",employeeById?.userDetails);
    // console.log(SALARY,"SALARY");
    if(employeeById) {
      getAllListUser();
    }
  }, [employeeById]);
  const handleNewEmployee = async () => {
    if (state?.editForm) {
      const updateData = {
        id: employeeData?.id,
        batchNo: employeeData?.batchNo,
        employeeName: employeeData?.employeeName,
        employeeType: employeeData?.employeeType,
        designationId: employeeData?.designationId,
        gender: employeeData?.gender,
        orgId: employeeData?.orgId,
        branchId: employeeData?.branchId,
        dateOfBirth: dateConverter(employeeData?.dependencyDOB),
        deptId: parseInt(employeeData?.deptId),
        qualification: employeeData?.qualification,
        location: employeeData?.location,
        address: employeeData?.address,
        bloodGroupId: employeeData?.bloodGroupId,
        photo: uploadPic,
        email: employeeData?.email,
        phoneNo: employeeData?.phoneNo,
        emergencyContactNo: employeeData?.emergencyContactNo,
        emergentContactPerson: employeeData?.emergentContactPerson,
        maritalStatus: employeeData?.maritalStatus,
        actCategory: employeeData?.actCategory,
        dateOfBirth: dateConverter(employeeData?.dateOfBirth),
        joiningDate: dateConverter(employeeData?.joiningDate),
        basicSalary: employeeData?.basicSalary,
        allowance: employeeData?.allowance,
        deamessAllowance: employeeData?.deamessAllowance,
        houseRentAllowance: employeeData?.houseRentAllowance,
        goodWorkAllowance: employeeData?.goodWorkAllowance,
        bankName: bankData?.bankName,
        accountNo: bankData?.accountNo,
        ifsccode: bankData?.ifsccode,
        panNo: bankData?.panNo,
        aadharNo: otherFormData?.aadharNo,
        uanNo: otherFormData?.uanNo,
        esiNo: otherFormData?.esiNo,
        epfNo: otherFormData?.epfNo,
        dependencies: list,
      };
      console.log(updateData, "DEPT");
      if (
        !employeeData?.batchNo ||
        !employeeData?.employeeName ||
        !employeeData?.employeeType ||
        !employeeData?.designationId ||
        !employeeData?.gender ||
        !employeeData?.qualification ||
        !employeeData?.email ||
        !employeeData?.phoneNo ||
        !employeeData?.emergencyContactNo ||
        !employeeData?.joiningDate ||
        !bankData.bankName ||
        !bankData.accountNo ||
        !bankData.ifsccode ||
        !bankData.panNo ||
        !otherFormData.aadharNo ||
        !otherFormData.uanNo ||
        !otherFormData.epfNo ||
        !otherFormData?.esiNo
      ) {
        toast(
          <ErrorToast body="Please make sure all fields are filled in correctly" />,
          {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          },
        );
      } else {
        if (otherFormData?.aadharNo.length != 12) {
          toast(<ErrorToast body="Invalid aadhar number" />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
        } else {
          console.log("EMP FORM update DATA", updateData);
          const res = await apiRequest("updateUser", updateData);
          console.log(res, "UPDATE DATA");
          if (res.error) {
            toast(<ErrorToast body="Update Failed" />, {
              transition: Slide,
              hideProgressBar: true,
              autoClose: 2000,
            });
          } else {
            toast(<SuccessToast body="Updated Successfully" />, {
              transition: Slide,
              hideProgressBar: true,
              autoClose: 2000,
            });
            navigate("/panel/employee");
          }
        }
      }
    } else {
      const val = list?.map((e)=>{
        // return e.dependencyDOB : dateConverter(e.dependencyDOB)
        return {...e,dependencyDOB : dateConverter(e.dependencyDOB)}
      })
     setList(val)
      const reqData = {
        batchNo: employeeData?.batchNo,
        employeeName: employeeData?.employeeName,
        employeeType: employeeData?.employeeType,
        designationId: employeeData?.designation,
        gender: employeeData?.gender,
        orgId: parseInt(employeeData?.orgId),
        branchId: parseInt(employeeData?.branchId),
        deptId: parseInt(employeeData?.deptId),
        qualification: employeeData?.qualification,
        location: employeeData?.location,
        address: employeeData?.address,
        bloodGroupId: parseInt(employeeData?.bloodGroupId),
        photo: uploadPic,
        email: employeeData?.email,
        phoneNo: employeeData?.phoneNo,
        dateOfBirth: dateConverter(employeeData?.dateOfBirth),
        emergencyContactNo: employeeData?.emergencyContactNo,
        emergentContactPerson: employeeData?.emergentContactPerson,
        maritalStatus: mStatus,
        actCategory: employeeData?.actCategory,
        joiningDate: dateConverter(employeeData?.joiningDate),
        basicSalary: employeeData?.basicSalary,
        allowance: employeeData?.allowance,
        deamessAllowance: employeeData?.deamessAllowance,
        houseRentAllowance: employeeData?.houseRentAllowance,
        goodWorkAllowance: employeeData?.goodWorkAllowance,
        bankName: bankData?.bankName,
        accountNo: bankData?.accountNo,
        ifsccode: bankData?.ifsccode,
        panNo: bankData?.panNo,
        aadharNo: otherFormData?.aadharNo,
        uanNo: otherFormData?.uanNo,
        esiNo: otherFormData?.esiNo,
        epfNo: otherFormData?.epfNo,
        dependencies: list?.map((e)=>{ return {...e,dependencyDOB : dateConverter(e.dependencyDOB)}}),
      };
      console.log(reqData, "RQQQQQ");
      if (
        !employeeData?.batchNo ||
        !employeeData?.employeeName ||
        !employeeData?.employeeType ||
        !employeeData?.designation ||
        !employeeData?.orgId ||
        !employeeData?.branchId ||
        !employeeData?.deptId ||
        !employeeData?.gender ||
        !employeeData?.qualification ||
        !employeeData?.email ||
        !employeeData?.phoneNo ||
        !employeeData?.emergencyContactNo ||
        !employeeData?.joiningDate ||
        !employeeData?.dateOfBirth ||
        !bankData.bankName ||
        !bankData.accountNo ||
        !bankData.ifsccode ||
        !bankData.panNo ||
        !otherFormData.aadharNo ||
        !otherFormData.uanNo ||
        !otherFormData.epfNo ||
        !otherFormData?.esiNo
      ) {
        console.log(reqData, "KKKKK");

        if (!employeeData?.deptId)
          setDeptError((prevState) => ({
            ...prevState,
            deptId: "Please Fill Department Name",
          }));
        if (!employeeData?.branchId)
          setBranchError((prevState) => ({
            ...prevState,
            branchId: "Please Fill Branch Name",
          }));
        if (!employeeData?.orgId)
          setOrgError((prevState) => ({
            ...prevState,
            orgId: "Please Fill Organisation Name",
          }));
        if (!employeeData?.designation)
          setDesigError((prevState) => ({
            ...prevState,
            designationId: "Please Fill Designation Name",
          }));
        if (!bankData?.bankName)
          setBankErrors((prevState) => ({
            ...prevState,
            bankName: "Please fill BankName",
          }));
        if (!bankData?.accountNo)
          setBankErrors((prevState) => ({
            ...prevState,
            accountNo: "Please fill Account No",
          }));
        if (!bankData?.ifsccode)
          setBankErrors((prevState) => ({
            ...prevState,
            ifsccode: "Please fill IFSC code",
          }));
        if (!bankData?.panNo)
          setBankErrors((prevState) => ({
            ...prevState,
            panNo: "Please fill Pan No",
          }));
        if (!otherFormData?.aadharNo)
          setAdharError((prevState) => ({
            ...prevState,
            aadharNo: "Please Fill AdharNo",
          }));
        if (!otherFormData?.uanNo)
          setAdharError((prevState) => ({
            ...prevState,
            uanNo: "Please Fill UAN No",
          }));
        if (!otherFormData?.epfNo)
          setAdharError((prevState) => ({
            ...prevState,
            epfNo: "Please Fill EPF No",
          }));
        if (!otherFormData?.esiNo)
          setAdharError((prevState) => ({
            ...prevState,
            esiNo: "Please Fill ESI No",
          }));
        toast(
          <ErrorToast body="Please make sure all fields are filled in correctly" />,
          {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          },
        );
      } else {
        if (otherFormData?.aadharNo.length != 12) {
          toast(<ErrorToast body="Invalid aadhar number" />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
          // if(employeeData?.emergencyContactNo.length !=10){
          //   toast(<ErrorToast body="" />, {
          //     transition: Slide,
          //     hideProgressBar: true,
          //     autoClose: 2000,
          //   });
          // }
        } else {
          console.log("EMP FORM REQ DATA", reqData);
          const res = await apiRequest("createUser", reqData);
          console.log(reqData, "RQQQQQ");
          if (res.error) {
            toast(<ErrorToast body="User Not Created" />, {
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
            navigate("/panel/employee");
          }
        }
      }
    }
  };

  // useEffect(() => {
  //   console.log(employeeData?.maritalStatus, "LOst");
  // }, [employeeData]);
  const handleDependancyDataChange = (e, id) => {
    const { name, value } = e.target;
    if (name === "dependencyDOB") {
      console.log(value,"VALI");
      const dataToUpdateItem = {
        [name]: formatDateForRequest(value) ,
      };

      const updatedData = list.map((data) => {
        if (data.id === id) {
          return { ...data, ...dataToUpdateItem };
        }

        return data;
      });

      console.log("Updated Data", updatedData);

      setList(updatedData);
    } else {
      console.log("reletion", value);
      const dataToUpdateItem = {
        [name]: value,
      };

      const updatedData = list.map((data) => {
        if (data.id === id) {
          return { ...data, ...dataToUpdateItem };
        }

        return data;
      });

      console.log(" Data", updatedData);

      setList(updatedData);
    }
    if (name === "joiningDate") {
      setEmployeeData((prevState) => ({
        ...prevState,
        [name]: formatDateForRequest(value),
      }));
    } else {
      setEmployeeData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const getAllListUser = async () => {
    // const res = await apiRequest("allListUser");
    // if (res.error) {
    //   setuserList([]);
    // } else {
    //   setuserList(res.data);
    // }
    if (state?.editForm) {
      console.log("KKKKK");
      setEmployeeData((pre) => ({
        ...pre,
        id: employeeById?.userDetails?.id,
        batchNo: employeeById?.userDetails?.batchNo,
        employeeName:employeeById?.userDetails?.employeeName,
        employeeType: employeeById?.userDetails?.employeeType,
        gender:employeeById?.userDetails?.gender,
        qualification:employeeById?.userDetails?.qualification,
        location: employeeById?.userDetails?.location,
        bloodGroupId: employeeById?.userDetails?.bloodGroupId,
        address: employeeById?.userDetails?.address,
        photo: uploadPic,
        email: employeeById?.userDetails?.email,
        phoneNo: employeeById?.userDetails?.phoneNo,
        emergencyContactNo: employeeById?.userDetails?.emergencyContactNo,
        emergentContactPerson: employeeById?.userDetails?.emergentContactPerson,
        actCategory: employeeById?.userDetails?.actCategory,
        joiningDate: employeeById?.userDetails?.joiningDate,
        dateOfBirth: employeeById?.userDetails?.dateOfBirth,
        dependencyDOB: employeeById?.dependencies?.dependencyDOB,
        designationId: employeeById?.userDetails?.designationId,
        orgId: employeeById?.userDetails?.orgId,
        branchId: employeeById?.userDetails?.branchId,
        deptId: employeeById?.userDetails?.deptId,
        maritalStatus: employeeById?.userDetails?.maritalStatus,
        basicSalary:employeeById?.salary?.basicSalary,
        allowance:employeeById?.salary?.allowance,
        deamessAllowance: employeeById?.salary?.deamessAllowance,
        houseRentAllowance: employeeById?.salary?.houseRentAllowance,
        goodWorkAllowance: employeeById?.salary?.goodWorkAllowance,
      }));
      setBankData((pre) => ({
        ...pre,
        bankName: employeeById?.bankDetails?.bankName,
        accountNo: employeeById?.bankDetails?.accountNo,
        ifsccode: employeeById?.bankDetails?.ifsccode,
        panNo: employeeById?.bankDetails?.panNo,
      }));

      setList(employeeById?.dependencies?.dependencies);

      setOtherFormData((prev) => ({
        ...prev,
        aadharNo: employeeById?.adharAndOtherDetails?.aadharNo,
        uanNo: employeeById?.adharAndOtherDetails?.uanNo,
        esiNo: employeeById?.adharAndOtherDetails?.esiNo,
        epfNo: employeeById?.adharAndOtherDetails?.epfNo,
      }));
      setBranchName(employeeById?.branchName);
      setDeptName(employeeById?.deptName);
    }
  };
  const getDepartmentList = async () => {
    const res = await apiRequest("departmentList");
    if (res.error) {
      setDeptList([]);
    } else {
      setDeptList(res.data);
      console.log(res.data, "DDDA");
    }
  };
  useEffect(() => {
    // getAllListUser();
    getDepartmentList();
    getQualification()
    getDesignation()
    getData();
    getFirm();
    getBloodGroup();
    console.log(data, "OOOOO");
  }, []);

  return (
    <div>
      <div className="panel-header">Employee</div>
      <div className="df fw mt-2">
        <div>Employee / Add Employee</div>
      </div>
      <div className="theme-card mt-3">
        <div className="theme-card-header">
          <h6>Add Employee</h6>
        </div>
        <div className="theme-card-content">
          <div className="df fw">
            <div className="form-group">
              <label className="form-label">Batch No</label>
              <input
                type="text"
                className="form-control"
                name="batchNo"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.batchNo}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Employee Name</label>
              <input
                type="text"
                className="form-control"
                value={employeeData?.employeeName}
                name="employeeName"
                onChange={(e) => handleMainFormDataChange(e)}
              />
            </div>

            {employeeById?.userDetails?.id && (
              <div className="form-group">
                <label className="form-label">Employee ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  value={employeeById?.userDetails?.id}
                  readOnly
                />
              </div>
            ) }

            <div className="form-group">
              <label className="form-label">
                Employee Type<span style={{ color: "red" }}>*</span>
              </label>
              <select
                className="form-control input-align"
                name="employeeType"
                value={employeeData?.employeeType}
                onChange={(e) => handleMainFormDataChange(e)}
              >
                <option></option>
                {category &&
                  category.map((val) => {
                    console.log(val, "TYPEE");
                    return <option value={val}>{val}</option>;
                  })}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">
                Department<span style={{ color: "red" }}>*</span>
              </label>
              <select
                className="form-control"
                name="deptId"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.deptId}
              >
                <option></option>
                {deptList &&
                  deptList.map((val) => {
                    console.log(val, "val");
                    return <option value={Number(val.id)}>{val.name}</option>;
                  })}
              </select>
              <p style={{ color: "red" }}>{deptError?.deptId}</p>
            </div>
            <div className="form-group mr-bt-5">
              <label className="form-label">
                Designation<span style={{ color: "red" }}>*</span>
              </label>
              <Autocomplete
                id="form-control border-auto"
                placeholder="designation"
                freeSolo
                options={
                  designation && designation.map((option) => option.name)
                }
                
                onChange={(event, newValue) =>
                  handleDesignationChange(newValue)
                }
                value={employeeById?.userDetails?.designation ? employeeById?.userDetails?.designation : null}
                //defaultValue={employeeById?.userDetails?.designation}
                renderInput={(params) => (
                  <TextField
                  {...params} label="Designation"
                    onChange={(e) => getDesignation(e.target.value)}
                  />
                )}
              />
              <p style={{ color: "red" }}>{desigError?.designationId}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select
                className="form-control"
                name="gender"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.gender}
              >
                <option></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Qualification</label>
              <Autocomplete
                id="form-control height"
                placeholder="Qualification"
                
                options={
                  qualifications && qualifications?.map((option) => option)
                }
               
                onChange={(event, newValue) =>
                  handleQualificationChange(newValue)
                }
                value={employeeById?.userDetails?.qualification ? employeeById?.userDetails?.qualification :employeeData?.qualification}
                renderInput={(params) => (
                  <TextField
                  {...params}  label="Qualification"
                    onChange={(e) =>getQualification(e.target.value)}
                  />
                )}
              />

              {/* <select
                className="form-control"
                name="qualification"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.qualification}
              >
                <option>Select Qualification</option>
                <option value="HSC">HSC</option>
                <option value="Diploma">Diploma</option>
                <option value="B.E">B.E</option>
                <option value="B.Tech">B.Tech</option>
                <option value="B.Tech">BCA</option>
              </select> */}
            </div>
            <div className="form-group">
              <label className="form-label">Employee Photo</label>
              <div className="form-control">
                <input
                  type={"file"}
                  name="photo"
                  className="form-control"
                  onChange={handleFileUpload}
                  value={employeeData?.photo}
                />
              </div>
              {/* <input className='form-control' type="file" /> */}
            </div>

            <div className="form-group">
              <div className="mb-4">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  value={employeeData?.location}
                  name="location"
                  onChange={(e) => handleMainFormDataChange(e)}
                />
              </div>
              <div className="">
                <label className="form-label">Blood Group</label>
                <select
                  className="form-control"
                  name="bloodGroupId"
                  onChange={(e) => handleMainFormDataChange(e)}
                  value={employeeData?.bloodGroupId}
                >
                  <option></option>
                  {bloodGroup.length > 0 &&
                    bloodGroup.map((val) => (
                      <option value={val.id}>{val.name}</option>
                    ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea
                rows="5"
                type="text"
                name="address"
                className="form-control"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.address}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.email}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone No</label>
              <input
                name="phoneNo"
                onInput={handleOnInput}
                type="number"
                // keydown={(e)=>PreventNonNumbericalInput(e)}
                className="form-control"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.phoneNo}
                // type="number" pattern="/^-?\d+\.?\d*$/" keydown="if(this.value.length==4) return false;"
              />
            </div>

            <div className="form-group mr-bt-36">
              <label className="form-label">Date Of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                onChange={(e) => handleMainFormDataChange(e)}
                value={datePrefillFormat(employeeData?.dateOfBirth)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                Branch <span style={{ color: "red" }}>*</span>
              </label>
              <select
                className="form-control"
                name="branchId"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.branchId}
              >
                <option>Select Branch</option>
                {branchList.length > 0 &&
                  branchList.map((val) => (
                    <option value={val.id}>{val.branchName}</option>
                  ))}
              </select>
              <p style={{ color: "red" }}>{branchError?.branchId}</p>
            </div>
            <div className="form-group mr-bt-3">
              <label className="form-label">
                Company<span style={{ color: "red" }}>*</span>
              </label>
              <select
                className="form-control"
                name="orgId"
                value={employeeData?.orgId}
                onChange={(e) => handleMainFormDataChange(e)}
              >
                <option></option>
                {firm.length > 0 &&
                  firm.map((val) => (
                    <option value={val.idOrg}>{val.name}</option>
                  ))}
              </select>
              <p style={{ color: "red" }}>{orgError?.orgId}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Emergency Contact Number</label>
              <input
                onInput={handleOnInput}
                type="number"
                className="form-control"
                name="emergencyContactNo"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.emergencyContactNo}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Emergency Contact Person</label>
              <input
                type="text"
                className="form-control"
                name="emergentContactPerson"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.emergentContactPerson}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Act Category</label>
              <select
                className="form-control"
                name="actCategory"
                onChange={(e) => handleMainFormDataChange(e)}
                value={employeeData?.actCategory}
              >
                <option></option>
                <option value="Factory Act">Factory Act</option>
                <option value="Apprentice Act">Apprentice Act</option>
                <option value="Tailoring Act">Tailoring Act</option>
                <option value="Staff Act">Staff Act</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Joining Date</label>
              {console.log("JJJJ", employeeData?.joiningDate)}
              <input
                type="date"
                className="form-control"
                name="joiningDate"
                onChange={(e) => {
                  handleMainFormDataChange(e);
                  console.log("ttttt", e.target.value);
                }}
                // value={ data.joiningDate }
                value={datePrefillFormat(employeeData?.joiningDate)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Dependency</h6>
        </div>
        <div className="theme-card-content">
          <>
            <div className="form-group">
              <label className="form-label">Maritial Status</label>
              <select
                className="form-control"
                name="maritalStatus"
                value={employeeData?.maritalStatus}
                onChange={(e) => {
                  setMStatus(e.target.value);
                  handleMStatusDataChange(e);
                }}
              >
                <option>Select Status</option>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
              </select>
            </div>
            {list &&
              list.map((val) => (
                <DependancyForm
                  handleDependancyDataChange={handleDependancyDataChange}
                  // handleStatusChange={handleMStatusDataChange}
                  mStatus={mStatus}
                  dependencyId={val.id}
                  recievedData={mStatus}
                  handleAddMore={handleAddMore}
                  handleDeleteAdd={handleDeleteAdd}
                  totalForms={list.length}
                  pGender={employeeData}
                  list={val}
                  editForm={state?.editForm || false}
                />
              ))}
          </>
        </div>
      </div>
      <BankDetailsForm
        handleBankData={handleBankData}
        bankValue={bankData}
        bankErrors={bankErrors}
      />
      <OtherDetailForm
        handleOtherDataChange={handleOtherDataChange}
        otherValue={otherFormData}
        adharError={adharError}
      />
      <div>
        <div className="theme-card">
          <div className="theme-card-header">
            <h6>Salary Section</h6>
          </div>
          <div className="theme-card-content">
            <div className="df fw">
              <div className="form-group">
                <label className="form-label">Basic Salary</label>
                <input
                  type="number"
                  className="form-control"
                  name="basicSalary"
                  onChange={(e) => handleMainFormDataChange(e)}
                  value={employeeById?.salary?.basicSalary}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Deamess Allowance</label>
                <input
                  type="number"
                  className="form-control"
                  name="deamessAllowance"
                  onChange={(e) => handleMainFormDataChange(e)}
                  value={employeeById?.salary?.deamessAllowance}
                />
              </div>
              <div className="form-group">
                <label className="form-label">House Rent Allowance </label>
                <input
                  type="number"
                  className="form-control"
                  name="houseRentAllowance"
                  onChange={(e) => handleMainFormDataChange(e)}
                  value={employeeById?.salary?.houseRentAllowance}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Good Work Allowance</label>
                <input
                  type="number"
                  className="form-control"
                  name="goodWorkAllowance"
                  onChange={(e) => handleMainFormDataChange(e)}
                  value={employeeById?.salary?.goodWorkAllowance}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Allowance</label>
                <input
                  type="number"
                  className="form-control"
                  name="allowance"
                  onChange={(e) => handleMainFormDataChange(e)}
                  value={employeeById?.salary?.allowance}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="df df-sb">
        <div>
          <button
            className="btn cancel-btn btn-outline-primary bg-white m-2"
            onClick={() => navigate("/panel/employee")}
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            className="btn primary-btn"
            type="submit"
            onClick={handleNewEmployee}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
