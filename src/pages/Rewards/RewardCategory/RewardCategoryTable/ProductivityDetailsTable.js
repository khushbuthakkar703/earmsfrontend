import React from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../../Component/Tables/Tables";



// const recievedData = [
//     {
//         name: "Suresh Kumar",
//         id: "001",
//         project: 'Production',
//         product: "Oil",
//         min: "300 L",
//         max: "400 L",
//         achieved: "350 L",
//         select: ""
//     }
// ];

const ProductivityDetailsTable = ({attendanceData,handleProductivityData}) => {

    const recievedColumns = [

        {
            Header: "Employee Name",
            accessor: "EmployeeName",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                     { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text'  className='form-control' name='EmployeeName' onChange={(e)=>handleProductivityData(e)}/>
                     
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
                      <input   type ='text'  className='form-control' name='EmployeeID' onChange={(e)=>handleProductivityData(e)}/>
                     
                         :
                         <span className='' > {row.values.EmployeeID}</span>
                        }
                  </>
                );
              },
            
        },
        {
            Header: "Project",
            accessor: "Project",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                     { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text'  className='form-control' name='Project' onChange={(e)=>handleProductivityData(e)}/>
                     
                         :
                         <span className='' > {row.values.Project}</span>
                        }
                  </>
                );
              },
          
        },
        {
            Header: "Output Product",
            accessor: "OutputProduct",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                     { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text'  className='form-control' name='OutputProduct' onChange={(e)=>handleProductivityData(e)}/>
                     
                         :
                         <span className='' > {row.values.OutputProduct}</span>
                        }
                  </>
                );
              },
           
        },
        {
            Header: "Target (Min)",
            accessor: "TargetMin",
            Cell: ({ row }) => {
                console.log(row.values);

                return (
                  <>
                     { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text'  className='form-control' name='TargetMin' onChange={(e)=>handleProductivityData(e)}/>
                     
                         : 
                         <span className='' > {row.values.TargetMin}</span>
                        }
                  </>
                );
              },
           
        },
        {
            Header: "Target (Max)",
            accessor: "TargetMax",
            Cell: ({ row }) => {
                console.log(row.values,"CONSOLE");
                return (
                  <>
                     { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text'  className='form-control' name='TargetMax' onChange={(e)=>handleProductivityData(e)}/>
                     
                         : 
                         <span className='' > {row.values.TargetMax}</span>
                        }
                  </>
                );
              },
            
        },
        {
            Header: "Achieved",
            accessor: "Achieved",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                     { attendanceData && Object.keys(attendanceData).length === 0 && Object.getPrototypeOf(attendanceData) === Object.prototype ?
                      <input   type ='text'  className='form-control' name='Achieved' onChange={(e)=>handleProductivityData(e)}/>
                     
                         :null
                        //  <span className='' > {row.values.Achieved}</span>
                        }
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
    console.log(attendanceData,"PRRRR")
    return (
        <>
            <div className="custom-tab">
                <Tabs defaultActiveKey="Productivity" id="Productivity" className="mb-3">
                    <Tab eventKey="Productivity" title="Productivity Details">
                        <Table recievedColumns={recievedColumns} recievedData={[attendanceData]} />
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};

export default ProductivityDetailsTable;