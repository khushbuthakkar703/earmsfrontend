import React, { useState } from 'react';
import makeAnimated from 'react-select/animated';
import './salary.scss';
import Select from 'react-select';
import Breadcrumbs from '../../Component/Breadcrumbs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../Component/Tables/Tables';

// Forms
import schema from './salary.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const options = [
  { value: '1', label: 'Staff 1' },
  { value: '2', label: 'Staff 2' },
  { value: '3', label: 'Staff 2' },
  { value: '4', label: 'Staff 3' },
];
const animatedComponents = makeAnimated();



const SalaryForm = () => {
  const [staffId, setStaffId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const recievedColumns = [
    {
      Header: 'Employee ID',
      accessor: 'employeeid'
    },
    {
      Header: 'Employee Name',
      accessor: 'employeename'
    },
    {
      Header: 'Overall',
      accessor: 'overall'
    },
    {
      Header: 'Basic',
      accessor: 'basic'
    },
    {
      Header: 'Dearness Allowance',
      accessor: 'dearnessallowance'
    },
    {
      Header: 'Washing Allowance',
      accessor: 'washingallowance'
    },
    {
      Header: 'Conveyance',
      accessor: 'conveyance'
    },
    {
      Header: 'EPF',
      accessor: 'epf'
    },
    {
      Header: 'ESI',
      accessor: 'esi'
    },
    {
      Header: 'Advance',
      accessor: 'advance'
    },
    {
      Header: 'Comapny ESI',
      accessor: 'comapnyesi'
    },
    {
      Header: 'Comapny EPF',
      accessor: 'comapnyepf'
    }
  ]

  const recievedData = [
    {
      employeeid: "001",
      employeename: "Staff 1",
      overall: " ",
      basic: " ",
      dearnessallowance : " ",
      washingallowance : " ",
      conveyance : " ",
      epf : " ",
      esi: " ",
      advance : " ",
      comapnyesi: " ",
      comapnyepf: " "
    },
    {
      employeeid: "002",
      employeename: "Staff 1",
      overall: " ",
      basic: " ",
      dearnessallowance : " ",
      washingallowance : " ",
      conveyance : " ",
      epf : " ",
      esi: " ",
      advance : " ",
      comapnyesi: " ",
      comapnyepf: " "
    },
    {
      employeeid: "003",
      employeename: "Staff 1",
      overall: " ",
      basic: " ",
      dearnessallowance : " ",
      washingallowance : " ",
      conveyance : " ",
      epf : " ",
      esi: " ",
      advance : " ",
      comapnyesi: " ",
      comapnyepf: " "
    },
  ]

  const salaryFormSubmit = (data) => {
    //TODO: format the staffId data

    const formattedData = staffId.map((val) => {
      return val?.value;
    });
    data['staffId'] = formattedData;
    console.log('SALARY FORM DATA: ', data);
  };

  return (
    <div>
      <h1 className='panel-header'>Employee</h1>
      <Breadcrumbs />
      <form onSubmit={handleSubmit(salaryFormSubmit)}>
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>Salary</h6>
        </div>
       
          <div className='theme-card-content'>
            <div className='df fw'>
              <div className='form-group'>
                <label className='form-label'>Select Staff Type</label>
                <select
                  className='form-control  form-select'
                  name='staffType'
                  {...register('staffType')}
                >
                  <option>Select Shift</option>
                  <option>Shift1</option>
                  <option>Shift2</option>
                  <option>Shift3</option>
                </select>
              </div>

              <div className='form-group'>
                <label className='form-label'>Select Staff’s </label>
                <Select
                  isMulti
                  options={options}
                  components={animatedComponents}
                  onChange={setStaffId}
                />
              </div>
              {console.log('Form errors:', errors)}
            </div>
          </div>
      </div>
      
    <div className='custom-tab'>
      <Tabs
        defaultActiveKey="shift1"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="shift1" title="Salary Details">
          <Table recievedColumns={recievedColumns} recievedData={recievedData} />
        </Tab>
      </Tabs>
    </div>
      <div className='df df-sb theme-card-content'>
            <button className='btn trasparent-btn m-2 btn-outline-primary'>Cancel</button>
            <button className='btn primary-btn' type='submit'>
              Save
            </button>
          </div>
        </form>
    </div>
  );
};

export default SalaryForm;
