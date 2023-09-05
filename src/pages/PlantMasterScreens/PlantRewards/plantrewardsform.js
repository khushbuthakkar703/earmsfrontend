import React from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import '../Plantrewards.scss';

import PlantRewardsTab from './plantrewardstab';
import PlantAttendanceTab from './plantattendance';
const PlantRewardsForm = () => {
    return (
        <div>
            <h1 className="panel-header">Material Flow</h1>
            <Breadcrumbs />
            <div className="theme-card">
                <div className="theme-card-header">
                    <h6>Approve Reward</h6>
                </div>
                <div className="theme-card-content">
                    <div className="df fw">


                    <div className="form-group">
                            <label className="form-label">Reward Category </label>
                            <select className="form-control  form-select">
                                <option>Casual</option>
                            </select>

                        </div>

                        <div className="form-group">
                            <label className="form-label">Employee Name </label>
                            <select className="form-control  form-select">
                                <option>Casual</option>
                            </select>

                        </div>
                        <div className="form-group">
                            <label className="form-label">Employee Category </label>
                            <select className="form-control  form-select">
                                <option>Casual</option>
                            </select>

                        </div>
                        <div className="form-group">
                            <label className="form-label">Employee Branch </label>
                            <select className="form-control  form-select">
                                <option>Casual</option>
                            </select>

                        </div>

                    </div>
                </div>
            </div>
          
            <PlantRewardsTab />
            <PlantAttendanceTab />
            <div className="df df-sb">
                <button className="btn primary-bdr-btn m-2">Cancel</button>
                <button className="btn primary-btn">Approve</button>
            </div>
        </div>
    );
};

export default PlantRewardsForm;
