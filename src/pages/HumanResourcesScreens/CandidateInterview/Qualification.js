import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";

const Qualification = ({
  handleQulaificationData,
  interviewId}) => {
  // const year = new Date().getFullYear();
  // const years = Array.from(new Array(40), (val, index) => year - index);
  // const handleNewQualificaiton = () => {
  //   handleAddMore();
  // };
  useEffect(() => {
    // console.log("FGBNM: ", handleQulaificationData);
  }, []);
  return (
    <div>
      <div className="df fw">
        <div className="form-group">
          <label className="form-label">Designation</label>
          <input
            type="text"
            className="form-control"
            name="designation"
            onChange={(e) => handleQulaificationData(e, interviewId)}
          />
        </div>
        {/* <div className="form-group">
                          <label className="form-label">Status</label>
                          
                          <select className="form-control"
                              name="jobType"
                              onChange={(e) => handleQulaificationData(e)}
                          >
                              <option>Select Type</option>
                              <option value='experienced'>Experienced</option>
                              <option value='fresher'>Fresher</option>
                          </select>
                      </div> */}
      </div>
      <div>
        <div>
          <label className="form-label">Experience</label>
        </div>
        <div className="df">
          <div className="form-group">
            <input type="date" 
              className="form-control"
              name="experienceFrom"
              onChange={(e) => handleQulaificationData(e, interviewId)}
            />
          </div>
          <div className="form-group">
            <input type="date"
              className="form-control"
              name="experienceTo"
              onChange={(e) => handleQulaificationData(e,interviewId)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="previousCompany"
              placeholder="Company name"
              onChange={(e) => handleQulaificationData(e, interviewId)}
            />
          </div>
        </div>
        {/* {totalForms === listId && (
          <button
            className="btn add-btn m-2 df dc"
            onClick={() => handleNewQualificaiton()}
          >
            <IoMdAddCircle />
            Add More
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Qualification;
