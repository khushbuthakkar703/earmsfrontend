import React, { useState, useEffect } from "react";
import apiRequest from "../../../utils/helpers/apiRequest";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Table from "../../../Component/Tables/Tables";
import { IoMdRadioButtonOn } from "react-icons/io";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { useNavigate } from "react-router-dom";

const ProductMasterTable = () => {
  const handleDelete = async (data) => {
    const res = await apiRequest(
      "deleteProductMaster",
      null,
      null,
      `/${data.id}`
    );
    if (data.error) {
      toast(<ErrorToast body="Failed to Delete" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else {
      toast(<SuccessToast body="Successfully Deleted" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
      const productRes = await apiRequest ("getProductMasterList")
          console.log(productRes,"PRODUCT TABLES DATA");
          if(productRes.error){
            setProductTableData([])
          }
          else{
            console.log(productRes.data,"DTAAAAAAA")
            setProductTableData(productRes.data)
          }
    }
  }
  const [productTableData,setProductTableData] = useState()
    const navigate = useNavigate();
  const getProduct = async()=>{
          const productRes = await apiRequest ("getProductMasterList")
          console.log(productRes,"PRODUCT TABLES DATA");
          if(productRes.error){
            setProductTableData([])
          }
          else{
            console.log(productRes.data,"DTAAAAAAA")
            setProductTableData(productRes.data)
          }
  }
  useEffect(()=>{
    getProduct()
  },[])
  const recievedColumns = [
    {
      Header: "Name",
      accessor: "productName",
    },

    {
      Header: "Product Clasified As",
      accessor: "productType",
    },
    {
      Header: "Picture",
      accessor: "picture",
    },
    {
      Header: "Nick Name",
      accessor: "search",
    },
    {
      Header: "QC Task Category",
      accessor: "taskCategory",
    },
    {
        Header: "Recycle",
        accessor: "recycle",
       
      },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => {
        //   console.log(row.values);
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
              <a href="" class="dropdown-item" onClick={() => navigate("/panel/producteditform",{ state: { value: row.original },})}>
                Edit
              </a>
              <a href="" class="dropdown-item" onClick={() => navigate("/panel/productviewform",{ state: { value: row.original },})}>
                View
              </a>
              <a
                class="dropdown-item"
                onClick={() => handleDelete(row.original)}
              >
                Delete
              </a>
            </div>
          </div>
        );
      },
    },
  ];
  // const receivedData = [
  //   {
  //       Name:"Iodine Monocloride A.R 50g",
  //       productClasifiedAs:"Consumables",
  //       nickName:"Iodine Monocloride",
  //       QCTaskCategory:"Laboratory"
  //   }
  // ]
  return (
    <div>
      <div className="panel-header">Product Master</div>
      <div className="df df-sb">
        <div>Master /Product Master</div>
        <button
          className="btn blue-btn"
          onClick={() => navigate("/panel/productmaster")}
        >
          + Add Product
        </button>
      </div>

      <Table recievedColumns={recievedColumns} recievedData={productTableData} />
    </div>
  );
};

export default ProductMasterTable;
