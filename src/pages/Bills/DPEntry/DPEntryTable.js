import React from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import Tables from '../../../Component/Tables/Tables';
import Threedot from '../../../assets/threedot.svg'
import './dpentry.scss'
import { useState,useEffect } from 'react';
import apiRequest from '../../../utils/helpers/apiRequest';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import SuccessToast from '../../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../../Component/CustomToast/ErrorToast';

// const recievedData = [
//     {
//         product: "Product 1",
//         batch: "01234",
//         branch: "Branch 1",
//         bin: "Bin 1",
//         quantity: "70",
//         date: "11 Aug 2022",
//         action: "action"
//     },
//     {
//         product: "Product 1",
//         batch: "01234",
//         branch: "Branch 1",
//         bin: "Bin 1",
//         quantity: "70",
//         date: "11 Aug 2022",
//         action: "action"
//     }, {
//         product: "Product 1",
//         batch: "01234",
//         branch: "Branch 1",
//         bin: "Bin 1",
//         quantity: "70",
//         date: "11 Aug 2022",
//         action: "action"
//     }
// ]
const DPEntryTable = () => {

    const [dp,setDp] = useState()
    const navigation = useNavigate();
    const handleView = (data) => {
        navigation('/panel/dpentry', { state: data });
      };
      const handleDelete = async(data) => {
        const res = await apiRequest('deleteDirectPurchaseDetails', null, null, `/${data.id}`) 
        console.log(data,"DATA")
        if (res.error) {
            toast(<ErrorToast body='Failed to delete' />, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 2000,
                });
        } else {
            toast(<SuccessToast body={res?.data?.message} />, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 2000,
            });
            // navigate(-1);
        }
    }
      const recievedColumns = 
[
    {
        Header: "Product",
        accessor: "product",

    },
    {
        Header: "Batch No",
        accessor: "batchNo"
    },
    {
        Header: "Branch",
        accessor: "branchName"
    },
    {
        Header: "Bin No",
        accessor: "binNo"
    },
    {
        Header: "Stored Quantity",
        accessor: "directPurchaseValue.totalQuantity"
    },
    {
        Header: "Stored Date",
        accessor: "storageDate"
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
                    <a class="dropdown-item"  onClick={()=>handleView(row.original)}>View</a>
                    <a class="dropdown-item" onClick={() =>handleDelete(row.original)}>Delete</a>
                        {/* <a class="dropdown-item" href="#">Something</a> */}
                    </div>
                </div>
            )
        }
    }
]
    const getDPEntryData = async () => {
        const res = await apiRequest('getDirectPurchaseList');
        // const formattedData = [];
        console.log('DPENTRY TABLE RES : ', res);
    
        if (res?.error) {
            setDp([]);
        } else {
            setDp(res.data);
            // res.data.map((values) => {
            //     const currentData = values?.directPurchaseValue;
            //     console.log("yyyyyyyyyy",currentData.length)
            //     if (currentData && currentData.length>0) {
            //         currentData.map((val) => {
            //             currentData['product'] = values?.product;
            //           val['batchNo'] = values?.batchNo;
            //           val['branchName'] = values?.branchName;
            //           val['binNo'] = values?.binNo;
            //           val['storageDate'] = values?.storageDate;
            //           formattedData.push(val);
            //         });
            //     }
                
            //   });
            //   console.log('FORMTATTED DATA VALUES ::: ', formattedData);
            //   setDp(formattedData);
        }
      };
    
      useEffect(() => {
        getDPEntryData();
      }, []);
    
   
    return (
        <div>
            <h1 className="panel-header">Bills </h1>
            <Breadcrumbs />
            <div className='df salary-filter my-2'>
                <div>
                    <input className='form-control' placeholder='Product' />
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Bin No</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Branch</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Batch No</option>
                    </select>
                </div>
                <div >
                    <input type="date" placeholder="Date From" required className="form-control" />
                </div>
                <div >
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
            </div>
            <Tables recievedColumns={recievedColumns} recievedData={dp} />
        </div>
    );
};

export default DPEntryTable;