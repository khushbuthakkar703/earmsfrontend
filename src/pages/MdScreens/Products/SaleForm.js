import React from 'react'
import Mdscreens from './Mdscreens.scss'
import VendorsSaleTab from './VendorsSaleTab'

const SaleForm = () => {
  return (
    <div>
        <div className="panel-header">No.2 Products</div>
        <div className="df df-sb">
            <div>No.2 Product / Sale</div>
        </div>
        <div className="card">
            <div className="card-header bg-white">Add Product</div>
            <div className="theme-card-content">
                <div className="df fw">
                    <div className="form-group">
                        <label className="form-label">Product Name</label>
                        <select className="form-control  form-select">
                            <option> NO 2 Sesame Seed   </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Product ID</label>
                        <input type="text" className="form-control" disabled/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Lot</label>
                        <select className="form-control  form-select" disabled>
                            <option></option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Total Quantity</label>
                        <input type="text" className="form-control" disabled/>
                    </div>
                </div>
            </div>
        </div>
        <VendorsSaleTab />
    </div>
  )
}

export default SaleForm
