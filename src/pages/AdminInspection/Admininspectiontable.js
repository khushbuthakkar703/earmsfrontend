import React,{useState,useEffect} from 'react';
import './admininspection.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../Component/Tables/Tables'
import { IoMdRadioButtonOn } from "react-icons/io";
import apiRequest from '../../utils/helpers/apiRequest';
import { useNavigate } from 'react-router-dom';
const AdminInspectionTable = () => {
const [inspection,setInspection] =useState([])
const getInspectionDetails = async () => {
    const res = await apiRequest('getAdminInspectionList');
    const formattedData = [];
    console.log('ADMININSPECTION TABLE RES : ', res);
    if (res.error) {
        setInspection([]);
    } 
    else {
        setInspection(res.data);

        res.data.map((values) => {
        const currentData = values?.inspectionDetailsValue;

        if (currentData) {
          const Products = currentData?.Products;
          if (Products && Products.length > 0) {
            Products.map((val) => {
              val['createdByName'] = values?.createdByName;
              val['date'] = values?.date;
              val['branchName'] = values?.branchName;
              formattedData.push(val);
            });
          }
        }
      });
    }

    console.log('FORMTATTED DATA VALUES ::: ', formattedData);
    setInspection(formattedData);
  };
    const recievedColumns = [
        {
            Header: "Employee",
            accessor: "createdByName",
        },
        
        {
            Header: "Date",
            accessor: "date"
        },
        {
            Header: "Branch",
            accessor: "branchName"
        },
        {
            Header: "Products",
            accessor: "productName"
        },
        {
          Header: "Action",
          accessor: "action",
          Cell: ({ row }) => {
              console.log(row.values);
              return (
                  <div class="dropdown">
                      <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className='action-icons'><BiDotsVerticalRounded /></div>
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#" onClick={() => handleView(row.original)}>View</a>
                          <a class="dropdown-item" href="#">Something</a>
                      </div>
                  </div>
              )
          }
      },
    ]
    const navigation = useNavigate();
    let navigate = useNavigate();
    const handleView = (data) => {
        navigation('/panel/admininspectionform', { state: data });
      };
    useEffect(() => {
        getInspectionDetails();
      }, []);


    return (
        <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Admin Inspection / End Day</p>
                    <p className='employee-2'>Admin Inspection</p>
                </div>
            
                <div>
                    <button className='btn blue-btn' onClick={() => navigate('/panel/admininspectionform')}> Add Entry</button>
                </div>
            </div>
            <div className='df'>
                <div className=''>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Employee</option>
                    </select>
                </div>
                <div className='pagecretion-input'>
                    <select className="form-control  form-select pagecretion-input">
                        <option>Branch</option>
                    </select>
                </div>
               
                <div className=''>
                    <input type="Date" placeholder='From' required className="form-control pagecretion-input" />
                </div>
                <div className='pagecretion-input'>
                    <input type="Date" placeholder=" To" required className="form-control pagecretion-input" />
                </div>
            </div>
         <div>
         <Table recievedColumns={recievedColumns} recievedData={inspection} />
         </div>
   </div>
    );
};

export default AdminInspectionTable;