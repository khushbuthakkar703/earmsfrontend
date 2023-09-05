import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import "./Wpr.scss";
import WPRModel from "./WPRModel";
import { Link, useLocation } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import apiRequest from "../../../utils/helpers/apiRequest";
const WithinPlantReceiptForm = () => {
const [data,setData] = useState([])
const handleSubmit = async (e)=>{
  const data = {
    id:location.state.id,
    status:"verified"
  }
  const res = await apiRequest("updateMaterialWithInBranchReceipt",data);
  console.log('pp',res);
}
  const handlechange = (e)=>{
    const {name,value} = e.target;


  }
  const location= useLocation();
  let [show, setShow] = useState(false);
  const[modal,setModal] = useState(false)
  const recievedColumns = [
    {
      Header: "Item",
      accessor: "item",
    },
    {
      Header: "quantity",
      accessor: "quantity",
    },
    {
      Header: "Dispatch Package Type",
      accessor: "dispatchpackagetype",
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <select className="form-control  form-select table-select" name="packageType" onChange={handlechange}>
            <option >Select Package Type</option>
            <option value={"bag"}>bag</option>

          </select>
        );
      },
    },
    {
      Header: "Dispatch Package quantity",
      accessor: "dispatchpackagequantity",
      Cell: ({ row }) => {
        return (
          <input
            type='number'
            className='form-control'
            style={{ width: '250px' }}
            name='quantity'
            // onChange={(e) => handleChange(e, row.original?.id)}
          />
        );
      },
    },
  ];

  const recievedData = [
    {
      item: "Item 1",
      quantity: "2000",
      dispatchpackagetype: "",
      dispatchpackagequantity: "",
    },
    {
      item: "Itwm 2",
      quantity: "2000",
      dispatchpackagetype: "",
      dispatchpackagequantity: "",
    },
  ];
 
  const getData = async () => {
    console.log('ss',location.state);
    const res = await apiRequest(
      "getMaterialWithInBranchReceiptDetails/"+location.state.id 
    );
    if(res?.data){
      console.log("yyy",res.data);
    }else{console.log('error');}
  };  
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <h1 className="panel-header">Material Flow</h1>
      <Breadcrumbs />
      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Within Plant Receive</h6>
        </div>
        <div>
          <div className="billreceive-detail">
            <div className="billdetail-left">
              <div className="receiveform">
                <div className="detail-receivebill-1">
                  <p>MRN Number :</p>
                  <p>Req By (Branch):</p>
                  <p>Req By (Dept) :</p>
                  <p>Received On :</p>
                  <p>Entry On:</p>
                </div>
                <div className="detail-receivebill-2">
                  <p>
                    {" "}
                    <span onClick={()=>{setShow(true)}} className="link-clr">MRN-1014</span>
                    {/* {modal?<WPRModel /> : null} */}
                  </p>
                  {/* <p onClick={()=>setModal(true)} className='material-link'>   
                   
                  <span className='link-clr'>PROD-4024</span></p> */}
                  <p>{location.state.requestedByBranch}</p>
                  <p>{location.state.requestedByDepartment}</p>
                  <p>{location.state.receivedOnDate}</p>
                  <p>{location.state.entryOnDate}</p>
                </div>
              </div>
            </div>
            <div className="billdetail-right">
              <div className="receiveform">
                <div className="detail-receivebill-3">
                  <p>Issued By (Dep) :</p>
                  <p>Issued By :</p>
                  <p>Issued By (Bran) :</p>
                  <p>Received By :</p>
                </div>
                <div className="detail-receivebill-2">
                  <p>{location.state.issuedByDepartment}</p>
                  <p>{location.state.issuePerson}</p>
                  <p>{location.state.issuedByBranch}</p>
                  <p>Raiyan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="custom-tab">
          <Tabs
            defaultActiveKey="Item Details"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Item Details" title="Item Details">
              <Table
                recievedColumns={recievedColumns}
                recievedData={recievedData}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="df df-sb">
        <button className="btn primary-bdr-btn m-2">Cancel</button>
        <button className="btn primary-btn" onClick={handleSubmit}>
          Verify & Sumbit
        </button>
      </div>

      {show ? <WPRModel toShow={show} setShow={setShow} data={location.state} /> : null}
    </div>
  );
};

export default WithinPlantReceiptForm;
