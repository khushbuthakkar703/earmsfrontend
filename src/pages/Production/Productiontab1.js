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
        Header: "Godown",
        accessor: "godown",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }
      },
      {
        Header: "Bin No",
        accessor: "binno",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }
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
        binno:'',
        godown: "",
        batchno: "",
        outputquantity:'',
        inputlot:'',
        inventrytype:'Raw Material'
      },
     
    ]
const ProductionTab1 = () => {
  return (
    <div>
    <div className='custom-tab margin-zero'>
        <Tabs
      defaultActiveKey="outputproduct"
      id="uncontrolled-tab-example"
      className="mb-3"
     >
      <Tab eventKey="outputproduct" title="Output Products">
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

export default ProductionTab1 ;