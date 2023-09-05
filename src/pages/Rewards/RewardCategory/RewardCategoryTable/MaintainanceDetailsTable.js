import React,{useState} from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../../Component/Tables/Tables";




const recievedColumns1 = [

    {
        Header: "Machine",
        accessor: "Machine",
    },
    {
        Header: "Maintainace Done On",
        accessor: "doneon",
    },
    {
        Header: "Maintainace Done By",
        accessor: "doneby",
    },
    {
        Header: "Maintainace Detail",
        accessor: "detail",
    }
];

const recievedData1 = [
    {
        Machine: "Crusher - 0987",
        doneon: "Jan 5 2022",
        doneby: "Machanic 1",
        detail: "Oil Change",

    },
    {
        Machine: "Crusher - 0987",
        doneon: "Jan 5 2022",
        doneby: "Machanic 1",
        detail: "Oil Change",

    }, {
        Machine: "Crusher - 0987",
        doneon: "Jan 5 2022",
        doneby: "Machanic 1",
        detail: "Oil Change",

    }
];
const recievedColumns2 = [
    {
        Header: "Machine",
        accessor: "Machine",
    },
    {
        Header: "Maintainace Done On",
        accessor: "doneon",
    },
    {
        Header: "Reason of Breakdown",
        accessor: "Reason",
    },
    {
        Header: "Machine Fixed On",
        accessor: "fixedon",
    },
    {
        Header: "Machine Fixed By",
        accessor: "fixedby",
    }
];

const recievedData2 = [
    {
        Machine: "Crusher - 0987",
        doneon: "Jan 5 2022",
        Reason: "Overheating",
        fixedon: "25 Jan 2022",
        fixedby: "Machanic 1e",

    },
    {
        Machine: "Crusher - 0987",
        doneon: "Jan 5 2022",
        Reason: "Overheating",
        fixedon: "25 Jan 2022",
        fixedby: "Machanic 1e",

    }, {
        Machine: "Crusher - 0987",
        doneon: "Jan 5 2022",
        Reason: "Overheating",
        fixedon: "25 Jan 2022",
        fixedby: "Machanic 1e",
    }
];
const MaintainanceDetailsTable = ({attendanceData,handleMaitanaceData}) => {
    console.log(attendanceData,"MMMMM")
    const [maintance,setmaintance] = useState(false)
    const [breskdown,setBreakdown] = useState (false)
    
    const recievedColumns = [

        {
            Header: "Employee Name",
            accessor: "EmployeeName",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                  {attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ? 
                   <input   type='text'  className='form-control' name='EmployeeName' onChange={(e)=>handleMaitanaceData(e)}/>
                  
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

                    {attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ? 
                   <input   type='text'  className='form-control' name='EmployeeID' onChange={(e)=>handleMaitanaceData(e)}/>
                  :
                   <span className='' > {row.values.EmployeeID}</span> 
                  }
                    
                  </>
                );
              },
        },
        {
            Header: "Department",
            accessor: "Department",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>

                    {attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ? 
                   <input   type='text'  className='form-control' name='Department' onChange={(e)=>handleMaitanaceData(e)}/>
                  :
                   <span className='' > {row.values.Department}</span>
            }
                  </>
                );
              },
        },
        {
            Header: "Machine Alloted",
            accessor: "MachineAlloted",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>

                {attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ? 
                   <input   type='text'  className='form-control' name='MachineAlloted' onChange={(e)=>handleMaitanaceData(e)}/>
                  :
                   <span className='' > {row.values.MachineAlloted}</span>
            }
                  </>
                );
              },
            
        },
        {
            Header: "Maintainance Req",
            accessor: "MaintainanceReq",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                        {attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ? 
                                 <input   type='text'  className='form-control' name='MaintainanceReq' onChange={(e)=>handleMaitanaceData(e)}/>
                                 :
                             <span className='' > {row.values.MaintainanceReq}</span>
                        }
                  </>
                );
              },
            
        },
        {
            Header: "Maintainance Done",
            accessor: "MaintainanceDone",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <div>
                
                                {attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ? 
                                 <input   type='text'  className='form-control' name='MaintainanceDone' onChange={(e)=>handleMaitanaceData(e)}/>
                                 :
                                 <span className='blue-clr' onClick={()=>setmaintance(true)}>{row.values.MaintainanceDone}</span>
                        }
                  </div>
                 
                )
            }

            
           
        },
        {
            Header: "Machine Breakdown",
            accessor: "MachineBreakdown",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                  
                    {row.values.MachineBreakdown == 'No' ? (
                      <span >
                      No
                      </span>
                    ) : row.values.MachineBreakdown ==   `${row.values.MachineBreakdown}` ? (
                      <span className='blue-clr' onClick={()=>setBreakdown(true)}>
                      </span>
                    ) :  <input   type='text'  className='form-control' name='MachineBreakdown' onChange={(e)=>handleMaitanaceData(e)}/>}
                  </>
                );
              },
           
        },
        {
            Header: "Select ",
            accessor: "select",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                    <input type="checkbox" />
                )
            }
        },
    ];
    return (
        <>
            <div className="custom-tab">
                <Tabs defaultActiveKey="Maintainance" id="Maintainance" className="mb-3">
                    <Tab eventKey="Maintainance" title="Maintainance Details">
                        <Table recievedColumns={recievedColumns} recievedData={[attendanceData]} />
                    </Tab>
                </Tabs>
            </div>


            {maintance ? 
            <div className="custom-tab">
            <Tabs defaultActiveKey="Maintainance" id="Maintainance" className="mb-3">
                <Tab eventKey="Maintainance" title="Maintainance Details">
                    <Table recievedColumns={recievedColumns1} recievedData={recievedData1} />
                </Tab>
            </Tabs>
        </div>: null
        
        }
            
            {breskdown ?
             <div className="custom-tab">
             <Tabs defaultActiveKey="Breakdown" id="Breakdown" className="mb-3">
                 <Tab eventKey="Breakdown" title="Machine Breakdown">
                     <Table recievedColumns={recievedColumns2} recievedData={recievedData2} />
                 </Tab>
             </Tabs>
         </div> :null
        
        }
           
        </>
    );
};

export default MaintainanceDetailsTable;