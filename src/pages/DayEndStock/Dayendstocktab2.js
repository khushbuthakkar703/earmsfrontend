import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';
import YieldDetailsTab from './Yielddetailstab'
import {useState} from 'react'
const recievedColumns = [
  {
    Header: "Audited By",
    accessor: "autitedby",

  },
  {
    Header: "Autited On",
    accessor: "auditedon",
  
  },
  {
    Header: "Accounted By",
    accessor: "accountedby"
  },
  {
    Header: "Accounted On",
    accessor: "accountedOn"
  },
  {
    Header: "Branch",
    accessor: "branch"
  },
  {
    Header: "Date",
    accessor: "date"
  },
  {
    Header: "Product",
    accessor: "product"
  },

  {
    Header: "Issue",
    accessor: "issue",
   
  },

]

const recievedData = [
  {
    autitedby: "John Doe",
    auditedon: "11 Mar 2022",
    accountedby: "John Doe",
    accountedOn: "200",
    branch:'BTH',
    date:'11 Mar 2022',
    product:'Gnut Oil',
    issue:  <select className="form-control  form-select table-select">
    <option>11 Mar 2022</option>
</select>
  },
  {
    autitedby: <div><button className='btn dark-blue-btn'>View Person</button></div>,
    auditedon:<div><button className='btn dark-blue-btn'>View Ledger</button></div>,
    accountedby: <div><button className='btn dark-blue-btn'>View Pending TRN</button></div>,
    accountedOn: "",
    branch:<div><button className='btn dark-blue-btn fz-13'>View MVMT</button></div>,
    date:<div><button className='btn dark-blue-btn'>Grid Report </button></div>,
    product:'',
    issue:''
  },
 
  
]
const recievedColumns1 = [
    {
      Header: "Product name",
      accessor: "productname",
  
    },
    {
      Header: "Bin Name",
      accessor: "binname"
    },
    {
      Header: "Bin No",
      accessor: "binno"
    },
    {
      Header: "Godown",
      accessor: "godown"
    },
    {
      Header: "In Lot",
      accessor: "inlot"
    },
    {
      Header: "In Disp Unit",
      accessor: "inunit"
    },
    {
      Header: "Phusical Stock",
      accessor: "phystock"
    },
    {
        Header: "Bin Stock",
        accessor: "binstock"
      },
      {
        Header: "Difference",
        accessor: "difference"
      },
      {
        Header: "Deviation",
        accessor: "deviation"
      },
  
  
  
  ]
  
  const recievedData1 = [
    {
        productname: "Gnut Oil",
        binname: "Bin One",
        binno: "Bin 1",
        godown: "23",
        inlot:'1',
        inunit:'Unit 1',
        phystock:'2000',
        binstock:'2000',
        difference:'0',
        deviation:'0'

    },
    {
        productname: "Gnut Oil",
        binname: "Bin One",
        binno: "Bin 1",
        godown: "23",
        inlot:'1',
        inunit:'Unit 1',
        phystock:'2000',
        binstock:'2000',
        difference:'0',
        deviation:'0'

    },
    {
        productname: "Gnut Oil",
        binname: "Bin One",
        binno: "Bin 1",
        godown: "23",
        inlot:'1',
        inunit:'Unit 1',
        phystock:'2000',
        binstock:'2000',
        difference:'0',
        deviation:'0'

    },
    
  ]
const DayEndStockTab2= () => {
    let [tabactive,setTabactive] = useState("yieldsumry")
  return (
    <div>
    <div className='custom-tab '>

    <Tabs
      activeKey={tabactive}
      id="uncontrolled-tab-example"
      className="mb-3 first-tab"
      onSelect={(key) => setTabactive(key)}
    >
        <Tab eventKey="yieldsumry" title="Yield Summary">
      <Table recievedColumns={recievedColumns} recievedData={recievedData} />      
      </Tab>
      <Tab eventKey="stockusumary" title="Stock Summary" className='tab-2'>
      <Table recievedColumns={recievedColumns1} recievedData={recievedData1} />      
      </Tab>
    </Tabs>
    

    </div>
        {tabactive === "yieldsumry" && <YieldDetailsTab />}
    </div>
  
  );
};

export default DayEndStockTab2;