
import React from 'react'
import './Journal.scss'
import SesameTunnelTab from './sesametunneltab'
import { BsPrinter } from "react-icons/bs";

const JournalSesameTunnel = () => {
  

  return (
    <div className='receive-forms'>
       <div className='bills-header'>
                <div>
                    <p className='employee-1'>Journal</p>
                    <p className='employee-2'>Journal</p>
                </div>
            
                <div>
                    <button className='btn dark-blue-btn'><BsPrinter />Print Journal</button>
                </div>
            </div>

      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Journal</h6>
        </div>
        <div>
          <div className='billreceive-detail'>
            <div className='billdetail-left'>
              <div className='receiveform'>
                <div className='detail-receivebill-1'>
                  <p>TRN No :</p>
                  <p>Production Shift :</p>
                  <p>Department :</p>
                  <p>Produced Product :</p>
                  <p>Produced lot :</p>
                  <p>Accounted by :</p>
                  <p>Entered Date :</p>

                </div>
                <div className='detail-receivebill-2'>
                  <p> PROD-4024</p>
                  <p>Shift 1</p>
                  <p>Quality Control</p>
                  <p>Ground Nut Oil</p>
                  <p>1.000</p>
                  <p>Suresh kumar</p>
                  <p>11 Aug 2022</p>
                </div>
              </div>

            </div>
            <div className='billdetail-right'>
              <div className='receiveform'>
                <div className='detail-receivebill-1'>
                  <p>Shift Date :</p>
                  <p>Journal :</p>
                  <p>Work Center :</p>
                  <p>Produced Quantity :</p>
                  <p>Accounted Status :</p>
                  <p>Entered By :</p>

                </div>
                <div className='detail-receivebill-2'>
                  <p>11 Aug 2022</p>
                  <p>Sesame Seeds Tunnel Drying Process</p>
                  <p>Canteen</p>
                  <p>2000 liter</p>
                  <p>Accounted</p>
                  <p>Suresh kumar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SesameTunnelTab/>
      </div>
    

     

      <div className="Forward-form-button">
        <div>
          <button className="btn primary-btn">Close</button>
        </div>
      </div>
      
    </div>
  )
}

export default JournalSesameTunnel;