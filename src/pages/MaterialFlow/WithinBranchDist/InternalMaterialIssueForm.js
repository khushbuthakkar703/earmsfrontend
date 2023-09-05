import React from "react";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import "./imi.scss";
import ReceivedItems from "./ReceivedItems";

const InternalMaterialIssueForm = () => {
    return (
        <div>
            <h1 className="panel-header">Material Flow</h1>
            <Breadcrumbs />
            <div className="theme-card">
                <div className="theme-card-header">
                    <h6>Internal Material Issue</h6>
                </div>
                <div className='billreceive-detail'>
        <div className='billdetail-left'>
          <div className='receiveform'>
          <div className='detail-receivebill-1'>
            <p>Request ID:</p>
            <p>Docket Number:</p>
            <p>Req By (Branch):</p>
            <p>Issued By (Branch):</p>
            <p>Issued On:</p>
            
          </div>
          <div className='detail-receivebill-2'>
            <p className='vehicle-name'>RQ-001</p>
            <p className='vehicle-name'>DKT-001</p>
            <p className='vehicle-name'>11 Mar 2022</p>
            <p className='vehicle-name'>Ref-2015</p>
            <p className='vehicle-name'>11 Mar 2022</p>
          </div>
          </div>
        
        </div>
        <div className='billdetail-right'>
        <div className='receiveform'>
          <div className='detail-receivebill-3'>
            <p>Hub No:</p>
            <p>Req by(Dep):</p>
            <p>Issued By(Dept):</p>
            <p>Issued By:</p>
            <p>Received Date:</p>
            
          </div>
          <div className='detail-receivebill-2'>
          <p className='vehicle-name1'>HB-001</p>
            <p className='vehicle-name1'>Branch 1</p>
            <p className='vehicle-name1'>Branch 2</p>
            <p className='vehicle-name1'>Suresh</p>
            <p className='vehicle-name1'>22 Mar 2022</p>
          </div>
          </div>
        </div>
      </div>
            </div>
            <ReceivedItems />
            <div className="df df-sb">
                <button className="btn primary-bdr-btn m-2">Cancel</button>
                <button className="btn primary-btn">Issue</button>
            </div>
        </div>
    );
};

export default InternalMaterialIssueForm;
