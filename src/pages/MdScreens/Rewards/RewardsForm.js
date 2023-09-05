import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import RewardsRecievedTab from './RewardsRecievedTab';
import AttandanceDetailsTab from './AttandanceDetailsTab';
import ReminderModal from './ReminderModal';
import Rewards from './Rewards.scss'

const RewardsForm = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
        <div className='bills-header'>
            <div>
                <p className='employee-1'>Rewards</p>
                <p className='employee-2'>Rewards</p>
            </div>
        </div>      
        <div className="card">
            <div className="card-header bg-white">Approve Reward</div>
            <div className="card-content">
                <form className='p-3'>
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="form-group">
                                <label className="form-label">Employee Name</label>
                                <input type="text" className='form-control' value="Employee Name" disabled/>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="form-group">
                                <label className="form-label">Employee Category</label>
                                <input type="text" className='form-control' value="Admin" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="form-group">
                                <label className="form-label">Employee Branch</label>
                                <input type="text" className='form-control' value="Employee Name" disabled/>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="form-group">
                                <label className="form-label">Reward Category</label>
                                <input type="text" className='form-control' value="All" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="form-group">
                                <label className="form-label">From</label>
                                <input type="date" className='form-control'/>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="form-group">
                                <label className="form-label">To</label>
                                <input type="date" className='form-control' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div>
            <div className="mt-3">
                <RewardsRecievedTab />
            </div>
            <div className="mt-3">
                <AttandanceDetailsTab />
            </div>
        </div>
        <div class="df df-sb theme-card-content px-0">
            <div>
                <button className="btn primary-btn" onClick={() => setShow(true)}>Meeting Reminder</button>
            </div>
            <div>
                <button className="btn btn-outline-primary bg-white m-2">Cancel</button>
                <button className="btn primary-btn">Approve</button>
            </div>
        </div>
        {
            show && <ReminderModal modalStatus={setShow}/>   
        }
    </div>
  )
}

export default RewardsForm
