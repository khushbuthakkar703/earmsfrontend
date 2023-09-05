import React from 'react'

function NewPrice() {
  return (
    <>
      <div className="card mt-3">
        <div className="card-header">Add New Price</div>
        <div className="card-body">
            <form>
                <div className="row">
                    <div className="col-sm-5">
                        <div className="form-group">
                            <label className="form-label">Update For</label>
                            <select className="form-control  form-select">
                                <option>All</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="form-group">
                            <label className="form-label">Price Increase in %</label>
                            <input type="text" className='form-control' value={10} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
      </div>
      
    </>
  )
}

export default NewPrice
