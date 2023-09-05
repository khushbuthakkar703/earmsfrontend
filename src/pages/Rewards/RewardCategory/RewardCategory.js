import React from "react";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import "./rewardcategory.scss";
import AttendanceForm from "./RewardCategoryForm/AttendanceForm";
import InnovationForm from "./RewardCategoryForm/InnovationForm";
import TrainingForm from "./RewardCategoryForm/TrainingForm";
import AttendanceTable from "./RewardCategoryTable/AttendanceTable";
import MaintainanceDetailsTable from "./RewardCategoryTable/MaintainanceDetailsTable";
import ProductivityDetailsTable from "./RewardCategoryTable/ProductivityDetailsTable";
import TrainingTable from "./RewardCategoryTable/TrainingTable";

const RewardCategory = () => {
    return (
        <div>
            <h1 className="panel-header">Rewards</h1>
            <Breadcrumbs />
            <div className="theme-card">
                <div className="theme-card-header">
                    <h6>Reward Review</h6>
                </div>
                <div className="theme-card-content">
                    <div className="df fw">
                        <div className="form-group">
                            <label className="form-label">Reward Category</label>
                            <select className="form-control  form-select">
                                <option>Attendance</option>
                                <option>Productivity</option>
                                <option>Training</option>
                                <option>Maintainance</option>
                                <option>Innovation</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Reward Date</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Branch</label>
                            <select className="form-control  form-select">
                                <option>Branch</option>
                            </select>{" "}
                        </div>
                        <div className="form-group">
                            <label className="form-label">Employee Category</label>
                            <select className="form-control  form-select">
                                <option>Employee Category</option>
                            </select>{" "}
                        </div>
                        <div className="form-group">
                            <label className="form-label">Employee Name</label>
                            <select className="form-control  form-select">
                                <option>Employee Name</option>
                            </select>{" "}
                        </div>
                        {/* <AttendanceForm /> */}
                        {/* <InnovationForm /> */}
                        <TrainingForm />
                    </div>
                </div>
            </div>
            {/* <AttendanceTable /> */}
            {/* <TrainingTable /> */}
            {/* <ProductivityDetailsTable /> */}
            <MaintainanceDetailsTable />
            <div className="df df-sb">
                <button className="btn primary-bdr-btn m-2">Cancel</button>
                <button className="btn primary-btn">Issue Reward</button>
            </div>
        </div>
    );
};

export default RewardCategory;
