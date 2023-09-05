import React from "react";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import "./withbranchreceive.scss";
import BranchReceiveTab1 from "./branchtab1";
import BranchReceiveTab2 from "./branchtab2";
import BranchPopup from './branchpopup';
import { useState } from "react";
const WithinBranchReceive = () => {
    let [modal, setModal] = useState(false)
    return (
        <div>
            <h1 className="panel-header">Material Flow</h1>
            <Breadcrumbs />
            <div className="theme-card">
                <div className="theme-card-header">
                    <h6>Other Plant Receipt</h6>
                </div>
                <div className='billreceive-detail'>
        <div className='billdetail-left'>
          <div className='receiveform'>
          <div className='detail-receivebill-1'>
            <p>MRN Number:</p>
            <p>Req By (Branch):</p>
            <p>Issued By :</p>
            <p>Received By:</p>
            
          </div>
          <div className='detail-receivebill-2'>
          <p className='vehicle-name'> <span className='link-clr'>PROD-4024</span></p>
            <p className='vehicle-name'>Branch 1</p>
            <p className='vehicle-name'>Suresh</p>
            <p className='vehicle-name'>Raiyan</p>
          </div>
          </div>
        
        </div>
        <div className='billdetail-right'>
        <div className='receiveform'>
          <div className='detail-receivebill-3'>
            <p>Req By (Dept):</p>
            <p>Issued By(Dept):</p>
            <p>Received On:</p>
            <p>Entry On:</p>
            
          </div>
          <div className='detail-receivebill-2'>
          <p className='vehicle-name1'>Production</p>
            <p className='vehicle-name1'>Quality Control</p>
            <p className='vehicle-name1'>22 Mar 2022</p>
            <p className='vehicle-name1'>22 Mar 2022</p>
          </div>
          </div>
        </div>
      </div>
            </div>
            <div>
            <BranchReceiveTab1 />
            </div>
            <div>
            <BranchReceiveTab2 />
            </div>
            <div className="df df-sb">
                <button className="btn primary-bdr-btn m-2">Cancel</button>
                <button className="btn primary-btn"  onClick={() => setModal(true)}>Verify & Submit</button>
            </div>
           
            {modal ?
             <div className="">
                <BranchPopup />
                </div>
                : null}
              
        </div>
    );
};

export default WithinBranchReceive;
