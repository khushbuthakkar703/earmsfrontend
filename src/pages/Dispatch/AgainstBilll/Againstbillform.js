import React from 'react';
import "../Dispatch.scss";
import AgainstBillTab from './Againstbilltab'


const AgainstBillForm = () => {
    return (
        <div>
            <div>
                    <p className='employee-1'>Dispatch</p>
                    <p className='employee-2'>Dispatch / Against Bill</p>
                </div>
            <div className="theme-card">
                <div className="theme-card-header">
                    <h6>Against Bill</h6>
                </div>
                <div className="theme-card-content">
                    <div className="df fw">
                        <div className="form-group">
                            <label className="form-label">Bill Number</label>
                            <select className="form-control  form-select">
                                <option> </option>
                            </select>              </div>
                        <div className="form-group">
                            <label className="form-label">Vendor Name</label>
                            <select className="form-control  form-select">
                                <option> </option>
                            </select>              
                             </div>


                        <div className="form-group">
                            <label className="form-label">Bill Date</label>
                            <input type="date" required className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div>

               <AgainstBillTab />
            </div>
            <div className="df df-sb">
                <button className="btn primary-bdr-btn m-2">Cancel</button>
                <button className="btn primary-btn">Save</button>
            </div>
        </div>
    );
};

export default AgainstBillForm;