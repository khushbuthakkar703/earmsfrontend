import React, {useEffect, useState} from 'react'
import apiRequest from "../../../utils/helpers/apiRequest";

const InterviewDetails = ({handleInterviewDetails}) => {
    const [branchList, setBranchList] = useState()
    const [deptList, setDeptList] = useState()
    const [designationList, setDesignationList] = useState()
    const [categoryList, setCategoryList] = useState()
    
    const getBranchList = async () => {
        const res = await apiRequest('branchList');
        if (res.error) {
            setBranchList([])
        } else {
            setBranchList(res.data)
        }
    }
    const getDeptList = async () => {
        const res = await apiRequest('departmentList');
        if (res.error) {
            setDeptList([])
        } else {
            setDeptList(res.data)
        }
    }
    const getDesignationList = async () => {
        const res = await apiRequest('designationList');
        if (res.error) {
            setDesignationList([])
        } else {
            setDesignationList(res.data)
        }
    }
    const getCategoryList = async () => {
        const res = await apiRequest('employeeCategoryList');
        if (res.error) {
            setCategoryList([])
        } else {
            setCategoryList(res.data)
        }
    }
    // const handleInterviewDetails = () => {}
    useEffect(() => {
        getBranchList()
        getDeptList()
        getDesignationList()
        getCategoryList()
    }, [])
  return (
    <div>
       <div className="theme-card mt-3">
              <div className="theme-card-header">
                  <h6>Interview Details</h6>
              </div>
              <div className="theme-card-content">
                  <div className="df fw">
                      <div className="form-group">
                          <label className="form-label">Interview Branch</label>
                          <select className="form-control"
                              name="branch"
                            //   onChange={(e) => handleBranch(e.target.value)}
                              onChange={(e) => handleInterviewDetails(e)}
                          >
                              <option>Select Department</option>
                              {branchList && branchList.map((value) => 
                                <option value={value?.id}>{value?.branchName}</option>
                              )}
                          </select>                      
                    </div>
                      <div className="form-group">
                          <label className="form-label">Interview Date</label>
                          <input type="date" className="form-control"
                              name='interviewDate'
                              onChange={(e) => handleInterviewDetails(e)}
                          />                          
                    </div>
                      <div className="form-group">
                          <label className="form-label">Interview Time</label>
                          <input type="time" className="form-control"
                              name='interviewTime'
                              onChange={(e) => handleInterviewDetails(e)}
                          />                          
                    </div>
                      <div className="form-group">
                          <label className="form-label">Interview For Department</label>
                          <select className="form-control"
                              name="dept"
                            //   onChange={(e) => handleDept(e.target.value)}
                              onChange={(e) => handleInterviewDetails(e)}
                          >
                              <option>Select Department</option>
                              {deptList && deptList.map((value) => 
                                <option value={value?.id}>{value?.name}</option>
                              )}
                          </select>
                      </div>
                      <div className="form-group">
                          <label className="form-label">Employee Category</label>
                          <select className="form-control"
                              name="category"
                            //   onChange={(e) => handleCategory(e.target.value)}
                              onChange={(e) => handleInterviewDetails(e)}
                          >
                              <option>Select Category</option>
                              {categoryList && categoryList.map((value) => 
                                <option value={value}>{value}</option>
                              )}
                          </select>
                      </div>
                      <div className="form-group">
                          <label className="form-label">Interview Position</label>
                          <select className="form-control"
                              name="designation"
                            //   onChange={(e) => handleDesignation(e.target.value)}
                              onChange={(e) => handleInterviewDetails(e)}
                          >
                              <option>Select Designation</option>
                              {designationList && designationList.map((value) => 
                                <option value={value?.name}>{value?.name}</option>
                              )}
                          </select>
                      </div>
                      <div className="form-group">
                          <label className="form-label">Referance</label>
                          <input type="text" className="form-control"
                              name="reference"
                              onChange={(e) => handleInterviewDetails(e)}
                          />                          
                    </div>
                      <div className="form-group">
                          <label className="form-label">Batch No</label>
                          <input type="text" className="form-control"
                              name="batch"
                              onChange={(e) => handleInterviewDetails(e)}
                          />                          
                    </div>
                  </div>    
              </div>              
          </div>
          
    </div>
  )
}

export default InterviewDetails
