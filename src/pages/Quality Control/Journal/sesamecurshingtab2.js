
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
      Header: "Output Quantity",
      accessor: "outputquantity"
    },
    {
      Header: "Out Lot",
      accessor: "outputlot"
    },
    {
      Header: "Inventry Type",
      accessor: "inventrytype"
    },
    
  
  ]
  
  const recievedData = [
    {
      productname: "Idhaya Grade Sesame Seed",
      binno:'binno 1',
      godown: "Godown 1",
      batchno: "Bin 1",
      outputquantity:'30 Kg',
      outputlot:'1,000',
      inventrytype:'Raw Material'
    },
    {
        productname: "Sand",
        binno:'binno 1',
        godown: "Godown 1",
        batchno: "Bin 1",
        outputquantity:'30 Kg',
        outputlot:'1,000',
        inventrytype:'Raw Material'
      },
    
   
   
  ]
const SesameCurshingTab2 = () => {
  return (
    <div>
    <div className='custom-tab margin-zero'>
        <Tabs
      defaultActiveKey="outputproducts"
      id="uncontrolled-tab-example"
      className="mb-3"
     >
      <Tab eventKey="outputproducts" title="Output Products">
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />
      </Tab>
    </Tabs>
    </div>
     <div className='bottom-table'>
      <span className='btm-table br-right'><p>Total Input Quantity <sapn>: 60kg</sapn></p></span>
      <span className='btm-table'><p>Total Output Quantity <sapn>: 60kg</sapn></p></span>
     </div>
     </div>
  );
};

export default SesameCurshingTab2;