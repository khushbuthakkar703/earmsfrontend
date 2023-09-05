import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';
import { IoMdAddCircle } from "react-icons/io";
import {BsArrowRightSquare } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
const recievedColumns = [
  {
    Header: "Bin Id",
    accessor: "binid",

  },
  {
    Header: "Bin capacity",
    accessor: "bincapacity"
  },
  {
    Header: "Current Stock in Bin",
    accessor: "currentstock"
  },
  {
    Header: "Bin Contents",
    accessor: "bincontents"
  },
  {
    Header: "Capacity Left",
    accessor: "capacityleft"
  },
  {
    Header: "Select Bin",
    accessor: "selectbin",
    Cell: ({ row }) => {
        console.log(row.values);
        return (
            <>
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1"></label>
                </>
        )
    }
  },
 

]

const recievedData = [
  {
    binid: "Bin 1",
    bincapacity: "8000",
    currentstock: "4000",
    bincontents: "Ret Seeds",
    capacityleft:'4000',
    selectbin:'',
   
  },
  {
    binid: "Bin 1",
    bincapacity: "8000",
    currentstock: "4000",
    bincontents: "Ret Seeds",
    capacityleft:'4000',
    selectbin:'',
  },
]
const StorageFormTab2= () => {
  return (
    <div className='custom-tab'>

<Tabs
      defaultActiveKey="bindetails"
      id="uncontrolled-tab-example"
      className="mb-3 first-tab"
    >
      <Tab eventKey="bindetails" title="Bin Details">
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />
   
    
      </Tab>
    </Tabs>


    
   
    </div>
  );
};

export default StorageFormTab2;