import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from '../../../Component/Tables/Tables'
import { IoMdAddCircle } from "react-icons/io";

const AttandanceDetailsTab = () => {
    const recievedColoumns = [
        {
            Header: 'Employee Name',
            accessor: 'empname'
        },
        {
            Header: 'Employee ID',
            accessor: 'empid'
        },
        {
            Header: 'Alloted Shift',
            accessor: 'allotedshift'
        },
        {
            Header: 'Shift In Time',
            accessor: 'shiftintime'
        },
        {
            Header: 'Employee In time',
            accessor: 'emptime'
        },
        {
            Header: 'Employee Out time',
            accessor: 'empoutime'
        }
    ]
    const recievedData = [
        {
            rewardcat: 'Suresh Kumar',
            empid:'001',
            allotedshift:'Shift 1',
            shiftintime:'6 am',
            emptime: '2 pm',
            empoutime: '6:05 am'
        }
    ]
  return (
    <div className='custom-tab mt-3'>

      <Tabs
        defaultActiveKey="page Fields"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="page Fields" title="Attendence Details">
        </Tab>
      </Tabs>
        <Tables recievedColumns={recievedColoumns} recievedData={recievedData} />
      <button className='btn add-btn m-2 df dc'><IoMdAddCircle />Add More</button>

    </div>
  )
}

export default AttandanceDetailsTab
