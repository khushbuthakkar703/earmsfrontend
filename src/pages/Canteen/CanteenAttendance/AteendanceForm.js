import React, { useEffect } from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IoMdAddCircle } from 'react-icons/io';
import Table from "../../../Component/Tables/Tables";



// Forms


const AttendanceForm = () => {
    const recievedColumns = [
        {
          Header: "Employee Name",
          accessor: "employeename",
          Cell: ({ row }) => {
            console.log(row.values);
            return (
              <select className="form-control  form-select table-select">
                <option></option>
              </select>
            );
          },
         
        },
        {
          Header: "Employee ID",
          accessor: "Employeeid",
        },
        {
            Header: "In Time",
            accessor: "intime",
          },
          {
            Header: "Out Time",
            accessor: "outTime",
          },
          
      ];
      const recievedData = [
        {
          binno: "Bin-3456",
          product: "Product 1",
          batchno: "Batch001",
          crntstck: "2000",
        },
        {
          binno: "Bin-3456",
          product: "Product 1",
          batchno: "Batch001",
          crntstck: "2000",
        },
      ];
      const recievedColumns1 = [
        
        {
          Header: "No Of Tea Tokens Used",
          accessor: "noofteatokensused",
        },
        {
            Header: "No Of Snacks Tokens Used",
            accessor: "noofsnackstokensused",
          },
          
          
      ];
      const recievedData1 = [
        {
          binno: "Bin-3456",
          product: "Product 1",
          batchno: "Batch001",
          crntstck: "2000",
        },
        {
          binno: "Bin-3456",
          product: "Product 1",
          batchno: "Batch001",
          crntstck: "2000",
        },
      ];
  return (
    <div>
    
        <p className='employee-1'>Canteen</p>
        <p className='employee-2'>Canteen/Food List</p>
      
      <form>
        <div className='theme-card'>
       
          <div className='theme-card-header'>
            <h6>Canteen Menu</h6>
          
          </div>

          <div className='theme-card-content'>
            <div className='df fw'>
            <div className='form-group'>
                <label className='form-label'>Date</label>
                <input
                  type='date'
                  readOnly
                  className='form-control'
                
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="custom-tab">
          <Tabs
            defaultActiveKey="Breakfast Menu"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Breakfast Menu" title="Breakfast Menu">
              <Table
                recievedColumns={recievedColumns}
                recievedData={recievedData}
              />
            </Tab>
            <Tab eventKey="Lunch Menu" title="Lunch Menu">
              <Table
                recievedColumns={recievedColumns}
                recievedData={recievedData}
              />
            </Tab>
            <Tab eventKey="Dinner Menu" title="Dinner Menu">
              <Table
                recievedColumns={recievedColumns}
                recievedData={recievedData}
              />
            </Tab>
            <Tab eventKey="Snacks Menu" title="Snacks Menu">
            <Tabs
            defaultActiveKey="Shift 1"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Shift 1" title="Shift 1">
              <Table
                recievedColumns={recievedColumns1}
                recievedData={recievedData1}
              />
            </Tab>
            <Tab eventKey="Shift 2" title="Shift 2">
              <Table
                recievedColumns={recievedColumns1}
                recievedData={recievedData1}
              />
            </Tab>
            <Tab eventKey="Shift 3" title="Shift 3">
              <Table
                recievedColumns={recievedColumns1}
                recievedData={recievedData1}
              />
            </Tab>
          </Tabs>
            </Tab>
          </Tabs>
          <div className='d-flex df-sb'>
            <div>
            <button className="btn add-btn m-2 df dc" >
              <IoMdAddCircle />
              Add More
            </button>
            </div>
            <div className=' total-cost'>
            <div className=' '>
                <p>Total Cost:</p>
            </div>
            </div>
          </div>
        </div>
           

        <div className='df df-sb'>
          <button className='btn btn btn-outline-primary m-2' >Cancel</button>
          <button
            className='btn primary-btn'
            type='submit'
           
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendanceForm;
