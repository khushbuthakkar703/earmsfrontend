import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';
import { useState, useEffect } from 'react';

function DutyTransferTab({
  selectstaff,
  branchList,
  departmentList,
  handleDataChange,
}) {
  const recievedColumns = [
    {
      Header: 'Employee ID',
      accessor: 'id',
    },
    {
      Header: 'Employee Name',
      accessor: 'employeeName',
    },
    {
      Header: 'Current Branch',
      accessor: 'branchId',
    },
    {
      Header: 'Current Department',
      accessor: 'departmentId',
    },
    {
      Header: 'Assign To Branch',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <select
            className='form-control  form-select table-select'
            name='branch'
            onChange={handleDataChange}
          >
            <option name='bramchName'>Select Branch</option>
            {branchList &&
              branchList.map((val) => {
                return (
                  <option
                    value={JSON.stringify({
                      id: val.id,
                      userId: row.original.id,
                    })}
                  >
                    {val.branchName}
                  </option>
                );
              })}
          </select>
        );
      },
    },
    {
      Header: 'Assign To Department',
      Cell: ({ row }) => {
        return (
          <select
            className='form-control  form-select table-select'
            name='department'
            onChange={handleDataChange}
          >
            <option>Select Department </option>
            {departmentList &&
              departmentList.map(
                (val) =>
                  val?.name && (
                    <option
                      value={JSON.stringify({
                        id: val.id,
                        userId: row.original.id,
                      })}
                    >
                      {val?.name}
                    </option>
                  ),
              )}
          </select>
        );
      },
    },
  ];

  return (
    <div>
      <div className='custom-tab mt-3'>
        <Tabs
          defaultActiveKey='shift1'
          id='uncontrolled-tab-example'
          className='mb-3'
        >
          <Tab eventKey='shift1' title='Assign Employee'>
            {branchList && departmentList && (
              <Table
                recievedColumns={recievedColumns}
                recievedData={selectstaff}
              />
            )}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default DutyTransferTab;
