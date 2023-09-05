import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import apiRequest from '../../utils/helpers/apiRequest';
import './Production.scss';
import ProductionTab from './Productiontab';
import ProductionTab1 from './Productiontab1';

const ProductionForm = () => {
  const [productionData, setProductionData] = useState();
  const [newProductionData, setNewProductionData] = useState();
  const [journalId, setJournalId] = useState();
  const [journalName, setJournalName] = useState();
  const [shiftDate, setShiftDate] = useState();
  const [journalList, setjournalList] = useState();
  const [batchType, setBatchType] = useState();
  const [dept, setDept] = useState();
  const [shift, setShift] = useState();
  const [shiftList, setShiftList] = useState();
  const [workCenterList, setWorkCenterList] = useState();
  const [workcenter, setworkcenter] = useState();
  const [slab, setSlab] = useState();
  const location = useLocation();

  const getJournalList = async () => {
    const response = await apiRequest('getJournalList');
        console.log('journal list : ', response.data);
        if(response?.error){
          setjournalList([])
        }  
        else{
          setjournalList(response.data)
        }
  }
  const getShiftList = async () => {
    const res = await apiRequest('getShiftList');
    console.log("shift list: ", res.data)
    if(res.error){
      setShiftList([])
    }
    else{
      setShiftList(res.data)
    }
  }
  const handlejournalData = async (e) => {
    console.log("selected journal: ", JSON.parse(e.target.value)?.id);
    const res = await apiRequest('getJournalById', null, null, `/${JSON.parse(e.target.value)?.id}`)
    console.log("selected journal data: ", res.data);
    setNewProductionData(res.data);
    setworkcenter(JSON.parse(e.target.value)?.workCenter);
    setShift(JSON.parse(e.target.value)?.shift);
    setJournalId(JSON.parse(e.target.value)?.id);
    setJournalName(JSON.parse(e.target.value)?.journalName);
    setBatchType(JSON.parse(e.target.value)?.batchType)
  }

  const handleProduction = async () => {
    const reqBody = {
      "journalId" : journalId,
      "department" : newProductionData.department,
      "primaryByProduct" : journalName,
      "shiftDate" : shiftDate,
      "batchType" : batchType,
      "workCenter" : workcenter,
      "selectShift" : shift,
      
      "productionEntryValue" : {
            "Productname":"tea",
            "Godown":"Godown1",
            "Binno":"6",
            "Batchno":"45",
            "InputQuantity" :"45",
            "Inputlot" : "34",
            "InventoryType":"RawMetetial"
        }
    };
    console.log(reqBody)
    const res = await apiRequest('saveProductionEntry', reqBody);
    console.log( "data", res);
    if(res.error){
      
    }
  };
  useEffect(() => {
    // setProductionData(location.state);
    getJournalList();
    getShiftList();
  }, []);
  return (
    <div>
      <div>
        <p className='employee-1'>Production</p>
        <p className='employee-2'>Production</p>
      </div>
      <div className='theme-card'>
        <div className='theme-card-header'>
          <h6>Production Entry</h6>
        </div>
        <div className='theme-card-content'>
          <div className='df fw'>
            <div className='form-group'>
              <label className='form-label'>Journal Name</label>
              <select
                className='form-control  form-select'
                name="journnal"
                onChange={handlejournalData}
              >
                <option>Select journal</option>
                {
                  journalList 
                  && journalList.map((val) => {
                    if(val?.journalName){
                      return <option value={JSON.stringify({id: val?.id,journalName: val?.journalName, workCenter: val?.workCenter, shift: val?.selectShift})}>{val.journalName}</option>
                    }
                  })
                }
              </select>
            </div>
            <div className='form-group'>
              <label className='form-label'>Department</label>
            {
              newProductionData ? <input type='text' required className='form-control' 
              readOnly value={newProductionData.department}/> : 
              <input type='text' required className='form-control'
              readOnly/>
            }
            </div>
            <div className='form-group'>
              <label className='form-label'>shift Date </label>
              <input
                type='date'
                required
                className='form-control'
                name="shiftDate"
                onChange={(e) => setShiftDate(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Batch Type</label>
              <select className='form-control  form-select' 
              name="batch"
              onChange={(e) => setBatchType(e.target.value)}>
                <option value="batch 1">Batch 1</option>
              </select>
            </div>
            <div className='form-group'>
              <label className='form-label'>Select Shift</label>
              <select className='form-control  form-select' 
              value={shift}
              name="shiftValue"
              onChange={(e) => setShift(e.target.value)}>
                <option>Select Shift</option>
                {
                  shiftList 
                  && shiftList.map((val) => {
                    if(val?.name){
                      return <option>{val.name}</option>
                    }
                  })
                }
              </select>
            </div>
            <div className='form-group'>
              <label className='form-label'>Work Center</label>
              <select className='form-control  form-select' 
              name='workCenter'
              value={workcenter}
              onChange={(e) => setWorkCenterList(e.target.value)}>
                <option value="center 1">center 1</option>
                <option value="machine1">machine1</option>
              </select>
            </div>
            <div className='form-group'>
              <label className='form-label'>Slab</label>
              <select className='form-control  form-select' 
              name="slab"
              onChange={(e) => setSlab(e.target.value)}>
                <option value="slab 1">slab 1</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductionTab />
      </div>
      <div>
        <ProductionTab1 />
      </div>

      <div className='Forward-form-button'>
        <div>
          <button className='btn btn-outline-primary bg-white m-2'>
            Cancel
          </button>
        </div>
        <div>
          <button className='btn primary-btn' onClick={handleProduction}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductionForm;
