import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import "./billinward.scss";
import BillInwardTab from "./billInwardtab";
import AuthScreen from "../../../Component/AuthScreen";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import apiRequest from "../../../utils/helpers/apiRequest";
import getBase64 from "../../../utils/getBase64";
import { Toast } from "reactstrap";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import { Slide, toast } from "react-toastify";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";
import { ContactPageSharp } from "@mui/icons-material";

// TODO: WHERE TO GET  "lorrySerialNo" FOR PRODUCTS TABLE DATA.
// TODO: WHERE TO GET  "lorrySerialNo" FOR ITEMS RECIECED TABLE DATA.
const BillInwardForm = () => {
  const [recievedDataProductTable, setRecievedDataProductTable] = useState([
    { id: 1, lorrySerialNo: "", hsnCode: "", subTotal: "" },
  ]);

  const [dataToUpdateProductTable, setDataToUpdateProductTable] = useState();
  const [recievedDataItemTable, setRecievedDataItemTable] = useState([
    { id: 1 },
  ]);

  const [dataToUpdateItemTable, setDataToUpdateItemTable] = useState();
  const [type, setType] = useState("");
  const [branchList, setBranchList] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [fileData, setfileData] = useState();
  const [billInward, setBillInward] = useState();
  const [poDetails, setPODetails] = useState();
  const [billInwardId, setBillInwardId] = useState(null);
  const [productDtos, setProductDtos] = useState([]);

  console.log("productDtos", productDtos);
  console.log("productList", productList);
  console.log("poDetails", poDetails);

  const [formData, setFormData] = useState({
    billDate: "",
    cessTax: "",
    deliverBranchId: "",
    ewayBill: "",
    inwardBranchId: "",
    purchaseOrderId: "",
    batchNo: Math.floor(Math.random() * 90000) + 10000,
    productCategory: "",
    receivedDate: "",
    referenceNumber: "",
    tcs: "",
    vendorId: "",
  });

  useEffect(() => {
    if (formData.purchaseOrderId) {
      const poNumberId = formData.purchaseOrderId;
      const res = apiRequest(
        "purchaseOrderFilterListByPONumber",
        null,
        null,
        `/${poNumberId}`,
      ).then((res) => {
        if (res.error) {
          setPODetails([]);
        } else {
          setPODetails(res.data);
          const productMasterDtos = res.data[0].productMasterDtos;
          const productMasterTaxGstMappingDtos =
            res.data[0].productMasterTaxGstMappingDtos;
          const resProductDtos = [];
          const resProductList = [];
          for (let i = 0; i < productMasterDtos.length; i++) {
            const findItem = productMasterTaxGstMappingDtos.find(
              (item) => item.productMasterId === productMasterDtos[i].id,
            );
            resProductList.push(productMasterDtos[i]);
            resProductDtos.push({
              ...productMasterDtos[i],
              master_dtos: findItem,
            });
          }
          setProductDtos(resProductDtos);
          setProductList(resProductList);
        }
      });
    }
  }, [formData.purchaseOrderId]);
  const location = useLocation();
  const navigation = useNavigate();

  const handleSaveBillInward = async (e) => {
    // const reqData = {
    //   inwardBranchId: 1,
    //   deliverBranchId: 1,
    //   receivedDate: '22/09/2022',
    //   vendorName: 'v.ghr',
    //   referenceNumber: '3456789',
    //   // hsnCode: '45678',
    //   poNumber: '46789',
    //   lotInKg: '80',
    //   tcs: 'tcs',
    //   batchNo: 'b1-5678',
    //   ewayBill: 'ewaybill',
    //   cessTax: '5678',
    //   lorryNo: 'TH4567AU56',
    //   billCopy: 'aygduadkakdnlanxankxnalnxlankxnakxklabxklbaklcbal',
    //   billInwardValue: {
    //     products: 'seesamseed',
    //     description: 'seasames',
    //     quantity: '23',
    //     uoM: 'dfgg',
    //     unitPrice: 'base64',
    //     Taxes: '5678',
    //     Subtotal: '567',
    //   },
    // }

    if (!fileData || !formData?.deliverBranchId || !formData?.inwardBranchId) {
      toast(<ErrorToast body="All fields are required" />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000,
      });
    } else {
      const reqBody = {
        ...formData,
        receivedDate: new Date(formData.receivedDate).toLocaleDateString(
          "en-GB",
        ),
        billDate: new Date(formData.billDate).toLocaleDateString("en-GB"),
        billCopy: "aygduadkakdnlanxankxnalnxlankxnakxklabxklbaklcbal",
        products: recievedDataProductTable,
        itemReceives: recievedDataItemTable,
      };

      if (billInwardId) {
        const res = await apiRequest("updateBillInward", {
          ...reqBody,
          id: billInwardId,
        });
        if (res.error) {
          toast(<ErrorToast body="Request Failed" />, {
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

          navigation(-1);
        }
      } else {
        const res = await apiRequest("saveBillInward", reqBody);
        if (res.error) {
          toast(<ErrorToast body="Request Failed" />, {
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
          navigation(-1);
        }
      }
    }
  };

  const getBillInwardDetails = async (id) => {
    const res = await apiRequest("getBillInwardDetails", null, null, `/${id}`);
    if (res.error) {
      setBillInward([]);
    } else {
      setBillInward(res.data);
      var billInput = res.data.billDate;
      var billOutput = billInput.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$2-$1");
      var receiveInput = res.data.receivedDate;
      var receiveOutput = receiveInput.replace(
        /(\d\d)\/(\d\d)\/(\d{4})/,
        "$3-$2-$1",
      );
      setFormData((prevState) => ({
        ...prevState,
        inwardBranchId: res.data.inwardBranchId,
        deliverBranchId: res.data.deliverBranchId,
        receivedDate: receiveOutput,
        billDate: billOutput,
        vendorId: res.data.vendorId,
        referenceNumber: res.data.referenceNumber,
        purchaseOrderId: res.data.purchaseOrderId,
        // hsnCode: res.data.hsnCode,
        tcs: res.data.tcs,
        ewayBill: res.data.ewayBill,
        cessTax: res.data.cessTax,
        productCategory: res.data.productCategory,
        billCopy: res.data.billCopy,
      }));
    }
    const productReceivedata = res.data.products.map((item) => {
      return {
        id: item.id,
        products: item.productName,
        vendorId: res.data.vendorId,
        lorrySerialNo: item.lorrySerialNo,
        quantity: item.quantity,
        uom: item.uom,
        unitPrice: item.unitPrice,
        taxes: item.taxes,
        subTotal: item.subTotal,
        hsnCode: item.hsnCode,
      };
    });
    const itemReceivedata = res.data.itemReceives.map((item) => {
      return {
        id: item.id,
        products: item.productId,
        description: item.description,
        packageType: item.packageType,
        bagPerWait: item.bagPerWait,
        packageQuantity: item.packageQuantity,
      };
    });
    setRecievedDataProductTable(productReceivedata);
    setRecievedDataItemTable(itemReceivedata);
  };

  const handleChangeProductTable = (e, id) => {
    const handleproduct = JSON.parse(e.target.value);

    const productData = productDtos.find(
      (item) => item.id === handleproduct.productId,
    );
    console.log("poDetails[0].vendorId", poDetails, poDetails[0].vendorId);
    setRecievedDataProductTable([
      {
        id: productData.id,
        quantity: productData.master_dtos.quantity,
        unitPrice: productData.master_dtos.unitPrice,
        taxes: productData.master_dtos.taxPercentage,
        lorrySerialNo: recievedDataProductTable.lorrySerialNo,
        hsnCode: productData.hsnRefId,
        subTotal: recievedDataProductTable.subTotal,
        vendorId: poDetails.length > 0 ? poDetails[0].vendorId : null,
      },
    ]);
    const data = {};

    if (e.target.name === "products") {
      const selectedProduct = JSON.parse(e.target.value);
      data["productId"] = selectedProduct?.productId;
      data["lot"] = selectedProduct?.lot;
      data["id"] = id;
    } else {
      data[e.target.name] = e.target.value;
      data["id"] = id;
    }

    setDataToUpdateProductTable(data);
  };

  const handleUpdateProductTable = () => {
    const currentData = recievedDataProductTable;
    const updatedData = currentData.map((data) => {
      if (data.id === dataToUpdateProductTable?.id) {
        delete dataToUpdateProductTable?.id;
        return { ...data, ...dataToUpdateProductTable };
      }

      return data;
    });

    setRecievedDataProductTable(updatedData);
  };

  const handleFormDataUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handlePoDataUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleVendorDataUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    let recievedDataProductTableNew = recievedDataProductTable.map((item) => {
      return { ...item, vendorId: +value };
    });
    setRecievedDataProductTable(recievedDataProductTableNew);
  };

  const handleFormReceiveUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormBillUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddMoreProductTable = () => {
    const totalLength = recievedDataProductTable.length;
    setRecievedDataProductTable((oldData) => [
      ...oldData,
      { id: totalLength + 1 },
    ]);
  };

  const handleChangeItemTable = (e, id) => {
    const data = {};

    if (e.target.name === "products") {
      const selectedProduct = JSON.parse(e.target.value);
      data["productId"] = selectedProduct?.productId;
      data["lot"] = selectedProduct?.lot;
      data["id"] = id;
    } else {
      data[e.target.name] = e.target.value;
      data["id"] = id;
    }

    setDataToUpdateItemTable(data);
  };

  const handleUpdateItemTable = () => {
    const currentData = recievedDataItemTable;

    const updatedData = currentData.map((data) => {
      if (data.id === dataToUpdateItemTable?.id) {
        delete dataToUpdateItemTable?.id;
        return { ...data, ...dataToUpdateItemTable };
      }

      return data;
    });

    setRecievedDataItemTable(updatedData);
  };

  const handleAddMoreItemTable = () => {
    const totalLength = recievedDataItemTable.length;
    setRecievedDataItemTable((oldData) => [
      ...oldData,
      { id: totalLength + 1 },
    ]);
  };

  const getVendorList = async () => {
    const res = await apiRequest("vendorList");
    console.log(res);

    if (res.error) {
      setVendorList([]);
    } else {
      setVendorList(res.data);
    }
  };
  // const getProductList = async () => {
  //   const res = await apiRequest("getProductMasterList"); //getProductList
  //   if (res.error) {
  //     setProductList([]);
  //   } else {
  //     setProductList(res.data);
  //   }
  // };

  const getInitialData = async () => {
    const formType = location.state;
    const allBranchList = JSON.parse(localStorage.getItem("barnchList"));

    setType(formType?.purpose);
    setBranchList(allBranchList);
    getVendorList();
    // getProductList();
  };

  const handleFileUpload = async (e) => {
    let data = await getBase64(e.target.files[0]);
    setfileData(data);
  };

  useEffect(() => {
    setBillInwardId(location.state.id);
    if (location.state.id) {
      getBillInwardDetails(location.state.id);
    }
  }, []);

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    handleUpdateProductTable();
  }, [dataToUpdateProductTable]);

  useEffect(() => {
    handleUpdateItemTable();
  }, [dataToUpdateItemTable]);

  return (
    <AuthScreen>
      <div>
        <h1 className="panel-header">Bills</h1>
        <Breadcrumbs />
        <div className="theme-card">
          <div className="theme-card-header">
            <h6>Bill Inward</h6>
          </div>
          <div className="theme-card-content">
            <div className="d-flex fw">
              <div className="form-group">
                <label className="form-label">Bill Inward Branch</label>
                <select
                  className="form-control  form-select"
                  name="inwardBranchId"
                  onChange={handleFormDataUpdate}
                  value={formData.inwardBranchId}
                >
                  <option>Select Branch</option>
                  {branchList &&
                    branchList.map((val) => (
                      <option value={val?.id}>{val?.branchName}</option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Goods Deliverd Branch</label>
                <select
                  className="form-control  form-select"
                  name="deliverBranchId"
                  onChange={handleFormDataUpdate}
                  value={formData.deliverBranchId}
                >
                  <option value="">Select Branch</option>
                  {branchList &&
                    branchList.map((val) => (
                      <option value={val?.id}>{val?.branchName}</option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Received Date </label>
                <input
                  type="date"
                  className="form-control"
                  name="receivedDate"
                  onChange={handleFormReceiveUpdate}
                  value={formData.receivedDate}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Bill Date </label>
                <input
                  type="date"
                  className="form-control"
                  name="billDate"
                  onChange={handleFormBillUpdate}
                  value={formData.billDate}
                />
              </div>
              <div className="form-group">
                <label className="form-label">PO Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="purchaseOrderId"
                  onChange={handlePoDataUpdate}
                  value={formData.purchaseOrderId}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Vendor Name</label>
                <select
                  className="form-control  form-select"
                  name="vendorId"
                  onChange={handleVendorDataUpdate}
                  value={formData.vendorId}
                >
                  <option val="">Select</option>
                  {poDetails && poDetails.length > 0 ? (
                    poDetails.map((val) => (
                      <option value={val?.vendorName}>{val?.vendorName}</option>
                    ))
                  ) : (
                    <>
                      <option val={1}>Vendor Name 1</option>
                      <option val={2}>Vendor Name 2</option>
                      <option val={3}>Vendor Name 3</option>
                      <option val={4}>Vendor Name 4</option>
                    </>
                  )}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Reference Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="referenceNumber"
                  onChange={handleFormDataUpdate}
                  value={formData.referenceNumber}
                />
              </div>

              {/* <div className="form-group">
                <label className="form-label">HSN Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="hsnCode"
                  onChange={handleFormDataUpdate}
                  value={formData.hsnCode}
                />
              </div> */}
              {type === "view" && (
                <div className="form-group">
                  <label className="form-label">Lot (in KG)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lot"
                    readOnly
                  />
                </div>
              )}

              <div className="form-group">
                <label className="form-label">TCS</label>
                <input
                  type="text"
                  className="form-control"
                  name="tcs"
                  onChange={handleFormDataUpdate}
                  value={formData.tcs}
                />
              </div>

              {/* <div className="form-group">
                <label className="form-label">Batch No</label>
                <input
                  className="form-control"
                  readOnly
                  name="batchNo"
                  value={formData.batchNo}
                />
              </div> */}

              <div className="form-group">
                <label className="form-label">E Way Bill</label>
                <input
                  type="text"
                  RawMaterial
                  className="form-control"
                  name="ewayBill"
                  onChange={handleFormDataUpdate}
                  value={formData.ewayBill}
                />
              </div>

              <div className="form-group">
                <label className="form-label">CESS (Tax)</label>
                <input
                  type="text"
                  className="form-control"
                  name="cessTax"
                  onChange={handleFormDataUpdate}
                  value={formData.cessTax}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Product Category</label>
                <select
                  className="form-control  form-select"
                  name="productCategory"
                  onChange={handleFormDataUpdate}
                  value={formData.productCategory}
                >
                  <option>Select </option>
                  {productList && productList.length > 0 ? (
                    productList.map((val) => (
                      <option value={val?.productCategory}>
                        {val?.productCategory}
                      </option>
                    ))
                  ) : (
                    <>
                      <option val={1}>consumables</option>
                      <option val={2}>RawMaterial</option>
                    </>
                  )}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Bill Copy</label>
                <input
                  type="file"
                  className="form-control"
                  name="billCopy"
                  onChange={handleFileUpload}
                  // value={formData.billCopy}
                />
              </div>
            </div>
          </div>
        </div>
        <BillInwardTab
          recievedDataProductTable={recievedDataProductTable}
          handleChangeProductTable={handleChangeProductTable}
          handleAddMoreProductTable={handleAddMoreProductTable}
          recievedDataItemTable={recievedDataItemTable}
          handleChangeItemTable={handleChangeItemTable}
          handleAddMoreItemTable={handleAddMoreItemTable}
          productList={productList}
          vendorList={vendorList}
        />
        <div className="df df-sb">
          <button className="btn primary-bdr-btn m-2">Cancel</button>
          <button
            className="btn primary-btn"
            type="submit"
            onClick={handleSaveBillInward}
          >
            Save
          </button>
        </div>
      </div>
    </AuthScreen>
  );
};

export default BillInwardForm;
