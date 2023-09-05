import React, { useState, useEffect } from "react";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import apiRequest from "../../../utils/helpers/apiRequest";
import { Slide, toast } from "react-toastify";
import "./productmaster.scss";
import getBase64 from "../../../utils/getBase64";
import { useLocation, useNavigate } from 'react-router-dom';
const ProductMaster = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const productEditData = state?.value;
  
    console.log(productEditData,"EDIT DATA")
    const[editProductData,setEditProductData] = useState()
    const [updateDropdown,setUpdateDropdown] = useState(false) 
    const [select,setSelect] = useState (true)
    const [addValue,setAddValue] = useState ()
    const [updateMainUnit,setUpdateMainUnit] = useState (false)
    const [mainSelect,setMainselect] = useState(true)
    const [addMainValue,setAddMainValue] = useState()
    const options = ['One', 'Two', 'Three', 'Four']
    const mainOptions = ["Main 1","Main 2","Main 3"]
    const [mainUnitValue,setMainUnitValue] = useState(mainOptions)
    const [optin,setOptin] = useState(options)
    const [selectAlt,setSelectAlt] = useState(true)
    const [inputAlt,setInputAlt] = useState (false)
    const [getAlt,setGetAlt] = useState()
    const altOptions = ["Alt 1","Alt 2","Alt 3"]
    const [getAltValue,setGetAltValue] = useState(altOptions)
    const [deptList, setDeptList] = useState([{ id: 1 }]);
    const [productData,setProductData] = useState("")
    const [rawmateril,setRawMateril] = useState ()
    const [taskCategoryList,setTaskCategoryList] = useState()
    const [mainUnitList,setMainUnitList] = useState()
    const [altUnitList,setAltUnitList] = useState()
    const [packingTypeList,setPackingTypeList] = useState()
    const[category,setCategory] = useState()
    const[productCategory,setProductCategory] = useState()
    const[addProduct,setAddProduct] = useState()
    const [clustor,setclustor] = useState()
    const[addMainList,setAddMainList] = useState()
    const[mainAddUnitList,setAddMainUnitList] = useState () 
    //sub categ start
    const getEditdata = () =>{
        setEditProductData((prev)=>({
            ...prev,
            productName:productEditData?.productName,
            departmentId:productEditData?.departmentId,
            description:productEditData?.description,
            search:productEditData?.search,
            taskCategory:productEditData?.taskCategory,
            rawMaterial:productEditData?.rawMaterial,
            contractPurchase:productEditData?.contractPurchase,
            recycle:productEditData?.recycle,
            where1:productEditData?.where1,
            unit:productEditData?.unit,
            where2:productEditData?.where2,
            altunit:productEditData?.altunit,
            billOfMaterial:productEditData?.billOfMaterial,
            byeProduct:productEditData?.byeProduct,
            gweight:productEditData?.gweight,
            minimumStockLevelQuantity:productEditData?.minimumStockLevelQuantity,
            purpose:productEditData?.purpose,
            workInst:productEditData?.workInst,
            packingType:productEditData?.packingType,
            avgqty1:productEditData?.avgqty1,
            avgqty2:productEditData?.avgqty2,
            avgqty3:productEditData?.avgqty3,
            inward:productEditData?.inward,
            pofreq:productEditData?.pofreq,
            productType:productEditData?.productType,
            allowAdd:productEditData?.allowAdd,
            productCategory:productEditData?.name,
            unit:productEditData?.name,
            unit1:productEditData?.unit1,
            unit2:productEditData?.unit2,
            cluster:productEditData?.cluster,
            picture: uploadPic

        }))
    }
    const  handleProductData =(e)=>{
        const {name,value} = e.target;
        console.log(value,"PRODUCT ONCHNAGE VALUE")
        setEditProductData((prevState) =>({
            ...prevState,
            [name] : value,

        }))
         }
         useEffect(()=>{
            getEditdata()
        },[])
        useEffect(()=>{
            console.log(editProductData,"EEEEEEE")
        },[editProductData])
    const addDropdown = () =>{
        setUpdateDropdown(true)
        setSelect(false)
    }
    const handleDropdown = () =>{
      
    }
    const handleInputChange = (e) =>{
        setAddValue(e.target.value)
    }
    const handleCancel =() =>{
        setUpdateDropdown(false)
        setSelect(true)
    }
    const addHandleInput = async() =>{
        const addSubCategory = await apiRequest("saveProductCategory",addProduct)
        getProductCategoryList()
        setUpdateDropdown(false)
        setSelect(true)
    }
//sub category end

//main unit start
   const  openMainUnit = ()=>{
    setUpdateMainUnit(true)
    setMainselect(false)
   }
   const handleMainDropdown = ()=>{
   }
   const handleMainCancel = ()=>{
    setUpdateMainUnit(false)
    setMainselect(true)
   }
   const handleMainInputChange = (e)=>{
    setAddMainValue(e.target.value)
   }
   const addHandleMainInput =async ()=>{
    const addMainAddRes = await apiRequest ("saveUnit",addMainList)
    if(addMainAddRes.error){
        toast(<ErrorToast body="Product Category Not Created" />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
    }
    else{
        toast(<SuccessToast body="Product Category Sucessfully Created" />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000,
          });
    }
    getMainUniTList()
    setUpdateMainUnit(false)
    setMainselect(true)
   }
   // main unit end


   // alt unit start
   const openAltUnit = ()=>{
    setSelectAlt(false)
    setInputAlt(true)
   }
   const handleAltCancel = () =>{
    setSelectAlt(true)
    setInputAlt(false)
   }
   const handleAltselect = () =>{

   }
const handleAtleInput = (e) =>{
    setGetAlt(e.target.value)
}
  const getAltList = ()=>{
    setGetAltValue((prev)=>(
        [...prev,getAlt]
    ))
    setSelectAlt(true)
    setInputAlt(false)
  }

   // alt unit end

   const getDepartmentList = async () => {
    const res = await apiRequest("departmentList");
    if (res.error) {
      setDeptList([]);
    } else {
      setDeptList(res.data);
      console.log(res.data, "DDDA");
    }
  };

  const getProductCategoryList = async ()=>{
    const categoryRes = await apiRequest("productCategoryList")
    setProductCategory(categoryRes.data)
    console.log(categoryRes.data,"CATEGORY PRODUCT");
}
const getMainUniTList = async ()=>{
    const mainUnitRes = await apiRequest ("unitList")
    setAddMainUnitList(mainUnitRes.data)
    console.log(mainUnitRes.data,"MAIN");

}
const getClusterList = async ()=>{
    const clusterRes = await apiRequest ("clusterList")
    setclustor(clusterRes.data,"CLUSTOR")
    console.log(clusterRes.data,"CLUSTOR");
    
 }
const getallDropdownList = async()=>{
    const categoryRes = await apiRequest("getDropdownList?type=packingtype")
    setCategory(categoryRes.data)
    console.log(categoryRes.data,"CATEGORY LIST DATA");
    const materialRes = await apiRequest("getDropdownList?type=rawmaterial")
    setRawMateril(materialRes.data)
    console.log(materialRes.data,"MATERIAL DATA");
    const taskCategoryRes = await apiRequest("getDropdownList?type=taskcategory")
    setTaskCategoryList(taskCategoryRes.data)
    console.log(taskCategoryRes.data,"TAST CATEGORY DATA");
    const mainUnitRes = await apiRequest("getDropdownList?type=unit")
    setMainUnitList(mainUnitRes.data)
    console.log(mainUnitRes.data,"MAIN LIST DATA");
    const altUnitRes = await apiRequest("getDropdownList?type=altunit")
    setAltUnitList(altUnitRes.data)
    console.log(altUnitRes.data,"ALT LIST DATA");
    const packingTypeRes = await apiRequest("getDropdownList?type=packingtype")
    setPackingTypeList(packingTypeRes.data)
    console.log(packingTypeRes.data,"PACKING TYPE LIST DATA");

}
useEffect(()=>{
    getallDropdownList()
    getEditdata()
    getClusterList()
    getProductCategoryList()
    getMainUniTList()
},[])
let uploadPic;
const handleFileUpload = async (e) => {
    console.log(getBase64(e.target.files[0]), "PPPP");
    uploadPic = await getBase64(e.target.files[0]);
  };


 const saveProductData =async()=>{
    const reqData ={
        id:productData.id,
        productName:editProductData?.productName,
        departmentId:editProductData?.departmentId,
        description:editProductData?.description,
        search:editProductData?.search,
        taskCategory:editProductData?.taskCategory,
        rawMaterial:editProductData?.rawMaterial,
        contractPurchase:editProductData?.contractPurchase,
        recycle:editProductData?.recycle,
        where1:editProductData?.where1,
        where2:editProductData?.where2,
        billOfMaterial:editProductData?.billOfMaterial,
        byeProduct:editProductData?.byeProduct,
        gweight:editProductData?.gweight,
        minimumStockLevelQuantity:editProductData?.minimumStockLevelQuantity,
        purpose:editProductData?.purpose,
        workInst:editProductData?.workInst,
        packingType:editProductData?.packingType,
        avgqty1:editProductData?.avgqty1,
        avgqty2:editProductData?.avgqty2,
        avgqty3:editProductData?.avgqty3,
        inward:editProductData?.inward,
        pofreq:editProductData?.pofreq,
        productType:editProductData?.productType,
        allowAdd:editProductData?.allowAdd,
        productCategory:editProductData?.productCategory,
        unit:editProductData?.unit,
        unit1:editProductData?.unit1,
        unit2:editProductData?.unit2,
        cluster:editProductData?.cluster,
        picture: uploadPic
    }
    console.log(reqData ,"REQUEST PRODUCT DATA");
    //    if(
    //     !productData?.productName||
    //     !productData?.departmentId||
    //     !productData?.description||
    //     !productData?.search||
    //     !productData?.rawMaterial||
    //     !productData?.contractPurchase||
    //     !productData?.recycle||
    //    !productData?.where1||
    //    !productData?.unit||
    //     !productData?.taskCategory||
    //    !productData?.where2||
    //     !productData?.altunit||
    //     !productData?.billOfMaterial||
    //    !productData?.byeProduct||
    //     !productData?.gweight||
    //     !productData?.minimumStockLevelQuantity||
    //     !productData?.purpose||
    //     !productData?.workInst||
    //     !productData?.packingType||
    //    !productData?.avgqty1||
    //     !productData?.avgqty2||
    //     !productData?.avgqty3||
    //    !productData?.inward||
    //     !productData?.pofreq||
    //     !productData?.productType||
    //     !productData?.allowAdd        
    //    ){
        // toast(
        //     <ErrorToast body="Please make sure all fields are filled in correctly" />,
        //     {
        //       transition: Slide,
        //       hideProgressBar: true,
        //       autoClose: 2000,
        //     },
        //   );
    //    }
    //    else{
        const productRes = await apiRequest("updateProductMaster",reqData)
        console.log(productRes,"EDIT PRODUCT DATA");
      if (productRes.error) {
        toast(<ErrorToast body="Product Not Updated" />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
      } else {
        toast(<SuccessToast body={productRes?.data?.message} />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000,
        });
      }
    //    }
}


    useEffect (()=>{
        console.log(optin,"vvvvvv");
    },[optin])
    useEffect (()=>{
        getDepartmentList();
    },[])

    return (
        <div>
            <div className="panel-header">Product Master</div>
            <div className="df fw mt-2">
                <div>Master /Product Master</div>
            </div>
            <div className="theme-card mt-3">
                <div className="theme-card-header">
                    <h6>Product Master</h6>
                </div>
                <div className="theme-card-content">
                    <div className="df fw">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e)=>handleProductData(e)}
                                name="productName"
                                value={editProductData?.productName}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Department</label>
                            <select className="form-control"  onChange={(e)=>handleProductData(e)} 
                            name="departmentId"
                            value={editProductData?.departmentId}>
                                <option>Select Department</option>
                                {deptList &&
                                    deptList.map((val) => {
                                        console.log(val, "val");
                                    return <option value={Number(val.id)}>{val.name}</option>;
                  })}
                                </select>
                        </div>
                       
                        <div className="form-group">
                            <label className="form-label">Product Clasified As</label>
                            <select
                                className="form-control"
                                name="productType"
                                value={productData?.productType}
                                
                                onChange={(e)=>handleProductData(e)}>
                                    {category &&
                                    category.map((val) => {
                                        console.log(val, "val");
                                    return <option value={val}>{val}</option>;
                  })}
                                <option></option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">PO Description</label>
                            <textarea
                                rows="5"
                                type="text"
                                className="form-control"
                                name="description"
                                value={editProductData?.description}
                                onChange={(e)=>handleProductData(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Product Sub Category</label>
                            {select ? 
                            <>
                            <select onChange={(e)=>handleProductData(e)}
                            name="productCategory" value={editProductData?.productCategory}
                                className="form-control"  >
                                     <option></option>
                                     {productCategory &&  productCategory?.map((val) =>{
                                        return <option value={val?.name}>{val?.name}</option>
                                    })}
                               
                               
                            </select>
                             <button className="input-add" onClick={addDropdown}>Add Product Sub Category</button>
                             </>
                            : null}
                            {updateDropdown ?  <div>
                            <input type="text"  className="form-control" onChange={(e)=>setAddProduct({[e.target.name]:e.target.value})}/> 
                           
                            <button className="add add-list" onClick={addHandleInput}>Add</button>
                            <button className="cancel add-list" onClick={handleCancel}>Cancel</button>
                            </div> : null}
                           
                        </div>
                        <div className="form-group">
                            <label className="form-label">Nick Name</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e)=>handleProductData(e)}
                                name="search"
                                value={editProductData?.search}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Used Raw Material</label>
                            <select
                                className="form-control"  onChange={(e)=>handleProductData(e)}
                                name="rawMaterial"
                                value={editProductData?.rawMaterial}
                            >
                                <option></option>
                                {rawmateril &&
                                    rawmateril.map((val) => {
                                        console.log(val, "val");
                                    return <option value={val}>{val}</option>;
                  })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">QC Task Category</label>
                            <select
                                className="form-control"
                                name="taskCategory"
                                value={editProductData?.taskCategory}
                                  onChange={(e)=>handleProductData(e)}
                            >
                                <option></option>
                                {taskCategoryList &&
                                    taskCategoryList.map((val) => {
                                        console.log(val, "val");
                                    return <option value={val}>{val}</option>;
                  })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Inventory Responsibility</label>
                            <select
                                className="form-control" 
                                name="cluster"
                                value={editProductData?.cluster}
                                onChange={(e)=>handleProductData(e)}>
                                <option></option>
                                {clustor &&
                                    clustor?.map((val) => {
                                        console.log(val, "val");
                                    return <option value={val.id}>{val.name}</option>;
                  })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Allow Process Intake If No Qc Report</label>
                            <select
                                className="form-control" 
                                name="allowAdd"
                                value={editProductData?.allowAdd}
                                onChange={(e)=>handleProductData(e)}>
                                <option></option>
                                <option value="yes">Yes</option>
                                <option value="No">No</option>
                               
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Enable Contract Purchase</label>
                            <select
                                className="form-control"  
                              
                                onChange={(e)=>handleProductData(e)}
                                name="contractPurchase"
                                value={editProductData?.contractPurchase}
                                >
                                <option></option>
                                <option value="yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Recycle</label>
                            <select
                                className="form-control"  
                                name="recycle"
                                value={editProductData?.recycle}
                                onChange={(e)=>handleProductData(e)}>
                                <option></option>
                                <option value="yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Main Unit</label>
                            {mainSelect ? 
                            <>
                            <select onChange={(e)=>handleProductData(e)}
                            name="unit" value={editProductData?.unit}
                                className="form-control" 
                                
                                >
                                    <option></option>
                                     {mainAddUnitList &&  mainAddUnitList?.map((val) =>{
                                        return <option value={val.name}>{val.name}</option>
                                    })}
                                
                            </select>
                            <button className="input-add" onClick={openMainUnit}>Add Main Unit</button>
                             </>
                            : null}
                            {updateMainUnit ?  <div>
                            <input type="text"  className="form-control" onChange ={(e)=>setAddMainList({[e.target.name]:e.target.value})}/> 
                           
                            <button className="add add-list" onClick={addHandleMainInput}>Add</button>
                            <button className="cancel add-list" onClick={handleMainCancel}>Cancel</button>
                            </div> : null}
                        </div>
                        <div className="form-group">
                            <label className="form-label">ALT. Unit</label>
                            {selectAlt ?
                             <>
                            <select onClick={handleAltselect}
                            className="form-control">
                                 <option></option>
                                {getAltValue && getAltValue.map((val)=>{
                                    return  <option value={val}>{val}</option>
                                })}
                           
                        </select>
                         <button className="input-add" onClick={openAltUnit}>Add Alt Unit</button>
                         </>
                        : null 
                            }
                            {inputAlt ? 
                            <>
                           <input type="text"  className="form-control" onChange={(e) =>handleAtleInput(e)}/> 
                           
                           <button className="add add-list" onClick={getAltList}>Add</button>
                           <button className="cancel add-list" onCkick={handleAltCancel}>Cancel</button>
                            </>
                        :null}
                            
                        </div>
                        <div className="form-group">
                            <label className="form-label">Main Value</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e)=>handleProductData(e)}
                                name="where1"
                                value={editProductData?.where1}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Main Unit</label>
                            <select
                                className="form-control" 
                                value={editProductData?.unit1}
                                name="unit1"
                                 onChange={(e)=>handleProductData(e)}>
                                <option></option>
                                {mainUnitList &&
                                    mainUnitList.map((val) => {
                                        console.log(val, "val");
                                    return <option value={val}>{val}</option>;
                  })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Alt Value</label>
                            <input
                                type="text"
                                className="form-control"
                                name="where2"
                                value={editProductData?.where2}
                                onChange={(e)=>handleProductData(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Alternate Unit</label>
                            <select
                                className="form-control" 
                                value={editProductData?.unit2}
                                name="unit2"
                                onChange={(e)=>handleProductData(e)}>
                                <option></option>
                                {altUnitList &&
                                    altUnitList.map((val) => {
                                        console.log(val, "val");
                                    return <option value={val}>{val}</option>;
                  })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Batchwise Tracking</label>
                            <select
                                className="form-control"  onChange={(e)=>handleProductData(e)}>
                                <option></option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Bill Of Material</label>
                            <select
                                className="form-control" 
                                name="billOfMaterial"
                                value={editProductData?.billOfMaterial}
                                 onChange={(e)=>handleProductData(e)}>
                                <option></option>
                                <option value="on">On</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">By Product</label>
                            <select
                                className="form-control"
                                name="byeProduct"
                                value={editProductData?.byeProduct}
                                onChange={(e)=>handleProductData(e)}>
                                <option></option>
                                <option value="on">On</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Gross Weight</label>
                            <input
                                type="text"
                                className="form-control"
                                name="gweight"
                                value={editProductData?.gweight}
                                onChange={(e)=>handleProductData(e)}
                            />
                        </div>
                        <div className="form-group">
                        <label className="form-label">Inward Inspection</label><br></br>
                                <input type="radio" id="yes" name="inward" value="yes" 
                                    
                                 onChange={(e)=>handleProductData(e)}/>
                                <label for="yes" className='yes'>yes</label>
                                <input type="radio" id="No" name="inward" value="No"
                                onChange={(e)=>handleProductData(e)}/>
                                 <label for="No" className='yes'>No</label> 
                           
                        </div>
                       
                        <div className="form-group">
                            <label className="form-label">Minimum Stock Level Qty</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e)=>handleProductData(e)}
                                name="minimumStockLevelQuantity"
                                value={editProductData?.minimumStockLevelQuantity}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Picture</label>
                            <div className="form-control">
                                <input
                                    type={"file"}
                                    name="picture"
                                    onChange={handleFileUpload}
                                    value={editProductData?.picture}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Purpose</label>
                            <textarea
                                rows="5"
                                type="text"
                                name="purpose"
                                value={editProductData?.purpose}
                                className="form-control"
                                onChange={(e)=>handleProductData(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Work Instruction</label>
                            <textarea
                                rows="5"
                                type="text"
                                name="workInst"
                                value={editProductData?.workInst}
                                className="form-control"
                                onChange={(e)=>handleProductData(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Packing Type</label>
                            <select
                                className="form-control" 
                                name="packingType"
                                value={editProductData?.packingType}
                                onChange={(e)=>handleProductData(e)}>
                                <option></option>
                                {packingTypeList &&  packingTypeList.map((val) =>{
                                        return <option value={val}>{val}</option>
                                    })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Peak Month 1 Avg</label>
                            <input
                                type="text"
                                className="form-control"
                                name="avgqty1"
                                value={editProductData?.avgqty1}
                                onChange={(e)=>handleProductData(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Peak Month 2 Avg</label>
                            <input
                                type="text"
                                name="avgqty2"
                                value={editProductData?.avgqty2}
                                className="form-control"
                                onChange={(e)=>handleProductData(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Peak Month 3 Avg</label>
                            <input
                                type="text"
                                name="avgqty3"
                                value={editProductData?.avgqty3}
                                className="form-control"
                                onChange={(e)=>handleProductData(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Stock In Days</label>
                            <input
                                type="text"
                                name="pofreq"
                                value={editProductData?.pofreq}
                                className="form-control"
                                onChange={(e)=>handleProductData(e)}
                            />
                        </div>

                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="df df-sb">
                <div>
                    <button className="btn cancel-btn btn-outline-primary bg-white m-2"onClick={() => navigate("/panel/productmastertable")}>
                        Cancel
                    </button>
                </div>
                <div>
                    <button
                        className="btn primary-btn"
                         onClick={saveProductData}               
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductMaster;
