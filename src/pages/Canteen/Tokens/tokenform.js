import React, { useEffect } from 'react';
// Forms
const TokenForm = () => {
    
  return (
    <div>
    
        <p className='employee-1'>Canteen</p>
        <p className='employee-2'>Canteen/ Token</p>
      
      <form>
        <div className='theme-card'>
       
          <div className='theme-card-header'>
            <h6>Add Food</h6>
          
          </div>

          <div className='theme-card-content'>
            <div className='df fw'>
              <div className='form-group'>
                <label className='form-label'> Name </label>
                <input
                  type='text'
                  readonly
                  className='form-control'
                
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Group </label>
                <select className='form-control  form-select'>
                        <option></option>
                </select>
              </div>
              <div className='form-group'>
                <label className='form-label'>Shift</label>
                <input
                  type='text'
                  readOnly
                  className='form-control'
                
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Token For</label>
                <select className='form-control  form-select'>
                        <option></option>
                </select>
              </div>
              <div className='form-group'>
                <label className='form-label'>Date</label>
                <input
                  type='text'
                  readOnly
                  className='form-control'
                
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>No Of Token</label>
                <input
                  type='text'
                  readonly
                  className='form-control'
                
                />
              </div>
                <div className='form-group'>
                <label className='form-label'>Price</label>
                <input
                  type='text'
                  readOnly
                  className='form-control'
                
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Token No</label>
                <input
                  type='text'
                  readOnly
                  className='form-control'
                
                />
              </div>
            </div>
          </div>
        </div>
        <div className='df df-sb'>
          <button className='btn btn btn-outline-primary m-2' >Cancel</button>
          <button
            className='btn primary-btn'
            type='submit'
           
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TokenForm;
