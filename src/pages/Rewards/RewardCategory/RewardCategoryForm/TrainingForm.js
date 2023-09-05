import React from "react";

const TrainingForm = () => {
    return (
        <>

            <div className="form-group">
                <label className="form-label">From Date</label>
                <input type="date" className="form-control" />
            </div>
            <div className="form-group">
                <label className="form-label">To Date</label>
                <input type="date" className="form-control" />
            </div>
        </>
    );
};

export default TrainingForm;
