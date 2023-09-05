import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';

const recievedColumns = [
  {
    Header: "Product Name",
    accessor: "productname",

  },
  {
    Header: "Physical Stock",
    accessor: "phystock"
  },
  {
    Header: "Bin Stock",
    accessor: "binstock"
  },
  {
    Header: "Difference",
    accessor: "difference"
  },
  {
    Header: "Deviation",
    accessor: "deviation"
  },
  
  

]

const recievedData = [
  {
    productname: "Tea",
    phystock: "200",
    binstock: "200",
    difference: "0",
    deviation:'0',
   
  },
  {
    productname: "Tea",
    phystock: "200",
    binstock: "200",
    difference: "0",
    deviation:'0',

  },
  {
    productname: "Tea",
    phystock: "200",
    binstock: "200",
    difference: "0",
    deviation:'0',
   
  },
  {
    productname: "Tea",
    phystock: "200",
    binstock: "200",
    difference: "0",
    deviation:'0',
   
  },
  {
    productname: "Tea",
    phystock: "200",
    binstock: "200",
    difference: "0",
    deviation:'0',
   
  },
  {
    productname: "Tea",
    phystock: "200",
    binstock: "200",
    difference: "0",
    deviation:'0',
   
  },
 
]
const DayEndStockTab1= () => {
  return (
    <div className='custom-tab'>

<Tabs
      defaultActiveKey="dayendprocess"
      id="uncontrolled-tab-example"
      className="mb-3 first-tab"
    >
      <Tab eventKey="dayendprocess" title="Day End Process">
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />
      </Tab>
    </Tabs>


    
   
    </div>
  );
};

export default DayEndStockTab1;