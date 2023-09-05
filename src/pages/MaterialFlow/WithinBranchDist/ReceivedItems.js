import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import "./imi.scss";

const recievedColumns = [
    {
        Header: "Item Name",
        accessor: "itemname",
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
        Header: "Container Type",
        accessor: "type",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
];

const recievedData = [
    {
        itemname: "Field 1",
        type: "Box",
        quantity: "50",
    },
    {
        itemname: "Field 1",
        type: "Box",
        quantity: "50",
    },
   
];

const ReceivedItems = () => {
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

export default ReceivedItems;
