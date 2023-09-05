import React,{useEffect,useState} from "react"
import Table from "../../Component/Tables/Tables";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import apiRequest from "../../utils/helpers/apiRequest";
const AwardsTable = ()=>{
  const navigate = useNavigate();
  const [empView, setEmpView] = useState([]);
  // const[viewForm,setViewForm] =useState ()
  const getEmployeeViewTableData = async () => {
    const resTable = await apiRequest('getParticularEmployeeAllAwardList');
    console.log('EMPLOYEEVIEWTABLE TABLE RES : ', resTable);

    if (resTable?.error) {
      setEmpView([]);
    } else {
      setEmpView(resTable.data);
      console.log(resTable.data,"AWRDSSS")
    }
  };

 
  
  useEffect(() => {
    getEmployeeViewTableData(); 
   
  }, []);
    const recievedColumns = [
        {
          Header: "Date",
          accessor: "awardDate",
        },
        {
          Header: "Attendance",
          accessor: "attendanceCount",
        },
        {
          Header: "Productivity",
          accessor: "maintenanceCount",
        },
        {
          Header: "Training",
          accessor: "productivityCount",
        },
        {
          Header: "Maintainance",
          accessor: "trainingCount",
        },
        {
          Header: "Innovation",
          accessor: "invocationCount",
        },
        {
          Header: "Action",
          accessor: "action",
          Cell: ({ row }) => {
            console.log(row.values,"ROWWW");
            return (
              <div class="dropdown">
                <button
                  class="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="action-icons">
                    <BiDotsVerticalRounded />
                  </div>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                class='dropdown-item'
                onClick={() => {  navigate('/panel/awardsform',{ state: { awardDate:row.values.awardDate} })}} > View </a>
                  <a class="dropdown-item" href="#">
                    Something
                  </a>
                </div>
              </div>
            );
          },
        },
      ];
// const recievedData = [{
//     date:"22/09/2022",
//     attendance:"1",
//     producvity:"24",
//     training:"25",
//     maintanace:"12",
//     innovation:"23"
// }
   
// ]
return(
    <div className="staff-container">
      <div className="bills-header">
        <div>
          <p className="employee-1">Awards</p>
          <p className="employee-2">Awards</p>
        </div>
      </div>
      <div className="df salary-filter">
        <div>
          <input
            type="date"
            placeholder="Date From"
            required
            className="form-control"
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Date To"
            required
            className="form-control"
          />
        </div>
      </div>
      <div>
        <Table recievedColumns={recievedColumns} recievedData={empView} />
      </div>
    </div>
)

}
export default AwardsTable;
