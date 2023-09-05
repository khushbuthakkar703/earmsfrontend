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
    Header: " Quantity",
    accessor: "quantity"
  },
  {
    Header: "Type of Measure",
    accessor: "typemeasure"
  },
]

const recievedData = [
  {
    productname: "Tea",
    quantity:'',
    typemeasure: "kilograms",
   
  },
  {
    productname: "Tea",
    quantity:'',
    typemeasure: "Liter",
   
  },
 
]
const AdminInspectionTab = () => {
  return (
    <div className='custom-tab'>
        <Tabs
      defaultActiveKey="products"
      id="uncontrolled-tab-example"
      className="mb-3"
     >
      <Tab eventKey="products" title="Products">
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />
      </Tab>
    </Tabs>


   

    </div>
  );
};

export default AdminInspectionTab ;