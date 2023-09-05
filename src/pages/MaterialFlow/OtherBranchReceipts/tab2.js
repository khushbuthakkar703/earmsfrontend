import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import "./otherbranrec.scss";

const recievedColumns = [
    {
        Header: "Bin ID",
        accessor: "binid",
        // Cell: ({ row }) => {
        //     console.log(row.values);
        //     return (
        //         <select className="form-control  form-select table-select">
        //             <option>Item 1</option>
        //         </select>
        //     )
        // }
    },
    {
        Header: "Capacity",
        accessor: "capacity",
    },
    {
        Header: "In Stock",
        accessor: "instock",
    },
    {
        Header: "Store Quantity",
        accessor: "storequantity",
    },
];

const recievedData = [
    {
        binid: "Bin 1",
        capacity: "22000",
        instock: "15000",
        storequantity:"",
    },
    {
        binid: "Bin 1",
        capacity: "22000",
        instock: "15000",
        storequantity:"",
    },
   
];

const OtherBranchReceiptsTab2 = () => {
    return (
        <div className="custom-tab">
            <Tabs defaultActiveKey="Bin Details" id="Bin Details" className="mb-3">
                <Tab eventKey="Bin Details" title="Bin Details">
                    <Table recievedColumns={recievedColumns} recievedData={recievedData} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default OtherBranchReceiptsTab2;
