import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from '../../../Component/Tables/Tables'
import { IoMdAddCircle } from "react-icons/io";

const RewardsRecievedTab = () => {
    const recievedColoumns = [
        {
            Header: 'Reward Category',
            accessor: 'rewardcat'
        },
        {
            Header: 'Reward Received on',
            accessor: 'rewardsreceived'
        },
        {
            Header: 'Reward Status',
            accessor: 'rewardstatus'
        },
        {
            Header: 'Approve',
            accessor: 'approve',
            Cell: ({ row }) => {
                return (
                    <>
                        <input type="checkbox" className="" checked/>
                    </>
                )
            }
        }
    ]
    const recievedData = [
        {
            rewardcat: 'Attendance',
            rewardsreceived:'11 Aug 2022',
            rewardstatus: 'Approved By Admin & Plant Manager',
            approve: ''
        },
        {
            rewardcat: 'Productivty',
            rewardsreceived:'11 Aug 2022',
            rewardstatus: 'Approved By Admin & Plant Manager',
            approve: ''
        }
    ]

  return (
    <div className='custom-tab mt-3'>

      <Tabs
        defaultActiveKey="page Fields"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="page Fields" title="Rewards Revceived">
        </Tab>
      </Tabs>
        <Tables recievedColumns={recievedColoumns} recievedData={recievedData} />
      <button className='btn add-btn m-2 df dc'><IoMdAddCircle />Add More</button>

    </div>
  )
}

export default RewardsRecievedTab
