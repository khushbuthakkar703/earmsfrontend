import React, { useState, useEffect } from "react";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import apiRequest from "../../../utils/helpers/apiRequest";
import { Slide, toast } from "react-toastify";
import "./productmaster.scss";
import getBase64 from "../../../utils/getBase64";
import { useLocation, useNavigate } from 'react-router-dom';
const ProductMaster = () => {
    const { state } = useLocation();
    const productViewData = state?.value;
    console.log(productViewData,"EDIT DATA")
    return (
        <div>
            <div className="panel-header">Product Master</div>
            <div className="df fw mt-2">
                <div>Master /Product Master</div>
            </div>
            <div className="theme-card mt-3">
                <div className="theme-card-header">
                    <h6>Product Master</h6>
                </div>
                <div className="theme-card-content">
                    <div className="df fw">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="productName"
                                value={productViewData?.productName}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Department</label>
                            <input
                                type="text"
                                className="form-control"
                                name="productName"
                                value={productViewData?.departmentId}
                                readOnly
                            />
                        </div>
                       
                        <div className="form-group">
                            <label className="form-label">Product Clasified As</label>
                            <input
                                type="text"
                                className="form-control"
                               name="productType"
                               value={productViewData?.productType}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">PO Description</label>
                            <textarea
                                rows="5"
                                type="text"
                                readOnly
                                className="form-control"
                                name="description"
                                value={productViewData?.description}
                               
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Product Sub Category</label>
                            <input
                                type="text"
                                className="form-control"
                                name="productCategory"
                                value={productViewData?.productCategory}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Nick Name</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                name="search"
                                value={productViewData?.search}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Used Raw Material</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                name="rawMaterial"
                                value={productViewData?.rawMaterial}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">QC Task Category</label>

                            <input
                                type="text"
                                name="taskCategory"
                                value={productViewData?.taskCategory}
                                className="form-control"
                                readOnly
                            />
                            
                        </div>
                        <div className="form-group">
                            <label className="form-label">Inventory Responsibility</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cluster"
                                value={productViewData?.cluster}
                                readOnly
                            />
                           
                        </div>
                        <div className="form-group">
                            <label className="form-label">Allow Process Intake If No Qc Report</label>
                            <input
                                type="text"
                                className="form-control"
                                name="allowAdd"
                                value={productViewData?.allowAdd}
                                readOnly
                            />
                           
                        </div>
                        <div className="form-group">
                            <label className="form-label">Enable Contract Purchase</label>
                            <input
                                type="text"
                                className="form-control"
                                name="contractPurchase"
                                readOnly
                                value={productViewData?.contractPurchase}
                            />
                          
                        </div>
                        <div className="form-group">
                            <label className="form-label">Recycle</label>
                            <input
                                type="text"
                                className="form-control"
                                name="recycle"
                                readOnly
                                value={productViewData?.recycle}
                            />
                           
                        </div>
                        <div className="form-group">
                            <label className="form-label">Main Unit</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                name="unit"
                                value={productViewData?.unit}
                               
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">ALT. Unit</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                               
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Main Value</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                name="where1"
                                value={productViewData?.where1}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Main Unit</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                name="unit1"
                                value={productViewData?.unit1}
                            />
                          
                        </div>
                        <div className="form-group">
                            <label className="form-label">Alt Value</label>
                            <input
                                type="text"
                                className="form-control"
                                name="where2"
                                readOnly
                                value={productViewData?.where2}
                               
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Alternate Unit</label>
                            <input
                                type="text"
                                className="form-control"
                                name="unit2"
                                readOnly
                                value={productViewData?.unit2}
                               
                            />

                            
                        </div>
                        <div className="form-group">
                            <label className="form-label">Batchwise Tracking</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                               
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Bill Of Material</label>

                            <input
                                type="text"
                                className="form-control"
                                name="billOfMaterial"
                                readOnly
                                value={productViewData?.billOfMaterial}
                               
                            />

                          
                        </div>
                        <div className="form-group">
                            <label className="form-label">By Product</label>
                            <input
                                type="text"
                                className="form-control"
                                name="byeProduct"
                                readOnly
                                value={productViewData?.byeProduct}
                               
                            />
                        
                        </div>
                        <div className="form-group">
                            <label className="form-label">Gross Weight</label>
                            <input
                                type="text"
                                readOnly
                                className="form-control"
                                name="gweight"
                                value={productViewData?.gweight}
                                
                            />
                        </div>
                        <div className="form-group">
                        <label className="form-label">Inward Inspection</label><br></br>
                                <input type="radio" id="yes" name="inward" value="yes" 
                                    
                                />
                                <label for="yes" className='yes'>yes</label>
                                <input type="radio" id="No" name="inward" value="No"
                                />
                                 <label for="No" className='yes'>No</label> 
                           
                        </div>
                       
                        <div className="form-group">
                            <label className="form-label">Minimum Stock Level Qty</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                name="minimumStockLevelQuantity"
                                value={productViewData?.minimumStockLevelQuantity}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Picture</label>
                            <div className="form-control">
                                <input
                                    type={"file"}
                                    name="picture"
                                  
                                    value={productViewData?.picture}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Purpose</label>
                            <textarea
                                rows="5"
                                type="text"
                                name="purpose"
                                value={productViewData?.purpose}
                                className="form-control"
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Work Instruction</label>
                            <textarea
                                rows="5"
                                type="text"
                                name="workInst"
                                value={productViewData?.workInst}
                                className="form-control"
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Packing Type</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                name="packingType"
                                value={productViewData?.packingType}
                            />


                          
                        </div>
                        <div className="form-group">
                            <label className="form-label">Peak Month 1 Avg</label>
                            <input
                                type="text"
                                className="form-control"
                                name="avgqty1"
                                value={productViewData?.avgqty1}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Peak Month 2 Avg</label>
                            <input
                                type="text"
                                name="avgqty2"
                                value={productViewData?.avgqty2}
                                className="form-control"
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Peak Month 3 Avg</label>
                            <input
                                type="text"
                                name="avgqty3"
                                value={productViewData?.avgqty3}
                                className="form-control"
                                readOnly
                              
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Stock In Days</label>
                            <input
                                type="text"
                                className="form-control"
                                name="pofreq"
                                value={productViewData?.pofreq}
                                readOnly
                            />
                        </div>

                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="df df-sb">
                <div>
                    <button className="btn btn-outline-primary bg-white m-2">
                        Cancel
                    </button>
                </div>
              
            </div>
        </div>
    );
};

export default ProductMaster;
