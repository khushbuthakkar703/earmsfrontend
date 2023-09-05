import React from "react";
import "./MedicalCheckup.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IoMdAddCircle } from "react-icons/io";
import Tables from "../../Component/Tables/Tables";
import Upload from "../../assets/upload.png";
// import { IoCloudUploadOutline } from "react-icons/io";

const PhysicalExamination = ({
  handleAddMorePhysicalTable,
  recievedDataPhysicalTable,
  handleChangePhysicalTable,
  state,
}) => {
  const recievedColumns = [
    {
      Header: "Exam No",
      accessor: "examno",
    },
    {
      Header: "Examination  Name",
      accessor: "examinationName",
      Cell: ({ row }) => {
        console.log("row555", row);
        return (
          <select
            className="form-control  form-select table-select"
            name="examinationName"
            value={row.original.examinationName}
            onChange={(e) => {
              handleChangePhysicalTable(e, row.original.id);
            }}
            disabled={state?.editform === false ? true : ""}
          >
            <option value={"General"}>General</option>
            <option value={"Detail"}>Detail</option>
          </select>
        );
      },
    },
    {
      Header: "Examin For",
      accessor: "examfor",
      Cell: ({ row }) => {
        return (
          <input
            name="vaccineFor"
            value={row.original.vaccineFor}
            onChange={(e) => {
              handleChangePhysicalTable(e, row.original?.id);
            }}
            disabled={state?.editform === false ? true : ""}
          />
        );
      },
    },

    {
      Header: "Examination Date",
      accessor: "examdate",
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input
            type="date"
            className="form-control   table-select"
            name="examinationDate"
            value={row.original.examinationDate}
            onChange={(e) => {
              handleChangePhysicalTable(e, row.original?.id);
            }}
            disabled={state?.editform === false ? true : ""}
          />
        );
      },
    },
    {
      Header: "Upload Proof",
      accessor: "proof",

      Cell: ({ row }) => {
        console.log(row.values);
        return (
          // <button>
          //     {/* <IoCloudUploadOutline />  */}
          //     Upload</button>
          <div>
            <label for="file-upload" class="custom-file-upload">
              <img src={Upload} />
              Upload
            </label>
            <input
              type="file"
              id="file-upload"
              name="uploadProof"
              onChange={(e) => {
                handleChangePhysicalTable(e, row.original?.id);
              }}
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
        defaultActiveKey="Physical Examination"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Physical Examination" title="Physical Examination">
          <Tables
            recievedColumns={recievedColumns}
            recievedData={recievedDataPhysicalTable}
            closeicon={true}
          />
        </Tab>
      </Tabs>
      <button
        className="btn add-btn m-2 df dc"
        onClick={handleAddMorePhysicalTable}
      >
        <IoMdAddCircle />
        Add More
      </button>
    </div>
  );
};

export default PhysicalExamination;
