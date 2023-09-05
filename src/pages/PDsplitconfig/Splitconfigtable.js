import React from 'react';
import Breadcrumbs from "../../Component/Breadcrumbs";
import "./Splitconfig.scss";
import Threedot from '../../assets/threedot.svg'
import Tables from "../../Component/Tables/Tables";
import { useState ,useEffect} from 'react';
const recievedColumns = [
    {
        Header: "Product",
        accessor: "product",
        // accessor:  data =>
        // data.staffs.map(item => (
        //   <div className="df">
        //      <img src={User} alt="username" title="username" />
        //     <span>{item.employeeName}</span>
        //   </div>
        // )),
       
    },
    {
        Header: "Product ID",
        accessor: "pid",
        // id: "stafs",
        // accessor:  data =>
        // data.staffs.map(item => (
        //   <div>
        //     <span>{item.id}</span>
        //   </div>
        // )),
    },
    {
        Header: "Created Date",
        accessor: "createddate"
    },
    {
        Header: "Createdby",
        accessor:  "createdby",
        // data =>
        // data.staffs.map(item => (
        //   <div>
        //     <span>{item.created_date}</span>
        //   </div>
        // )),
    },
    {
        Header: "No Of Sub Products",
        accessor:  "subproducts",
        // data =>
        // data.staffs.map(item => (
        //   <div>
        //     <span>{item.designation}</span>
        //   </div>
        // )),
    },
   
    {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <div class="dropdown">
                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={Threedot} alt="Threedot" title="Threedot" />
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Something</a>
                    </div>
                </div>
            )
        }
    },
]

const recievedData = [
    {
        product: "Product 1",
        pid: "P-001",
        createddate: "11 Mar 2022",
        createdby: "Sureshkumar",
        subproducts:"5",
        action: "action"
    }
    , {
        product: "Product 1",
        pid: "P-001",
        createddate: "11 Mar 2022",
        createdby: "Sureshkumar",
        subproducts:"5",
        action: "action"
    },
    {
        product: "Product 1",
        pid: "P-001",
        createddate: "11 Mar 2022",
        createdby: "Sureshkumar",
        subproducts:"5",
        action: "action"
    },

]



const SplitConfig = () => {
   
    const [salarydata, setSalaryData] = useState(

        

    )
console.log(salarydata,"my data")
      

    return (
        <div>
            <h1 className="panel-header">Employee</h1>
            <div className='df df-sb'>
                <Breadcrumbs />
                <button className='btn blue-btn'>Add Entry</button>
            </div>
            <div className='df salary-filter pt-4'>
            <div>
                    <select className="form-control  form-select">
                        <option>Vendor Name</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Bill No</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Type</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Product</option>
                    </select>
                </div>
                <div >
                    <input type="date" placeholder="Date From" required className="form-control" />
                </div>
                <div >
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
            </div>
            <Tables recievedColumns={recievedColumns} recievedData={recievedData} />

        </div>
    );
};

export default SplitConfig;