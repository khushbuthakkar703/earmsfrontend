import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import { IoMdAddCircle } from "react-icons/io";
import { BsArrowRightSquare } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const MaterialIssueTab = ({ data, handleAddMore, receiveData }) => {
  const recievedColumns = [
    {
      Header: "Item Name",
      accessor: "itemname",
    },
    {
      Header: "Issued From Bin",
      accessor: "issuedfrombin",
    },
    {
      Header: "Issued From Batch",
      accessor: "issuedfromabtch",
    },
    {
      Header: "Requested Quantity",
      accessor: "requestedquantity",
    },
    {
      Header: "Allocated Quantity",
      accessor: "allocatedquantity",
    },
    {
      Header: "Pending Quantity",
      accessor: "pendingquantity",
    },
    {
      Header: "Issue",
      accessor: "issue",
      Cell: ({ row }) => {
        // console.log(row.values);
        return (
          <>
            {row.values.issue ? (
              <div>
                <BsArrowRightSquare className="" />
              </div>
            ) : (
              <div>
                <AiOutlineEye className="" />
              </div>
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="custom-tab">
      <Tabs
        defaultActiveKey="issueitems"
        id="uncontrolled-tab-example"
        className="mb-3 first-tab"
      >
        <Tab eventKey="issueitems" title="Issue Items">
          <Table recievedColumns={recievedColumns} recievedData={receiveData} />
          <button className="btn add-btn m-2 df dc" onClick={handleAddMore}>
            <IoMdAddCircle />
            Add More
          </button>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MaterialIssueTab;
