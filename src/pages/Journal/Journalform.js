
import React, { useEffect, useState } from 'react'
import './journal.scss'
import JournalFormTab1 from './Journalformtab1'
import JournalFormTab2 from './Journalformtab2'
import { BsPrinter } from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import apiRequest from '../../utils/helpers/apiRequest';
import convertDate, { formatDateForRequest } from '../../utils/ConvertDates';

const JournalForm = () => {
  const [journalData, setjournalData] = useState();
  const location = useLocation();
  const getJournalListById = async () => {
    // const res = await apiRequest('getJournal', null, null, "/1");
    const res = await apiRequest('getJournalListById', null, null, `/${location.state}`);
    
    console.log("by id: ",res.data);
    if(res.error){
      setjournalData([])
    }
    else{
      setjournalData(res.data);
    }
    
  }
  useEffect(() => {
    getJournalListById();
  }, [])
  return (
    <div className='receive-forms'>
       <div className='bills-header'>
                <div>
                    <p className='employee-1'>Journal</p>
                    <p className='employee-2'>Journal</p>
                </div>
            
                <div>
                    <button className='btn dark-blue-btn'><BsPrinter />Print Journal</button>
                </div>
            </div>

      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Journal</h6>
        </div>
        <div>
          <div className='billreceive-detail'>
            <div className='billdetail-left'>
              <div className='receiveform'>
                <div className='detail-receivebill-1'>
                  <p>TRN No :</p>
                  <p>Production Shift :</p>
                  <p>Department :</p>
                  <p>Produced Product :</p>
                  <p>Produced lot :</p>
                  <p>Accounted by :</p>
                  <p>Entered Date :</p>

                </div>
                <div className='detail-receivebill-2'>
                  <p> PROD-4024</p>
                  <p>{journalData?.selectShift}</p>
                  <p>{journalData?.department}</p>
                  <p>{journalData?.primaryByProduct}</p>
                  <p>1.000</p>
                  <p>{journalData?.updatedBy}</p>
                  <p>{journalData?.updated_date}</p>
                </div>
              </div>

            </div>
            <div className='billdetail-right'>
              <div className='receiveform'>
                <div className='detail-receivebill-1'>
                  <p>Shift Date :</p>
                  <p>Journal :</p>
                  <p>Work Center :</p>
                  <p>Produced Quantity :</p>
                  <p>Accounted Status :</p>
                  <p>Entered By :</p>

                </div>
                <div className='detail-receivebill-2'>
                  {/* <p>shiftDate</p> */}
                  <p>{journalData?.shiftDate}</p>
                  <p>{journalData?.journalName}</p>
                  <p> {journalData?.workCenter} </p>
                  <p>2000 liter</p>
                  <p>Accounted</p>
                  <p>{journalData?.enteredBy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <JournalFormTab1  recievedData={journalData?.journalStringValue}/>
      </div>
      <div>
        <JournalFormTab2 />
       
      </div>

     

      <div className="Forward-form-button">
        <div>
          <button className="btn primary-btn">Close</button>
        </div>
      </div>
      
    </div>
  )
}

export default JournalForm;