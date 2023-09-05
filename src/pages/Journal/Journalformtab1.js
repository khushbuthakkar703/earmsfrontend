import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';

const JournalFormTab1 = ({recievedData}) => {
  
  const recievedColumns = [
      {
        Header: "Product Name",
        accessor: "Productname",
      },
      {
        Header: "Godown",
        accessor: "Godown"
      },
      {
        Header: "Bin No",
        accessor: "Binno"
      },
      {
        Header: "Batch No",
        accessor: "Batchno"
      },
      {
        Header: "Input Quantity",
        accessor: "InputQuantity"
      },
      {
        Header: "Input Lot",
        accessor: "Inputlot"
      },
      {
        Header: "Inventry Type",
        accessor: "InventoryType"
      },
      
    
    ]

  console.log([recievedData])
    // const recievedData = [
    //   {
    //     productname: "Tea",
    //     binno:'binno',
    //     godown: "Godown",
    //     batchno: "Bin 1",
    //     inputquantity:'30 Kg',
    //     inputlot:'1,000',
    //     inventrytype:'Raw Material'
    //   },
    //   {
    //       productname: "Tea",
    //       binno:'binno',
    //       godown: "Godown",
    //       batchno: "Bin 1",
    //       inputquantity:'30 Kg',
    //       inputlot:'1,000',
    //       inventrytype:'Raw Material'
    //     },
     
    // ]
  return (
    <div className='custom-tab'>
        <Tabs
      defaultActiveKey="inputproducts"
      id="uncontrolled-tab-example"
      className="mb-3"
     >
      <Tab eventKey="inputproducts" title="Input Products">
      {
        recievedData &&
        <Table recievedColumns={recievedColumns} recievedData={[recievedData]} />
      }
      </Tab>
    </Tabs>


   

    </div>
  );
};

export default JournalFormTab1 ;