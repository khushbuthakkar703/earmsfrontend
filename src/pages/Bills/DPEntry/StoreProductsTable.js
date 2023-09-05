import React, { useState,useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from '../../../Component/Tables/Tables';
import { IoMdAddCircle } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import apiRequest from '../../../utils/helpers/apiRequest';
const StoreProductsTable = ({ handleChange, IslooryTab,isView=true }) => {
   
 
   const [LooryTab, setLorryTab] = useState(false);
    
    useEffect(()=>{
        setLorryTab(IslooryTab);
    },[IslooryTab])
    const recievedBinColumns = [
        {
            Header: "Bin ID",
            accessor: "binid",
    
        },
        {
            Header: "Bin Capacity",
            accessor: "bincapacity"
        },
    
        {
            Header: "Current Stock in Bin",
            accessor: "cstock"
        },
        {
            Header: "Bin Contents",
            accessor: "bcontents",
    
        },
        {
            Header: "Capacity Left",
            accessor: "capleft",
    
        },
        {
            Header: "Select Bin",
            accessor: "sbin",
            Cell: ({row}) => {
                return (
                    <>
                        <input type="checkbox" />
                    </>
                )
            }
    
        }
    ]
    
    const recievedBinData = [
        {
            binid: "Bin 1",
            bincapacity: "8000",
            cstock: "4000",
            bcontents: "Red Seeds",
            capleft: "4000",
            sbin: ""
        },
        {
            binid: "Bin 2",
            bincapacity: "8000",
    
            cstock: "4000",
            bcontents: "Red Seeds",
            capleft: "4000",
            sbin: ""
        }
    ]
const recievedColumns = [
    {
        Header: "Products",
        accessor: "products",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                readOnly
              />
            );
          },

    },
    {
        Header: "Description",
        accessor: "description",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                onChange={(e) => handleChange(e, row.original?.id)} readOnly
              />
            );
          },
    },
    {
        Header: "Camp",
        accessor: "camp",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }
    },
    {
        Header: "Color",
        accessor: "color",
    },

    {
        Header: "Package type",
        accessor: "packagetype",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                onChange={(e) => handleChange(e, row.original?.id)} readOnly
              />
            );
          },
    },
    {
        Header: "Per Bag Weight",
        accessor: "perBagWeight",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                onChange={(e) => handleChange(e, row.original?.id)} readOnly
              />
            );
          },

    },
    {
        Header: "Total Quantity",
        accessor: "totalQuantity",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                onChange={(e) => handleChange(e, row.original?.id)} readOnly
              />
            );
          },

    },
   
    {
        Header: "Select Bin",
        accessor: "selectBin",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option>25</option>
                </select>
            )
        }

    },
    {
        Header: "Select Quantity",
        accessor: "Select Quantity",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                onChange={(e) => handleChange(e, row.original?.id)} readOnly
              />
            );
          },

    },
]
const recievedData = [
    {
        products: "",
        description: "",
        camp:"",
        color: "",
        packagetype: "",
        perBagWeight: " ",
        totalQuantity:"",
        selectBin: "",
        Selectquantity: "",
    }
]
const recievedColumns1 = [
    {
        Header: "Insurance",
        accessor: "insurance",

    },
    {
        Header: "Billed Frieght Amount",
        accessor: "billedfrightamount"
    },

    {
        Header: "Entered Bill About",
        accessor: "entrbill"
    },
    {
        Header: "Load Weight",
        accessor: "LoadWeight",

    },
    {
        Header: "Empty Weight",
        accessor: "emptyweight",

    },
   
]
const recievedData1 = [
    {
        insurance: "",
        billedfrightamount: "",
        entrbill: "",
        LoadWeight: "",
        emptyweight: "",
    },
    {
        insurance: "",
        billedfrightamount: "",
        entrbill: "",
        LoadWeight: "",
        emptyweight: "",
    }
]
const recievedColumns2 = [
    {
        Header: "Lorry Number",
        accessor: "lorrynumber",

    },
    {
        Header: "Payable Freight Amount",
        accessor: "payableamount"
    },

    {
        Header: "Pan No",
        accessor: "panno"
    },
    {
        Header: "Payee Name",
        accessor: "payeename",

    },
    {
        Header: "Contact Number",
        accessor: "Contactnumner",

    },
   
]
const recievedData2 = [
    {
        lorrynumber: "",
        payableamount: "",
        panno: "",
        payeename: "",
        Contactnumner: "",
    },
   
]
const recievedViewColumns = [
    {
        Header: "Products",
        accessor: "products",
    },
    {
        Header: "Description",
        accessor: "description",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                onChange={(e) => handleChange(e, row.original?.id)} readOnly
              />
            );
          },
    },
    {
        Header: "Camp",
        accessor: "camp",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }
    },
    {
        Header: "Color",
        accessor: "color",
    },

    {
        Header: "Package type",
        accessor: "packagetype",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                onChange={(e) => handleChange(e, row.original?.id)} readOnly
              />
            );
          },
    },
    {
        Header: "Per Bag Weight",
        accessor: "perBagWeight",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                onChange={(e) => handleChange(e, row.original?.id)} readOnly
              />
            );
          },

    },
    {
        Header: "Total Quantity",
        accessor: "totalQuantity",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                onChange={(e) => handleChange(e, row.original?.id)} readOnly
              />
            );
          },

    },
   
    {
        Header: "Select Bin",
        accessor: "selectBin",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option>25</option>
                </select>
            )
        }

    },
    {
        Header: "Select Quantity",
        accessor: "Select Quantity",
        Cell: ({ row }) => {
            return (
              <input
                type='text'
                className='form-control'
                style={{ width: '250px' }}
                name='products'
                onChange={(e) => handleChange(e, row.original?.id)} readOnly
              />
            );
          },

    },
]
  return (
    <>
    <div className='custom-tab'>
        <Tabs
            defaultActiveKey="Storage"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="Storage" title="Store Products">
                <Tables recievedColumns={isView?recievedViewColumns : recievedColumns} recievedData={recievedData} />
              
            </Tab>
            <Tab eventKey="Bill Details" title="Bill Details">
                        <Tables recievedColumns={recievedColumns1} recievedData={recievedData1} />
            </Tab>
            {
                LooryTab && 
                <Tab eventKey="Loory" title="Loory">
                            <Tables recievedColumns={recievedColumns2} recievedData={recievedData2} />
                </Tab>
            }
        </Tabs>
    </div>
     <div className='custom-tab'>
     <Tabs
         defaultActiveKey="Storage"
         id="uncontrolled-tab-example"
         className="mb-3"
     >
         <Tab eventKey="Storage" title="Bin Details">
             <Tables recievedColumns={recievedBinColumns} recievedData={recievedBinData} />
         </Tab>
     </Tabs>
 </div>
 </>
  )
}

export default StoreProductsTable
