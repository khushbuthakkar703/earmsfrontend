import React, { useEffect } from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../../Component/Tables/Tables";



// Forms


const FoodListForm = () => {
    const recievedColumns = [
        {
          Header: "Food",
          accessor: "food",
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
          Header: "Measure Type",
          accessor: "MeasureType",
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
  return (
    <div>
    
        <p className='employee-1'>Canteen</p>
        <p className='employee-2'>Canteen/Food List</p>
      
      <form>
        <div className='theme-card'>
       
          <div className='theme-card-header'>
            <h6>Add Food</h6>
          
          </div>

          <div className='theme-card-content'>
            <div className='df fw'>
            <div className='form-group'>
                <label className='form-label'>Day </label>
                <select className='form-control  form-select'>
                        <option></option>
                </select>
              </div>
              <div className='form-group'>
                <label className='form-label'>From Date </label>
                <select className='form-control  form-select'>
                        <option></option>
                </select>
              </div>
              <div className='form-group'>
                <label className='form-label'>To Date </label>
                <select className='form-control  form-select'>
                        <option></option>
                </select>
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
              <Table
                recievedColumns={recievedColumns}
                recievedData={recievedData}
              />
            </Tab>

          </Tabs>
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

export default FoodListForm;
