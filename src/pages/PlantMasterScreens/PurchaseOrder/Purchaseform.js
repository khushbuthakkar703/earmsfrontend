import React from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import '../Plantrewards.scss';

import PurchaseTab1 from './purchsetab1';
// import PlantAttendanceTab from './plantattendance';
const PurchaseForm = () => {
    return (
        <div>
            <h1 className="panel-header">Material Flow</h1>
            <Breadcrumbs />
            <div className="theme-card">
                <div className="theme-card-header">
                    <h6>Approve Reward</h6>
                </div>
                <div className="theme-card-content">
                    <div className="df fw">
                    <div className='billreceive-detail'>
        <div className='billdetail-left'>
          <div className='receiveform'>
          <div className='detail-receivebill-1'>
            <p>PO Number:</p>
            <p>PO Created On:</p>
          </div>
          <div className='detail-receivebill-2'>
            <p className='vehicle-name'>PO-1024</p>
            <p className='vehicle-name'>11 Mar 2022</p>
          </div>
          </div>
        
        </div>
        <div className='billdetail-right'>
        <div className='receiveform'>
          <div className='detail-receivebill-3'>
            <p>PO Person:</p>
            <p>PO Validity:</p>
          </div>
          <div className='detail-receivebill-2'>
          <p className='vehicle-name1'>Suresh</p>
            <p className='vehicle-name1'>21 Mar 2022</p>
          </div>
          </div>
        </div>
              </div>
                    </div>
                </div>
            </div>
          
            <PurchaseTab1 />
            {/* <PlantAttendanceTab /> */}
            <div className="df df-sb">
                <button className="btn primary-bdr-btn m-2">Cancel</button>
                <button className="btn primary-btn">Approve</button>
            </div>
        </div>
    );
};

export default PurchaseForm;
