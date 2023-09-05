import React from 'react';
import clock from '../../assets/clock.svg';

const AttendancePopup = () => {
  return (
    <div className='modal-wrap'>
      <div className='modal-inner-wrap md-modal'>
        <div className='modal-head'>Attendance Info</div>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='info-box'>
              <h1 className='mb-20'>
                Timesheet <span>1 Jan 2022</span>
              </h1>
              <div className='rect-box g-bg '>
                <h6>Punch In at</h6>
                <p>Wed, 1 Jan 2022 06.00 AM</p>
              </div>
              <div className='circle-box df dc g-bg'>8 Hrs</div>
              <div className='rect-box g-bg '>
                <h6>Punch Out at</h6>
                <p>Wed, 1 Jan 2022 02.00 AM</p>
              </div>
              <div className='df twO-clo'>
                <div className='rect-box g-bg text-center'>
                  <h6>Break Time</h6>
                  <p>1.21 Hrs</p>
                </div>
                <div className='rect-box g-bg text-center'>
                  <h6>Over Time</h6>
                  <p>2 Hrs</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='info-box'>
              <h1 className='mb-20'>Activity</h1>
              <div className='step-activity df'>
                <div className='step-left'>
                  <div className='circle'></div>
                </div>
                <div className='rect-box g-bg text-center'>
                  <h6>Punch In at</h6>
                  <p className='df dc'>
                    <img src={clock} alt='clock' />
                    06.00 AM
                  </p>
                </div>
              </div>
              <div className='step-activity df'>
                <div className='step-left'>
                  <div className='circle'></div>
                </div>
                <div className='rect-box g-bg text-center'>
                  <h6>Break From</h6>
                  <p className='df dc'>
                    <img src={clock} alt='clock' />
                    06.00 AM
                  </p>
                </div>
              </div>
              <div className='step-activity df'>
                <div className='step-left'>
                  <div className='circle'></div>
                </div>
                <div className='rect-box g-bg text-center'>
                  <h6>Break To</h6>
                  <p className='df dc'>
                    <img src={clock} alt='clock' />
                    06.00 AM
                  </p>
                </div>
              </div>
              <div className='step-activity df'>
                <div className='step-left'>
                  <div className='circle'></div>
                </div>
                <div className='rect-box g-bg text-center'>
                  <h6>Punch Out at</h6>
                  <p className='df dc'>
                    <img src={clock} alt='clock' />
                    06.00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePopup;
