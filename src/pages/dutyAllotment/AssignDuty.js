import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../Component/Tables/Tables";

const AssignDuty = ({
  recievedData = [],
  handleDataChange,
  designationList,
}) => {
  const [dataToDisplay, setDataToDisplay] = useState();

  const recievedColumns = [
    {
      Header: "Employee ID",
      accessor: "id",
    },
    {
      Header: "Employee Name",
      accessor: "employeeName",
    },
    {
      Header: "Current Duty",
      accessor: "currentDesignation",
    },
    {
      Header: "Assign Duty",
      accessor: "assign",
      Cell: ({ row }) => {
        const handleChange = (e) => {
          const changedDuty = e.target.value;

          const dataToSend = {};

          dataToSend["active"] = row?.original?.active;
          dataToSend["currentDuty"] = row?.original?.designation;
          dataToSend["staffId"] = row?.original?.staffId;
          dataToSend["assignDuty"] = changedDuty;
          dataToSend["transferId"] = row.original?.transferId;

          handleDataChange(dataToSend);
        };
        return (
          <select
            className="form-control  form-select table-select"
            onChange={handleChange}
          >
            <option>Select designation</option>
            {designationList &&
              designationList.map(
                (val) => val?.name && <option>{val?.name}</option>,
              )}
          </select>
        );
      },
    },
  ];

  useEffect(() => {
    const formattedData = [];

    recievedData.map((val) => {
      formattedData.push(JSON.parse(val?.value));
    });
    setDataToDisplay(formattedData);
  }, [recievedData]);

  return (
    <div className="custom-tab">
      {console.log("DESIGNATION LIST IN ASSIGN DUTY TAB:::", designationList)}
      <Tabs
        defaultActiveKey="assignduty"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="assignduty" title="Assign Duty">
          {dataToDisplay && (
            <Table
              recievedColumns={recievedColumns}
              recievedData={dataToDisplay}
            />
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default AssignDuty;
