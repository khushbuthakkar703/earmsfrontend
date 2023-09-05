import React, { useState, useEffect } from 'react';
import './materialissue.scss'
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from '../../../Component/Tables/Tables'
import { IoMdRadioButtonOn } from "react-icons/io";
import apiRequest from '../../../utils/helpers/apiRequest';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Slide } from 'react-toastify';
import SuccessToast from '../../../Component/CustomToast/SuccessToast';
import ErrorToast from '../../../Component/CustomToast/ErrorToast';
const MaterialIssueTable = () => {
    const [missue, setMissue] = useState()
    const handleDelete = async(data)  =>{
        const res = await apiRequest ('deleteMaterialIssue',null,null,`/${data.id}`)
        if(data.error){
          toast(<ErrorToast body= 'Failed to Delete'/>,{
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
            
          }else {
            toast(<SuccessToast body={res?.data?.message}/>,{
              transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
            })
      
          }
        }
    const recievedColumns = [
        {
            Header: "Request ID",
            accessor: "requestId",
        },
        {
            Header: "Requested Item",
            accessor: "itemName"
        },
        {
            Header: "Req By (Dep)",
            accessor: "requestFromDepartment"
        },
        {
            Header: "Req By (Branch)",
            accessor: "requestFromBranch"
        },

        {
            Header: "Requested Date",
            accessor: "requestDate",

        },
        {
            Header: "Status",
            accessor: "status",

            Cell: ({ row }) => {
                console.log(row.values);
                return (
                    <>
                        {row.values.status == "Pending" ? <span>< IoMdRadioButtonOn className=' status-red' />Pening</span> :
                            row.values.status == "Issued" ? <span>< IoMdRadioButtonOn className='status-green' />Issued</span> :
                                null}
                    </>
                )
            }

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
                            <a class="dropdown-item" onClick={() => handleView(row.original)}>View</a>
                            <a class="dropdown-item" onClick={() =>handleDelete(row.original)}>Delete</a>
                            {/* <a class="dropdown-item" href="#">Something</a> */}
                        </div>
                    </div>
                )
            }
        },
    ]
    const navigation = useNavigate();
    const handleView = (data) => {
        console.log('ee',data);
        navigation('/panel/materialissueform', { state: data });
    };
    const getMaterialIssueData = async () => {
        const res = await apiRequest('getMaterialIssueList');
        const formattedData = [];
        console.log('MATERISL ISSUE TABLE RES : ', res);

        if (res?.error) {
            setMissue([]);
        }
        else {
            setMissue(res.data)
            res.data.map((values) => {
                const currentData = values?.issueItems;

                if (currentData && currentData.length > 0) {
                    console.log(currentData, "current data")
                    currentData.map((val) => {
                        val['requestId'] = values?.requestId;
                        val['requestDate'] = values?.requestDate;
                        val['requestFromDepartment'] = values?.requestFromDepartment;
                        val['requestFromBranch'] = values?.requestFromBranch;
                        val['status'] = values?.status;
                        val['requestName'] = values?.requestName;
                        formattedData.push(val);
                    });
                    //}
                }
            });
        }
        console.log('FORMTATTED DATA VALUES ::: ', formattedData);
        setMissue(formattedData);
    };

    useEffect(() => {
        getMaterialIssueData();
    }, []);


    return (
        <div className='staff-container'>
            <div className='bills-header'>
                <div>
                    <p className='employee-1'>Material Flow</p>
                    <p className='employee-2'>Material Flow / Material Issue</p>
                </div>
            </div>
            <div className='df  material-input'>
                <div>
                    <select className="form-control  form-select">
                        <option>Request ID</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option> Item Name</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Req By (Dep)</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Req By (Bran)</option>
                    </select>
                </div>
                <div>
                    <input type="date" placeholder="Date From" required className="form-control" />
                </div>
                <div>
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
            </div>
            <div>
                <Table recievedColumns={recievedColumns} recievedData={missue} />
            </div>
        </div>
    );
};

export default MaterialIssueTable;