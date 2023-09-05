import React, { useEffect } from "react";
import "./MedicalCheckup.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IoMdAddCircle } from "react-icons/io";
import Tables from "../../Component/Tables/Tables";
import Upload from "../../assets/upload.png";
import convertDate, { formatDateForRequest } from "../../utils/ConvertDates";
// import { IoCloudUploadOutline } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from 'moment/moment';
// const recievedData = [
//     {
//         dose: "Dose 1",
//         vaccinationName: "12345",
//         vaccineFor: "Packing ",
//         vaccinationDate: "Cook",
//         uploadProof: "Shift 1",
//     }
// ]

const Vaccination = ({
  handleAddMoreVaccinationTable,
  recievedDataVaccinationTable,
  handleChangeVaccinationTable,
  state,
}) => {
  const recievedColumns = [
    {
      Header: "Dose",
      accessor: "dose",
    },
    {
      Header: "Vaccination  Name",
      accessor: "vaccinationName",
      Cell: ({ row }) => {
        console.log("row", row);
        return (
          <select
            name="vaccinationName"
            className="form-control  form-select table-select"
            value={row.original.vaccinationName}
            onChange={(e) => {
              handleChangeVaccinationTable(e, row.original?.id);
            }}
            disabled={state?.editform === false ? true : ""}
          >
            <option>Vaccination Name</option>
            <option value={"dose 1"}>dose1</option>
            <option value={"dose 2"}>dose 2</option>
            <option value={"dose 3"}>dose 3</option>
          </select>
        );
      },
    },
    {
      Header: "Vaccine For",
      accessor: "vaccineFor",

      Cell: ({ row }) => {
        return (
          <input
            name="vaccineFor"
            value={row.original.vaccineFor}
            onChange={(e) => {
              handleChangeVaccinationTable(e, row.original?.id);
            }}
            disabled={state?.editform === false ? true : ""}
          />
        );
      },
    },

    {
      Header: "Vaccination Date",
      accessor: "vaccinationDate",
      Cell: ({ row }) => {
        return (
          <input
            type="date"
            name="vaccinationDate"
            className="form-control   table-select"
            value={row.original.vaccinationDate}
            onChange={(e) => {
              handleChangeVaccinationTable(e, row.original?.id);
            }}
            disabled={state?.editform === false ? true : ""}
          />
        );
      },
    },
    {
      Header: "Upload Proof",
      accessor: "uploadProof",

      Cell: ({ row }) => {
        // console.log(row.values);
        return (
          <div>
            <label for="file-upload" class="custom-file-upload">
              <img src={Upload} /> Upload
            </label>
            <input
              type="file"
              id="file-upload"
              name="uploadProof"
              onChange={(e) =>
                handleChangeVaccinationTable(e, row.original?.id)
              }
              disabled={state?.editform === false ? true : ""}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="custom-tab">
      <Tabs
        defaultActiveKey="Vaccination"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Vaccination" title="Vaccination Details">
          {recievedDataVaccinationTable.length > 0 && (
            <Tables
              recievedData={recievedDataVaccinationTable}
              recievedColumns={recievedColumns}
            />
          )}
        </Tab>
      </Tabs>
      <button
        className="btn add-btn m-2 df dc"
        onClick={handleAddMoreVaccinationTable}
      >
        <IoMdAddCircle />
        Add More
      </button>
    </div>
  );
};

export default Vaccination;