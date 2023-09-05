import React from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';

function EditPriceUpdate() {
    const recievedColumns = [
        {
            Header: 'Vendor Name',
            accessor: 'vendorname'
        },
        {
            Header: 'Price',
            accessor: 'price'
        }
    ]
    const recievedData = [
        {
            vendorname: 'Vendor 1',
            price: ''
        },
        {
            vendorname: 'Vendor 2',
            price: ''
        }
    ]
  return (
    <>      
        <div className="panel-header">Sales</div>
        <Breadcrumbs />
        <div className="card">
            <div className="card-header">Product Details</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="df">
                            <p>Product Name :</p>
                            <p>No.2 Gunny Bags</p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="df">
                            <p>Product ID :</p>
                            <p>P-0001</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <div className="df">
                            <p>Lot :</p>
                            <p>74Kg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
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
      <div className='df df-sb theme-card-content'>
            <button className='btn trasparent-btn m-2 btn-outline-primary'>Cancel</button>
            <button className='btn primary-btn' type='submit'>
              Update
            </button>
          </div>
    </>
  )
}

export default EditPriceUpdate
