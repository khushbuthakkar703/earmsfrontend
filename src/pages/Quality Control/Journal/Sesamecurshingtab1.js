import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';

const recievedColumns = [
    {
      Header: "Product Name",
      accessor: "productname",
     
  
    },
    {
      Header: "Godown",
      accessor: "godown"
    },
    {
      Header: "Bin No",
      accessor: "binno"
    },
    {
      Header: "Batch No",
      accessor: "batchno"
    },
    {
      Header: "Input Quantity",
      accessor: "inputquantity"
    },
    {
      Header: "Input Lot",
      accessor: "inputlot"
    },
    {
      Header: "Inventry Type",
      accessor: "inventrytype"
    },
    
  
  ]
  
  const recievedData = [
    {
      productname: "Tea",
      binno:'binno',
      godown: "Godown",
      batchno: "Bin 1",
      inputquantity:'30 Kg',
      inputlot:'1,000',
      inventrytype:'Raw Material'
    },
   
   
  ]
const SesameCurshingTab1 = () => {
  return (
    <div className='custom-tab  journal-sesame'>
    <Tabs
  defaultActiveKey="Products"
  id="uncontrolled-tab-example"
  className="mb-3"
 >
  <Tab eventKey="Products" title="Products">
  <div className='custom-tab'>
        <Tabs
      defaultActiveKey="inputproducts"
      id="uncontrolled-tab-example"
      className="mb-3"
     >
      <Tab eventKey="inputproducts" title="Input Products">
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />
      </Tab>
    </Tabs>
    </div>
  </Tab>


  

  <Tab eventKey="Machinary Details" title="Machinary Details">
  <div className='custom-tab'>
        <Tabs
     
      id="uncontrolled-tab-example"
      className="mb-3"
     >
      <Tab  title="Machinary Details">
     
      </Tab>
    </Tabs>
    </div>
  </Tab>
</Tabs>
</div>
   
  );
};

export default SesameCurshingTab1 ;