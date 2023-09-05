import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import "./otherbranrec.scss";
import {BsArrowRightSquare } from "react-icons/bs";
const recievedColumns = [
    {
        Header: "Item Name",
        accessor: "itemname",
       
    },
    {
        Header: "Container Type",
        accessor: "type",
    },
  
    {
        Header: "Bin",
        accessor: "bin",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option>Item 1</option>
                </select>
            )
        }
    },
    {
        Header: "Quantity",
        accessor: "quantity",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
              <>
              {row.values.quantity === "true" ? <div ><BsArrowRightSquare/></div> : null}
              </>
            )
        }
    },
];

const recievedData = [
    {
        itemname: "Item 1",
        type: "Box",
        bin:"50",
        quantity: "true",
       
    },
    {
        itemname: "Item 1",
        type: "Box",
        bin:"50",
        quantity: "true",
       
    },
   
];

const OtherBranchReceiptsTab1 = () => {
    return (
        <div className="custom-tab">
            <Tabs defaultActiveKey="ReceivedItems" id="ReceivedItems" className="mb-3">
                <Tab eventKey="ReceivedItems" title="Received Items">
                    <Table recievedColumns={recievedColumns} recievedData={recievedData} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default OtherBranchReceiptsTab1;
