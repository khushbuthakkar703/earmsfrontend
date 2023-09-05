import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";

const billsreceiveformtab = ({ receivedata }) => {
  const recievedColumns = [
    {
      Header: "Bill NO",
      accessor: "billno",
    },
    {
      Header: "Bill Date",
      accessor: "billdate",
    },
    {
      Header: "Vendor Name",
      accessor: "vendorname",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Package Type",
      accessor: "packagetype",
    },
    {
      Header: "Package Type Quantity",
      accessor: "packagetypequantity",
    },
  ];

  const recievedData = [
    {
      billno: receivedata?.BillNo,
      billdate: receivedata?.BillDate,
      vendorname: receivedata?.VendorName,
      amount: receivedata?.Amount,
      packagetype: "Box",
      packagetypequantity: "25",
    },
  ];
  return (
    <div className="custom-tab">
      <Tabs
        defaultActiveKey="billdetails"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="billdetails" title="Bill Details">
          <Table
            recievedColumns={recievedColumns}
            recievedData={recievedData}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default billsreceiveformtab;
