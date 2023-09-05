

import React, { useState,useEffect } from 'react'
import './admininspection.scss'
import AdminInspectionTab from './Admininspectiontab'
import { useLocation, useNavigate } from 'react-router-dom';
import convertDate from '../../utils/ConvertDates';

const AdminInspectionForm = () => {
  const [insform,setInsform] = useState()
  const location = useLocation();
  const navigation = useNavigate();
  useEffect(() => {
    if (location.state) {
      setInsform(location.state);
    } else {
      navigation(-1);
    }
  }, []);
  return (
    <div>
    
        <div>
            <p className='employee-1'>AdminInspection / End Day</p>
            <p className='employee-2'>AdminInspection</p>
        </div>
    <div className="theme-card">
      <div className="theme-card-header">
        <h6>Admin Entry</h6>
      </div>
      <div className="theme-card-content">
        <div className="df fw">
          <div className="form-group">
            <label className="form-label">Date </label>
            <input type="date" required className="form-control"   value={convertDate(insform?.date)}/>
          </div>
          <div className="form-group">
            <label className="form-label">Branch</label>
                <select className="form-control  form-select" value={insform?.branchName} >
                    <option></option>
                </select>                        
        </div>
       
       
        </div>
      </div>
    </div>

    <div>
    <AdminInspectionTab />
    </div>
    <div className="Forward-form-button">
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

export default AdminInspectionForm;