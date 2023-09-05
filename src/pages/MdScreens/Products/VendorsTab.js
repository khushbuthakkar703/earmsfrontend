import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from '../../../Component/Tables/Tables';
import { IoMdAddCircle } from "react-icons/io";

const VendorsTab = () => {
    const recievedColoumns = [
        {
            Header: 'Vendor Name',
            accessor: 'vendorname',
            Cell: ({ row }) => {
                return (
                    <>                        
                        <select className="form-control  form-select">
                            <option>Vendor 1</option>
                            <option>Vendor 2</option>
                        </select>
                    </>
                )
            }
        },
        {
            Header: 'Price',
            accessor: 'price'
        }
    ]
    const recievedData = [
        {
            rewardcat: 'Vendor 1',
            rewardsreceived:'66.66'
        },
        {
            rewardcat: 'Vendor 2',
            rewardsreceived:'66.66'
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

export default VendorsTab
