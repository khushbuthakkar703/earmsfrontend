import React from 'react'
import './dayendstock.scss'
import DayEndStockTab1 from './Dayendstocktab1'
import DayEndStockTab2 from './Dayendstocktab2'
const DayEndStockForm = () => {
  return (
    <div>
    
        <div>
            <p className='employee-1'>Day End Stock</p>
            <p className='employee-2'>Day End Stock</p>
        </div>
   
    <div>
    <DayEndStockTab1 />
    </div>
    <div>
    < DayEndStockTab2 />
    </div>
    
    <div className="Forward-form-button">
      <div>
      <button className="btn btn-outline-primary bg-white m-2">Cancel</button>
      </div>
      <div>
      <button className="btn primary-btn">Issue</button>
      </div>
     
   
    </div>
  </div>
  )
}

export default DayEndStockForm;