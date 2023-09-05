import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import "../Plantrewards.scss";



const PurchaseTab1 = () => {
    return (
        <div className="custom-tab">
            <Tabs defaultActiveKey="Vendor 1" id="Vendor 1" className="mb-3">
                <Tab eventKey="Vendor 1" title="Vendor 1">
                <div className="theme-card-content">
                    <div className="df fw">
                    <div className='billreceive-detail'>
        <div className='billdetail-left'>
          <div className='receiveform'>
          <div className='detail-receivebill-1'>
            <p>Vendor Name:</p>
            <p>Quotation Number:</p>
            <p>Vendor Quote:</p>
          </div>
          <div className='detail-receivebill-2'>
            <p className='vehicle-name'>Vendor 1</p>
            <p className='vehicle-name'>Q-001</p>
            <p className='vehicle-name'><button className='btn primary-btn print-marerial'>Download</button></p>
          </div>
          </div>
        
        </div>
        <div className='billdetail-right'>
        <div className='receiveform'>
          <div className='detail-receivebill-3'>
            <p>Quoa:</p>
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
                </Tab>
            </Tabs>
        </div>
    );
};

export default PurchaseTab1;

