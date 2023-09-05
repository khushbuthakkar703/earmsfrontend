import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../../Component/Tables/Tables";
import "./materialrequest.scss";
import { IoMdAddCircle } from "react-icons/io";

const RequestItem = ({
  handleAddMore,
  handleChange,
  recievedData,
  productList,
  viewonly,
}) => {
  const lot = [
    {
      id: "1",
      lotName: "80kgs",
    },
    {
      id: "2",
      lotName: "74kgs",
    },
    {
      id: "3",
      lotName: "56kgs",
    },
    {
      id: "4",
      lotName: "1",
    },
  ];
  const recievedColumns = [
    {
      Header: "Item Name",
      accessor: "itemname",
      Cell: ({ row }) => {
        return !viewonly ? (
          <select
            className="form-control  form-select table-select "
            style={{ width: "150px" }}
            name="itemname"
            onChange={(e) => {
              handleChange(e, row.original?.id);
            }}
          >
            <option value="">Select</option>
            {productList &&
              productList.map((val) => (
                <option value={val.productName}>{val.productName}</option>
              ))}
          </select>
        ) : (
          row.original?.itemName
        );
      },
    },
    {
      Header: "Select Lot",
      accessor: "selectlot",
      Cell: ({ row }) => {
        console.log(row.original);
        return !viewonly ? (
          <select
            className="form-control  form-select table-select "
            style={{ width: "150px" }}
            name="selectlot"
            onChange={(e) => handleChange(e, row.original?.id)}
          >
            <option>Select Lot</option>
            {lot &&
              lot.map((val) => (
                <option value={val.lotName}>{val.lotName}</option>
              ))}
          </select>
        ) : (
          row.original?.selectLot
        );
      },
    },
    {
      Header: "Issue Department",
      accessor: "department",
    },
    {
      Header: "Issue Branch",
      accessor: "branch",
    },
    {
      Header: "Stock Quantity",
      accessor: "stockQuantity",
    },
    {
      Header: "Stock Required",
      accessor: "stockRequired",
      Cell: ({ row }) => {
        console.log("ROW ORIGINAL", row.original);

        return !viewonly ? (
          <input
            type="text"
            className="form-control"
            style={{ width: "250px" }}
            name="stockRequired"
            onChange={(e) => handleChange(e, row.original?.id)}
          />
        ) : (
          row.original?.stockRequired
        );
      },
    },
  ];

  useEffect(() => {
    console.log("oo", productList);
  });

  return (
    <div className="custom-tab">
      <Tabs defaultActiveKey="requestitem" id="requesttab" className="mb-3">
        <Tab eventKey="requestitem" title="Request Item">
          <Table
            recievedColumns={recievedColumns}
            recievedData={recievedData}
          />
          <button className="btn add-btn m-2 df dc" onClick={handleAddMore}>
            <IoMdAddCircle />
            Add More
          </button>
        </Tab>
      </Tabs>
    </div>
  );
};

export default RequestItem;
