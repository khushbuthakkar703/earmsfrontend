import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';
import './materialrequest.scss';

const StockDetails = ({ handleSelect, colId, tableData }) => {
  const recievedColumns = [
    {
      Header: 'Item Name',
      accessor: 'itemname',
    },
    {
      Header: 'Branch',
      accessor: 'branch',
    },
    {
      Header: 'Department',
      accessor: 'dep',
    },
    {
      Header: 'Stock ',
      accessor: 'stockQuantity',
    },
    {
      Header: 'Select ',
      accessor: 'select',
      Cell: ({ row }) => {
        console.log(row.values);
        return (
          <input
            type='checkbox'
            onChange={(e) => handleSelect(e, row.original, colId)}
          />
        );
      },
    },
  ];

  return (
    <div className='custom-tab'>
      <Tabs defaultActiveKey='stockdetails' id='stockdetails' className='mb-3'>
        <Tab eventKey='stockdetails' title='Stock Details'>
          {tableData?.length > 0 ? (
            <Table recievedColumns={recievedColumns} recievedData={tableData} />
          ) : (
            <p
              style={{
                textAlign: 'center',
                paddingTop: 20,
                fontWeight: 'bold',
              }}
            >
              {' '}
              Select product to get stock details!
            </p>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default StockDetails;
