import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../../utils/helpers/apiRequest";
import InterviewDetails from "./InterviewDetails";
import Qualification from "./Qualification";
import convertDate, {formatDateForRequest} from "../../../utils/ConvertDates"

const InterviewForm = () => {
  const navigate = useNavigate();
  const [interviewData, setInterviewData] = useState();
  const [interviewDetails, setinterviewDetails] = useState();
  const [experienceList, setExperienceList] = useState([{ interviewId: 1 }]);
  const [errors, setErrors] = useState()

  const handleInterviewData = (e) => {
    const { name, value } = e.target;
    setInterviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleQulaificationData = (e, id) => {
    const { name, value } = e.target;
    const dataToUpdateItem = {
      [name]: value,
    }
    const updatedData = experienceList.map((data) => {
      if (data.interviewId === id) {
      return { ...data, ...dataToUpdateItem };
      }

      return data;
    });
    setExperienceList(updatedData)
  };
  const handleInterviewDetails = (e) => {
    const { name, value } = e.target;
    setinterviewDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleinterviewData = async () => {
    // console.log("interviewData: ", interviewData);  
    const reqData = {
      branchId: parseInt(interviewDetails?.branch),
      deptId: parseInt(interviewDetails?.dept),
      candidateName: interviewData?.name,
      gender: interviewData?.gender,
      caste: interviewData?.caste,
      dateOfBirth: interviewData?.dob,
      aadharNumber: interviewData?.aadhar,
      phoneNumber: interviewData?.phone,
      homeTown: interviewData?.hometown,
      qualification: interviewData?.qualification,
      marksPercentage: interviewData?.mark,
      jobType: interviewData?.type,
      interviewDate: interviewDetails?.interviewDate,
      interviewTime: interviewDetails?.interviewTime,
      employeeType: "staff",
      interviewPosition: interviewDetails?.designation,
      referance: interviewDetails?.reference,
      batchNo: interviewDetails?.batch,
      qualifications: experienceList[0]?.experienceTo ? experienceList.map((val) => {
        return {...val, experienceFrom:formatDateForRequest(val.experienceFrom), experienceTo:formatDateForRequest(val.experienceTo) }
      }) : []
        
    }
    if (!interviewData?.name || 
      !interviewData?.gender || 
      !interviewData?.aadhar ||
      !interviewData?.phone || 
      !interviewData?.hometown ||
      !interviewData?.qualification || 
      !interviewData?.mark || 
      !interviewData?.type) {
      console.log("reqData: ", reqData);
      if (!interviewData?.name) setErrors((prevState) => ({ ...prevState, name: "Candidate name is mandatory" }))
      if (!interviewData?.gender) setErrors((prevState) => ({ ...prevState, gender: "Gender is mandatory" }))
      if (!interviewData?.aadhar) setErrors((prevState) => ({ ...prevState, aadhar: "Aadhar number is mandatory" }))
      if (!interviewData?.phone) setErrors((prevState) => ({ ...prevState, phone: "Phone number is mandatory" }))
      if (!interviewData?.hometown) setErrors((prevState) => ({ ...prevState, hometown: "Home Town is mandatory" }))
      if (!interviewData?.qualification) setErrors((prevState) => ({ ...prevState, qualification: "Candidate qualification is mandatory" }))
      if (!interviewData?.mark) setErrors((prevState) => ({ ...prevState, mark: "Candidate mark percentage is mandatory" }))
      if (!interviewData?.type) setErrors((prevState) => ({ ...prevState, type: "Candia=date is fresher or experiences is mandatory" }))
    } else if (interviewData?.type === "experienced") {
        console.log("experienceList: ", experienceList)
      
    }  else {
      const res = await apiRequest('saveInterview', reqData)
      console.log("saveInterview: ", res);
  
    }
  };

  const handleAddMore = () => {
    const totalLength = experienceList.length;
    setExperienceList((oldData) => [...oldData, { interviewId: totalLength + 1 }]);
  };

  return (
    <div>
      <h1 className="panel-header">Interview</h1>
      <div className="df df-sb">
        <div>Interview / Candidate Details</div>
      </div>
      <div className="theme-card mt-3">
        <div className="theme-card-header">
          <h6>Candidate Details</h6>
        </div>
        <div className="theme-card-content">
          <div className="df fw">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={(e) => handleInterviewData(e)}
              />
              <p style={{ color: "red" }}>{errors?.name}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select
                className="form-control"
                name="gender"
                onChange={(e) => handleInterviewData(e)}
              >
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p style={{ color: "red" }}>{errors?.gender}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Caste</label>
              <input
                type="text"
                className="form-control"
                name="caste"
                onChange={(e) => handleInterviewData(e)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dob"
                onChange={(e) => handleInterviewData(e)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Aadhar Number</label>
              <input
                type="number"
                className="form-control"
                name="aadhar"
                onChange={(e) => handleInterviewData(e)}
              />
              <p style={{ color: "red" }}>{errors?.aadhar}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                name="phone"
                onChange={(e) => handleInterviewData(e)}
              />
              <p style={{ color: "red" }}>{errors?.phone}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Home Town</label>
              <input
                type="text"
                className="form-control"
                name="hometown"
                onChange={(e) => handleInterviewData(e)}
              />
              <p style={{ color: "red" }}>{errors?.hometown}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="theme-card mt-3">
        <div className="theme-card-header">
          <h6>Qualifications</h6>
        </div>
        <div className="theme-card-content">
          <div className="df fw">
            <div className="form-group">
              <label className="form-label">Qualification</label>
              <input
                type="text"
                className="form-control"
                name="qualification"
                onChange={(e) => handleInterviewData(e)}
              />
              
              <p style={{ color: "red" }}>{errors?.qualification}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Marks (%)</label>
              <input
                type="text"
                className="form-control"
                name="mark"
                onChange={(e) => handleInterviewData(e)}
              />
              <p style={{ color: "red" }}>{errors?.mark}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Type</label>
              
              <select
                className="form-control"
                name="type"
                onChange={(e) => handleInterviewData(e)}
              >
                <option>Select experience</option>
                <option value="fresher">Fresher</option>
                <option value="experienced">Experienced</option>
              </select>
              <p style={{ color: "red" }}>{errors?.type}</p>
            </div>
          </div>
          {interviewData && interviewData?.type === "experienced" &&
            <div>
              {experienceList &&
                experienceList?.map((e) => (
                  <Qualification
                    totalForms={e}
                    handleQulaificationData={handleQulaificationData}
                    interviewId= {e.interviewId}
                  />
                ))}
              <button className="btn add-btn m-2 df dc" onClick={handleAddMore}>
                <IoMdAddCircle />
                Add More
              </button>
            </div>
          }
        </div>
      </div>
      <InterviewDetails handleInterviewDetails={handleInterviewDetails} />

      <div className="df df-sb">
        <div>
          <button
            className="btn cancel-btn btn-outline-primary bg-white m-2"
            onClick={() => navigate("/panel/interviewForm")}
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            className="btn primary-btn"
            type="submit"
            onClick={handleinterviewData}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewForm;
