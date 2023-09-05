import React from 'react';

const SeedAfterDrying = () => {
    return (
        <>
            <div className="form-group">
                <label className="form-label"> Bag 1 Weight </label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label"> Bag 2 Weight </label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label"> Bag 3 Weight </label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Moisture After Drying </label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Dryage </label>
                <input type="text" className="form-control" />
            </div>
        </>
    );
};

export default SeedAfterDrying;