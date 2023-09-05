import React, { useState } from 'react'
import SalesReturnTab from './SalesReturnTab'

const SalesreturnForm = () => {
  return (
    <>
      <div className='bills-header'>
        <div>
            <p className='employee-1'>Product Distruptancies</p>
            <p className='employee-2'>Product Distruptancies / Sales Return</p>
        </div>
    </div>
        <div className="card">
            <div className="card-header">
                Sale Details
            </div>
                <form action="" className='p-3 bg-white'>
            <div className="theme-card-content">
                <div className="df fw">
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Vendor Name</label>
                            <select className="form-control  form-select" name="">
                            <option>Vendor</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Vendor ID</label>
                            <input type="text" className="form-control" readOnly/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="" className="form-label">Ref Number</label>
                            <select className="form-control  form-select" name="">
                            <option></option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Referance Date</label>
                            <input type='date' className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Accounting Firm</label>
                            <select className="form-control  form-select" name="">
                            <option></option>
                            </select>
                        </div>
                   
                            
                </div>
            </div>
                </form>
        </div>
        <SalesReturnTab />
        <div className='df df-sb theme-card-content'>
            <button className='btn trasparent-btn m-2 btn-outline-primary'>Cancel</button>
            <button className='btn primary-btn' type='submit'>
              Save
            </button>
        </div>
    </>
  )
}

export default SalesreturnForm
