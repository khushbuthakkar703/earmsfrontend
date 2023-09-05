import React,{useState,useEffect} from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../../Component/Tables/Tables";
import apiRequest from '../../../../utils/helpers/apiRequest';
const AttendanceTable = ({attendanceData,handleTableData},) => {
    console.log(attendanceData,"ATTTTTTTTT")
    const [attendanceModal,setAttendanceModal] = useState(false)
    const [ModalDetail, setModalDetail] = useState([]);
   
//    const attendance = ({month : attendanceData?.Month, empId : attendanceData?.EmployeeID})
const attendance = ({
    "month" : "Oct 2022",
    "empId" : 5
})
    const getAttendanceDetailsData = async () => {
      const res = await apiRequest('getAwardAttendanceUserDetails',attendance);
      console.log('ATTENDANCE DETAILS TABLE RES : ', res);
  
  console.log(attendance,"AAAAAAAAAAAAAAA")
      if (res?.error) {
        setModalDetail([]);
      } else {
        setModalDetail(res.data);
      }
    };
  
    useEffect(() => {
        getAttendanceDetailsData(); 
    }, []);
    const recievedColumns1 = [

        {
            Header: "Date",
            accessor: "Date",
            
        },
        {
            Header: "Allocated Shift",
            accessor: "AllotedShift",
        },
        {
            Header: "Shift In Time",
            accessor: "ShiftInTime",
        },
        {
            Header: "Shift Out Time",
            accessor: "ShiftOutTime",
        },
        {
            Header: "Employee In Time",
            accessor: "EmployeeIntime",
        },
        {
            Header: "Employee Out Time",
            accessor: "EmployeeOuttime",
        },
        
    ];
  
    
    const recievedColumns = [

        {
            Header: "Employee Name",
            accessor: "EmployeeName",
            Cell: ({ row }) => {
                // console.log("yyyyyyyyyyyyyyyyyy",attendanceData ,attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype);
                return (
                    <>
                     { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text' required className='form-control' name='EmployeeName' onChange={(e)=>handleTableData(e)}/>
                     
                         :
                         <span className='' > {row.values.EmployeeName}</span>
                        }
                       
                   </>
                );
              },
        },
        {
            Header: "Employee ID",
            accessor: "EmployeeID",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                     { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text' required className='form-control' name='EmployeeID' onChange={(e)=>handleTableData(e)}/>
                     
                         :
                         <span className='' > {row.values.EmployeeID}</span>
                        }
                  </>
                );
              },
        },
        {
            Header: "Month",
            accessor: "Month",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                      { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text' required className='form-control' name='Month' onChange={(e)=>handleTableData(e)}/>
                     
                         :
                         <span className='' > {row.values.Month}</span>
                        }
                  </>
                );
              },
        },
        {
            Header: "No Of Working Days",
            accessor: "NoOfWorkingDays",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                   { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text' required className='form-control' name='NoOfWorkingDays' onChange={(e)=>handleTableData(e)}/>
                     
                         :
                         <span className='' > {row.values.NoOfWorkingDays}</span>
                        }
                  </>
                );
              },
        },
        {
            Header: "Worked Days",
            accessor: "WorkedDays",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <div>
                        { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                          <input   type ='text' required  className='form-control' name='WorkedDays' onChange={(e)=>handleTableData(e)}/>
                        
                     
                        :    <span className='blue-clr' onClick={()=>setAttendanceModal(true)}> {row.values.WorkedDays}</span>
                        
                      
                        }
                  </div>
                )
            }
        },
        {
            Header: "Leave Days",
            accessor: "LeaveDays",
            Cell: ({ row }) => {
                // console.log(row.values);
                return (
                  <>
                    { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text' required className='form-control' name='LeaveDays' onChange={(e)=>handleTableData(e)}/>
                     
                         :
                         <span className='' > {row.values.LeaveDays}</span>
                        }
                  </>
                );
              },
        },
        
    ];
   
    return (
        <div>
        <div className="custom-tab">
            <Tabs defaultActiveKey="attendence" id="attendence" className="mb-3">
                <Tab eventKey="attendence" title="Attendence Details">
                    <Table recievedColumns={recievedColumns} recievedData={[attendanceData]} />
                </Tab>
            </Tabs>
        </div>
        {attendanceModal &&
            <div>
                <div className='backdrop'>
                    <div className='verify-popup '>
                    <div className='Verify-form modal-width'>
                        <div className="tracter-parent"> 
                        <h6 className='verify-heading'>Working Days</h6>
                            <div>
                            <div className="custom-tab">
                                <Tabs defaultActiveKey="attendence" id="attendence" className="mb-3">
                                    <Tab eventKey="attendence" title="Attendence Details">
                                        <Table recievedColumns={recievedColumns1 } recievedData={ModalDetail} />
                                    </Tab>
                                </Tabs>
                            </div>
                            </div>
                        <div className='verify-buttons'>
                            <button className='btn btn-primary' onClick={()=>setAttendanceModal(false)}>Close</button>
                        </div>
                        </div>
                    </div>

                    </div> 
                </div>
            </div>
        }
                
        </div>
    );
};

export default AttendanceTable;