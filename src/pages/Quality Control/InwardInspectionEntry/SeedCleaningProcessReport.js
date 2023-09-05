import React from 'react';

const SeedCleaningProcessReport = () => {
    return (
        <>
            <div className="form-group">
                <label className="form-label">Seed Obtained </label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Sand Obtained </label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Immeture Seed Obtained </label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label className="form-label">Dust Obtained </label>
                <input type="text" className="form-control" />
            </div><div className="form-group">
                <label className="form-label">Output Weight Bag 1 </label>
                <input type="text" className="form-control" />
            </div><div className="form-group">
                <label className="form-label">Output Weight Bag 2 </label>
                <input type="text" className="form-control" />
            </div><div className="form-group">
                <label className="form-label">Output Weight Bag 3</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Obtained Seed</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">Dryage Weight for 3 Bags</label>
                <input type="text" className="form-control" />
            </div>
        </>
    );
};

export default SeedCleaningProcessReport;