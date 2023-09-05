import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";

const BillexchangeTab = ({ billDetails }) => {
  const recievedColumns = [
    {
      Header: "Bill NO",
      accessor: "BillNo",
    },
    {
      Header: "Bill Date",
      accessor: "BillDate",
    },
    {
      Header: "Vendor Name",
      accessor: "VendorName",
    },
    {
      Header: "Amount",
      accessor: "Amount",
    },
    {
      Header: "Package Type",
      accessor: "PackageType",
    },
    {
      Header: "Package Type Quantity",
      accessor: "PackageTypeQuantity",
    },
  ];
  // useEffect(() => {
  //   // setBillDetails(recievedData)
  //   console.log('props: ', billDetails);
  //   // if (recievedData) {
  //   //   const recData = Object.values(recievedData);
  //   // console.log(recData)
  //   //   setBillDetails(recData);
  //   // }
  // }, []);

  return (
    <div className="custom-tab">
      {/* {console.log('VALUE WE GET', billDetails)} */}
      <Tabs
        defaultActiveKey="billdetails"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="billdetails" title="Bill Details">
          <Table recievedColumns={recievedColumns} recievedData={billDetails} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default BillexchangeTab;
