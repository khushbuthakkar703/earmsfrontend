import React, { useEffect } from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import { useState } from 'react';
import apiRequest from '../../../utils/helpers/apiRequest';
const recievedColumns = [
    {
        Header: "Item Name",
        accessor: "itemname",
    },
    {
        Header: "Issued From Bin",
        accessor: "bin",
    },
    {
        Header: "Issued From Batch",
        accessor: "batch",
    },
    {
        Header: "Requested Quantity",
        accessor: "quantity",
    },
    {
        Header: "Issued Quantity",
        accessor: "issuedqunatity",
    },
    {
        Header: "Pending Quantity",
        accessor: "pendingquantity",
    },
];

const recievedData = [
    {
        itemname: 'Item 1',
        bin: "Bin 1, Bin 2",
        batch: "Batch 1, Batch 2 ",
        quantity: "2000",
        issuedqunatity: '2000',
        pendingquantity: '0'
    },
    {
        itemname: 'Item 1',
        bin: "Bin 1, Bin 2",
        batch: "Batch 1, Batch 2 ",
        quantity: "2000",
        issuedqunatity: '2000',
        pendingquantity: '0'
    },
    {
        itemname: 'Item 1',
        bin: "Bin 1, Bin 2",
        batch: "Batch 1, Batch 2 ",
        quantity: "2000",
        issuedqunatity: '2000',
        pendingquantity: '0'
    },
];

const WPRModel = ({toShow,setShow,data}) => {
const req = async ()=>{
    console.log('lol',data?.requestId);
    const name = await apiRequest("getMaterialRequestDetails/"+data?.requestId)
    if(name){

    }
    console.log('name',name);
}
useEffect(()=>{
    req();
})
    return (
        <div>
        {toShow ?  <div className='modal-wrap'>
        <div className='modal-inner-wrap sm-modal'>
            <div className='modal-head'>Within Plant Receipt MRN Details</div>
            <div>
                <div className='df'>

                    <div className="form-group inputs-align">
                        <label className="form-label">Request Name</label>
                        <input value={''} type="text" className="form-control" readOnly />
                    </div>


                    <div className="form-group inputs-align">
                        <label className="form-label">Request ID</label>
                        <input type="text" className="form-control" readOnly />
                    </div>

                    <div className="form-group inputs-align">
                        <label className="form-label">Requested Person</label>
                        <input type="text" className="form-control" readOnly />
                    </div>

                    <div className="form-group inputs-align">
                        <label className="form-label">Req by (Dep)</label>
                        <input type="text" className="form-control" readOnly />
                    </div>
                </div>

                <div className='df'>

                    <div className="form-group inputs-align">
                        <label className="form-label">Req by (Bran)</label>
                        <input type="text" className="form-control" readOnly />
                    </div>


                    <div className="form-group inputs-align">
                        <label className="form-label">Issued Branch</label>
                        <input type="text" className="form-control" readOnly />
                    </div>

                    <div className="form-group inputs-align">
                        <label className="form-label">Issue Date</label>
                        <input type="text" className="form-control" readOnly />
                    </div>

                    <div className="form-group inputs-align">
                        <label className="form-label">Issue Person</label>
                        <input type="text" className="form-control" readOnly />
                    </div>
                </div>
                <div className="custom-tab">
                    <Tabs defaultActiveKey="issueItems" id="issueItems" className="mb-3">
                        <Tab eventKey="issueItems" title="Issue Items">
                            <Table recievedColumns={recievedColumns} recievedData={recievedData} />
                        </Tab>
                    </Tabs>
                </div>
                <div className="df df-fe">
                    <button className="btn primary-btn" onClick={() => setShow(false)} >Close</button>
                </div>
            </div>

            
        </div>

    </div> :null}
    </div>
    );
};

export default WPRModel;