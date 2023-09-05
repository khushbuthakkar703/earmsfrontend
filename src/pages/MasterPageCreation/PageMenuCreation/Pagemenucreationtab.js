import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IoMdAddCircle } from "react-icons/io";
import MasterPageCreation from './Masterpagefields'

const PageMenuCreationTab = () => {
  return (
    <div className='custom-tab'>

      <Tabs
        defaultActiveKey="page Fields"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="page Fields" title="Page Fields">
        <MasterPageCreation />
        </Tab>
      </Tabs>
      <button className='btn add-btn m-2 df dc'><IoMdAddCircle />Add More</button>

    </div>
  );
};

export default PageMenuCreationTab;