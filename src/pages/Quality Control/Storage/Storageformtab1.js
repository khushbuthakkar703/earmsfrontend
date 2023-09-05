import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';
import { IoMdAddCircle } from "react-icons/io";
import {BsArrowRightSquare } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
const recievedColumns = [
  {
    Header: "Products",
    accessor: "products",

  },
  {
    Header: "Description",
    accessor: "description"
  },
  {
    Header: "Package Type",
    accessor: "packagetype",
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
    Header: "Per Bag Weight",
    accessor: "perweight"
  },
  {
    Header: "Total Quantity",
    accessor: "totalquantity"
  },
  {
    Header: "Select Bin",
    accessor: "selectbin",
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
    Header: "Select Quantity",
    accessor: "selectquantity"
  },
 

]

const recievedData = [
  {
    products: "",
    description: "",
    packagetype: "",
    perweight: "",
    totalquantity:'',
    selectbin:'',
    selectquantity: ''
  },
  
]
const StorageFormTab1= () => {
  return (
    <div className='custom-tab'>

<Tabs
      defaultActiveKey="storedpro"
      id="uncontrolled-tab-example"
      className="mb-3 first-tab"
    >
      <Tab eventKey="storedpro" title="Stored Products">
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />
      <button className='btn add-btn m-2 df dc'><IoMdAddCircle />Add More</button>
    
      </Tab>
    </Tabs>


    
   
    </div>
  );
};

export default StorageFormTab1;