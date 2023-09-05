import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import "./materialrequest.scss";
import RequestItem from "./RequestItem";
import StockDetails from "./StockDetails";
import { useLocation } from "react-router-dom";
import apiRequest from "../../../utils/helpers/apiRequest";
import { Slide, toast } from "react-toastify";
import ErrorToast from "../../../Component/CustomToast/ErrorToast";
import SuccessToast from "../../../Component/CustomToast/SuccessToast";

const MaterialRequestForm = () => {
  const [conditionInput, setConditionInput] = useState(true);
  const [Description, setDescription] = useState();

  const [recievedDataProductTable, setRecievedDataProductTable] = useState([
    { id: 1, issueDepartment: "Admin" },
  ]);

  console.log("recievedDataProductTable", recievedDataProductTable);
  const [stockDetailsTable, setStockDetailsTable] = useState([
    {
      id: 1,
      data: [],
    },
  ]);

  console.log("stockDetailsTable", stockDetailsTable);
  const [dataToUpdateProductTable, setDataToUpdateProductTable] = useState();
  const [dataToUpdateProductStockDetails, setDataToUpdateProductStockDetails] =
    useState();

  const [mrequest, setMrequest] = useState();
  const [products, setProducts] = useState([]);

  const location = useLocation();

  const getMaterialRequesById = async () => {
    const res = await apiRequest(
      "getMaterialRequestDetails",
      null,
      null,
      `/${location.state.id}`
    );

    console.log("by id: ", res.data);
    if (res.error) {
      setMrequest([]);
    } else {
      setMrequest(res.data);
      setRecievedDataProductTable(res.data.requestItems);
    }
  };

  const handleChangeProductTable = (e, id) => {
    const data = {};
    data[e.target.name] = e.target.value;
    data["id"] = id;
    console.log(data, "PPPP");
    setDataToUpdateProductTable(data);
    console.log("LLLL", dataToUpdateProductTable);

    if (e.target.name === "itemname") {
      // TODO: MAKE THE API CALL HERE TO GET THE STOCK DETAILS

      const stockData = {};
      console.log("stockData", stockData);
      stockData["data"] = [
        {
          itemname: "gunnybags",
          branch: "Branch 1",
          dep: "Department 1 ",
          depId: "1",
          branchId: "1",
          stockQuantity: "800",
          select: "select",
        },
        {
          itemname: "gunnybags",
          branch: "Branch 1",
          dep: "Department 1 ",
          depId: "2",
          branchId: "2",
          stockQuantity: "800",
          select: "select",
        },
        {
          itemname: "gunnybags",
          branch: "Branch w",
          dep: "Department 1 ",
          depId: "3",
          branchId: "3",
          stockQuantity: "100",
          select: "select",
        },
      ];
      stockData["id"] = id;
      setDataToUpdateProductStockDetails(stockData);
    } else {
    }
  };

  const getProductList = async () => {
    const res = await apiRequest("getProductList");
    console.log("PRODUCT LIST", res.data);
    if (res?.error) {
      console.log("PRODUCT LIST ERROR", res.error);
      setProducts([]);
    } else {
      setProducts(res.data);
    }
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
    console.log("Updated Data", updatedData);
    setRecievedDataProductTable(updatedData);
  };
  const materialRequest = async () => {
    console.log("LLLL", recievedDataProductTable);
    const requestItems = recievedDataProductTable.map((val) => {
      return {
        itemName: val?.itemname,
        issueDepartmentId: val?.issueDepartmentId,
        selectLot: val?.selectlot,
        issueBranchId: val?.issueBranchId,
        stockQuantity: val?.stockQuantity,
        stockRequired: val?.stockRequired,
      };
    });
    // console.log(requestItems,"GGGGGG");
    const reqData = {
      requestDescription: Description,
      requestItems: requestItems,
    };
    console.log(reqData, "GGGGGG");

    const res = await apiRequest("saveMaterialRequest", reqData);
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
    }
  };
  const handleUpdateProductStockDetails = () => {
    const currentData = stockDetailsTable;
    const updatedData = currentData.map((data) => {
      if (data.id === dataToUpdateProductStockDetails?.id) {
        delete dataToUpdateProductStockDetails?.id;
        return { ...data, ...dataToUpdateProductStockDetails };
      }
      return data;
    });
    console.log("Updated Data", updatedData);
    setStockDetailsTable(updatedData);
  };

  const handleAddMoreProductTable = () => {
    const totalLength = recievedDataProductTable.length;
    setRecievedDataProductTable((oldData) => [
      ...oldData,
      { id: totalLength + 1 },
    ]);

    setStockDetailsTable((oldData) => [
      ...oldData,
      { id: totalLength + 1, data: [] },
    ]);
  };

  const handleSelectBranch = (e, stockDetails, id) => {
    console.log("SELECT VALUE ::: ", e);
    console.log("SELECT VALUE DETAILS ::: ", stockDetails);
    console.log("SELECT VALUE DETAILS ID WE GET ::: ", id);

    let dataUpdated;

    //TODO: SUBJECTED TO CHANGE WHEN THE API IS IMPLEMENTED

    if (e.target.checked) {
      dataUpdated = recievedDataProductTable.map((val) => {
        if (val?.id === id) {
          const dataToUpdate = val;

          if (stockDetails.branch === val?.branch) {
            dataToUpdate["stockQuantity"] =
              parseInt(val?.stockQuantity) +
              parseInt(stockDetails?.stockQuantity);
            dataToUpdate["department"] = stockDetails?.dep;
          } else {
            dataToUpdate["department"] = stockDetails?.dep;
            dataToUpdate["stockQuantity"] = parseInt(
              stockDetails?.stockQuantity
            );
            dataToUpdate["branch"] = stockDetails?.branch;
            dataToUpdate["issueDepartmentId"] = stockDetails?.depId;
            dataToUpdate["issueBranchId"] = stockDetails?.branchId;
          }

          return dataToUpdate;
        } else {
          return val;
        }
      });
    } else {
      dataUpdated = recievedDataProductTable.map((val) => {
        if (val?.id === id) {
          const dataToUpdate = val;

          if (stockDetails.branch === val?.branch) {
            dataToUpdate["stockQuantity"] =
              parseInt(val?.stockQuantity) -
              parseInt(stockDetails?.stockQuantity);
            dataToUpdate["department"] = stockDetails?.dep;
          } else {
            dataToUpdate["department"] = "";
            dataToUpdate["branch"] = "";
            dataToUpdate["stockQuantity"] = "";
          }

          return dataToUpdate;
        } else {
          return val;
        }
      });
    }

    setRecievedDataProductTable(dataUpdated);
  };

  useEffect(() => {
    setConditionInput(location.state?.form);
    getProductList();

    console.log("location.state.id", location.state.id);
    if (location.state.id) {
      getMaterialRequesById();
    }
  }, []);

  useEffect(() => {
    handleUpdateProductTable();
  }, [dataToUpdateProductTable]);

  useEffect(() => {
    handleUpdateProductStockDetails();
  }, [dataToUpdateProductStockDetails]);

  return (
    <div>
      {console.log("STOCK DETAILS", stockDetailsTable)}
      <h1 className="panel-header">Material Flow</h1>
      <Breadcrumbs />
      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Request Material</h6>
        </div>
        <div className="theme-card-content">
          <div className="df fw">
            <div className="form-group">
              <label className="form-label">Request Description</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {!conditionInput && (
              <>
                <div className="form-group">
                  <label className="form-label">Request ID </label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={mrequest?.requestId}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Request Person</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    value={mrequest?.requestBy}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {conditionInput ? (
        products &&
        products.length > 0 && (
          <RequestItem
            recievedData={recievedDataProductTable}
            handleAddMore={handleAddMoreProductTable}
            handleChange={handleChangeProductTable}
            productList={products}
            viewonly={"false"}
          />
        )
      ) : (
        <RequestItem
          recievedData={recievedDataProductTable}
          handleAddMore={handleAddMoreProductTable}
          handleChange={handleChangeProductTable}
          productList={products}
          viewonly={"true"}
        />
      )}

      {conditionInput &&
        stockDetailsTable &&
        stockDetailsTable.map(
          (val) =>
            val?.data && (
              <StockDetails
                handleSelect={handleSelectBranch}
                colId={val?.id}
                tableData={val?.data}
              />
            )
        )}
      <div className="df df-sb">
        <button className="btn primary-bdr-btn m-2">Cancel</button>
        <button
          className="btn primary-btn"
          onClick={(e) => {
            materialRequest(e);
          }}
        >
          Request
        </button>
      </div>
    </div>
  );
};

export default MaterialRequestForm;
