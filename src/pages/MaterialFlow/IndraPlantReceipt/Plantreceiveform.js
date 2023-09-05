
import React from 'react'
import './plantreceive.scss'
import PlantReceiveTab   from './Plantreceivetab'

const Billsreceiveform = () => {
 
  
  return (
    <div className='receive-forms'>
   <p className='employee-1'>Material Flow</p>
          <p className='employee-2'>Material Flow /Internal Branch Receipts</p>
   
    <div className="theme-card">
      <div className="theme-card-header">
        <h6>Internal Plant Receipts</h6>
      </div>
    <div>
      <div className='billreceive-detail'>
        <div className='billdetail-left'>
          <div className='receiveform'>
          <div className='detail-receivebill-1'>
            <p>Hub No:</p>
            <p>Docket Number:</p>
            <p>Received Date:</p>
            <p>Issued On:</p>
            <p>Receipt Entry On:</p>
            
          </div>
          <div className='detail-receivebill-2'>
            <p className='vehicle-name'>HB-001</p>
            <p className='vehicle-name'>DKT-001,DKT-002</p>
            <p className='vehicle-name'>11 Mar 2022</p>
            <p className='vehicle-name'>11 Mar 2022</p>
            <p className='vehicle-name'>11 Mar 2022</p>
          </div>
          </div>
        
        </div>
        <div className='billdetail-right'>
        <div className='receiveform'>
          <div className='detail-receivebill-3'>
            <p>MRN Num:</p>
            <p>Issued by(Bran):</p>
            <p>Issued By:</p>
            <p>Received Vehicle Number:</p>
            
          </div>
          <div className='detail-receivebill-2'>
          <p className='vehicle-name1'> <span className='link-clr'>MRN-001,MRN-002,MRN-003</span></p>
            <p className='vehicle-name1'>Branch 2</p>
            <p className='vehicle-name1'>suresh</p>
            <p className='vehicle-name1'>TN-23-AB-8023</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div>
    <PlantReceiveTab  />
    </div>
   
    <div className="Forward-form-button">
      <div>
      <button className="btn btn-outline-primary bg-white m-2">Cancel</button>
      </div>
      <div>
      <button className="btn primary-btn">Verify & Accept</button>
      </div>
    </div>
  
  </div>
  )
}

export default Billsreceiveform;