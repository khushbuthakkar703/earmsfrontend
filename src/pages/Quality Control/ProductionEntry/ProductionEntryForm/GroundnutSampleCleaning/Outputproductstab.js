import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from '../../../../../Component/Tables/Tables';

const recievedColumns = [
  {
    Header: "Product Name",
    accessor: "productgroup",

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
    Header: "Output Lot",
    accessor: "outputlot"

  },
  {
    Header: "Inventry Type",
    accessor: "inventrytype"
  },



]

const recievedData = [
  {
    productgroup: "Obtained Seeds",
    godown: "",
    binno: "",
    batchno: "",
    outputquantity: '',
    outputlot: '',
    inventrytype: 'Raw Matrial'

  },
  {
    productgroup: "Immature Seed",
    godown: "",
    binno: "",
    batchno: "",
    outputquantity: '',
    outputlot: '',
    inventrytype: 'Raw Matrial'

  },

  {
    productgroup: "Infected Seeds",
    godown: "",
    binno: "",
    batchno: "",
    outputquantity: '',
    outputlot: '',
    inventrytype: 'Raw Matrial'

  },

  {
    productgroup: "Groundnut Pod",
    godown: "",
    binno: "",
    batchno: "",
    outputquantity: '',
    outputlot: '',
    inventrytype: 'Raw Matrial'

  },
  {
    productgroup: "Destoner Cyclone Dust",
    godown: "",
    binno: "",
    batchno: "",
    outputquantity: '',
    outputlot: '',
    inventrytype: 'Scrab'

  },
  {
    productgroup: "Sand",
    godown: "",
    binno: "",
    batchno: "",
    outputquantity: '',
    outputlot: '',
    inventrytype: 'Scrab'

  },


  {
    productgroup: "Stone",
    godown: "",
    binno: "",
    batchno: "",
    outputquantity: '',
    outputlot: '',
    inventrytype: 'Scrab'

  },

]
const OutputTab = () => {
  return (
    <>
      <div className='custom-tab margin-zero'>

        <Tabs
          defaultActiveKey="outputproducts"
          id="uncontrolled-tab-example"
          className="mb-3 first-tab"
        >
          <Tab eventKey="outputproducts" title="Output Products">
            <Tables recievedColumns={recievedColumns} recievedData={recievedData} />

          </Tab>
        </Tabs>




      </div>
      <div className='bottom-table'>
        <span className='btm-table  br-right'><p>Total Input Quantity <sapn>: 60kg</sapn></p></span>
        <span className='btm-table '><p>Total Output Quantity <sapn>: 60kg</sapn></p></span>
      </div>
    </>
  );
};

export default OutputTab;