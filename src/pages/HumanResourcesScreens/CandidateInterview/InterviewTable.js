import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const InterviewTable = () => {
  const navigate = useNavigate();
    useEffect(() => {
        
    },[])
  return (
    <div>
      <h1 className='panel-header'>Interview</h1>
      <div className='df df-sb'>
        <div>Interview / Candidate Details</div>
        <button
          className='btn blue-btn'
          onClick={() => navigate('/panel/interViewForm')}
        >
          + Add Candidate
        </button>
      </div>
            <div className='df salary-filter my-2'>
                <div className="form-group">
                    <select className="form-control  form-select pagecretion-input">
                        <option>Name</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="Date" placeholder='Date From' required className="form-control pagecretion-input" />
                </div>
                <div className="form-group">
                    <input type="Date" placeholder="Date To" required className="form-control pagecretion-input" />
                </div>
                <div className="form-group">
                    <input type="Time" placeholder='Time From' required className="form-control pagecretion-input" />
                </div>
                <div className="form-group">
                    <input type="Time" placeholder="Time To" required className="form-control pagecretion-input" />
                </div>
            </div>
      
    </div>
  )
}

export default InterviewTable
