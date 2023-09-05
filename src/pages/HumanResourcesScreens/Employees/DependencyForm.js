import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import convertDate, {
  datePrefillFormat,
  formatDateForRequest,
} from "../../../utils/ConvertDates";

const DependencyForm = ({
  dependencyId,
  handleDependancyDataChange,
  handleStatusChange,
  recievedData,
  handleAddMore,
  handleDeleteAdd,
  totalForms,
  pGender,
  list,
  mStatus,
  editForm,
}) => {
  // const [mStatus, setmStatus] = useState();
  const [gender, setGender] = useState();
  console.log(list, "List");
  console.log(list.dependencyDOB, "ListNO");

  const handleNewEducation = () => {
    handleAddMore();
  };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  useEffect(() => {
    // if (dependencyId != 1) {
    //   setmStatus(recievedData);
    // }

    setGender(pGender?.gender);
  }, [recievedData, pGender]);
  console.log(editForm, "FORM");

  return (
    <div>
      {/* {dependencyId === 1 || editForm && (
            <div className="form-group">
              <label className="form-label">Maritial Status</label>
              <select
                className="form-control"
                name="martialStatus"
                value=""
                onChange={(e) => {
                  setmStatus(e.target.value);
                  handleStatusChange(e);
                }}
              >
                <option>Select Status</option>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
              </select>
            </div>
          )} */}

      <div className="df fw">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={list.name}
            className="form-control"
            name="name"
            onChange={(e) => handleDependancyDataChange(e, dependencyId)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Relationship</label>
          <select
            className="form-control"
            name="relationShip"
            value={list.relationShip}
            onChange={(e) => handleDependancyDataChange(e, dependencyId)}
          >
            <option></option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="brother">Brother</option>

            {mStatus == "married" && (
              <>
                {gender === "male" ? (
                  <option value="wife">Wife</option>
                ) : (
                  <option value="husband">Husband</option>
                )}

                <option value="kid">Kid</option>
              </>
            )}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            value={datePrefillFormat(list.dependencyDOB)}
            className="form-control"
            // {...register('dateOfBirth')}
            name="dependencyDOB"
            onChange={(e) => handleDependancyDataChange(e, dependencyId)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Education</label>
          <input
            type="text"
            className="form-control"
            name="education"
            value={list.education}
            onChange={(e) => handleDependancyDataChange(e, dependencyId)}
          />
        </div>
      </div>
      {totalForms === dependencyId && editForm === false && (
        <div className="d-flex">
          <button
            className="btn add-btn m-2 df dc"
            onClick={handleNewEducation}
          >
            <IoMdAddCircle />
            Add More
          </button>
          <button className="btn add-btn m-2 df dc" onClick={handleDeleteAdd}>
            <IoMdAddCircle />
            Remove Add More
          </button>
        </div>
      )}
    </div>
  );
};

export default DependencyForm;
