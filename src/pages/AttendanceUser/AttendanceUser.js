import React, { useState,useEffect } from "react";
import Breadcrumbs from "../../Component/Breadcrumbs";
import "../AttendanceAdmin/attendance.scss";

import clock from "../../assets/clock.svg";
import Tables from "../../Component/Tables/Tables";
// import OverDueBreakTimeReason from "./OverDueBreakTimeReason";
//import OverTimeReason from "./OverTimeReason";
import apiRequest from '../../utils/helpers/apiRequest';
import { Slide, toast } from 'react-toastify';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import moment from "moment";

// const recievedData = [
//     {
//         Date: "1 Jan 2022",
//         In: "06.00 AM",
//         Out: "05.00 AM",
//         Production: "8 Hrs",
//         Break: "2 Hrs",
//         Overtime: "0 Hrs",
//     },
//     {
//         Date: "1 Jan 2022",
//         In: "06.00 AM",
//         Out: "05.00 AM",
//         Production: "8 Hrs",
//         Break: "2 Hrs",
//         Overtime: "0 Hrs",
//     },
//     {
//         Date: "1 Jan 2022",
//         In: "06.00 AM",
//         Out: "05.00 AM",
//         Production: "8 Hrs",
//         Break: "2 Hrs",
//         Overtime: "0 Hrs",
//     },
//     {
//         Date: "1 Jan 2022",
//         In: "06.00 AM",
//         Out: "05.00 AM",
//         Production: "8 Hrs",
//         Break: "2 Hrs",
//         Overtime: "0 Hrs",
//     },
// ];





const AttendanceUser = () => {
    const [putValue,setPutValue] =useState([])
    
    // const onSubmit= () =>{
    //     setPutValue()
    // }
    const [auser,setAuser] = useState()
    const [attendance,setAttendance] =useState()
    const [overTime,setOverTime] =useState(false)
    const [overTimeReason, setOverTimeReason] = useState("");
    const [overTimeReasonID, setOverTimeReasonID] = useState("");
    const [breakTime,setBreakTime] =useState(false)
    const [breakReason,setBreakReason] = useState ("")
    const [breakReasonId,setBreakReasonId] = useState ("")
    const getAttendanceUserData = async () => {
        const res = await apiRequest('userAttendanceList');
        console.log('ATTENDANCE TABLE RES : ', res);
    
        if (res?.error) {
            setAuser([]);
        } else {
            setAuser(res.data);
        }
      };
    
      const getAttendaceData = async () => {
        const res = await apiRequest('getAttendanceInfo');
        console.log('ATTENDANCE USER RES : ', res);
    
        if (res?.error) {
            setAttendance([]);
        } else {
            setAttendance(res.data);
        }
      };
    //   const userDate =(date)=>{
    //     const formatedpunchInAt = moment(date.substring(0,16)).format('llll');
    //    return formatedpunchInAt
    //    }
      const userDate =(date) =>{
        //  const setpunchInAt = String(punchInAt)
         const setpunchInAt =date?.substring(0,16);
         const formatedpunchInAt = moment(setpunchInAt).format("llll")
         return formatedpunchInAt
       } 
       const activity = attendance?.punchInAt?.substring(0,16)
       const formatedActivity = moment(activity).format("LT")
        
       
         const brkTime = (time)=>{
            const setBreakTime = time?.substring(0,5) + time?.substring(8,11);
            console.log(setBreakTime,"RRRR")
             return setBreakTime 
         }
      useEffect(() => {
        getAttendanceUserData();
        getAttendaceData();
        // userDate()
        //getDataList();
      }, []);
      const updateDataList = async () => {
        let payload = {
            id: overTimeReasonID,
            overTimeReason: overTimeReason 
        }
        const res = await apiRequest('updateOverTimeReason',payload);
        if (res.error) {
            toast(<ErrorToast body='Failed to delete' />, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 2000,
                });
        } else {
            toast(<SuccessToast body={res?.data?.message} />, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 2000,
            });
            setOverTime(false)
            setOverTimeReason("")
            setOverTimeReasonID("")
            getAttendanceUserData();
        }
      };

     const updateDataList1 =async () => {
        let payload1 = {
            id:breakReasonId,
            overDueToBreakTimeReason:breakReason
        }
        const res = await apiRequest('updateOverDueToBreakTimeReason',payload1);
        if (res.error) {
            toast(<ErrorToast body='Failed to delete' />, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 2000,
                });
        } else {
            toast(<SuccessToast body={res?.data?.message} />, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 2000,
            });
            setOverTime(false)
            setOverTimeReason("")
            setOverTimeReasonID("")
            getAttendanceUserData();
        }
     }
    

    
      
let newvalue =  attendance?.statistic?.today
let intValue = parseInt(newvalue)
// console.log("New Value1" ,typeof( intValue))
const barValue =intValue*10 +20
// console.log(barValue,"bartoday")
let newWeek= attendance?.statistic?.week
let intweek =parseInt(newWeek)
// console.log(typeof(intweek),"WEEELEL")
const barweek =intweek/48*100
// console.log(barweek,"BARWEEK")
let newmonth = attendance?.statistic?.month
let intmonth = parseInt(newmonth)
const barMonth =intmonth/120*100
let ovTime = attendance?.statistic?.overTime
let intoverTime =parseInt (ovTime)
let barOverTime = intoverTime

     const recievedColumns = [
        {
            Header: "Date",
            accessor: "date",
        },
        {
            Header: "Punch In",
            accessor: "punchIn",
        },
        {
            Header: "Punch Out",
            accessor: "punchOut",
        },
        {
            Header: "Production",
            accessor: "production",
        },
        {
            Header: "Break",
            accessor: "break",
            Cell: ({ row }) => {
                console.log(row.values.break);
                return (
                  <>
                    {row.values.break <= '0:30Hrs' ? (
                      <span className=''>
                       {row.values.break}
                      </span>
                    ) : (
                      <span className='pointer-link' onClick={()=>{ 
                        setBreakTime(true) 
                      setBreakReason(row.original.overDueToBreakTimeReason)
                      setBreakReasonId(row.original.id)
                      }}>
                       {row.values.break}
                      </span>
                    ) }
                  </>
                );
              },
        },
        {
            Header: "Overtime",
            accessor: "overTime",
            Cell: ({ row }) => {
                return (
                  <>
                    {row.values.overTime == '0:00' ? (
                      <span className=''>
                        0.00
                      </span>
                    ) : (
                      <span className='pointer-link' onClick={()=>  {
                      setOverTimeReason(row.original.overTimeReason)
                      setOverTimeReasonID(row.original.id)
                      setOverTime(true)
                      }
                      } >
                       {row.values.overTime}
                      </span>
                    ) }
                  </>
                );
              },
        },
    ];
    
  
    return (
        <div>
            <div>
          <p className='employee-1'>Employee</p>
          <p className='employee-2'>Employee /  Attendance</p>
        </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="info-box">
                        <h1 className="mb-20">
                            Timesheet <span>{attendance?.date}</span>
                        </h1>
                        <div className="rect-box g-bg ">
                            <h6>Punch In at</h6>
                            <p> {userDate(attendance?.punchInAt)}</p>
                            {/* <p>{attendance?.punchInAt}</p> */}
                        </div>
                        <div className="circle-box df dc g-bg">{attendance?.production}hrs</div>
                        <div className="rect-box g-bg ">
                            <h6>Punch Out at</h6>
                            {/* <p>{attendance?.punchOutAt}</p> */}
                            <p> {userDate(attendance?.punchOutAt)}</p>
                        </div>
                        <div className="df twO-clo">
                            <div className="rect-box g-bg text-center">
                                <h6>Break Time</h6>
                                <p>{attendance?.break}</p>
                            </div>
                            <div className="rect-box g-bg text-center ">
                                <h6>Over Time</h6>
                                <p>{attendance?.overTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="info-box">
                        <h1 className="mb-20">Statistics</h1>
                        <div className="rect-box">
                            <div className="df df-sb progress-label">
                                <span>Today</span>
                                {barValue}
                                {/* {console.log(attendance?.statistic.today,"TODAY VALUE")} */}
                            </div>
                            <div class="progress">
                                <div
                                    class="progress-bar bg-skyblue"
                                    role="progressbar"
                                    style={{ width:`${barValue}%` }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="rect-box">
                            <div className="df df-sb progress-label">
                                <span>This Week</span>
                                {attendance?.statistic?.week}
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: `${barweek}%` }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="rect-box">
                            <div className="df df-sb progress-label">
                                <span>This Month</span>
                                {attendance?.statistic?.month}
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: `${barMonth}%` }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="rect-box">
                            <div className="df df-sb progress-label">
                                <span>Overtime</span> {attendance?.statistic?.overTime}
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width:`${barOverTime}%`  }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="info-box">
                        <h1 className="mb-20">Activity</h1>
                        <div className="step-activity df">
                            <div className="step-left">
                                <div className="circle"></div>
                            </div>
                            <div className="rect-box g-bg text-center">
                                <h6>Punch In at</h6>
                                <p className="df dc">
                                    <img src={clock} alt="clock" />
                                    {formatedActivity}
                                </p>
                            </div>
                        </div>
                        <div className="step-activity df">
                            <div className="step-left">
                                <div className="circle"></div>
                            </div>
                            <div className="rect-box   g-bg text-center">
                                <h6>Break From</h6>
                                <p className="df dc">
                                    <img src={clock} alt="clock" />
                                    {brkTime(attendance?.breakIn)}
                                    
                                </p>
                            </div>
                        </div>
                        <div className="step-activity df">
                            <div className="step-left">
                                <div className="circle"></div>
                            </div>
                            <div className="rect-box g-bg text-center">
                                <h6>Break To</h6>
                                <p className="df dc">
                                    <img src={clock} alt="clock" />
                                    {brkTime(attendance?.breakOut)}
                                    
                                </p>
                            </div>
                        </div>
                        {/* <div className="step-activity df">
                            <div className="step-left">
                                <div className="circle"></div>
                            </div>
                            <div className="rect-box g-bg text-center">
                                <h6>Punch Out at</h6>
                                <p className="df dc">
                                    <img src={clock} alt="clock" />
                                    {attendance?.punchOutAt}
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="df salary-filter my-3 ">
                <div>
                    <input className="form-control" placeholder="2022" />
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>January</option>
                    </select>
                </div>
                <div>
                    <input type="date" placeholder="Date From" required className="form-control" />
                </div>
                <div>
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
            </div>
            {auser && <Tables recievedColumns={recievedColumns} recievedData={auser} />}
           {overTime ? <div className='modal-wrap'>
            <div className='modal-inner-wrap ml-modal'>
                <div className='modal-head'>Over Time Reason</div>
                <div className="form-group ">
                    <label className="form-label">Reason </label>
                    <textarea rows="8" type="text" value={overTimeReason} onChange={(e)=> setOverTimeReason(e.target.value)} className="form-control" />

                </div>
                <div className="df df-fe">
                    <button className="btn primary-bdr-btn m-2" 
                    onClick={()=>
                        {
                            setOverTime(false)
                            setOverTimeReason("")
                            setOverTimeReasonID("")
                        }
                    }
                    >Cancel</button>
                    <button className="btn primary-btn" onClick={()=>updateDataList()}>Add</button>
                </div>
            </div>
        </div> : null} 

            {breakTime ? <div className='modal-wrap'>
            <div className='modal-inner-wrap ml-modal'>
                <div className='modal-head'>Over Due Break Time Reason</div>
                <div className="form-group ">
                    <label className="form-label">Reason </label>
                    <textarea rows="8" type="text" value={breakReason} onChange ={(e)=>setBreakReason(e.target.value)}className="form-control"   />
                </div>
                <div className="df df-fe">
                    <button className="btn primary-bdr-btn m-2" onClick={()=>
                    {
                        setBreakTime(false)
                        // console.log("click")
                    }}>Cancel</button>
                    <button className="btn primary-btn" type="submit"  onClick={updateDataList1}>Add</button>
                </div>
            </div>
        </div> :null}
            {/* <OverTimeReason /> */}
        </div>
    );
};

export default AttendanceUser;
