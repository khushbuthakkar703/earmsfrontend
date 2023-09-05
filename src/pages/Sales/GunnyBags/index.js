import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../Component/Tables/Tables';
import Threedot from '../../../assets/threedot.svg';
import sales from '../sales.scss';
import Breadcrumbs from "../../../Component/Breadcrumbs";
import { useNavigate } from 'react-router-dom';

const recievedColumns = [
  {
    Header: "Vendor Name",
    accessor: "vendorname",

  },
  {
    Header: "Vendor ID",
    accessor: "vendorid"
  },
  {
    Header: "Created Date",
    accessor: "createdate"
  },
  {
    Header: "Products",
    accessor: "products"
  },
  {
    Header: "Last Updated On",
    accessor: "lastupdatedon"
  },
  {
    Header: "action",
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
    vendorname: "NO 2 Gunny Bag",
    vendorid: "P-001",
    createdate: "11 Mar 2022",
    products: "Product 1, +11 More",
    lastupdatedon:"11 Mar 2022",
    action: "action",
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
  {
    vendorname: "NO 2 Gunny Bag",
    vendorid: "P-001",
    createdate: "11 Mar 2022",
    products: "Product 1, +11 More",
    lastupdatedon:"11 Mar 2022",
    action: "action",
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
  {
    vendorname: "NO 2 Gunny Bag",
    vendorid: "P-001",
    createdate: "11 Mar 2022",
    products: "Product 1, +11 More",
    lastupdatedon:"11 Mar 2022",
    action: "action",
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
  {
    vendorname: "NO 2 Gunny Bag",
    vendorid: "P-001",
    createdate: "11 Mar 2022",
    products: "Product 1, +11 More",
    lastupdatedon:"11 Mar 2022",
    action: "action",
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

const addProduct = (e) => {
  e.preventDefault();
//   navigate("../")
}


function Gunnybags() {
  return (
    <>
    <h1 className="panel-header">Sales</h1>
     <div className='df df-sb'>
          <Breadcrumbs />
          <button className='btn blue-btn' onClick={addProduct}>+ Add Product</button>
      </div>
    <div className=''>
      
            <div className='df salary-filter my-2'>
                
                <div>
                    <select className="form-control  form-select">
                        <option>Vendor Name</option>
                    </select>
                </div>

                <div>
                    <select className="form-control  form-select">
                        <option>Product Name</option>
                    </select>
                </div>
                <div >
                    <input type="date" placeholder="Date From" required className="form-control" />
                </div>
                <div >
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
            </div>
        {/* <Tabs
            defaultActiveKey="dayendprocess"
            id="uncontrolled-tab-example"
            className="mb-3 first-tab"
            >
            <Tab eventKey="dayendprocess" title="Product Details"> */}
            <Table recievedColumns={recievedColumns} recievedData={recievedData} />
            {/* </Tab>
        </Tabs> */}

    </div>
    </>
  )
}

export default Gunnybags