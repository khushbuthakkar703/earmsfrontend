import React from "react";
import "./fingerprint.scss";

import Breadcrumbs from "../../Component/Breadcrumbs";

const fingerprintForm = () => {

    return (

        <div>
            <h1 className="panel-header">Employee</h1>
            <Breadcrumbs />
            <div className="theme-card">
                <div className="theme-card-header">
                    <h6>Fingerprint</h6>
                </div>
                <div className="theme-card-content">
                    <div className="df fw">
                        <div className="form-group">
                            <label className="form-label">Employee</label>
                            <input type="text" className="form-control" readOnly />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Fingerprint</label>
                            <div className="form-control">
                                <span className="browse-btn">Add </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="df df-fe">
                <button className="btn primary-btn">Update</button>
            </div>
        </div>

    );
};

export default fingerprintForm;
