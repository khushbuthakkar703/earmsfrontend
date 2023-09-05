import React, { useState } from 'react';

const SeedInitialTest = () => {
    const [userRole, SetUserRole] = useState('user')
    return (
        <>
        {
            userRole === "Admin" ? (
                <>
                <div className="form-group">
                    <label className="form-label">Seed FFA </label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Seed Color</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Moisture</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Input Bag Weight</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Input Bag 2 Weight </label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Input Bag 3 Weight </label>
                    <input type="text" className="form-control" />
                </div>
                </>    
            ) : (
                <>
                <div className="form-group">
                    <label className="form-label">Seed FFA </label>
                    <input type="text" className="form-control" disabled/>
                </div>
                <div className="form-group">
                    <label className="form-label">Seed Color</label>
                    <input type="text" className="form-control"  disabled/>
                </div>
                <div className="form-group">
                    <label className="form-label">Moisture</label>
                    <input type="text" className="form-control" disabled />
                </div>
                <div className="form-group">
                    <label className="form-label">Input Bag Weight</label>
                    <input type="text" className="form-control" disabled />
                </div>
                <div className="form-group">
                    <label className="form-label">Input Bag 2 Weight </label>
                    <input type="text" className="form-control" disabled />
                </div>
                <div className="form-group">
                    <label className="form-label">Input Bag 3 Weight </label>
                    <input type="text" className="form-control" disabled />
                </div>
                </>
            )
        }
            
        </>
    );
};

export default SeedInitialTest;