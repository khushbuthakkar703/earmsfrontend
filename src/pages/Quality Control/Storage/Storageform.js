import React from 'react'
import './storage.scss'
import StorageFormTab1 from './Storageformtab1'
import StorageFormTab2 from './Storageformtab2'
import { BsPrinter } from "react-icons/bs";
const StorageForm = () => {
  return (
    <div>
    <div className='d-flex df-sb'>
        <div>
            <p className='employee-1'>Page Creation</p>
            <p className='employee-2'>Page Creation</p>
        </div>
        <div>
                <button className='btn dark-blue-btn'><BsPrinter />Print</button>
        </div>
        </div>
    <div className="theme-card">
      <div className="theme-card-header">
        <h6>Storage</h6>
      </div>
      <div className="theme-card-content">
        <div className="df fw">
       
          
          <div className="form-group">
            <label className="form-label">Batch No</label>
            <input type="text" required className="form-control" readOnly/>
          </div>
          <div className="form-group">
            <label className="form-label">Reference Number</label>
            <input type="text" required className="form-control" readOnly/>
          </div>
          <div className="form-group">
            <label className="form-label">Select Branch</label>
                <select className="form-control  form-select">
                    <option></option>
                </select>                        
        </div>
          <div className="form-group">
            <label className="form-label">Issue Description </label>
            <input type="date" required className="form-control" />
          </div>
        </div>
      </div>
    </div>

    <div>
    <StorageFormTab1 />
    </div>
    <div>
    <StorageFormTab2 />
    </div>
   
    <div className="Forward-form-button">
      <div>
      <button className="btn btn-outline-primary bg-white m-2">Cancel</button>
      </div>
      <div>
      <button className="btn primary-btn">Store</button>
      </div>
     
   
    </div>
  </div>
  )
}

export default StorageForm;