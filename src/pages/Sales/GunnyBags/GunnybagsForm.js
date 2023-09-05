import React, { useState }  from 'react'
import { Breadcrumb } from 'reactstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';

const recievedColumns = [
    {
        Header: 'Product Name',
        accessor: 'product',
    },
    {
        Header: 'Bin',
        accessor: 'bin',
    },
    {
        Header: 'Lot',
        accessor: 'lot',
    },
    {
        Header: 'Price',
        accessor: 'price',
    }
]

const recievedData = [
    {
        product: 'Vendor 1',
        bin: '',
        lot: '',
        price: ''
    }
]

function GunnybagsForm() {
    const [userRole, SetUserRole] = useState('Admin')
  return (
    <div>
      <div className='bills-header'>
        <div>
            <p className='employee-1'>Sales</p>
            <p className='employee-2'>Sales / Gunny Bag</p>
        </div>
    </div>
        <div className="card">
            <div className="card-header bg-white">
                Add Product
            </div>
                <form action="">
            <div className="theme-card-content">
                <div className="df fw">
                
            {
                userRole === 'Admin' ? (
                    <>
                            <div className="form-group">
                                <label className="form-label">Products</label>
                                <select className="form-control  form-select" name="">
                                <option> NO 2 Gunny Bag, No 3 Funny Bag +3 Mo..</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Date</label>
                                <input type="text" className='form-control' disabled />
                            </div>
                             </>
                ) : (
                    <>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Name</label>
                            <select className="form-control  form-select" name="">
                            <option>Vendor</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product ID</label>
                            <input type="text" className="form-control" readOnly/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="" className="form-label">Lot</label>
                            <select className="form-control  form-select" name="">
                            <option></option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Total Quantity</label>
                            <select className="form-control  form-select" name="">
                            <option></option>
                            </select>
                        </div>
                    </>
                )
            }
                </div>
            </div>
                </form>
        </div>
        <div className="custom-tab mt-3">                
            <Tabs
                defaultActiveKey="dayendprocess"
                id="uncontrolled-tab-example"
                className="mb-3 first-tab"
                >
                <Tab eventKey="dayendprocess" title="Products">
                    <Table recievedColumns={recievedColumns} recievedData={recievedData} />
                </Tab>
            </Tabs>
        </div>
        <div className="df df-sb">
            
            <button className='btn trasparent-btn m-2 btn-outline-primary'>Cancel</button>
            <button className='btn primary-btn' type='submit'>
              Save
            </button>
        </div>
    </div>
  )
}

export default GunnybagsForm
