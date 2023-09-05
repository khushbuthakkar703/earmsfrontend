import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';
import genertor1 from '../../../assets/genertor1.png'
import { BiDotsVerticalRounded } from "react-icons/bi";
const recievedColumns = [
  {
    Header: "Status",
    accessor: "status",

  },
  {
    Header: "From",
    accessor: "from",
  
  },
  {
    Header: "To",
    accessor: "to"
  },
  {
    Header: "In Days",
    accessor: "indays"
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => {
        console.log(row.values);
        return (
            <div class="dropdown">
                <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className='action-icons'><BiDotsVerticalRounded /></div>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Something</a>
                </div>
            </div>
        )
    }
  },
  
 
 
]

const recievedData = [
  {
    status: "OFF",
    from: "11 Mar 2021",
    to: "11 Mar 2022",
    indays: "365",
    action: ""
    
  },
 
 
  
]
const recievedColumns1 = [
    {
        Header: "Status",
        accessor: "status",
    
      },
      {
        Header: "From",
        accessor: "from",
      
      },
      {
        Header: "To",
        accessor: "to"
      },
      {
        Header: "In Days",
        accessor: "indays"
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <div class="dropdown">
                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className='action-icons'><BiDotsVerticalRounded /></div>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Something</a>
                    </div>
                </div>
            )
        }
      },
   
  ]
  
  const recievedData1 = [
    {
        status: "OFF",
        from: "11 Mar 2021",
        to: "11 Mar 2022",
        indays: "365",
        action: ""
        
      },
    
  ]
const ProductionPopupTab1= () => {

  return (
    <div className='pop-tabs'>
        <div className='left-img'>
            <div className='second-genertor popop-border'>
                <div className='left-tab-img'>
                    <img src={genertor1}/>
                </div>
                <div className='right-tab-content'>
                <p className='heading'>Machinery Details</p>
                    <div><p>Gen: <span>p1 QC Genset 62.5</span></p></div>
                    <div><p>Log ID: <span>1234</span></p></div>
                    <div><p>EB Service Id: <span>10</span></p></div>
                </div>
            </div>
        <div className='custom-tab '>
    <Tabs
      activeKey= "Running Status"
      id="uncontrolled-tab-example"
      className="mb-3 first-tab"
    >
      <Tab eventKey="Running Status" title="Running Status" className='tab-2'>
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />      
      </Tab>
    </Tabs>
    </div>
        </div>
        <div className='right-img'>   

        <div className='second-genertor popop-border'>
                <div className='left-tab-img'>
                    <img src={genertor1}/>
                </div>
                <div className='right-tab-content'>
                <p className='heading'>Machinery Details</p>
                    <div><p>Gen: <span>p1 QC Genset 62.5</span></p></div>
                    <div><p>Log ID: <span>1234</span></p></div>
                    <div><p>EB Service Id: <span>10</span></p></div>
                </div>
            </div>
            <div className='custom-tab '>
    <Tabs
      activeKey= "Running Status"
      id="uncontrolled-tab-example"
      className="mb-3 first-tab"
    >
      <Tab eventKey="Running Status" title="Running Status" className='tab-2'>
      <Table recievedColumns={recievedColumns1} recievedData={recievedData1} />      
      </Tab>
    </Tabs>
    </div></div>
   
      
    </div>
  
  );
};

export default  ProductionPopupTab1;