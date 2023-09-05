import React, { useEffect } from 'react';
import makeAnimated from 'react-select/animated';
import './shiftallotment.scss';
// Forms
import schema from './allotmntschema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Select from 'react-select';
import Breadcrumbs from '../../Component/Breadcrumbs';
import {
  category,
  dayNames,
  storage_items,
} from '../../constants/constantValues';

import apiRequest from '../../utils/helpers/apiRequest';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import SuccessToast from '../../Component/CustomToast/SuccessToast';

const ShiftAllotmentForm = () => {
  const [allotment, setAllotment] = useState(null);
  const [departmentList, setDepartmentList] = useState([]);
  const [shiftList, setShiftList] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState();
  const [formData, setFormData] = useState({});
  const [employees, setEmployees] = useState([]);

  const animatedComponents = makeAnimated();
  const navigate = useNavigate();

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getDataList = async () => {
    const res = await apiRequest('departmentList');
    console.log(res);

    if (res.error) {
      setDepartmentList([]);
    } else {
      setDepartmentList(res.data);
    }

    const resShift = await apiRequest('shiftList');
    console.log(resShift);

    if (resShift.error) {
      setShiftList([]);
    } else {
      setShiftList(resShift.data);
    }
  };

  const getEmployeeList = async () => {
    if (formData?.department && formData?.category && selectedBranch) {
      console.log('send Req');

      const reqData = {
        branchId: '1',
        category: 'Staff',
        deptId: '2',
      };

      console.log('REQ body', reqData);

      const res = await apiRequest('staffList', reqData);

      if (res?.error) {
        // setEmployees([]);
      } else {
        // setEmployees(res?.data);
      }

      const dummyRes = [
        {
          id: 3,
          username: 'alagudce@gmail.com',
          password:
            '$2a$10$MKQTNQD.rxuGYHrVz0iCEuxBSEmOfqOv6E04IVcScLXW4VEKtHDh2',
          orgId: 1,
          branchId: 1,
          branchName: 'VIRUDHUNAGAR',
          deptId: 1,
          deptName: 'Fact. Admin',
          active: 0,
          role: {
            idRole: 1,
            name: 'Admin',
          },
          organisation: {
            idOrg: 1,
            name: 'V.V.V & Sons Edible Oils Limited',
          },
          created_date: '2022-10-03T11:52:06.037',
          updated_date: '2022-10-03T11:52:06.037',
          employeeName: 'Alaguraja',
          employeeType: 'Staff',
          designation: 'Admin',
          gender: 'male',
          qualification: 'B.E',
          location: 'chennai',
          address: '4/77,west street, kundalapatty',
          bloodGroup: 'A+',
          photo: 'male',
          email: 'alagudce@gmail.com',
          phoneNo: '9626200210',
          emergencyContactNo: '9867857685',
          emergentContactPerson: 'saran',
          maritalStatus: 'married',
          name: null,
          relationShip: 'brother',
          dateOfBirth: '04-01-1990',
          education: 'B.E',
          bankName: 'IOB',
          accountNo: '344566789',
          ifsccode: 'IONBA0003347',
          panNo: 'EFIghak',
          aadharNo: '2334556778',
          uanNo: '2334556778',
          esiNo: '2334556778',
          epfNo: '2334556778',
        },
        {
          id: 4,
          username: 'maheshchoudhury1904@gmail.com',
          password:
            '$2a$10$t2nxqW9LIeD3tkmMkz01z.T4jRfBg2AuSj/rWIhbr76xPrHkX4sge',
          orgId: 1,
          branchId: 1,
          branchName: 'VIRUDHUNAGAR',
          deptId: 1,
          deptName: 'Fact. Admin',
          active: 0,
          role: {
            idRole: 1,
            name: 'Admin',
          },
          organisation: {
            idOrg: 1,
            name: 'V.V.V & Sons Edible Oils Limited',
          },
          created_date: '2022-10-03T06:38:35.325',
          updated_date: '2022-10-03T06:38:35.325',
          employeeName: 'Maheschoudury',
          employeeType: 'Staff',
          designation: 'Admin',
          gender: 'male',
          qualification: 'B.E',
          location: 'Bangalore',
          address: 'Bangalore',
          bloodGroup: 'A+',
          photo: 'male',
          email: 'maheshchoudhury1904@gmail.com',
          phoneNo: '8975433234',
          emergencyContactNo: '9867857685',
          emergentContactPerson: 'radchoudory',
          maritalStatus: 'unmarried',
          name: null,
          relationShip: 'brother',
          dateOfBirth: '04-01-1990',
          education: 'B.E',
          bankName: 'IOB',
          accountNo: '344566789',
          ifsccode: 'IONBA0003347',
          panNo: 'EFIghak',
          aadharNo: '2334556778',
          uanNo: '2334556778',
          esiNo: '2334556778',
          epfNo: '2334556778',
        },
        {
          id: 5,
          username: 'priya19982107@gmail.com',
          password:
            '$2a$10$v3oAknhrKOUYFrFQboGI7.7eXBJALMaS9/iHrTOqTOI.ENllXUGiu',
          orgId: 1,
          branchId: 1,
          branchName: 'VIRUDHUNAGAR',
          deptId: 1,
          deptName: 'Fact. Admin',
          active: 0,
          role: {
            idRole: 1,
            name: 'Admin',
          },
          organisation: {
            idOrg: 1,
            name: 'V.V.V & Sons Edible Oils Limited',
          },
          created_date: '2022-10-03T07:01:28.484',
          updated_date: '2022-10-03T07:01:28.484',
          employeeName: 'priya',
          employeeType: 'Staff',
          designation: 'Admin',
          gender: 'feMale',
          qualification: 'B.E',
          location: 'chennai',
          address: 'chennai',
          bloodGroup: 'A+',
          photo: 'male',
          email: 'priya19982107@gmail.com',
          phoneNo: '8975433234',
          emergencyContactNo: '9867857685',
          emergentContactPerson: 'raj',
          maritalStatus: 'unmarried',
          name: null,
          relationShip: 'brother',
          dateOfBirth: '04-01-1990',
          education: 'B.E',
          bankName: 'IOB',
          accountNo: '344566789',
          ifsccode: 'IONBA0003347',
          panNo: 'EFIghak',
          aadharNo: '2334556778',
          uanNo: '2334556778',
          esiNo: '2334556778',
          epfNo: '2334556778',
        },
        {
          id: 6,
          username: 'kirouthika.lionforce@gmail.com',
          password:
            '$2a$10$fo/b8734OxO3UnR9.1uS8OAMcwk1I0qhAyfwFmisNJVU1mNYFa156',
          orgId: 1,
          branchId: 1,
          branchName: 'VIRUDHUNAGAR',
          deptId: 1,
          deptName: 'Fact. Admin',
          active: 0,
          role: {
            idRole: 1,
            name: 'Admin',
          },
          organisation: {
            idOrg: 1,
            name: 'V.V.V & Sons Edible Oils Limited',
          },
          created_date: '2022-10-07T04:46:56.376',
          updated_date: '2022-10-07T04:46:56.376',
          employeeName: 'priya',
          employeeType: 'Staff',
          designation: 'Admin',
          gender: 'feMale',
          qualification: 'B.E',
          location: 'chennai',
          address: 'chennai',
          bloodGroup: 'A+',
          photo: 'male',
          email: 'kirouthika.lionforce@gmail.com',
          phoneNo: '8975433234',
          emergencyContactNo: '9867857685',
          emergentContactPerson: 'raj',
          maritalStatus: 'unmarried',
          name: null,
          relationShip: 'brother',
          dateOfBirth: '04-01-1990',
          education: 'B.E',
          bankName: 'IOB',
          accountNo: '344566789',
          ifsccode: 'IONBA0003347',
          panNo: 'EFIghak',
          aadharNo: '2334556778',
          uanNo: '2334556778',
          esiNo: '2334556778',
          epfNo: '2334556778',
        },
      ];

      const formattedData = [];

      dummyRes.map((val) => {
        formattedData.push({ value: val?.id, label: val?.username });
      });

      setEmployees(formattedData);
      console.log('STAFF res', res);
    }
  };

  const handelFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    console.log('SELECTED USEr', allotment);

    const selectedUser = allotment.map((val) => {
      return val?.value;
    });

    const reqBody = {
      staffId: selectedUser.toString(),
      branchId: selectedBranch?.id,
      deptID: formData?.department,
      shiftId: formData?.shift,
      weekOff: formData?.weekOff,
      exemptedShift: formData?.exemptedShift,
      breakTime: '30',
    };
    //TODO: handle send request
    const res = await apiRequest('saveShiftAllotment', reqBody);
    console.log(res);

    if (res.error) {
      toast(<ErrorToast body='Failed to allocate shift' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else {
      toast(<SuccessToast body='Shift Allocated' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
      navigate(-1);
    }
  };
  useEffect(() => {
    getDataList();
  }, []);

  // TODO: handle header change
  useEffect(() => {
    const storedBranch = localStorage.getItem(storage_items.selectedBranch);
    setSelectedBranch(JSON.parse(storedBranch));
  }, []);

  useEffect(() => {
    getEmployeeList();
  }, [formData]);

  return (
    <div>
      <h1 className='panel-header'>Employee</h1>
      <Breadcrumbs />
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>Shift Allotment</h6>
        </div>
        <form>
          <div className='theme-card-content'>
            <div className='df fw'>
              <div className='form-group'>
                <label className='form-label'>Branch</label>
                <input
                  type='text'
                  className='form-control'
                  readOnly
                  value={selectedBranch?.branchName}
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Depatment </label>
                <select
                  className='form-control  form-select'
                  name='department'
                  onChange={handleFormDataChange}
                >
                  <option>Select Department</option>
                  {departmentList &&
                    departmentList.map((val) => {
                      if (val?.name) {
                        return <option value={val?.id}>{val.name}</option>;
                      }
                    })}
                </select>
              </div>
              <div className='form-group'>
                <label className='form-label'>Category </label>
                <select
                  className='form-control  form-select'
                  name='category'
                  onChange={handleFormDataChange}
                >
                  <option>Select category</option>

                  {category && category.map((val) => <option>{val}</option>)}
                </select>
              </div>

              <div className='form-group'>
                <label className='form-label'>Employee Name </label>

                <Select
                  isMulti
                  options={employees}
                  components={animatedComponents}
                  onChange={setAllotment}
                />
              </div>
              <div className='form-group'>
                <label className='form-label'>Select Shift Name </label>
                <select
                  className='form-control  form-select'
                  name='shift'
                  onChange={handleFormDataChange}
                >
                  <option>Select Shift Name</option>
                  {shiftList &&
                    shiftList.map(
                      (val) =>
                        val?.name && (
                          <option value={val?.id}>{val?.name}</option>
                        )
                    )}
                </select>
              </div>
              <div className='form-group'>
                <label className='form-label'>Week Off </label>
                <select
                  className='form-control  form-select'
                  name='weekOff'
                  onChange={handleFormDataChange}
                >
                  <option>Select Week Off</option>
                  {dayNames && dayNames.map((val) => <option>{val}</option>)}
                </select>
              </div>
              <div className='form-group'>
                <label className='form-label'>Exempted Shift</label>
                <select
                  className='form-control  form-select'
                  name='exemptedShift'
                  onChange={handleFormDataChange}
                >
                  <option>Select Shift</option>
                  {shiftList &&
                    shiftList.map(
                      (val) =>
                        val?.name && (
                          <option value={val?.id}>{val?.name}</option>
                        )
                    )}
                </select>
              </div>
              {/* // TODO: confirm the break time */}
              <div className='form-group'>
                <label className='form-label'>Break Time</label>
                <input
                  type='text'
                  className='form-control'
                  readOnly
                  value='1 hour'
                />
              </div>
            </div>
          </div>
        </form>

        <div className='df df-sb'>
          <span
            className='btn primary-bdr-btn m-2'
            onClick={() => navigate('/panel/shiftallotment')}
          >
            Cancel
          </span>
          <button
            className='btn primary-btn'
            type='submit'
            onClick={handelFormSubmit}
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShiftAllotmentForm;
