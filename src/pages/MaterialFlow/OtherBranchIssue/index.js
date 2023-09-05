import React,{useState,useEffect} from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs';
import Tables from "../../../Component/Tables/Tables";
import "./opf.scss"
import Threedot from "../../../assets/threedot.svg";
import { IoMdRadioButtonOn } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CheckBox } from '@mui/icons-material';
import apiRequest from '../../../utils/helpers/apiRequest';
const OtherPlantIssue = () => {
    const [issue,setIssue] =useState()
    const getFingerprintData = async () => {
        const res = await apiRequest('getOtherBranchIssueList');
        console.log('WITHIN ISSUE TABLE RES : ', res);
    
        if (res?.error) {
            setIssue([]);
        } else {
            setIssue(res.data);
        }
      };
    
      useEffect(() => {
        getFingerprintData();
      }, []);
    const recievedColumns = [
        {
            Header: "MRN Num",
            accessor: "withInBranchReceiptIdString",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <div>
                 <input type="checkbox" value="product 1" /><span className='mrn '>MRN-001</span>
                 {row.values.withInBranchReceiptIdString}
                  </div>
                )
            }
        },
    
        {
            Header: "Docket No",
            accessor: "docketNo",
        },
        {
            Header: "Issued by (Dept)",
            accessor: "issueFromDepartment",
        },
        {
            Header: "Issued by (Bran)",
            accessor: "issueFromBranch",
        },
        {
            Header: "Req by (Bran)",
            accessor: "requestFromBranchs",
        },
        
        {
            Header: "Status",
            accessor: "status",
            Cell: ({ row }) => {
                console.log(row.values);
                return (
                  <>
                  {row.values.status == "Pening" ? <span>< IoMdRadioButtonOn className='status-yellow '/>Pening</span> :
                   row.values.status == "Completed" ? <span>< IoMdRadioButtonOn className='status-green'/>Dispatched</span>:
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
                        <button
                            class="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <img src={Threedot} alt="Threedot" title="Threedot" />
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">
                                Action
                            </a>
                            <a class="dropdown-item" href="#">
                                Something
                            </a>
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div>
            <h1 className="panel-header">Material Flow</h1>
            <div className="df df-sb">
                <Breadcrumbs />
                <button className="btn blue-btn">Other Plant Issue</button>
            </div>
            <div className="df salary-filter my-2">
                <div>
                    <select className="form-control  form-select">
                        <option>MRN Num</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Docket Type</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Issued by (Dept)</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Issued by (Branc)</option>
                    </select>
                </div>
                <div>
                    <input type="date" placeholder="Date From" required className="form-control" />
                </div>
                <div>
                    <input type="date" placeholder="Date To" required className="form-control" />
                </div>
            </div>
            <div className="wpr-table">

                <Tables recievedColumns={recievedColumns} recievedData={issue} />
            </div>
        </div>
    );
};

export default OtherPlantIssue;