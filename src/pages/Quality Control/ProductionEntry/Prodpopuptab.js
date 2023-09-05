import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';
const recievedColumns = [
  {
    Header: "Over Due Task",
    accessor: "overduetask",

  },
  {
    Header: "Pending Task",
    accessor: "pendingtask",
  
  },
  {
    Header: "On Schedule",
    accessor: "onschedule"
  },
  {
    Header: "Completed",
    accessor: "completed"
  },
  
 
 
]

const recievedData = [
  {
    overduetask: "Prodn-982992",
    pendingtask: "",
    onschedule: "",
    completed: "",
 
    
  },
 
 
  
]
const recievedColumns1 = [
    {
      Header: "Shift Date",
      accessor: "shiftdate",
   
  
    },
    {
      Header: "Shift",
      accessor: "shift",
    
    },
    {
      Header: "Production Shift",
      accessor: "productionshift",
    
    },
    {
      Header: "Timeslab",
      accessor: "timeslab",
     
    },
   
  ]
  
  const recievedData1 = [
    {
        shiftdate: "11 Mar 2022",
        shift: "1st Shift P1",
        productionshift: "Production Shift 1, 6AM to 2PM",
        timeslab: "9.30 AM to 10.30 AM",
    },
    
  ]
const ProductionPopupTab= () => {

  return (
    <div>
    <div className='custom-tab '>

    <Tabs
      defaultactiveKey= "Shiftdetails"
      id="uncontrolled-tab-example"
      className="mb-3 first-tab" 
    >
      <Tab eventKey="Shiftdetails" title="Shift details" className='tab-2'>
      <Table recievedColumns={recievedColumns1} recievedData={recievedData1} />      
      </Tab>
      <Tab eventKey="taskSummary" title="Task Summary" className='tab-2'>
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />      
      </Tab>
    </Tabs>


    </div>
      
    </div>
  
  );
};

export default  ProductionPopupTab;