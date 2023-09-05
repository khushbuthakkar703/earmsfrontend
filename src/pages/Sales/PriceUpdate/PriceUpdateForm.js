import React from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import NewPrice from './NewPrice';
import PriceUpdateTab from './PriceUpdateTab';

function PriceUpdateForm() {
  return (
    <>      
        <div className="panel-header">Sales</div>
        <Breadcrumbs />
        <div className="card">
            <div className="card-header">Product Details</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="df">
                            <p>Product Name :</p>
                            <p>No.2 Gunny Bags</p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="df">
                            <p>Product ID :</p>
                            <p>P-0001</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <div className="df">
                            <p>Lot :</p>
                            <p>74Kg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NewPrice />
        <PriceUpdateTab />
      <div className='df df-sb theme-card-content'>
            <button className='btn trasparent-btn m-2 btn-outline-primary'>Cancel</button>
            <button className='btn primary-btn' type='submit'>
              Update
            </button>
          </div>
    </>
  )
}

export default PriceUpdateForm
