import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import apiRequest from "../../../utils/helpers/apiRequest";
import "../ShiftMaster/shiftMaster.scss";

const ShiftMasterEditForm = () => {
  const initialData = {
    categoryname: "",
    categorytype: "",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
    sat: "",
    sun: "",
    intime: "",
    outtime: "",
    Ldelay: "",
    lunchtime: "",
  };
  const [inputFields, setInputFields] = useState(initialData);
  const [checked,setChecked] = useState(false)
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state?.val, "VALUE");
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    console.log(value,"LLL");
    console.log(e,"LLL");

    setInputFields((prev) => ({ ...prev, [name]: value }));
  };

  const getShiftData = () => {
    setInputFields((prev) => ({
      ...prev,
      categoryname: state?.val?.categoryname,
      categorytype: state?.val?.categorytype,
      fri: state?.val?.fri,
      intime: state?.val?.intime,
      Ldelay: state?.val?.ldelay,
      lunchtime: state?.val?.lunchtime,
      mon: state?.val?.mon,
      outtime: state?.val?.outtime,
      sat: state?.val?.sat,
      sun: state?.val?.sun,
      thu: state?.val?.thu,
      tue: state?.val?.tue,
      wed: state?.val?.wed,
    }));
    // if(inputFields?.)
  };

  const onupdate = async (e)=>{
    e.preventDefault();
    const updateShift = await apiRequest("shifts",inputFields,null,`/${state?.val?.id}`,)
    console.log(updateShift?.data,"DATA");
    // navigate("/panel/shiftmastertable")
  }

  useEffect(() => {
    getShiftData();
  }, []);
  useEffect(() => {
    console.log(inputFields, "INP");
  }, [inputFields]);
  return (
    <>
      <h1 className="panel-header">Shift Master</h1>
      <Breadcrumbs />
      <form>
        <div className="theme-card">
          <div className="theme-card-header">
            <h6>Shift Master</h6>
          </div>
          <div className="theme-card-content">
            <div className="">
              <div>
                <div className="">
                  <label className="form-label">Shift Category</label>
                  <select
                    className="form-control Shift-category form-label"
                    // onChange={(event) => handleFormChange(index, event)}
                    name="categoryname"
                    value={inputFields?.categoryname}
                  >
                    <option>Select Shift Category</option>
                    <option>Production shift</option>
                    <option>Garden Shift</option>
                    <option>General Shift</option>
                  </select>
                </div>
                <div>
                  <div className="d-flex">
                    <div className="margin-right">
                      <label className="form-label ">Shift Type</label>
                      <select
                        className="form-control form-label "
                        name="categorytype"
                        value={inputFields?.categorytype}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      >
                        <option>Select Shift Type</option>
                        <option> shift 1</option>
                        <option> Shift 2</option>
                        <option> Shift 3</option>
                      </select>
                    </div>
                    <div className="d-flex">
                      <div className="form-group">
                        <label className="form-label">Time From</label>
                        <input
                          style={{ background: "#E5E5E5" }}
                          className="form-control"
                          type="time"
                          name="intime"
                          min="09:00"
                          max="18:00"
                          required
                          value={inputFields?.intime}
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Time To</label>
                        <input
                          style={{ background: "#E5E5E5" }}
                          className="form-control"
                          type="time"
                          name="outtime"
                          min="09:00"
                          max="18:00"
                          required
                          value={inputFields?.outtime}
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Lunch Break</label>
                        <input
                          className="form-control"
                          type="text"
                          name="lunchtime"
                          required
                          value={inputFields?.lunchtime}
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Delay TIme</label>
                        <input
                          className="form-control"
                          type="text"
                          name="Ldelay"
                          required
                          value={inputFields?.Ldelay}
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <label className="form-label">Shift Days</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="Monday"
                        name="mon"
                        // value={inputFields?.mon}
                        checked={inputFields?.mon === "ON"}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <label for="Monday" className="margin">
                        Monday
                      </label>
                      <input
                        type="checkbox"
                        id="Tuesday"
                        name="tue"
                        // value={inputFields?.tue}
                        checked={inputFields?.tue === "ON"}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <label for="Tuesday" className="margin">
                        Tuesday
                      </label>
                      <input
                        type="checkbox"
                        id="Wednesday"
                        name="wed"
                        checked={inputFields?.wed === "ON"}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <label for="Wednesday" className="margin">
                        Wednesday
                      </label>
                      <input
                        type="checkbox"
                        id="Thursday"
                        name="thu"
                        // value={inputFields?.thu}
                        checked={inputFields?.thu === "ON"}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <label for="Thursday" className="margin">
                        Thursday
                      </label>
                      <input
                        type="checkbox"
                        id="Friday"
                        name="fri"
                        // value={inputFields?.fri}
                        checked={inputFields?.fri === "ON"}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <label for="Friday" className="margin">
                        Friday
                      </label>
                      <input
                        type="checkbox"
                        id="Saturday"
                        name="sat"
                        // value={inputFields?.sat}
                        checked={inputFields?.sat === "ON"}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <label for="Saturday" className="margin">
                        Saturday
                      </label>
                      <input
                        type="checkbox"
                        id="Sunday"
                        name="sun"
                        // value={inputFields?.sun}
                        checked={inputFields?.fri === "ON"}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <label for="Sunday" className="margin">
                        Sunday
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="df df-sb">
        <div>
          <button
            className="btn cancel-btn btn-outline-primary bg-white m-2"
            onClick={() => navigate("/panel/shiftmastertable")}
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            className="btn primary-btn"
            type="submit"
            onClick={(e) => {onupdate(e)}}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default ShiftMasterEditForm;
