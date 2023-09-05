import React from 'react'
import './productionentry.scss'
import settings from '../../../assets/Settings.svg'
// import SesameSeedsCleaningProcess from './ProductionEntryForm/SesameSeedsCleaningProcess/SesameSeedsCleaningProcess';
import Breadcrumbs from '../../../Component/Breadcrumbs';
// import SesameSampleCleaning from './ProductionEntryForm/SesameSampleCleaning';
import SesameSampleCrushing from './ProductionEntryForm/SesameSampleCrushing';
import GroundnutSampleCleaning from './ProductionEntryForm/GroundnutSampleCleaning/GroundnutSampleCleaning';
import SesameSeedTunnelDryingProcess from './ProductionEntryForm/SesameSeedTunnelDryingProcess';
const ProductionEntryForm = () => {
  return (
    <div>
      <h1 className="panel-header">Production</h1>
      <Breadcrumbs />
      <div className="theme-card">
        <div className="theme-card-header d-flex df-sb">
          <h6>Production Entry</h6>
          <img src={settings} alt="settings" className="px-3" />
        </div>
        <div className="theme-card-content">
          <div className="df fw">


            <div className="form-group">
              <label className="form-label">Journal Name</label>
              <select className="form-control  form-select">
                <option>Sesame Seeds Cleaning Process</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Department</label>
              <input type="text" required className="form-control" readOnly />
            </div>
            <div className="form-group">
              <label className="form-label">Shift Date </label>
              <input type="date" required className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">Batch Type</label>
              <select className="form-control  form-select">
                <option></option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Select Shift</label>
              <select className="form-control  form-select">
                <option></option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Work Center</label>
              <select className="form-control  form-select">
                <option></option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Select Tunnels</label>
              <select className="form-control  form-select">
                <option></option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Batch No</label>
              <select className="form-control  form-select">
                <option></option>
              </select>
            </div>
          </div>
        </div>
      </div>


      {/* <SesameSeedsCleaningProcess /> */}
      {/* <SesameSampleCleaning /> */}
      {/* <SesameSampleCrushing /> */}
      {/* <GroundnutSampleCleaning /> */}
      <SesameSeedTunnelDryingProcess />
      <div className="df df-sb">
        <button className="btn primary-bdr-btn m-2">Cancel</button>
        <button className="btn primary-btn">save</button>
      </div>
    </div>
  )
}

export default ProductionEntryForm;