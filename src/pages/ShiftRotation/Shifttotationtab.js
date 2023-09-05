import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../Component/Tables/Tables";
import { dayNames } from "../../constants/constantValues";

const ShiftRotationTab = ({ shift1Data, shift2Data, shift3Data, weekOff }) => {
  const recievedColumns = [
    {
      Header: "Employee Name",
      accessor: "employeeName",
    },
    {
      Header: "Employee ID",
      accessor: "staffId",
    },
    {
      Header: "Designation",
      accessor: "designation",
    },
    {
      Header: "Week Off",
      accessor: "weekOff",
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <select
            name="weekOff"
            className="form-control  form-select table-select"
            onChange={(e) => {
              weekOff(e, row?.values);
            }}
          >
            {dayNames && dayNames.map((val) => <option>{val}</option>)}
          </select>
        );
      },
    },
  ];
  return (
    <div className="custom-tab">
      <Tabs
        defaultActiveKey="shift1"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="shift1" title="Shift 1">
          <div className="table">
            {shift1Data && (
              <Table
                recievedColumns={recievedColumns}
                recievedData={shift1Data}
              />
            )}
            ,
          </div>
        </Tab>
        <Tab eventKey="shift2" title="Shift 2">
          {" "}
          <div className="table">
            {shift2Data && (
              <Table
                recievedColumns={recievedColumns}
                recievedData={shift2Data}
              />
            )}
            {/* <Table
              recievedColumns={recievedColumns}
              recievedData={shift2Data}
            /> */}
          </div>
        </Tab>
        <Tab eventKey="shift3" title="Shift 3">
          {" "}
          <div className="table">
            {shift3Data && (
              <Table
                recievedColumns={recievedColumns}
                recievedData={shift3Data}
              />
            )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ShiftRotationTab;
