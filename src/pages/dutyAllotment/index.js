import React, { useEffect } from "react";
import "./duttyallotment.scss";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Breadcrumbs from "../../Component/Breadcrumbs";
import AssignDuty from "./AssignDuty";
import { useState } from "react";
// Forms
import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { category, storage_items } from "../../constants/constantValues";
import apiRequest from "../../utils/helpers/apiRequest";
import { formatEmployeeDataWithDataInKey } from "../../utils/helpers/formatEmployeeData";
import SuccessToast from "../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../Component/CustomToast/ErrorToast";
import { Slide, toast } from "react-toastify";
import { formatDateForRequest } from "../../utils/ConvertDates";
import { useLocation, useNavigate } from "react-router-dom";

const animatedComponents = makeAnimated();

const DutyAllotment = () => {
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [selectedBranch, setSelectedBranch] = useState("");
  const [departmentList, setDepartmentList] = useState([]);
  const [shiftList, setShiftList] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({});
  console.log("formData", formData);
  const [assignedDuties, setAssignedDuties] = useState([]);
  const [dutyAllotmetDetails, setDutyAllotmetDetails] = useState();
  const [editIndex, setEditIndex] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const getDutyAllotmentById = async (id) => {
    const res = await apiRequest("getDutyDetails", null, null, `/${id}`);
    if (res.error) {
      setDutyAllotmetDetails([]);
    } else {
      setDutyAllotmetDetails(res.data);
      console.log("res.data: ", res.data.assignDutyDetails);
      setFormData((prevState) => ({
        ...prevState,
        category: res.data.category,
        // shift: res.data.shift,
      }));
    }
    // console.log("res.datares.data", res.data.assignDutyDetails);
    const assignDutyStaffDetails = res.data.assignDutyDetails((item) => {
      // console.log("res.datares.data", item);
      return {
        id: item.id,
        allotmentId: item.id,
        staffId: item.staffId,
        staffName: item.staffName,
      };
    });
    setAssignedDuties(assignDutyStaffDetails);
  };

  console.log("dutyAllotmetDetails", dutyAllotmetDetails);

  const submitForm = async (e) => {
    e.preventDefault();
    const reqData = {
      shiftDate: formatDateForRequest(currentDate),
      branchId: selectedBranch?.id,
      category: formData?.category,
      shift: formData?.shift,
      assignDutyDetails: assignedDuties,
    };

    //TODO: Validate the form
    if (!formData?.category && !formData?.shift) {
      toast(<ErrorToast body="Please provide all the data" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }
    console.log("location.state?.id", location.state?.id);
    if (editIndex) {
      console.log("editIndex555555", editIndex);
      // const res = await apiRequest("updateDutyAllotment", reqData);
      const res = await apiRequest("updateDutyAllotment", {
        ...reqData,
        id: editIndex,
      });

      if (res.error) {
        toast(<ErrorToast body="Failed to allocate duty" />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
      } else {
        toast(<SuccessToast body="Duty allocated Update suceesfully" />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
        navigate(-1);
      }
    } else {
      const res = await apiRequest("dutyAllotment", reqData);
      if (res.error) {
        toast(<ErrorToast body="Failed to allocate duty" />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
      } else {
        toast(<SuccessToast body="Duty allocated successfully" />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
        navigate(-1);
      }
    }
  };

  const handleTableDataChange = (data) => {
    console.log("data we reciece from table dat chnage", data);

    const currentDuties = assignedDuties;

    if (assignedDuties.length > 0) {
      const presentData = currentDuties.filter((val) => {
        if (val?.staffId === data?.staffId) {
          return val;
        }
      });

      console.log("Present data ::: ", presentData);
      console.log("Recieced data ::: ", data);

      if (presentData.length) {
        const index = currentDuties.indexOf(presentData[0]);
        currentDuties.splice(index, 1);
        currentDuties.push(data);
      } else {
        currentDuties.push(data);
      }
    } else {
      currentDuties.push(data);
    }

    setAssignedDuties(currentDuties);
  };

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("location changed", location.state);
    if (location.state?.id) {
      setEditIndex(location.state?.id);
      getDutyAllotmentById(location.state?.id);
    }
  }, []);

  const getEmployeeList = async () => {
    if (
      formData?.department &&
      formData?.category &&
      selectedBranch &&
      formData?.shift
    ) {
      const reqData = {
        branchId: "1",
        category: "Staff",
        deptId: "2",
      };

      console.log("REQ body", reqData);

      const res = await apiRequest("staffList", reqData);

      // if (res?.error) {
      // setEmployees([]);
      // } else {
      // setEmployees(res?.data);
      // }

      const dummyRes = [
        {
          id: 3,
          username: "alagudce@gmail.com",
          password:
            "$2a$10$MKQTNQD.rxuGYHrVz0iCEuxBSEmOfqOv6E04IVcScLXW4VEKtHDh2",
          orgId: 1,
          branchId: 1,
          branchName: "VIRUDHUNAGAR",
          deptId: 1,
          deptName: "Fact. Admin",
          active: 0,
          role: {
            idRole: 1,
            name: "Admin",
          },
          organisation: {
            idOrg: 1,
            name: "V.V.V & Sons Edible Oils Limited",
          },
          created_date: "2022-10-03T11:52:06.037",
          updated_date: "2022-10-03T11:52:06.037",
          employeeName: "Alaguraja",
          employeeType: "Staff",
          designation: "Admin",
          gender: "male",
          qualification: "B.E",
          location: "chennai",
          address: "4/77,west street, kundalapatty",
          bloodGroup: "A+",
          photo: "male",
          email: "alagudce@gmail.com",
          phoneNo: "9626200210",
          emergencyContactNo: "9867857685",
          emergentContactPerson: "saran",
          maritalStatus: "married",
          name: null,
          relationShip: "brother",
          dateOfBirth: "04-01-1990",
          education: "B.E",
          bankName: "IOB",
          accountNo: "344566789",
          ifsccode: "IONBA0003347",
          panNo: "EFIghak",
          aadharNo: "2334556778",
          uanNo: "2334556778",
          esiNo: "2334556778",
          epfNo: "2334556778",
        },
        {
          id: 4,
          username: "maheshchoudhury1904@gmail.com",
          password:
            "$2a$10$t2nxqW9LIeD3tkmMkz01z.T4jRfBg2AuSj/rWIhbr76xPrHkX4sge",
          orgId: 1,
          branchId: 1,
          branchName: "VIRUDHUNAGAR",
          deptId: 1,
          deptName: "Fact. Admin",
          active: 0,
          role: {
            idRole: 1,
            name: "Admin",
          },
          organisation: {
            idOrg: 1,
            name: "V.V.V & Sons Edible Oils Limited",
          },
          created_date: "2022-10-03T06:38:35.325",
          updated_date: "2022-10-03T06:38:35.325",
          employeeName: "Maheschoudury",
          employeeType: "Staff",
          designation: "Admin",
          gender: "male",
          qualification: "B.E",
          location: "Bangalore",
          address: "Bangalore",
          bloodGroup: "A+",
          photo: "male",
          email: "maheshchoudhury1904@gmail.com",
          phoneNo: "8975433234",
          emergencyContactNo: "9867857685",
          emergentContactPerson: "radchoudory",
          maritalStatus: "unmarried",
          name: null,
          relationShip: "brother",
          dateOfBirth: "04-01-1990",
          education: "B.E",
          bankName: "IOB",
          accountNo: "344566789",
          ifsccode: "IONBA0003347",
          panNo: "EFIghak",
          aadharNo: "2334556778",
          uanNo: "2334556778",
          esiNo: "2334556778",
          epfNo: "2334556778",
        },
        {
          id: 5,
          username: "priya19982107@gmail.com",
          password:
            "$2a$10$v3oAknhrKOUYFrFQboGI7.7eXBJALMaS9/iHrTOqTOI.ENllXUGiu",
          orgId: 1,
          branchId: 1,
          branchName: "VIRUDHUNAGAR",
          deptId: 1,
          deptName: "Fact. Admin",
          active: 0,
          role: {
            idRole: 1,
            name: "Admin",
          },
          organisation: {
            idOrg: 1,
            name: "V.V.V & Sons Edible Oils Limited",
          },
          created_date: "2022-10-03T07:01:28.484",
          updated_date: "2022-10-03T07:01:28.484",
          employeeName: "priya",
          employeeType: "Staff",
          designation: "Admin",
          gender: "feMale",
          qualification: "B.E",
          location: "chennai",
          address: "chennai",
          bloodGroup: "A+",
          photo: "male",
          email: "priya19982107@gmail.com",
          phoneNo: "8975433234",
          emergencyContactNo: "9867857685",
          emergentContactPerson: "raj",
          maritalStatus: "unmarried",
          name: null,
          relationShip: "brother",
          dateOfBirth: "04-01-1990",
          education: "B.E",
          bankName: "IOB",
          accountNo: "344566789",
          ifsccode: "IONBA0003347",
          panNo: "EFIghak",
          aadharNo: "2334556778",
          uanNo: "2334556778",
          esiNo: "2334556778",
          epfNo: "2334556778",
        },
        {
          id: 6,
          username: "kirouthika.lionforce@gmail.com",
          password:
            "$2a$10$fo/b8734OxO3UnR9.1uS8OAMcwk1I0qhAyfwFmisNJVU1mNYFa156",
          orgId: 1,
          branchId: 1,
          branchName: "VIRUDHUNAGAR",
          deptId: 1,
          deptName: "Fact. Admin",
          active: 0,
          role: {
            idRole: 1,
            name: "Admin",
          },
          organisation: {
            idOrg: 1,
            name: "V.V.V & Sons Edible Oils Limited",
          },
          created_date: "2022-10-07T04:46:56.376",
          updated_date: "2022-10-07T04:46:56.376",
          employeeName: "priya",
          employeeType: "Staff",
          designation: "Admin",
          gender: "feMale",
          qualification: "B.E",
          location: "chennai",
          address: "chennai",
          bloodGroup: "A+",
          photo: "male",
          email: "kirouthika.lionforce@gmail.com",
          phoneNo: "8975433234",
          emergencyContactNo: "9867857685",
          emergentContactPerson: "raj",
          maritalStatus: "unmarried",
          name: null,
          relationShip: "brother",
          dateOfBirth: "04-01-1990",
          education: "B.E",
          bankName: "IOB",
          accountNo: "344566789",
          ifsccode: "IONBA0003347",
          panNo: "EFIghak",
          aadharNo: "2334556778",
          uanNo: "2334556778",
          esiNo: "2334556778",
          epfNo: "2334556778",
        },
      ];

      const formattedData = await formatEmployeeDataWithDataInKey(dummyRes);
      setEmployees(formattedData);
    }
  };

  const getAllData = async () => {
    const selectedBranchData = JSON.parse(
      localStorage.getItem(storage_items.selectedBranch),
    );
    setSelectedBranch(selectedBranchData);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    setCurrentDate(today);

    const res = await apiRequest("departmentList");
    console.log(res);

    if (res.error) {
      setDepartmentList([]);
    } else {
      setDepartmentList(res.data);
    }

    const resShift = await apiRequest("shiftList");
    console.log(resShift);

    if (resShift.error) {
      setShiftList([]);
    } else {
      setShiftList(resShift.data);
    }
  };

  const getDesignationList = async () => {
    const res = await apiRequest('designationList');

  //   if (res.error) {
  //     setDesignationList([]);
  //   } else {
  //     setDesignationList(res.data);
  //   }
  // };

  useEffect(() => {
    getAllData();
    getDesignationList();
    getEmployeeList();
  }, []);

  return (
    <div>
      {console.log("SELCTED Emaploye DATA ", selectedBranch)}
      <h1 className="panel-header">Employee</h1>
      <Breadcrumbs />
      <form>
        <div className="theme-card">
          <div className="theme-card-header">
            <h6>Assign Duty</h6>
          </div>

          <div className="theme-card-content">
            <div className="df fw">
              <div className="form-group">
                <label className="form-label">Shift Date </label>
                <input
                  type="date"
                  readonly
                  className="form-control"
                  name="selectshiftdate"
                  value={currentDate}
                  style={{ color: "black" }}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="form-label">Category </label>
                <select
                  className="form-control  form-select"
                  name="category"
                  value={formData.category}
                  onChange={handleFormDataChange}
                >
                  <option>Select Category</option>
                  {category &&
                    category.map((val) => <option value={val}>{val}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Shift </label>
                <select
                  className="form-control  form-select"
                  name="shift"
                  // value={formData.category}
                  onChange={handleFormDataChange}
                >
                  <option>Select Shift</option>
                  {shiftList &&
                    shiftList.map(
                      (val) =>
                        val?.name && (
                          <option value={val?.id}>{val?.name}</option>
                        ),
                    )}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Branch </label>
                <input
                  className="form-control  form-select"
                  disabled
                  name="selectshift"
                  value={selectedBranch?.branchName}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Department </label>
                <select
                  className="form-control  form-select"
                  name="department"
                  onChange={handleFormDataChange}
                >
                  <option>Select Department</option>
                  {departmentList &&
                    departmentList.map((val) => {
                      if (val?.name) {
                        return <option value={val?.id}>{val.name}</option>;
                      }
                    })}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Select Staff’s </label>

                <Select
                  isMulti
                  options={employees}
                  components={animatedComponents}
                  onChange={setSelectedEmployee}
                />
              </div>
            </div>
          </div>
        </div>
        <AssignDuty
          recievedData={selectedEmployee || []}
          handleDataChange={handleTableDataChange}
        />
        <div className="df df-sb">
          <button
            className="btn btn btn-outline-primary m-2"
            onClick={() => navigate("/panel/dutyAllotmenttable")}
          >
            Cancel
          </button>
          <button
            className="btn primary-btn "
            type="submit"
            onClick={submitForm}
          >
            Assign
          </button>
        </div>
      </form>
    </div>
  );
};

export default DutyAllotment;
