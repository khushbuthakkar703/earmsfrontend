import React, {useState} from 'react'
import { handleOnInput } from './EmployeeForm'

const OtherDetailForm = ({handleOtherDataChange,otherValue,adharError}) => {
  

  return (
    <div>
      <div className="theme-card">
              <div className="theme-card-header">
                  <h6>Aadhar and Other Details</h6>
              </div>
              <div className="theme-card-content">
            <div className="df fw">
                    <div className="form-group">
                        <label htmlFor="" className="form-label">AADHAR Number<span style={{color: "red"}}>*</span></label>
              {/* <input type="text" className='form-control' name="aadharNo" onChange={e => handleOtherDataChange(e)} /> */}
              <input onInput={handleOnInput}
                type="number"  className='form-control' name="aadharNo" value={otherValue?.aadharNo} onChange={e => handleOtherDataChange(e)} />
              <p style={{color: "red"}}>{adharError?.aadharNo}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">UAN Number<span style={{color: "red"}}>*</span></label>
                        <input type="text" className='form-control' name="uanNo" value={otherValue?.uanNo} onChange={e => handleOtherDataChange(e)} />
                        <p style={{color: "red"}}>{adharError?.uanNo}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">ESI No<span style={{color: "red"}}>*</span></label>
                        <input type="text" className='form-control' name="esiNo" value={otherValue?.esiNo}  onChange={e => handleOtherDataChange(e)} />
                        <p style={{color: "red"}}>{adharError?.esiNo}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">EPF No<span style={{color: "red"}}>*</span></label>
                        <input type="text" className='form-control' name="epfNo" value={otherValue?.epfNo} onChange={e => handleOtherDataChange(e)}/>
                        <p style={{color: "red"}}>{adharError?.epfNo}</p>
                    </div>
                </div>   
                  
        </div>
      </div>
    </div>
  )
}

export default OtherDetailForm
