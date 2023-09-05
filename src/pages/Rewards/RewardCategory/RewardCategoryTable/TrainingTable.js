import React, { useState } from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../../Component/Tables/Tables";




const recievedColumns1 = [

    {
        Header: "Training Department",
        accessor: "dep",
    },
    {
        Header: "Trainer Name",
        accessor: "name",
    },
    {
        Header: "Training Conducted On",
        accessor: "con",
    },
    {
        Header: "Attened Training",
        accessor: "attened",
    },
    {
        Header: "Score ",
        accessor: "score",
    }
];

const recievedData1 = [
    {
        dep: "Production",
        name: "Suresh Kumar",
        con: "Jan 5 2022",
        attened: "Yes",
        score: "90",

    }
];
const TrainingTable = ({attendanceData,handleTrainingData}) => {
    const [trainingDetail,setTrainingDetail] = useState(false)
    console.log(attendanceData,"TRRRRR")
    const recievedColumns = [

        {
            Header: "Employee Name",
            accessor: "EmployeeName",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                     { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text'  className='form-control' name='EmployeeName' onChange={(e)=>handleTrainingData(e)}/>
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
                      <input   type ='text'  className='form-control' name='EmployeeID' onChange={(e)=>handleTrainingData(e)}/>
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
                      <input   type ='text'  className='form-control' name='Month' onChange={(e)=>handleTrainingData(e)}/>
                         :
                         <span className='' > {row.values.Month}</span>
                        }
                  </>
                );
              },
             
        },
        {
            Header: "Training 1",
            accessor: "Training1",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <div>
                { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text'  className='form-control' name='Training1' onChange={(e)=>handleTrainingData(e)}/>
                         :
                         <span className='blue-clr' onClick={()=>setTrainingDetail(true)}> {row.values.Training1}</span>
                        }
                
                  </div>
                )
            }
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
                <Tabs defaultActiveKey="Training" id="Training" className="mb-3">
                    <Tab eventKey="Training" title="Training Details">
                        <Table recievedColumns={recievedColumns} recievedData={[attendanceData]} />
                    </Tab>
                </Tabs>
            </div>

            {trainingDetail && 
             <div className="custom-tab">
             <Tabs defaultActiveKey="Trainingdetails" id="Trainingdetails" className="mb-3">
                 <Tab eventKey="Trainingdetails" title="Training 1 Details">
                     <Table recievedColumns={recievedColumns1} recievedData={recievedData1} />
                 </Tab>
             </Tabs>
         </div>
            }
           
        </>
    );
};

export default TrainingTable;