import React from 'react'
import PageMenuCreationTab from './Pagemenucreationtab'
import './pagemenucreation.scss'

const PageMenuCreationForm = () => {
  return (
    <div>
                <div>
                    <p className='employee-1'>Page Creation</p>
                    <p className='employee-2'>Page Creation</p>
                </div>
   
    <div className="theme-card">
      <div className="theme-card-header">
        <h6>Page Creation</h6>
      </div>
      <div className="theme-card-content">
        <div className="df fw">
        <div className="form-group">
            <label className="form-label">Page Name</label>
            <input type="text" required className="form-control" />
          </div>
          <div className="form-group">
            <label className="form-label">Department </label>
            <select className="form-control  form-select">
              {/* <option>P000-01</option>
              <option>P000-02</option> */}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Page Type </label>
            <select className="form-control  form-select">
              {/* <option>P000-01</option>
              <option>P000-02</option> */}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Parent Menu </label>
            <select className="form-control  form-select">
              {/* <option>P000-01</option>
              <option>P000-02</option> */}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">User Access Level </label>
            <select className="form-control  form-select">
              {/* <option>P000-01</option>
              <option>P000-02</option> */}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">created By</label>
            <select className="form-control  form-select" readOnly>
              {/* <option>P000-01</option>
              <option>P000-02</option> */}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">created On</label>
            <input type="text" required className="form-control" readOnly/>
          </div>
        </div>
      </div>
    </div>

    <div>
    <PageMenuCreationTab />
    </div>
   
    <div className="Forward-form-button">
      <div>
      <button className="btn btn-outline-primary bg-white m-2">Cancel</button>
      </div>
      <div>
      <button className="btn primary-btn">Create</button>
      </div>
     
   
    </div>
  </div>
  )
}

export default PageMenuCreationForm;