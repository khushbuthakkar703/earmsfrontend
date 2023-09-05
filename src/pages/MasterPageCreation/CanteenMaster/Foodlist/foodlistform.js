import React, { useEffect } from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../../Component/Tables/Tables";



// Forms


const FoodListForm = () => {
    const recievedColumns = [
        {
          Header: "Grocery ",
          accessor: "Grocery ",
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
          Header: "Measuring Type",
          accessor: "Measuring Type",
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
                <label className='form-label'>Food Name </label>
                <input
                  type='text'
                  readonly
                  className='form-control'
                
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Measuring Type </label>
                <select className='form-control  form-select'>
                        <option></option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="custom-tab">
          <Tabs
            defaultActiveKey="Required Items"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Required Items" title="Required Items">
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
