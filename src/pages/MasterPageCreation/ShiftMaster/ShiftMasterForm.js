import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import "../ShiftMaster/shiftMaster.scss";
import CircularProgress from "@mui/material/CircularProgress";
import apiRequest from "../../../utils/helpers/apiRequest";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";

const ShiftMasterForm = () => {
  const initialData = [
    {
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
    },
  ];
  const [inputFields, setInputFields] = useState(initialData);
  const [category, setCategory] = useState();
  const [checked, setChecked] = useState(
    Array.from({ length: 5 }, () => Array.from({ length: 7 }, () => false)),
  );

  const navigate = useNavigate();

  const handleFormChange = (index, event) => {
    console.log(index, event.target.value);
    if (event.target.type == "checkbox") {
    }
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
  const addShifts = (e) => {
    e.preventDefault();
    // console.log(inputFields, "FFF");
    // console.log(index,"ppFF");

    const val = JSON.parse(JSON.stringify(inputFields));
    let newfield = {
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
    val?.push(newfield);
    setInputFields(val);
  };

  //Remove Shift Fields
  const removeShifts = (e) => {
    e.preventDefault();
    console.log(inputFields);
    const val = JSON.parse(JSON.stringify(inputFields));
    val?.pop();
    setInputFields(val);
  };

  //save
  const onSave = async (e) => {
    e.preventDefault();
    const reqData = inputFields?.map((val) => {
      return { ...val, categoryname: category };
    });
    console.log(reqData, "REQQ");
    const saveShiftResponse = await apiRequest('shifts',reqData,null,null);
    if (saveShiftResponse?.data) {
      toast(<SuccessToast body="Saved Successfully" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
      navigate("/panel/shiftmastertable");
    } else {
      toast(<ErrorToast body=" Failed To save" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    }
    //
  };

  useEffect(() => {
    console.log(inputFields, "val");
  }, [inputFields]);
  useEffect(() => {
    console.log(checked, "check");
  }, [checked, inputFields]);
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
                  <select
                    className="form-control Shift-category form-label"
                    // onChange={(event) => handleFormChange(index, event)}
                    name="shiftCategory"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    <option></option>
                    <option value={"production Shift"}>Production shift</option>
                    <option>Garden Shift</option>
                    <option>General Shift</option>
                  </select>
                </div>
                {inputFields?.map((shift, index) => {
                  return (
                    <div key={index}>
                      <div className="d-flex">
                        <div className="margin-right">
                          <label className="form-label ">Shift Type</label>
                          <select
                            className="form-control form-label "
                            name="categorytype"
                            onChange={(e) => {
                              handleFormChange(index, e);
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
                              onChange={(e) => {
                                handleFormChange(index, e);
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
                              onChange={(e) => {
                                handleFormChange(index, e);
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
                              onChange={(e) => {
                                handleFormChange(index, e);
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
                              onChange={(e) => {
                                handleFormChange(index, e);
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
                            value={checked[index][0] == true ? "" : "ON"  }
                            onChange={(e) => {
                              let val = [...checked];
                              val[index][0]=!val[index][0]
                              setChecked(val);
                              handleFormChange(index, e);
                            }}
                          />
                          <label for="Monday" className="margin">
                            Monday
                          </label>
                          <input
                            type="checkbox"
                            id="Tuesday"
                            name="tue"
                            value={checked[index][1] == true ? "" : "ON"  }
                            onChange={(e) => {
                              let val = [...checked];
                              val[index][1]=!val[index][1]
                              setChecked(val);
                              handleFormChange(index, e);
                            }}
                          />
                          <label for="Tuesday" className="margin">
                            Tuesday
                          </label>
                          <input
                            type="checkbox"
                            id="Wednesday"
                            name="wed"
                            value={checked[index][2] == true ? "" : "ON"  }
                            onChange={(e) => {
                              let val = [...checked];
                              val[index][2]=!val[index][2]
                              setChecked(val);
                              handleFormChange(index, e);
                            }}
                          />
                          <label for="Wednesday" className="margin">
                            Wednesday
                          </label>
                          <input
                            type="checkbox"
                            id="Thursday"
                            name="thu"
                            value={checked[index][3] == true ? "" : "ON"  }
                            onChange={(e) => {
                              let val = [...checked];
                              val[index][3]=!val[index][3]
                              setChecked(val);
                              handleFormChange(index, e);
                            }}
                          />
                          <label for="Thursday" className="margin">
                            Thursday
                          </label>
                          <input
                            type="checkbox"
                            id="Friday"
                            name="fri"
                            value={checked[index][4] == true ? "" : "ON"  }
                            onChange={(e) => {
                              let val = [...checked];
                              val[index][4]=!val[index][4]
                              setChecked(val);
                              handleFormChange(index, e);
                            }}
                          />
                          <label for="Friday" className="margin">
                            Friday
                          </label>
                          <input
                            type="checkbox"
                            id="Saturday"
                            name="sat"
                            value={checked[index][5] == true ? "" : "ON"  }
                            onChange={(e) => {
                              let val = [...checked];
                              val[index][5]=!val[index][5]
                              setChecked(val);
                              handleFormChange(index, e);
                            }}
                          />
                          <label for="Saturday" className="margin">
                            Saturday
                          </label>
                          <input
                            type="checkbox"
                            id="sunday"
                            name="sun"
                            value={checked[index][6] == true ? "" : "ON"  }
                            onChange={(e) => {
                              let val = [...checked];
                              val[index][6]=!val[index][6]
                              setChecked(val);
                              handleFormChange(index, e);
                            }}
                          />
                          <label for="Sunday" className="margin">
                            Sunday
                          </label>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="d-flex divider ">
                  <button
                    className="btn add-btn m-2 df dc "
                    onClick={(e) => addShifts(e)}
                  >
                    <IoMdAddCircle />
                    Add shift Type
                  </button>
                  <button
                    className="btn add-btn m-2 df dc"
                    onClick={(e) => removeShifts(e)}
                  >
                    <IoMdAddCircle />
                    Remove shift Type
                  </button>
                </div>
              </div>
              {/* );
              })} */}
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
            onClick={(e) => {
              onSave(e);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ShiftMasterForm;
