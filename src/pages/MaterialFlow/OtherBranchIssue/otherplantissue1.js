import React, { useState } from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import "./opf.scss"

import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';
const OtherPlantIssue1 = () => {
   
    // const[modal,setModal] = useState(false)
    const recievedColumns = [
        {
          Header: "Item",
          accessor: "item",
        },
        {
          Header: "quantity",
          accessor: "quantity"
        },
        {
          Header: "Dispatch Package Type",
          accessor: "dispatchpackagetype",
          Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }
        },
        {
          Header: "Dispatch Package quantity",
          accessor: "dispatchpackagequantity"
        },
      ]
      
      const recievedData = [
        {
            item: "Item 1",
            quantity:'2000',
            dispatchpackagetype: "",
            dispatchpackagequantity: "",
       
        },
        {
            item: "Itwm 2",
            quantity:'2000',
            dispatchpackagetype: "",
            dispatchpackagequantity: "",
          },
       
      ]
    return (

        <div>
            <h1 className="panel-header">Material Flow</h1>
            <Breadcrumbs />
            <div className="theme-card">
        <div className="theme-card-header">
          <h6>Bill Forward</h6>
        </div>
        <div>
          <div className='billreceive-detail'>
            <div className='billdetail-left'>
              <div className='receiveform'>
                <div className='detail-receivebill-1'>
                  <p className='gap'>MRN Number :</p>
                  <p className='gap top-gap'>Issue Mode:</p>
                  <p className='gap top-gap'>Issue Type:</p>
                  <p className='gap '>Transport Vehicle Number :</p>
                  <p className='gap '>Dispatch Date:</p>
                  <p className='gap '>E-Way Bill:</p>
                  <p className='gap '>EWay Bill:</p>
                </div>
                <div className='detail-receivebill-2'>
                    <p className='gap'> <span className='link-clr'>MRN-001,MRN-002,MRN-003</span></p>
                  {/* <p onClick={()=>setModal(true)} className='material-link'>   
                    {modal?<WPRModel /> : null}
                  <span className='link-clr'>PROD-4024</span></p> */}
                  <p className='gap'>Person</p>
                  <p className='gap'>Contract Vehicle</p>
                  <p className='gap'>TN 23 1024</p>
                  <p className='gap'>22 Mar 2022</p>
                  <p className='gap'>Yes</p>
                  <p className='gap'><button className='btn primary-btn print-marerial'>Download</button></p>
                </div>
              </div>

            </div>
            <div className='billdetail-right'>
              <div className='receiveform'>
                <div className='detail-receivebill-3'>
                  <p className='gap'>Issue Reference:</p>
                  <p className='gap'>Delivered by :</p>
                  <p className='gap'>Transport Vehicle Type:</p>
                  <p className='gap'>Issued  By :</p>
                  <p className='gap'>Material Return :</p>
                  <p className='gap'>GDC :</p>
                </div>
                <div className='detail-receivebill-2'>
                  <p className='gap'>GDC</p>
                  <p className='gap'>Sureshkumar</p>
                  <p className='gap'>Lorry</p>
                  <p className='gap'>Sureshkumar</p>
                  <p className='gap'>Yes</p>
                  <p className='gap'><button className='btn primary-btn print-marerial'>Download</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
            <div>
           
            </div>
            <div className="df df-fe">
              
                <button className="btn primary-btn">Close</button>
            </div>

        </div>
    );
};

export default OtherPlantIssue1;