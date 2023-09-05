import React from 'react';
import { Breadcrumb } from 'reactstrap';
import apiRequest from '../../utils/helpers/apiRequest';
import removeDuplicates from '../../utils/RemoveDuplicatesFromArray';

import convertDate, {
  dateConversion,
  dateConverter,
  datePrefillFormat,
  formatDateForRequest,
} from '../../utils/ConvertDates';
import makeAnimated from 'react-select/animated';

import Select from 'react-select';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DutyTransferTab from './DutyTransferTab';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import { Slide, toast } from 'react-toastify';
import SuccessToast from '../../Component/CustomToast/SuccessToast';

const animatedComponents = makeAnimated();

const DutytransferForm = () => {
  const [dateCurrent, setdateCurrent] = useState();
  const [listshifts, setlistshifts] = useState();
  const [category, setcategory] = useState();
  const [staff, setstaff] = useState();
  const [selectstaff, setselectstaff] = useState([]);
  const [departmentList, setDepartmentList] = useState();
  const [branchList, setBranchList] = useState();
  const [allStaff, setallStaff] = useState();

  const [dataToUpdate, setDataToUpdate] = useState();
  const [dutyTransferFormData, setDutyTransferFormData] = useState({});
  const [requestData, setRequestData] = useState([]);

  const staffsdata = [];

  let navigate = useNavigate();

  const loadcategory = async () => {
    const category = await apiRequest('employeeCategoryList');
    setcategory(category.data);
    console.log(category.data);
  };

  const loadshifts = async () => {
    const shifts = await apiRequest('listAllShifts');
    setlistshifts(shifts.data);
    console.log(shifts.data);
  };

  const loadbranch = async () => {
    const allBranchList = JSON.parse(localStorage.getItem('barnchList'));
    setBranchList(allBranchList);
  };

  const loaddept = async () => {
    const dept = await apiRequest('departmentList');
    if (dept.error) {
      setDepartmentList([]);
    } else {
      setDepartmentList(dept.data);
    }
  };

  const loadstaff = async () => {
    const staffemp = await apiRequest('stafflistwfilter');

    staffemp.data.map((val) => {
      const emp = {
        label: val.employeeName,
        value: val.id,
      };
      staffsdata.push(emp);
    });
    setstaff(staffsdata);
    setallStaff(staffemp.data);
  };

  const handleStaff = (e) => {
    const staffdetails = [];
    e.map((e) => {
      allStaff
        .filter((val) => val.id === e.value)
        .map((out) => {
          const tmp = {
            id: out.id,
            employeeName: out.employeeName,
            branchId: out.branchId,
            departmentId: out.departmentId,
          };
          staffdetails.push(tmp);
        });
    });

    setselectstaff(staffdetails);
  };

  const handleTableFormDataChange = (e) => {
    const { name, value } = e.target;
    const data = JSON.parse(value);
    data['name'] = name;
    console.log('data we have : ', data);
    setDataToUpdate(data);
  };

  const handleReqDataUpdate = () => {
    if (dataToUpdate) {
      const presentData = requestData;

      selectstaff.map((staffData) => {
        let alreadyPresentMatched = false;

        console.log('staffData', staffData);

        if (staffData?.id === dataToUpdate?.userId) {
          const currentDataToUpdate = {};

          currentDataToUpdate['staffId'] = staffData?.id;
          currentDataToUpdate['currentBranchId'] = staffData?.branchId;
          currentDataToUpdate['currentDeptId'] = staffData?.departmentId;

          if (dataToUpdate?.name === 'branch') {
            currentDataToUpdate['assignBranchId'] = dataToUpdate?.id;
          } else if (dataToUpdate?.name === 'department') {
            currentDataToUpdate['assignDeptId'] = dataToUpdate?.id;
          }

          if (presentData.length > 0) {
            presentData.map((pData) => {
              if (pData.staffId === staffData?.id) {
                console.log('Match found in present data');
                alreadyPresentMatched = true;
                if (dataToUpdate?.name === 'branch') {
                  pData['assignBranchId'] = dataToUpdate?.id;
                } else if (dataToUpdate?.name === 'department') {
                  pData['assignDeptId'] = dataToUpdate?.id;
                }
              }
            });
          } else {
            presentData.push(currentDataToUpdate);
          }

          if (!alreadyPresentMatched) {
            presentData.push(currentDataToUpdate);
          }
        } else {
          console.log('MATCH NOT FOUND');
        }
      });

      setRequestData(presentData);
    } else {
      console.log('::: Noting to update :::');
    }
  };

  const handleDutyTransferDataChange = (e) => {
    const { name, value } = e.target;
    setDutyTransferFormData((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  const handleDutyTransferSubmit = async (e) => {
    e.preventDefault();

    const assignedDuties = removeDuplicates(requestData);

    const dataToSend = {
      ...dutyTransferFormData,
      shiftDate: formatDateForRequest(dateCurrent),
      assignDutyDetails: assignedDuties,
    };

    const res = await apiRequest('saveDutyTransfer', dataToSend);

    if (res.error) {
      toast(<ErrorToast body='Failed to signin' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else {
      toast(<SuccessToast body='Duty transfer successful' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
      navigate(-1);
    }
  };

  useEffect(() => {
    const now = new Date();
    setdateCurrent(datePrefillFormat(now));
    loadshifts();
    loadcategory();
    loadbranch();
    loaddept();
    loadstaff();
  }, []);

  useEffect(() => {
    handleReqDataUpdate();
  }, [dataToUpdate]);

  return (
    <>
      <h1 className='panelHeader'>Employee</h1>
      <Breadcrumb />
      <div className='card'>
        <div className='card-header'>Assign Duty</div>
        <div className='card-body'>
          <form>
            <div className='row'>
              <div className='col-sm-5'>
                <div className='form-group'>
                  <div className='form-label'>Shift Date</div>
                  <input
                    type='date'
                    className='form-control'
                    value={dateCurrent}
                    readOnly
                  />
                </div>
              </div>
              <div className='col-sm-5'>
                <div className='form-group'>
                  <div className='form-label'>Select Category</div>
                  <select
                    className='form-control  form-select'
                    name='category'
                    onChange={handleDutyTransferDataChange}
                  >
                    <option> Category</option>
                    {category &&
                      category.map(
                        (val) => val && <option value={val}>{val}</option>,
                      )}
                  </select>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-5'>
                <div className='form-group'>
                  <div className='form-label'>Select Shift</div>
                  <select
                    className='form-control  form-select'
                    name='shift'
                    onChange={handleDutyTransferDataChange}
                  >
                    <option> Select Shift</option>
                    {listshifts &&
                      listshifts.map(
                        (val) => val?.name && <option>{val.name}</option>,
                      )}
                  </select>
                </div>
              </div>
              <div className='col-sm-5'>
                <div className='form-group'>
                  <div className='form-label'>Select Sex(Optional)</div>
                  <select
                    className='form-control  form-select'
                    name='sex'
                    onChange={handleDutyTransferDataChange}
                  >
                    <option> Select Sex</option>
                    <option value='MALE'>Male</option>
                    <option value='FEMALE'>FeMale</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-5'>
                <div className='form-group'>
                  <div className='form-label'>Select Staff’s</div>
                  <Select
                    isMulti
                    components={animatedComponents}
                    onChange={handleStaff}
                    options={staff}
                    name='staffType'
                  ></Select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <DutyTransferTab
        selectstaff={selectstaff}
        branchList={branchList}
        departmentList={departmentList}
        handleDataChange={handleTableFormDataChange}
      />
      <div className='df df-sb theme-card-content'>
        <button
          className='btn trasparent-btn m-2 btn-outline-primary cancel-btn'
          onClick={() => navigate('/panel/dutytransfer')}
        >
          Cancel
        </button>
        <button
          className='btn primary-btn'
          type='submit'
          onClick={handleDutyTransferSubmit}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default DutytransferForm;
