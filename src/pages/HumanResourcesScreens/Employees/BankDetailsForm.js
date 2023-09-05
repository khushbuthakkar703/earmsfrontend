import React, { useState } from 'react'

const BankDetailsForm = ({handleBankData,bankValue,bankErrors}) => {
 console.log("uuuuuuu",bankErrors);
  return (
    <div>
      <div className="theme-card">
              <div className="theme-card-header">
                  <h6>Bank Details</h6>
              </div>
            <div className="theme-card-content">
            {/* <h6>Bank Details</h6>       */}
            <div className="df fw">
                <div className="form-group">
                    <label htmlFor="" className="form-label">Bank Name<span style={{color: "red"}}>*</span></label>
                    <input type="text" className='form-control'name="bankName" value={bankValue?.bankName} onChange={e => handleBankData(e)} />
                    <p style={{color: "red"}}>{bankErrors?.bankName}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Bank Account Number<span style={{color: "red"}}>*</span></label>
                    <input  type="number" className='form-control'name="accountNo"value={bankValue?.accountNo} onChange={e => handleBankData(e)} />
                    <p style={{color: "red"}}>{bankErrors?.accountNo}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">IFSC Code<span style={{color: "red"}}>*</span></label>
                    <input type="text" className='form-control'name="ifsccode" value={bankValue?.ifsccode} onChange={e => handleBankData(e)} />
                    <p style={{color: "red"}}>{bankErrors?.ifsccode}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Pan No<span style={{color: "red"}}>*</span></label>
                    <input type="text" className='form-control'name="panNo" value={bankValue?.panNo} onChange={e => handleBankData(e)} />
                    <p style={{color: "red"}}>{bankErrors?.panNo}</p>
                </div>
            </div>          
        </div>
      </div>
    </div>
  )
}

export default BankDetailsForm
