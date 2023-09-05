import React from 'react'
import { Modal, Button } from "react-bootstrap";

function ReminderModal({modalStatus}) {
  return (
    <div className="overlay">
        <div className='reminder-modal p-3'>
        <p className="text-center">Meeting Reminder</p>
            <form action="">
                <div className="form-group w-100">
                    <label className="form-label">Meeting Date</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="df df-sb">
                    <div className="form-group">
                        <label className="form-label">From Time</label>
                        <input type="time" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">To Time</label>
                        <input type="time" className="form-control" />
                    </div>
                </div>
                <div className="df df-fe">
                    <button className="btn btn-outline-primary bg-white m-2" onClick={() => modalStatus(false)}>Cancel</button>
                    <button className="btn primary-btn">Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ReminderModal
