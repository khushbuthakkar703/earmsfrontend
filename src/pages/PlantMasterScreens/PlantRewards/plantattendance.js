import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import "../Plantrewards.scss";

const recievedColumns = [
    {
        Header: "Employee Name",
        accessor: "employeename",
    },
    {
        Header: "Employee Id",
        accessor: "employeeid",
    },
    {
        Header: "Alloted Shift",
        accessor: "allotedshift",
    },
   
    {
        Header: "Shift In Time",
        accessor: "shiftintime",
      
    },
    {
        Header: "Shift Out Time",
        accessor: "shiftouttime",
      
    },
    {
        Header: "Employee In Time",
        accessor: "employeeintime",
      
    },
    {
        Header: "Employee Out Time",
        accessor: "employeeouttime",
      
    },
];

const recievedData = [
    {
        employeename: "Suresh",
        employeeid: "001",
        allotedshift: "Shift 1",
        shiftintime: "6 AM",
        shiftouttime:"2 PM",
        employeeintime:"6.05 AM",
        employeeouttime:"2.05 PM"


    },
   
];

const PlantAttendanceTab = () => {
    return (
        <div className="custom-tab">
            <Tabs defaultActiveKey="Attendance Details" id="Attendance Details" className="mb-3">
                <Tab eventKey="Attendance Details" title="Attendance Details">
                    <Table recievedColumns={recievedColumns} recievedData={recievedData} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default PlantAttendanceTab;
