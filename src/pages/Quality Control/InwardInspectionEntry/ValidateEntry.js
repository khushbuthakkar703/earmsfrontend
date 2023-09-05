import React from 'react';

const ValidateEntry = () => {
    return (
        <div className='modal-wrap'>
            <div className='modal-inner-wrap xl-modal'>
                <div className='modal-head'>Validate Entry</div>
                <div>
                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="df df-fe">
                        <button className='btn transparent-btn mx-2'>Cancle</button>
                        <button className="btn primary-btn" >Validate</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ValidateEntry;