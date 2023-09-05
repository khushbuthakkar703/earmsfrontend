import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import "../Plantrewards.scss";

const recievedColumns = [
    {
        Header: "Reward Category",
        accessor: "rewardcategory",
    },
    {
        Header: "Reward Received On",
        accessor: "rewardreceivedon",
    },
    {
        Header: "Reward status",
        accessor: "rewardstatus",
    },
   
    {
        Header: "Approve ",
        accessor: "approve",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <input type="checkbox" />
            )
        }
    },
];

const recievedData = [
    {
        rewardcategory: "Attendance",
        rewardreceivedon: "11 Aug 2022",
        rewardstatus: "Approved By Admin",
        approve: "select",
    },
    {
        rewardcategory: "Productivty",
        rewardreceivedon: "11 Aug 2022",
        rewardstatus: "Approved By Admin",
        approve: "select",
    },
];

const PlantRewardsTab = () => {
    return (
        <div className="custom-tab">
            <Tabs defaultActiveKey="Rewards Received" id="Rewards Received" className="mb-3">
                <Tab eventKey="Rewards Received" title="Rewards Received">
                    <Table recievedColumns={recievedColumns} recievedData={recievedData} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default PlantRewardsTab;
