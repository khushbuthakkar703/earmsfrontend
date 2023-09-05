import React, {useState, useEffect} from 'react';
import Breadcrumbs from "../../Component/Breadcrumbs";
import "./excess.scss";
import User from '../../assets/user.png'
import Threedot from '../../assets/threedot.svg'
import Tables from "../../Component/Tables/Tables";
import apiRequest from '../../utils/helpers/apiRequest';
import { useNavigate } from 'react-router-dom';



const Excestorage = () => {
    const getDataById = async (data,e)=>{
        e.preventDefault();
        const resId = await apiRequest ("getProductExcessStorageDetails"+`/${data}`)
        console.log(resId,"BYID")
        navigate("/panel/excessviewform",{state:{value:resId?.data}})
        navigate("/panel/excesseditform",{state:{value:resId?.data}})
    }
    const recievedColumns = [
        {
            Header: "Vendor Name",
            accessor: "vendorName"
        },
        {
            Header: "Vendor ID",
            accessor: "vendorId",
        },
        {
            Header: "Bill No",
            accessor: "billNumber"
        },
        {
            Header: "Bill Inward Date",
            accessor:  "billInwardDate"
        },
        {
            Header: "Accounting Firm",
            accessor:  "firmName",
        },
        {
            Header: "Type",
            accessor: "type",
          
           
        },
        {
            Header: "Product",
            accessor: "productName"
        },
        {
            Header: "Action",
            accessor: "action",
            Cell: ({ row }) => {
                console.log(row.original,"ORG");
                return (
                    <div class="dropdown">
                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={Threedot} alt="Threedot" title="Threedot" />
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a href=""  onClick={(e)=>{getDataById(row.original.id,e)}} class="dropdown-item">  Edit  </a>
                        <a href=""  onClick={(e)=>{getDataById(row.original.id,e)}}class="dropdown-item"> view  </a>
                        </div>
                    </div>
                ) 
            } 
        },
    ]
    const [excesStorageList, setExcesStorageList] = useState()
    const navigate = useNavigate()



const getProductExcessStorageList = async () => {
    const res = await apiRequest('getProductExcessStorageList')
    const formattedData = [];
    console.log('ProductExcessStorageList', res.data)
    if (res.error) {
        setExcesStorageList([])
    } else {
        setExcesStorageList(res.data)
        res.data.map((values) => {
            const currentData = values?.excessShortageProducts;
            if (currentData && currentData.length>0) {
                currentData.map((val) => {
                  val['vendorName'] = values?.vendorName;
                  val['vendorId'] = values?.vendorId;
                  val['billNumber'] = values?.billNumber;
                  val['billInwardDate'] = values?.billInwardDate;
                  val['firmName'] = values?.firmName;
                  val['id'] = values?.id;
                  formattedData.push(val);
                });
            }
            console.log('FORMTATTED DATA VALUES ::: ', formattedData);
            setExcesStorageList(formattedData);
          });
        }
    }
    
useEffect(() => {
    getProductExcessStorageList();
    getDataById();
},[])
    return (
        <div>
      <h1 className='panel-header'>Product Distruptancies</h1>
      <div className='df df-sb mb-3  '>
                <div>Product Distruptancies / Excess / Storage</div>
            <button
          className='btn blue-btn'
          onClick={() => navigate('/panel/excessform')}
            >
            + Add Product
            </button>
      </div>
            <div className='df salary-filter'>
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
            <Tables recievedColumns={recievedColumns} recievedData={excesStorageList} />

        </div>
    );
};

export default Excestorage;