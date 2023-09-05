import React, { useState } from "react";
import { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";

const Billforwardformtab = ({ recievedData }) => {
  const [billDetails, setbillDetails] = useState(recievedData);

  const recievedColumns = [
    {
      Header: "Batch No",
      accessor: "batchNumber",
    },
    {
      Header: "Product Name ",
      accessor: "productName",
    },
    {
      Header: "Vendor Name",
      accessor: "venderName",
    },
    {
      Header: "Amount",
      accessor: "subTotal",
    },
  ];

  useEffect(() => {
    if (recievedData) {
      setbillDetails(recievedData);
    }
  }, []);

  return (
    <div className="custom-tab">
      <Tabs
        defaultActiveKey="billdetails"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="billdetails" title="Bill Details">
          {billDetails && (
            <Table
              recievedColumns={recievedColumns}
              recievedData={billDetails}
            />
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Billforwardformtab;
