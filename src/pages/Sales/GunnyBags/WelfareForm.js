import React from 'react'

const Welfare = () => {
  return (
    <div>  
        <div className='bills-header'>
            <div>
                <p className='employee-1'>Welfare</p>
                <p className='employee-2'>Welfare / Welfare Contribution</p>
            </div>
        </div>
        <div className="card">
            <div className="card-header bg-white">Welfare Contribution</div>
            <div className="theme-card-content">
                <div className="df df-fw">
                    <div className="form-group">
                        <label className="form-label">From Date</label>
                        <input type="date" className='form-control'  />
                    </div>
                    <div className="form-group">
                        <label className="form-label">To Date</label>
                        <input type="date" className='form-control'  />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Food (%)</label>
                        <input type="text" className='form-control'  />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Uniform (%)</label>
                        <input type="text" className='form-control'  />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Transportation (%)</label>
                        <input type="text" className='form-control'  />
                    </div>
                </div>
            </div>
        </div>
        
        <div className="df df-sb">
            
            <button className='btn trasparent-btn m-2 btn-outline-primary'>Cancel</button>
            <button className='btn primary-btn' type='submit'>
              Save
            </button>
        </div>
    </div>
  )
}

export default Welfare
