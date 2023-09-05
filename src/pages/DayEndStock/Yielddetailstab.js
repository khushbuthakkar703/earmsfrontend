import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';

const recievedColumns = [
  {
    Header: "Yield Group",
    accessor: "yieldgroup",

  },
  {
    Header: "Product",
    accessor: "product"
  },
  {
    Header: "Product Type",
    accessor: "producttype"
  },
  {
    Header: "Yesterday Closing",
    accessor: "yesclosing"
  },
  {
    Header: "Today's Closing",
    accessor: "todayclosing"
  },
  {
    Header: "Today's Consuption",
    accessor: "todayconsumption"
  },
  {
    Header: "Today's Production",
    accessor: "todayproduction"
  },
  
  

]

const recievedData = [
  {
    yieldgroup: "Gnut Oil",
    product: "Mantra Gnut Oil",
    producttype: "Outout/Bye",
    yesclosing: "200",
    todayclosing:'100',
    todayconsumption:'1000',
    todayproduction:'1000'
   
  },
  {
    yieldgroup: "Gnut Oil",
    product: "Mantra Gnut Oil",
    producttype: "Outout/Bye",
    yesclosing: "200",
    todayclosing:'100',
    todayconsumption:'1000',
    todayproduction:'1000'

  },
  
 
 
 
]
const YieldDetailsTab= () => {
  return (
    <div className='custom-tab'>

<Tabs
      defaultActiveKey="dayendprocess"
      id="uncontrolled-tab-example"
      className="mb-3 first-tab"
    >
      <Tab eventKey="dayendprocess" title="Yield Summary Details">
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />
      <div className='d-flex df-fe  tab-cal-end'>
        <div className='d-flex pright  border-rit px-3 p-2'>
          <div><p>Production  :</p></div>
          <div><p>10000</p></div>
        </div>
        <div className='d-flex pright plef p-2'>
          <div><p>Production  :</p></div>
          <div><p>10000</p></div>
        </div>
      </div>
      </Tab>
    </Tabs>


    
   
    </div>
  );
};

export default YieldDetailsTab;