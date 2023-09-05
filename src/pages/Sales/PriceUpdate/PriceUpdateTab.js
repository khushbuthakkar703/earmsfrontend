import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';

function PriceUpdateTab() {
    const recievedColumns = [
        {
            Header: 'Vendor Name',
            accessor: 'vendorname',
            Cell : ({row}) => {
                return (
                    <select className="form-control  form-select table-select">
                        <option>Vendor 1</option>
                        <option>Vendor 2</option>
                    </select>
                )
            }
        },
        {
            Header: 'Old Price',
            accessor: 'oldprice'
        },
        {
            Header: 'Price Increase in %',
            accessor: 'priceincrease'
        },
        {
            Header: 'New Price',
            accessor: 'newprice'
        }
    ]

    const recievedData = [
        {
            vendorname : 'Vendor 1',
            oldprice : '66.66',
            priceincrease : '10',
            newprice : '72.2'
        },
        {
            vendorname : 'Vendor 2',
            oldprice : '62.66',
            priceincrease : '10',
            newprice : '69.2'
        }
    ]
  return (
    <div>
        <div className='custom-tab mt-3'>
        <Tabs
            defaultActiveKey="shift1"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="shift1" title="Vendors">
            <Table recievedColumns={recievedColumns} recievedData={recievedData} />
            </Tab>
        </Tabs>
        </div>
      
    </div>
  )
}

export default PriceUpdateTab
