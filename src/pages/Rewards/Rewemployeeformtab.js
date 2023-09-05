import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';



// const recievedData = [
//   {
//     day: "1 Jan 2022",
//     attendance: "1",
//     productivity: "1",
//     training:'1',
//     maintainance:'1',
//     innovation:'1',
//   },
//   {
//     day: "1 Jan 2022",
//     attendance: "1",
//     productivity: "1",
//     training:'1',
//     maintainance:'1',
//     innovation:'1',
//   },
//   {
//     day: "1 Jan 2022",
//     attendance: "1",
//     productivity: "1",
//     training:'1',
//     maintainance:'1',
//     innovation:'1',
//   },
//   {
//     day: "1 Jan 2022",
//     attendance: "1",
//     productivity: "1",
//     training:'1',
//     maintainance:'1',
//     innovation:'1',
//   },
// ]
const RewardsUserDetailTab = ({awardDate}) => {
  console.log(awardDate.awardList,"TABLEAWRDLIST")
  const recievedColumns = [
    {
      Header: "Day",
      accessor: "date",
     
    },
    {
      Header: "Attendance",
      accessor: "attendanceCount"
    },
    {
      Header: "Productivity",
      accessor: "productivityCount"
    },
    {
      Header: "Training",
      accessor: "trainingCount"
    },
     {
       Header: "Maintainance",
      accessor: "maintenanceCount"

     },
    {
      Header: "Innovation",
      accessor: "invocationCount"
    },
    
  
  ]
  return (
    <div className='custom-tab'>
        <Tabs
      defaultActiveKey="scroes"
      id="uncontrolled-tab-example"
      className="mb-3"
     >
      <Tab eventKey="scroes" title="Scores">
      <Table recievedColumns={recievedColumns} recievedData={awardDate.awardList} />
      </Tab>
    </Tabs>


   

    </div>
  );
};

export default RewardsUserDetailTab ;