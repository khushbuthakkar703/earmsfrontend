import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../Component/Breadcrumbs';
import Tables from '../../Component/Tables/Tables';
import './attendance.scss';
import User from '../../assets/user.png';
import AttendancePopup from './AttendancePopup';
import apiRequest from '../../utils/helpers/apiRequest';
import monthNames from '../../utils/MonthsName';
import { date } from 'yup';

// const recievedData = [
//   {
//     name: 'test',
//     jan1: 'P',
//     jan2: 'A',
//     jan3: 'L',
//     jan4: 'P',
//     jan5: 'P',
//     jan6: 'P',
//     jan7: 'A',
//     jan8: 'L',
//   },
//   {
//     name: 'test',
//     jan1: 'P',
//     jan2: 'A',
//     jan3: 'L',
//     jan4: 'P',
//     jan5: 'P',
//     jan6: 'P',
//     jan7: 'A',
//     jan8: 'L',
//   },
//   {
//     name: 'test',
//     jan1: 'P',
//     jan2: 'A',
//     jan3: 'L',
//     jan4: 'P',
//     jan5: 'P',
//     jan6: 'P',
//     jan7: 'A',
//     jan8: 'L',
//   },
// ];

const AttendanceAdmin = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [atable, setAtable] = useState();
  const [recievedColumns, setRecievedColumns] = useState([]);
  const [selectedMonth, setselectedMonth] = useState();
  const [totalDays, settotalDays] = useState();

  const handleMonth = (e) => {
    const now = new Date();
    getCurrentMonthData(now, e);
  };

  const getCurrentMonthData = (now, selectedMonth) => {
    let lastDay;

    if (selectedMonth) {
      lastDay = new Date(now.getFullYear(), selectedMonth, 0);
    } else {
      lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    }
    settotalDays(lastDay.getDate());
    setselectedMonth(monthNames[lastDay.getMonth()]);

    const tableColumns = [];

    tableColumns.push({
      Header: 'Name',
      accessor: 'employeeName',
      Cell: ({ row }) => {
        return (
          <div className='df'>
            <img src={User} alt='username' title='username' />
            {row.values.employeeName}
          </div>
        );
      },
    });

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentData = {
        Header: `${i} ${monthNames[lastDay.getMonth()]}`,
        width: 300,
        Cell: ({ row }) => {
          // console.log('ROW ::: ', row.original);
          return (
            <>
              <div
                className={
                  row.original[i] == 'P'
                    ? 'g-color att-txt'
                    : row.original[i] == 'A'
                    ? 'r-clr att-txt'
                    : row.original[i] == 'L'
                    ? 'b-clr att-txt '
                    : ''
                }
              >
                {row.original[i]}
              </div>
            </>
          );
        },
      };

      tableColumns.push(currentData);
    }

    setRecievedColumns(tableColumns);
    getLeaveRequestData(lastDay.getMonth());
  };

  const getLeaveRequestData = async (month) => {
    console.log('Getting new dara ::: ', monthNames[month]);
    const res = await apiRequest('adminAttendanceList');
    console.log('LEAVE REQUEST TABLE RES : ', res);

    if (res?.error) {
      setAtable([]);
    } else {
      const modifiedData = [];

      res.data.map((val) => {
        const currentData = {};

        currentData['employeeName'] = val?.employeeName;
        for (let i = 1; i <= 31; i++) {
          if (val?.attendanceList.length > 0) {
            val?.attendanceList.map((leaveData) => {
              if (leaveData.split(' ')[0] === i) {
                console.log(' ::: MATCH FOUND ::: ');
                currentData[i] = 'A';
              }
            });
          } else {
            currentData[i] = 'P';
          }
        }

        modifiedData.push(currentData);
      });
      setAtable(modifiedData);
    }
  };

  useEffect(() => {
    const now = new Date();
    getCurrentMonthData(now);
  }, []);

  return (
    <div>
      {/* {console.log('Recieved Columns', recievedColumns)} */}
      <div>
        <p className='employee-1'>Employee</p>
        <p className='employee-2'>Employee / Attendance</p>
      </div>
      <div className='df salary-filter my-2'>
        <div>
          <input className='form-control' placeholder='Employee Name' />
        </div>
        <div>
          <select className='form-control  form-select'>
            <option>Shift 1</option>
            <option>Shift 1</option>
            <option>Shift 1</option>
          </select>
        </div>
        <div>
          <select
            className='form-control form-select'
            onChange={(e) => handleMonth(e.target.value)}
          >
            <option>Select Month</option>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
        <div>
          <input
            type='date'
            placeholder='Date From'
            required
            className='form-control'
          />
        </div>
        <div>
          <input
            type='date'
            placeholder='Date To'
            required
            className='form-control'
          />
        </div>
      </div>
      {/* {console.log('Recieved data :::', atable)} */}
      {recievedColumns.length > 1 && (
        <Tables recievedColumns={recievedColumns} recievedData={atable} />
      )}
      {modalOpen && <AttendancePopup />}
    </div>
  );
};

export default AttendanceAdmin;
