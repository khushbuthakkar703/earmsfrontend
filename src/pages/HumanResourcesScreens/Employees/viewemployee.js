import React from 'react';
import "./humanResources.scss";

// import Profile from '../../assets/user.png';
import { useState, useEffect } from 'react';
import apiRequest from '../../../utils/helpers/apiRequest';
import { useLocation, useNavigate } from 'react-router-dom';

const Staff = () => {
  const [viewEmployee,setViewEmployee] = useState()
  const { state } = useLocation();
  const employeeViewData = state?.id;
  console.log( employeeViewData,"viewwww");

const viewEmployeeData= async ()=>{
  const viewDataList = await apiRequest("userProfile",null,null,`/${employeeViewData}`)
  setViewEmployee(viewDataList.data,"VIEWDATA")
  console.log(viewDataList.data.dependencies,"EMPLOYEE DATA");
}
useEffect(()=>{
  viewEmployeeData()
},[])
  // console.log(employeeViewData?.dependencies,"DEEEEEE");
  // const navigation = useNavigate();
  const navigate = useNavigate();
//   const location = useLocation();

//   const goBack = () => {
//     navigation(-1);
//   };
  return  (
    <div className='staff-container'>
      <p className='employee-1'>Employee</p>
      <p className='employee-2'>Employee/ Employee Profile</p>
      {/* first row */}
      <div className='staff-bio'>
        <div className='staff-bio-detail'>
          <div className='profile'>
            <div className='profile-img'>
              {/* <img src={photo} /> */}
            </div>
          </div>
          <div className='employee-detail'>
            <p className='emp-name'>{viewEmployee?.userDetails?.employeeName}</p>

            <div className='emp-category'>
              <div className='emp-left-1'>
                <p className='empl'>Employee Id</p>
                <p className='empl'>Employee Type</p>
                <p className='empl'>Designation</p>
                <p className='empl'>Batch No</p>
                <p className='empl'>Department</p>
                <p className='empl'>Branch</p>
                <p className='empl'>Company</p>
                <p className='empl'>Act Category</p>
              </div>
              <div className='emp-right-1'>
                <p className='empl'>:{viewEmployee?.userDetails?.id} </p>
                {/* TODO:employee id */}
                <p className='empl'>:{viewEmployee?.userDetails?.employeeType}</p>
                <p className='empl'> :{viewEmployee?.userDetails?.designation}</p>
                <p className='empl'> :{viewEmployee?.userDetails?.batchNo}</p>
                <p className='empl'> :{viewEmployee?.userDetails?.deptName}</p>
                <p className='empl'> :{viewEmployee?.userDetails?.branchName}</p>
                <p className='empl'> :{viewEmployee?.userDetails?.organisation?.name}</p>
                <p className='empl'> :{viewEmployee?.userDetails?.actCategory}</p>

              </div>
            </div>
          </div>
        </div>
        <div className='personal-detail'>
          <div className='emp-bio'>
            <div className='emp-left'>
              <p className='empl'>Phone No</p>  
              <p className='empl'>Email</p>
              <p className='empl'>Location</p>
              <p className='empl'>Gender</p>
              <p className='empl'>Blood Group</p>
              <p className='empl'>Qualification</p>
              <p className='empl'>joining Date</p>
              <p className='empl'>Date of Birth</p>
            </div>
            <div className='emp-right'>
              <p className='empl'>: {viewEmployee?.userDetails?.phoneNo}</p>
              <p className='empl'>: {viewEmployee?.userDetails?.email}</p>
              <p className='empl'>: {viewEmployee?.userDetails?.location}</p>
              <p className='empl'>:{viewEmployee?.userDetails?.gender}</p>
              <p className='empl'>: {viewEmployee?.userDetails?.bloodGroup}</p>
              <p className='empl'>: {viewEmployee?.userDetails?.qualification}</p>
              <p className='empl'>: {viewEmployee?.userDetails?.joiningDate}</p>
              <p className='empl'>: {viewEmployee?.userDetails?.dateOfBirth}</p>

            </div>
          </div>
        </div>
      </div>
{/* first row */}
      <div className='detail-row1'>
       
       <div className='  other-details'>
         <p className='other-text'>Other Details</p>

         <div className='emp-bio other-details-indiv'>
           <div className='emp-left'>
             <p className='empl indiv-space'>Maritial Status</p>
             <p className='empl indiv-space'>Address</p>
             <p className='empl indiv-space'>Emergency Contact Person</p>
             <p className='empl indiv-space'>Emergency Contact Number</p>
           </div>
           <div className='emp-right'>
             <p className='empl indiv-space'>
               : {viewEmployee?.userDetails?.maritalStatus}

             </p>
             <p className='empl indiv-space'>
               : {viewEmployee?.userDetails?.address}
             </p>
             <p className='empl indiv-space'>
               :{viewEmployee?.userDetails?.emergentContactPerson}

             </p>
             <p className='empl indiv-space'>
               :{viewEmployee?.userDetails?.emergencyContactNo}

             </p>
           </div>
         </div>
       </div>
       <div className='dependencies'>
         <p className='other-text'>Salary details</p>

         <div className='emp-bio other-details-indiv'>
           <div className='emp-left'>
             <p className='empl indiv-space'>Basic Salary</p>
             <p className='empl indiv-space'>Deamess Allowance</p>
             <p className='empl indiv-space'>House Rent Allowance</p>
             <p className='empl v'>Good Work Allowance</p>
             <p className='empl v'>Allowance</p>
           </div>
           <div className='emp-right'>
             <p className='empl indiv-space'>
               : {viewEmployee?.salary?.basicSalary}


             </p>
             <p className='empl indiv-space'>
               :{viewEmployee?.salary?.deamessAllowance}


             </p>
             <p className='empl indiv-space'>
               :{viewEmployee?.salary?.houseRentAllowance}


             </p>
             <p className='empl indiv-space'>
               :{viewEmployee?.salary?.goodWorkAllowance}
             </p>
             <p className='empl indiv-space'>
               :{viewEmployee?.salary?.allowance}
             </p>
           </div>
         </div>
       </div>
     
     </div>
{/* first row */}
      {/* second row */}
      <div className='detail-row2'>
      {viewEmployee?.dependencies && viewEmployee?.dependencies?.slice(0,2).map((e)=>
      // console.log(e,"EEEE");
      (
        <>
        <div className="other-dependencies1">
        <p className='other-text'>Dependencies 1</p>

        <div className='emp-bio other-details-indiv'>
          <div className='emp-left'>
            <p className='empl indiv-space'>Name</p>
            <p className='empl indiv-space'>Relationship</p>
            <p className='empl indiv-space'>Date of Birth</p>
            <p className='empl indiv-space'>Education</p>
          </div>
          <div className='emp-right'>
            <p className='empl indiv-space'>
              : {e.name}
            </p>
            <p className='empl indiv-space'>
              : {e.relationShip}
            </p>
            <p className='empl indiv-space'>
              : {e.dateOfBirth}
            </p>
            <p className='empl indiv-space'>
              : {e.education}

            </p>
          </div>
        </div>
      </div>
      </>
      )
 )}

          <div className="with-dependencies other-dependencies3">
          <p className='other-text'>Bank details</p>

          <div className='emp-bio other-details-indiv'>
            <div className='emp-left'>
              <p className='empl indiv-space'>Bank Name</p>
              <p className='empl indiv-space'>Bank Account Number</p>
              <p className='empl indiv-space'>IFSC Code</p>
              <p className='empl v'>Pan No</p>
            </div>
            <div className='emp-right'>
              <p className='empl indiv-space'>
                : {viewEmployee?.bankDetails?.bankName}
              </p>
              <p className='empl indiv-space'>
                :{viewEmployee?.bankDetails?.accountNo}

              </p>
              <p className='empl indiv-space'>
                :{viewEmployee?.bankDetails?.ifsccode}

              </p>
              <p className='empl indiv-space'>
                :{viewEmployee?.bankDetails?.panNo}

              </p>
            </div>
          </div>
        </div>
        <div className= "with-dependencies other-dependencies3">
          <p className='other-text'>Aadhar and Other Details</p>

          <div className='emp-bio other-details-indiv'>
            <div className='emp-left'>
              <p className='empl indiv-space'>AADHAR Number</p>
              <p className='empl indiv-space'>UAN Number</p>
              <p className='empl indiv-space'>ESI No</p>
              <p className='empl indiv-space'>EPF No</p>
            </div>
            <div className='emp-right'>
              <p className='empl indiv-space'>
                : {viewEmployee?.adharAndOtherDetails?.aadharNo}

              </p>
              <p className='empl indiv-space'>
                : {viewEmployee?.adharAndOtherDetails?.uanNo}

              </p>
              <p className='empl indiv-space'>
                : {viewEmployee?.adharAndOtherDetails?.esiNo}

              </p>
              <p className='empl indiv-space'>
                : {viewEmployee?.adharAndOtherDetails?.epfNo}

              </p>
            </div>
          </div>
        </div>




     </div>
      {/* third row */}





      <div className='detail-row1'>
      </div>
      <div className='back-button'>
        <button onClick={() => navigate("/panel/employee")}>Back </button>
      </div>
    </div>
  ) 
};

export default Staff;
