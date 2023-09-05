import React from 'react'
import Mdscreens from './Mdscreens.scss'
import VendorsTab from './VendorsTab'

const GroundnutSeedsForm = () => {
  return (
    <div>    
        <div className="panel-header">No.2 Products</div>
        <div className="df df-sb">
            <div>No.2 Product / Groundnut Seeds</div>
        </div>
        <div className="card mb-3">
            <div className="card-header bg-white">Add Product</div>
            <div className="theme-card-content">
                <div className="df fw">
                    <div className="form-group">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control" readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Product ID</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Lot</label>
                        <select className="form-control  form-select">
                            <option></option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <VendorsTab />        
        <div class="df df-sb theme-card-content px-0">
            <div>
                <button className="btn btn-outline-primary bg-white m-2">Cancel</button>
            </div>
            <div>
                <button className="btn primary-btn">Save</button>
            </div>
        </div>
    </div>
  )
}

export default GroundnutSeedsForm
