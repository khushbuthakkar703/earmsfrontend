import React from 'react';

const SeedOilOutrunCheckling = () => {
    return (
        <>
            <div className="form-group">
                <label className="form-label">Jaggery Weight Per Bags</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Oil with Sludge</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Sludge with Oil</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Oil In Sludge</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Total oil Outrun</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Oilcake Weight</label>
                <input type="text" className="form-control" />
            </div>
        </>
    );
};

export default SeedOilOutrunCheckling;