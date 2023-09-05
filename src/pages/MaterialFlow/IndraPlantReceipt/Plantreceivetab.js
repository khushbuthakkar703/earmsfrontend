import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';

const recievedColumns = [
  {
    Header: "Item Name",
    accessor: "itemname",
    // Cell: ({ row }) => {
    //     console.log(row.values);
    //     return (
    //         <select className="form-control  form-select table-select">
    //             <option>Item 1</option>
    //         </select>
    //     )
    // }

  },
  {
    Header: "Container Type",
    accessor: "containertype"
  },
  {
    Header: "Quantity",
    accessor: "quantity"
  },
  

]

const recievedData = [
  {
    itemname: "Item 1",
    containertype: "Box",
    quantity: "50",
  },
  {
    itemname: "Item 1",
    containertype: "Box",
    quantity: "50",
  },
]
const PlantReceiveTab = () => {
  return (
    <div className='custom-tab'>
        <Tabs
      defaultActiveKey="MRN-001"
      id="uncontrolled-tab-example"
      className="mb-3"
     >
      <Tab eventKey="MRN-001" title="MRN-001">
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />
      </Tab>
      <Tab eventKey="MRN-002" title="MRN-002">
    
      </Tab>
      <Tab eventKey="MRN-003" title="MRN-003">
     
      </Tab>
    </Tabs>


   

    </div>
  );
};

export default PlantReceiveTab ;