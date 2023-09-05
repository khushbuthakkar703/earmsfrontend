import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from '../../../Component/Tables/Tables';
import { IoMdAddCircle } from "react-icons/io";

const VendorsSaleTab = () => {
    const recievedColoumns = [
        {
            Header: 'Vendor',
            accessor: 'vendorname'
        },
        {
            Header: 'Rate',
            accessor: 'rate'
        },
        {
            Header: 'Bin',
            accessor: 'bin',
            Cell: ({ row }) => {
                return (
                    <>                        
                        <select className="form-control  form-select">
                            <option></option>
                        </select>
                    </>
                )
            }
        },
        {
            Header: 'Batch No',
            accessor: 'batchno',
            Cell: ({ row }) => {
                return (
                    <>                        
                        <select className="form-control  form-select">
                            <option></option>
                        </select>
                    </>
                )
            }
        },
        {
            Header: 'Assigned Quantity',
            accessor: 'assignedqty'
        },
        {
            Header: 'Compare %',
            accessor: 'comparepercent'
        }
    ]
    const recievedData = [
        {
            vendorname: 'Vendor 1',
            rate:'',
            bin: '',
            batchno: '',
            assignedqty: '',
            comparepercent: 'N/A'
        },{
            vendorname: 'Vendor 2',
            rate:'',
            bin: '',
            batchno: '',
            assignedqty: '',
            comparepercent: '7%'
        },{
            vendorname: 'Vendor 3',
            rate:'',
            bin: '',
            batchno: '',
            assignedqty: '',
            comparepercent: '10%'
        }
    ]
  return (
    <div className='custom-tab mt-3'>

      <Tabs
        defaultActiveKey="page Fields"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="page Fields" title="Vendors">
        </Tab>
      </Tabs>
        <Tables recievedColumns={recievedColoumns} recievedData={recievedData} />
      <button className='btn add-btn m-2 df dc'><IoMdAddCircle />Add More</button>

    </div>
  )
}

export default VendorsSaleTab
