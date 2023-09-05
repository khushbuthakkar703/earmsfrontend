
import React from 'react'
import './productionentry.scss'
import Genertor from '../../../assets/genertor.png'
import ProductionPopupTab from './Prodpopuptab'
import ProductionPopupTab1 from './Productiontab1'
// import { useState } from 'react'
const ProductionPopup = () => {
//   let [show, setShow] = useState(false)

  return (
    <div className=''>
      <div className='backdrop'>
          <div className='verify-popup'>
            <div className='Verify-form'>
              <h6 className='verify-heading'>Status And Details</h6>
              <div className='scrool-tab'>
             <div className='d-flex popop-border'>
              <div>
                <img src={Genertor} alt = 'genertor'/>
              </div>
              <div className='machinery-details'>
                <p className='heading'>Machinery Details</p>
                <div className='whole-width d-flex'>
                <div className='width'>
                  <p>Name:</p>
                  <p>Operated By:</p>
                  <p>Status:</p>
                  <p>In Days:</p>
                </div>
                <div className='width-1'>
                  <p>Buhler 4 Ton Machine</p>
                  <p>Suresh Kumar</p>
                  <p className='d-flex'><input type= "checkbox" id='switch'/><label for="switch">Toggle</label></p>
                  <p>12</p>
                </div>
                </div>
              </div>

             
             </div>
             <div><ProductionPopupTab /></div>
             <div><ProductionPopupTab1 /></div>
             </div>
              <div className='verify-buttons'>
                  {/* <button className='btn cancel-button' onClick={() => setShow(false)}>Cancel</button> */}
                  <button className='btn btn-primary'>Close</button>
                </div>
            </div>

          </div> 
      </div>
    </div>
  )
}

export default ProductionPopup;