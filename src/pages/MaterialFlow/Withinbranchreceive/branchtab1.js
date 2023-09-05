import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import "./withbranchreceive.scss";
import {BsArrowRightSquare } from "react-icons/bs";
const recievedColumns = [
    {
        Header: "Item",
        accessor: "item",
       
    },
    {
        Header: "Quanityn",
        accessor: "quanityn",
    },
    {
        Header: "Package Type",
        accessor: "packagetype",
    },
    {
        Header: "Package Quantity",
        accessor: "packagequantity",
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
        item: "Item 1",
        quanityn:"2000",
        packagetype: "",
        packagequantity:"",
        bin:"",
        quantity: "true",
       
    },
    {
        item: "Item 1",
        quanityn:"2000",
        packagetype: "",
        packagequantity:"",
        bin:"",
        quantity: "true",
       
    },
   
];

const BranchReceiveTab1 = () => {
    return (
        <div className="custom-tab">
            <Tabs defaultActiveKey="Items Details" id="Items Details" className="mb-3">
                <Tab eventKey="Items Details" title="Items Details">
                    <Table recievedColumns={recievedColumns} recievedData={recievedData} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default BranchReceiveTab1;
