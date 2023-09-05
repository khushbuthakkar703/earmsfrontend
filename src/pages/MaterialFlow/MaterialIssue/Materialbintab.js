import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";

const MaterialBinTab = ({ handleChange, binDetails, Id }) => {
  console.log("binDetails: " + Id);
  const recievedColumns = [
    {
      Header: "Bin Id",
      accessor: "binid",
    },
    {
      Header: "Batch No",
      accessor: "batchno",
    },
    {
      Header: "Stock",
      accessor: "stock",
    },
    {
      Header: "Taken / Issued",
      accessor: "takenissued",
      Cell: ({ row }) => {
        // console.log('iiiii', row.values)
        return (
          <input
            type="text"
            name="issued"
            onChange={(e) => {
              handleChange(e, row.original.binid, Id, "takenissued");
            }}
          />
        );
      },
    },
  ];

  return (
    <div className="custom-tab">
      <Tabs
        defaultActiveKey="bin Details"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="bin Details" title="Bin Details">
          <Table recievedColumns={recievedColumns} recievedData={binDetails} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MaterialBinTab;
