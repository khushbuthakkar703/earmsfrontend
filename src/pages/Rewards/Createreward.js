import React, { useState, useEffect } from 'react';
import './rewards.scss';
import AttendanceTable from './RewardCategory/RewardCategoryTable/AttendanceTable';
import MaintainanceDetailsTable from './RewardCategory/RewardCategoryTable/MaintainanceDetailsTable';
import ProductivityDetailsTable from './RewardCategory/RewardCategoryTable/ProductivityDetailsTable';
import TrainingTable from './RewardCategory/RewardCategoryTable/TrainingTable';
import InnovationForm from './RewardCategory/RewardCategoryForm/InnovationForm';
import { useLocation } from 'react-router-dom';
import apiRequest from '../../utils/helpers/apiRequest';
import { Slide, toast } from 'react-toastify';
import SuccessToast from '../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../Component/CustomToast/ErrorToast';
import { category } from '../../constants/constantValues';
import { formatDateForRequest } from '../../utils/ConvertDates';
const CreateReward = () => {
  // const[innovation,setInnovation] = useState()
  const [attendaceInput, setAttendanceInput] = useState(true);

  const [rewards, setRewards] = useState();
  const [status, setStatus] = useState();
  const [attendanceData, setAttendanceData] = useState();
  const [addForm, setAddForm] = useState();
  const [branchList, setBranchList] = useState([]);
  const [awardValue, setAwardValue] = useState();
  const [maintance, setMaintance] = useState();
  const [innovation, setInnovation] = useState();
  const [training, setTraining] = useState();
  const [productivity, setProductivity] = useState();
  const [employees, setEmployees] = useState([{ label: '', value: '' }]);

  const handleFormDataChange = (e) => {
   
    const { name, value } = e.target;
    if (name === 'branchId') {
      const branch = JSON.parse(value);
      console.log(branch, 'BRANCh');
      console.log(branch.id, 'BRRRRR');
      setAddForm((prevState) => ({
        ...prevState,
        branchId: branch.id,
      }));
    }
    if (name === 'empId') {
      console.log(value, 'VVV');
      const emp = JSON.parse(value);
      console.log(emp.empId, 'EMPPPP');
      setAddForm((prevState) => ({
        ...prevState,
        empId: emp.empId,
      }));
    }
  };

  const getData = async () => {
    const branchRes = await apiRequest('branchList');
    console.log('Branch: ', branchRes);
    setBranchList(branchRes.data);

 
  };
  const getEmployeeList = async () => {
    const res = await apiRequest('allListUser');
    console.log('EMPLOYEEID: ', res);
    console.log();
    if (res?.error) {
      setEmployees([]);
    } else {
      const fotmattedData = [];
      res.data.map((val) => {
        const currentData = {
          label: val?.employeeName,
          value: JSON.stringify({
            empId: val?.id,
            employeeName: val?.employeeName,
          }),
        };

        fotmattedData.push(currentData);
        // console.log(fotmattedData,"FFFFFF")
      });
      setEmployees(fotmattedData);
    }
  };

  const handleCreateForm = (e) => {
    const { name, value } = e.target;
    // console.log("ValueDATE", value)
  if(name == "awardDate"){
   
    setAddForm((prevState) => ({
      ...prevState,
      [name]: formatDateForRequest(value),
      
    }));

    console.log("FORMATDATA",addForm);
  } else {
    setAddForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
}
  //samelike handleaddform
  const handleAwardValue = (e) => {
    // console.log("wwwwwwwww",name,value)
    const { name, value } = e.target;
    setAwardValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleMaitanaceData = (e) => {
    const { name, value } = e.target;
    setMaintance((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleInnovationData = (e) => {
    const { name, value } = e.target;
    setInnovation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleTrainingData = (e) => {
    const { name, value } = e.target;
    setTraining((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleProductivityData = (e) => {
    const { name, value } = e.target;
    setProductivity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddForm = async (e) => {
    e.preventDefault()
    const award = {};
    if(!attendaceInput){
      if (rewards == 'Attendance') {
        award.EmployeeName = awardValue?.EmployeeName;
        award.LeaveDays = awardValue?.LeaveDays;
        award.NoOfWorkingDays = awardValue.NoOfWorkingDays;
        award.WorkedDays = awardValue.WorkedDays;
        award.EmployeeID = awardValue.EmployeeID;
        award.Month = awardValue.Month;
  
        if (
          !awardValue.EmployeeName ||
          !awardValue.LeaveDays ||
          !awardValue.NoOfWorkingDays ||
          !awardValue.WorkedDays ||
          !awardValue.EmployeeID ||
          !awardValue.Month
        ) {
          toast(<ErrorToast body='All fields are required' />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
          return;
        }
      }
  
      if (rewards === 'Innovation') {
        award.achievementsc = innovation?.achievements;
        award.project = innovation?.project;
        if (
          !innovation.achievements ||
          !innovation.project 
        ) 
        {
          toast(<ErrorToast body='All fields are required' />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
          return;
        }
      }
  
      if (rewards === 'Training') {
        award.EmployeeName = training?.EmployeeName;
        award.EmployeeID = training?.EmployeeID;
        award.Month = training?.Month;
        award.Training1 = training?.Training1;
        if(
          !training.EmployeeName ||
          !training.EmployeeID || 
          !training.Month ||
          !training.Training1 
        )
        {
          toast(<ErrorToast body='All fields are required' />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
          return;
        }
      }
  
      if (rewards === 'Productivity') {
        award.EmployeeName = productivity?.EmployeeName;
        award.EmployeeID = productivity?.EmployeeID;
        award.Project = productivity?.Project;
        award.OutputProduct = productivity?.OutputProduct;
        award.TargetMin = productivity?.TargetMin;
        award.TargetMax = productivity?.TargetMax;
        award.Achieved = productivity?.Achieved;
  
        if(
          !productivity.EmployeeName ||
          !productivity.EmployeeID ||
          !productivity.Project ||
          !productivity.OutputProduct ||
          !productivity.TargetMin ||
          !productivity.TargetMax ||
          !productivity.Achieved
        ) 
        {
          toast(<ErrorToast body= "All fields are required"/>,{
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          })
        }
      }
      if (rewards === 'Maintainance') {
        award.EmployeeName = maintance?.EmployeeName;
        award.EmployeeID = maintance?.EmployeeID;
        award.Department = maintance?.Department;
        award.MachineAlloted = maintance?.MachineAlloted;
        award.MaintainanceReq = maintance?.MaintainanceReq;
        award.MaintainanceDone = maintance?.MaintainanceDone;
       
        if(
          !maintance.EmployeeName ||
          !maintance.EmployeeID ||
          !maintance.Department ||
          !maintance.MachineAlloted ||
          !maintance.MaintainanceReq ||
          !maintance.MaintainanceDone 
         
        ){
          toast(<ErrorToast body= "All fields are required"/>,{
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          })
        }
      }
  
      
      console.log('tabledata', award);
      const reqData = {
        // epfNo: otherFormData.epfNo,
        awardDate: addForm.awardDate,
        awardCategory: rewards,
        branchId: addForm.branchId,
        employeeCategory: addForm.employeeCategory,
        empId: addForm.empId,
        awardValue: award,
      };
      console.log(reqData, 'DATEEEEE');
  
      if(reqData.awardCategory && reqData.awardDate && reqData.branchId && reqData.employeeCategory && reqData.empId){
        const res = await apiRequest('saveAward', reqData);
        if (res.error) {
          toast(<ErrorToast body='Failed to Add' />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
        } else {
          toast(<SuccessToast body='sucessfully Added' />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
        }
      }else{
        toast(<ErrorToast body= "All fields are required"/>,{
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        })
      }
      console.log(reqData);
    }
   else{

    // if (attendanceData?.awardCategory == 'Attendance') {
    //   attendanceData.awardValue.EmployeeName = attendanceData?.EmployeeName;
    //   attendanceData.awardValue.LeaveDays = attendanceData?.LeaveDays;
    //   attendanceData.awardValue.NoOfWorkingDays = attendanceData?.NoOfWorkingDays;
    //   attendanceData.awardValue.WorkedDays =attendanceData?.WorkedDays;
    //   attendanceData.awardValue.EmployeeID = attendanceData?.EmployeeID;
    //   attendanceData.awardValue.Month = attendanceData?.Month;     
    // }

    // if (attendanceData?.awardCategory === 'Innovation') {
    //   award.achievementsc = attendanceData?.achievements;
    //   award.project = attendanceData?.project;
    // }

    // if (attendanceData?.awardCategory === 'Training') {
    //   award.EmployeeName = attendanceData?.EmployeeName;
    //   award.EmployeeID = attendanceData?.EmployeeID;
    //   award.Month = attendanceData?.Month;
    //   award.Training1 = attendanceData?.Training1;
    
    // }

    // if (attendanceData?.awardCategory === 'Productivity') {
    //   award.EmployeeName = attendanceData?.EmployeeName;
    //   award.EmployeeID = attendanceData?.EmployeeID;
    //   award.Project = attendanceData?.Project;
    //   award.OutputProduct = attendanceData?.OutputProduct;
    //   award.TargetMin = attendanceData?.TargetMin;
    //   award.TargetMax = attendanceData?.TargetMax;
    //   award.Achieved = attendanceData?.Achieved;

     
    // }
    // if (attendanceData?.awardCategory === 'Maintainance') {
    //   award.EmployeeName = attendanceData?.EmployeeName;
    //   award.EmployeeID = attendanceData?.EmployeeID;
    //   award.Department = attendanceData?.Department;
    //   award.MachineAlloted = attendanceData?.MachineAlloted;
    //   award.MaintainanceReq = attendanceData?.MaintainanceReq;
    //   award.MaintainanceDone = attendanceData?.MaintainanceDone;
     
      
    // }    
    console.log('tabledata', award);
    const updateData = {
      // epfNo: otherFormData.epfNo,
      id:attendanceData?.id,
      awardDate: attendanceData?.awardDate,
      awardCategory:attendanceData?.awardCategory,
      branchId: attendanceData?.branchId,
      employeeCategory: attendanceData?.employeeCategory,
      empId: attendanceData?.empId,
      awardStatus:"Issued",
      awardValue:attendanceData?.awardValue,
    };
    // console.log(reqData, 'DATEEEEE');
    console.log(updateData,"RRRRRR");
    console.log(attendanceData.awardValue,"AWWW");
    if(updateData.awardCategory && updateData.awardDate && updateData.branchId && updateData.employeeCategory && updateData.empId){
      const res = await apiRequest('updateAward', updateData);

      if (res.error) {
        toast(<ErrorToast body='Failed to Add' />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
      } else {
        toast(<SuccessToast body='sucessfully Added' />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
      }
    }else{
      toast(<ErrorToast body= "All fields are required"/>,{
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      })
    }
   
   }
   
   
    // const res = await apiRequest('saveAward', reqData);
    // console.log(res);
   
  };

  const location = useLocation();

  const handleChange = (e) => {
    setRewards(e.target.value);
    console.log(e.target.value, 'EEEE');
  };

  const getAttendanceDetailsById = async () => {
    console.log();
    if (location.state?.id) {
      const res = await apiRequest( 'getAwardDetails',   null,  null,`/${location.state.id}`
      );
      console.log(location.state.id,"LLLLL");
      console.log(res.data,"DDDDDD")
      console.log('by id: ', res.data);
      if (res.error) {
        setAttendanceData();
      } else {
        setAttendanceData(res.data);
        
        setRewards(res.data.awardCategory);
        console.log(attendanceData, 'CATE');
      }
    }
  };

  useEffect(() => {
    setAttendanceInput(location.state?.form);
    getAttendanceDetailsById();
    getData();
    getEmployeeList();
  }, []);
  return (
    <div>
      <form>
      <div>
        {console.log('SELECTED VALUE', rewards)}
        <p className='employee-1'>Rewards</p>
        <p className='employee-2'>Rewards</p>
      </div>
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>User Details</h6>
        </div> 
        {!attendaceInput ? (
          <>
            <div className='theme-card-content'>
              <div className='df fw'>
                <div className='form-group'>
                  <label className='form-label'> Reward Category </label>
                  <select
                    className='form-control  form-select'
                    value={rewards} required
                    onChange={(e) => handleChange(e)}
                  >
                    <option value=''>Select</option>
                    <option value={'Attendance'}>Attedance</option>
                    <option value={'Maintainance'}>Maintaince</option>
                    <option value={'Training'}>Training</option>
                    <option value={'Productivity'}>Productivity</option>
                    <option value={'Innovation'}>Innovation</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label className='form-label'>Reward Date</label>
                  <input
                    type='date'
                    required
                    className='form-control'
                    name='awardDate'
                    onChange={(e) => handleCreateForm(e)}

                  />
                </div>
                <div className='form-group'>
                  <label className='form-label'>Branch </label>
                  <select
                    className='form-control  form-select'
                    name='branchId' required
                    onChange={(e) => handleFormDataChange(e)} 
                  >
                    <option></option>
                    {branchList.length > 0 &&
                      branchList.map((val) => (
                        <option value={JSON.stringify(val)}>
                          {val.branchName}
                        </option>
                      ))}
                  </select>
                </div>
                <div className='form-group'>
                  <label className='form-label'>Employee Category</label>
                  <select
                    className='form-control  form-select'
                    name='employeeCategory' required
                    onChange={(e) => handleCreateForm(e)}
                  >
                    <option></option>
                    {category && category.map((val) => <option>{val}</option>)}
                  </select>
                </div>
                <div className='form-group'>
                  <label className='form-label'>Employee Name </label>
                  <select
                    className='form-control  form-select'
                    name='empId' required
                    onChange={(e) => handleFormDataChange(e)}
                  >
                    <option></option>
                    {employees.length > 0 &&
                      employees.map((val) => (
                        <option value={(val.value)}>
                          {val.label}
                        </option>
                      ))}
                  </select>
                </div>

                {rewards == 'Innovation' ? (
                  <>
                    <div className='form-group'>
                      <label className='form-label'>Project</label>
                      <input
                        type='text'
                        className='form-control'
                        name='project'
                        onChange={(e) => handleInnovationData(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <label className='form-label'>Achievements</label>
                      <textarea
                        className='form-control'
                        rows='5'
                        name='achievements'
                        onChange={(e) => handleInnovationData(e)}
                      ></textarea>{' '}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='theme-card-content'>
              <div className='df fw'>
                <div className='form-group'>
                  <label className='form-label'>Reward Category </label>

                  <input type="text" required className="form-control" readOnly value={attendanceData?.awardCategory}/>
                  {/* <select
                    className='form-control  form-select'
                    value={rewards}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value=''>Select</option>
                    <option value={'Attendance'}>Attedance</option>
                    <option value={'Maintainance'}>Maintaince</option>
                    <option value={'Training'}>Training</option>
                    <option value={'Productivity'}>Productivity</option>
                    <option value={'Innovation'}>Innovation</option>
                  </select> */}
                </div>
                <div className='form-group'>
                  <label className='form-label'>Reward Date</label>
                  <input
                    type='text'
                  
                    className='form-control'
                    readOnly
                    value={attendanceData?.awardDate}
                  />
                </div>
                <div className='form-group'>
                  <label className='form-label'>Branch</label>
                  <input
                    type='text'
                  
                    className='form-control'
                    readOnly
                    value={attendanceData?.branchName}
                  />
                </div>
                <div className='form-group'>
                  <label className='form-label'>Employee Category</label>
                  <input
                    type='text'
                  
                    className='form-control'
                    readOnly
                    value={attendanceData?.employeeCategory}
                  />
                </div>
                <div className='form-group'>
                  <label className='form-label'>Employee Name</label>
                  <input
                    type='text'
                   
                    className='form-control'
                    readOnly
                    value={attendanceData?.employeeName}
                  />
                </div>
                {rewards == 'Innovation' ? (
                  <>
                    <div className='form-group'>
                      <label className='form-label'>Project</label>
                      <input
                        type='text'
                        className='form-control'
                        readOnly
                        value={attendanceData?.achievements}
                      />
                      {console.log(attendanceData?.achievements, 'ACHIVEMENTS')}
                    </div>
                    <div className='form-group'>
                      <label className='form-label'>Achievements</label>
                      <textarea
                        className='form-control'
                        rows='5'
                        readOnly
                        value={attendanceData?.project}
                      ></textarea>{' '}
                      {console.log(attendanceData?.project, 'PROJECTS')}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </>
        )}
      </div>

      {attendanceData ? (
        <>
          <div>
            {rewards === 'Attendance' ? (
              attendanceData && (
                <AttendanceTable attendanceData={attendanceData.awardValue} />
              )
            ) : rewards === 'Maintainance' ? (
              attendanceData && (
                <MaintainanceDetailsTable
                  attendanceData={attendanceData.awardValue}
                />
              )
            ) : rewards === 'Training' ? (
              attendanceData && (
                <TrainingTable attendanceData={attendanceData.awardValue} />
              )
            ) : rewards === 'Productivity' ? (
              attendanceData && (
                <ProductivityDetailsTable
                  attendanceData={attendanceData.awardValue}
                />
              )
            ) : rewards === 'Innovation' ? (
              <InnovationForm />
            ) : null}
          </div>
          <div className='verify-buttons'>
            <button className='btn btn-primary' type='submit' onClick={handleAddForm}>
              Issue Reward
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            {rewards === 'Attendance' ? (
              <AttendanceTable
                attendanceData={{}}
                handleTableData={handleAwardValue}
              />
            ) : rewards === 'Maintainance' ? (
              <MaintainanceDetailsTable
                attendanceData={{}}
                handleMaitanaceData={handleMaitanaceData}
              />
            ) : rewards === 'Training' ? (
              <TrainingTable
                attendanceData={{}}
                handleTrainingData={handleTrainingData}
              />
            ) : rewards === 'Productivity' ? (
              <ProductivityDetailsTable
                attendanceData={{}}
                handleProductivityData={handleProductivityData}
              />
            ) : rewards === 'Innovation' ? (
              <InnovationForm />
            ) : null}
          </div>
          <div className='verify-buttons'>
            <button
              className='btn btn-primary'
             type='submit'
              onClick={handleAddForm}
            >
              Add
            </button>
          </div>
        </>
      )}
      </form>
    </div>
  );
};

export default CreateReward;
