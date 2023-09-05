import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import "../ShiftMaster/shiftMaster.scss";

const ShiftMasterViewForm = () => {
  const { state } = useLocation();
  console.log("state", state);
  const [inputFields, setInputFields] = useState([
    { shiftCategory: "", shifts: [{ shiftType: "", shiftTimings: "" }] },
  ]);
  const [viewData, setViewData] = useState();
  const navigate = useNavigate();
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  //Add Shift Category
  const addFields = (e) => {
    e.preventDefault();
    let newfield = {
      shiftCategory: "",
      shifts: [{ shiftType: "", shiftTimings: "" }],
    };
    setInputFields([...inputFields, newfield]);
  };

  //Remove Shift Category
  const removeFields = (e) => {
    e.preventDefault();
    const val = JSON.parse(JSON.stringify(inputFields));
    val?.pop();
    setInputFields(val);
  };

  //Add Shift Fields
  const addShifts = (e, index) => {
    e.preventDefault();
    console.log(inputFields);
    const val = JSON.parse(JSON.stringify(inputFields));
    let newfield = { shiftType: "", shiftTimings: "" };
    val[index]?.shifts?.push(newfield);
    setInputFields(val);
  };

  //Remove Shift Fields
  const removeShifts = (e, index) => {
    e.preventDefault();
    console.log(inputFields);
    const val = JSON.parse(JSON.stringify(inputFields));
    val[index]?.shifts?.pop();
    setInputFields(val);
  };

  useEffect(() => {
    setViewData(state?.val);
  }, []);
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
              {/* {inputFields?.map((input, index) => {
                return ( */}
              <div>
                <div className="">
                  <label className="form-label">Shift Category</label>
                  <input
                    type="text"
                    className="form-control form-label Shift-category"
                    value={viewData?.categoryName}
                    readOnly
                  />
                </div>
                {/* {input?.shifts?.map((shift, index) => {
                      return ( */}
                <div>
                  <div className="d-flex">
                    <div className="margin-right">
                      <label className="form-label ">Shift Type</label>
                      <select
                        className="form-control form-label "
                        name="shiftType"
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
                          name="timeFrom"
                          value={viewData?.intime}
                          min="09:00"
                          max="18:00"
                          required
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Time To</label>
                        <input
                          style={{ background: "#E5E5E5" }}
                          className="form-control"
                          type="time"
                          name="timeto"
                          min="09:00"
                          max="18:00"
                          required
                          value={viewData?.outtime}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Lunch Break</label>
                        <input
                          className="form-control"
                          type="text"
                          name="timeBreak"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Delay TIme</label>
                        <input
                          className="form-control"
                          type="text"
                          name="timeBreak"
                          required
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
                        name="Monday"
                        value={viewData?.mon}
                        checked={viewData?.mon === "ON"}
                      />
                      <label for="Monday" className="margin">
                        Monday
                      </label>
                      <input
                        type="checkbox"
                        id="Tuesday"
                        name="Tuesday"
                        value={viewData?.tue}
                        checked={viewData?.tue === "ON"}
                      />
                      <label for="Tuesday" className="margin">
                        Tuesday
                      </label>
                      <input
                        type="checkbox"
                        id="Wednesday"
                        name="Wednesday"
                        value={viewData?.wed}
                        checked={viewData?.wed === "ON"}
                      />
                      <label for="Wednesday" className="margin">
                        Wednesday
                      </label>
                      <input
                        type="checkbox"
                        id="Thursday"
                        name="Thursday"
                        value={viewData?.thu}
                        checked={viewData?.thu === "ON"}
                      />
                      <label for="Thursday" className="margin">
                        Thursday
                      </label>
                      <input
                        type="checkbox"
                        id="Friday"
                        name="Friday"
                        value={viewData?.fri}
                        checked={viewData?.fri === "ON"}
                      />
                      <label for="Friday" className="margin">
                        Friday
                      </label>
                      <input
                        type="checkbox"
                        id="Saturday"
                        name="Saturday"
                        value={viewData?.sat}
                        checked={viewData?.sat === "ON"}
                      />
                      <label for="Saturday" className="margin">
                        Saturday
                      </label>
                      <input
                        type="checkbox"
                        id="Sunday"
                        name="Sunday"
                        value={viewData?.sun}
                        checked={viewData?.sun === "ON"}
                      />
                      <label for="Sunday" className="margin">
                        Sunday
                      </label>
                    </div>
                  </div>
                </div>

                {/* );
                    })} */}
                {/* <div className="d-flex divider ">
                      <button
                        className="btn add-btn m-2 df dc "
                        onClick={(e) => addShifts(e, index)}
                      >
                        <IoMdAddCircle />
                        Add shift Type
                      </button>
                      <button
                        className="btn add-btn m-2 df dc"
                        onClick={(e) => removeShifts(e, index)}
                      >
                        <IoMdAddCircle />
                        Remove shift Type
                      </button>
                    </div> */}
              </div>
              {/* //     );
            //   })} */}
            </div>
            {/* <div className="form-group d-flex addCategory">
              <button
                className="btn add-btn m-2 df dc"
                onClick={(e) => addFields(e)}
              >
                <IoMdAddCircle />
                Add Shift Category
              </button>
              <button
                className="btn add-btn m-2 df dc"
                onClick={(e) => removeFields(e)}
              >
                <IoMdAddCircle />
                Remove Shift Category
              </button>
            </div> */}
          </div>
        </div>
      </form>
      <div className="df df-sb">
        <div>
          {/* <button
            className="btn cancel-btn btn-outline-primary bg-white m-2"
            onClick={() => navigate("/panel/shiftmastertable")}
          >
            Cancel
          </button> */}
        </div>
        <div>
          <button
            className="btn primary-btn"
            type="submit"
            onClick={() => navigate("/panel/shiftmastertable")}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ShiftMasterViewForm;
