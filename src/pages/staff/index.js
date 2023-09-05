import React from 'react';
import './staff.scss';
import Profile from '../../assets/user.png';
import { useState, useEffect } from 'react';
import apiRequest from '../../utils/helpers/apiRequest';
import { useLocation, useNavigate } from 'react-router-dom';
const Staff = () => {
  const [staffdetail, setStaffDetail] = useState();

  const navigation = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigation(-1);
  };

  const getStaffData = async () => {
    const id = location.state;
    if (id) {
      const res = await apiRequest('userProfile', null, null, '/' + id);
      console.log('STAFF PROFILE RES : ', res);

      if (res?.error) {
        setStaffDetail();
      } else {
        setStaffDetail(res.data);
      }
    } else {
      goBack();
    }
  };

  useEffect(() => {
    getStaffData();
  }, []);

  return staffdetail ? (
    <div className='staff-container'>
      <p className='employee-1'>Employee</p>
      <p className='employee-2'>Employee/Staff</p>
      {/* first row */}
      <div className='staff-bio'>
        <div className='staff-bio-detail'>
          <div className='profile'>
            <div className='profile-img'>
              <img src={Profile} />
            </div>
          </div>
          <div className='employee-detail'>
            <p className='emp-name'>{staffdetail?.userDetails?.employeeName}</p>
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
                <p className='empl'>: {staffdetail?.userDetails?.id}</p>
                {/* TODO:employee id */}
                <p className='empl'>:{staffdetail?.userDetails?.employeeType}</p>
                <p className='empl'> :{staffdetail?.userDetails?.designation}</p>
                <p className='empl'> :{staffdetail?.userDetails?.batchNo}</p>
                <p className='empl'> :{staffdetail?.userDetails?.deptName}</p>
                <p className='empl'> :{staffdetail?.userDetails?.branchName}</p>
                <p className='empl'> :{staffdetail?.userDetails?.organisation}</p>
                <p className='empl'> :{staffdetail?.userDetails?.actCategory}</p>
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
              <p className='empl'>: {staffdetail?.userDetails?.phoneNo}</p>
              <p className='empl'>: {staffdetail?.userDetails?.email}</p>
              <p className='empl'>: {staffdetail?.userDetails?.location}</p>
              <p className='empl'>: {staffdetail?.userDetails?.gender}</p>
              <p className='empl'>: {staffdetail?.userDetails?.bloodGroup}</p>
              <p className='empl'>: {staffdetail?.userDetails?.qualification}</p>
              <p className='empl'>: {staffdetail?.userDetails?.joiningDate}</p>
              <p className='empl'>: {staffdetail?.userDetails?.dateOfBirth}</p>

            </div>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className='detail-row1'>
        <div className='other-details'>
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
                : {staffdetail?.userDetails?.maritalStatus}
              </p>
              <p className='empl indiv-space'>
                : {staffdetail?.userDetails?.address}
              </p>
              <p className='empl indiv-space'>
                :{staffdetail?.userDetails?.emergentContactPerson}
              </p>
              <p className='empl indiv-space'>
                :{staffdetail?.userDetails?.emergencyContactNo}
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
               : {staffdetail?.salary?.basicSalary}

             </p>
             <p className='empl indiv-space'>
               :{staffdetail?.salary?.deamessAllowance}


             </p>
             <p className='empl indiv-space'>
               :{staffdetail?.salary?.houseRentAllowance}


             </p>
             <p className='empl indiv-space'>
               :{staffdetail?.salary?.goodWorkAllowance}
             </p>
             <p className='empl indiv-space'>
               :{staffdetail?.salary?.allowance}
             </p>
           </div>
         </div>
       </div>
      </div>

      {/* third row */}

      <div className='detail-row2'>
      {staffdetail?.dependencies && staffdetail?.dependencies?.slice(0,2).map((e)=>
      // console.log(e,"EEEE");
      (
        <>
        <div className='other-dependencies1'>
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

          <div className='other-dependencies2'>
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
                : {staffdetail?.bankDetails?.bankName}

              </p>
              <p className='empl indiv-space'>
                :{staffdetail?.bankDetails?.accountNo}

              </p>
              <p className='empl indiv-space'>
                :{staffdetail?.bankDetails?.ifsccode}

              </p>
              <p className='empl indiv-space'>
                :{staffdetail?.bankDetails?.panNo}

              </p>
            </div>
          </div>
        </div>
        <div className='other-dependencies3'>
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
                : {staffdetail?.adharAndOtherDetails?.aadharNo}
              </p>
              <p className='empl indiv-space'>
                : {staffdetail?.adharAndOtherDetails?.uanNo}
              </p>
              <p className='empl indiv-space'>
                : {staffdetail?.adharAndOtherDetails?.esiNo}
              </p>
              <p className='empl indiv-space'>
                : {staffdetail?.adharAndOtherDetails?.epfNo}

              </p>
            </div>
          </div>
        </div>




     </div>
      {/* <div className='detail-row1'>
        <div className='other-details'>
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
                : {staffdetail?.basicSalary}

              </p>
              <p className='empl indiv-space'>
                :{staffdetail?.deamessAllowance}


              </p>
              <p className='empl indiv-space'>
                :{staffdetail?.houseRentAllowance}


              </p>
              <p className='empl indiv-space'>
                :{staffdetail?.goodWorkAllowance}
              </p>
              <p className='empl indiv-space'>
                :{staffdetail?.allowance}
              </p>
            </div>
          </div>
        </div>
  

      
      </div> */}
      <div className='back-button'>
        <button onClick={goBack}>Back </button>
      </div>
    </div>
  ) : (
    <div>data ela</div>
  );
};

export default Staff;
