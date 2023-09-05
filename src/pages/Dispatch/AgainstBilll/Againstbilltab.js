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
    Header: "Lot",
    accessor: "lot"
  },
  {
    Header: "Box Quantity",
    accessor: "quantity"
  },
  {
    Header: "Piece Quantity",
    accessor: "picquanty"
  },
]

const recievedData = [
  {
    productname: "Dnut Seed",
    lot: "73kg",
    quantity: "100",
    picquanty: "1000",   
  },
  {
    productname: "Dnut Seed",
    lot: "73kg",
    quantity: "100",
    picquanty: "1000",
  }
]
const AgainstBillTab= () => {
  return (
    <div className='custom-tab'>

{/* <Tabs
      defaultActiveKey="dayendprocess"
      id="uncontrolled-tab-example"
      className="mb-3 first-tab"
    >
      <Tab eventKey="dayendprocess" title="Product Details"> */}
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />
      {/* </Tab>
    </Tabs> */}


    
   
    </div>
  );
};

export default AgainstBillTab;