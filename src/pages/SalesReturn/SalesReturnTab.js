import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';


const SalesReturnTab = () => {
    const recievedColumns = [
        {
            Header: 'Product Name',
            accessor: 'productname'
        },
        {
            Header: 'Product Code',
            accessor: 'productcode'
        },
        {
            Header: 'Product Type',
            accessor: 'productype',
            Cell: ({ row }) => {
                return (
                    <select className="form-control  form-select table-select">
                        <option>Stock</option>
                    </select>
                )
            }
        },
        {
            Header: 'Lot',
            accessor: 'lot'
        },
        {
            Header: 'Move to Bin',
            accessor: 'movetobin',
            Cell: ({ row }) => {
                return (
                    <select className="form-control  form-select table-select">
                        <option></option>
                    </select>
                )
            }
        },
        {
            Header: 'Returned Quantity',
            accessor: 'returnedqty'
        },
        {
            Header: 'Returned Reason',
            accessor: 'returnedreason'
        }
    ]
    const recievedData = [
        {
            productname: 'Product 1',
            productcode: 'P-001',
            productype: '',
            lot: '',
            movetobin: '',
            returnedqty: '',
            returnedreason: ''
        },
        {
            productname: 'Product 2',
            productcode: 'P-002',
            productype: '',
            lot: '',
            movetobin: '',
            returnedqty: '',
            returnedreason: ''
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
            <Tab eventKey="shift1" title="Products">
            <Table recievedColumns={recievedColumns} recievedData={recievedData} />
            </Tab>
        </Tabs>
        </div>
    </div>
  )
}

export default SalesReturnTab
