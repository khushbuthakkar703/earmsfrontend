import React, { useEffect, useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Tables from "../../../Component/Tables/Tables";

const ProductTable = ({
  handleAddMore,
  handleChange,
  recievedData,
  productList,
  vendorList,
}) => {
  const num = Math.floor(Math.random() * 90000) + 10000;
  const recievedColumns = [
    {
      Header: "Products",
      accessor: "products",
      Cell: ({ row }) => {
        console.log("row", row);
        return (
          <select
            className="form-control  form-select table-select "
            style={{ width: "150px" }}
            name="products"
            value={row.original.products}
            onChange={(e) => handleChange(e, row.original?.id)}
          >
            <option>Select Product</option>
            {productList &&
              productList.map((val) => (
                <option
                  value={JSON.stringify({
                    productId: val?.id,
                    lot: val?.lot,
                  })}
                >
                  {val?.productName}
                </option>
              ))}
          </select>
        );
      },
    },
    {
      Header: "Product Id",
      accessor: "productId",
      Cell: ({ row }) => {
        return (
          <input
            className="form-control"
            style={{ width: "250px" }}
            name="productId"
            value={row.original.id}
            readOnly
          />
        );
      },
    },
    {
      Header: "Vendor Id",
      accessor: "vendorId",
      Cell: ({ row }) => {
        return (
          <input
            className="form-control"
            style={{ width: "250px" }}
            name="vendorId"
            value={row.original.vendorId}
            readOnly
          />
        );
      },
    },
    {
      Header: "lorrySerialNo",
      accessor: "lorryserialno",
      Cell: ({ row }) => {
        return (
          <input
            type="text"
            className="form-control"
            style={{ width: "250px" }}
            name="lorrySerialNo"
            value={row.original.lorrySerialNo}
            onChange={(e) => handleChange(e, row.original?.id)}
          />
        );
      },
    },
    {
      Header: "Batch No",
      accessor: "batchNo",
      Cell: ({ row }) => {
        return (
          <input
            className="form-control"
            style={{ width: "250px" }}
            name="batchNo"
            value={num}
            readonly
          />
        );
      },
    },
    {
      Header: "HSN Code",
      accessor: "hsnCode",
      Cell: ({ row }) => {
        return (
          <input
            type="text"
            className="form-control"
            style={{ width: "250px" }}
            name="hsnCode"
            value={row.original.hsnCode}
            onChange={(e) => handleChange(e, row.original?.id)}
          />
        );
      },
    },
    {
      Header: "Quantity",
      accessor: "quantity",
      Cell: ({ row }) => {
        return (
          <input
            type="text"
            className="form-control"
            style={{ width: "250px" }}
            name="quantity"
            value={row.original.quantity}
            onChange={(e) => handleChange(e, row.original?.id)}
          />
        );
      },
    },
    {
      Header: "UoM",
      accessor: "uom",
      Cell: ({ row }) => {
        return (
          <select
            className="form-control  form-select table-select "
            style={{ width: "150px" }}
            name="uom"
            value={row.original.uom}
            onChange={(e) => handleChange(e, row.original?.id)}
          >
            <option>Select Uom</option>
            <option>Product 1</option>
            <option>Product 2</option>
            <option>Product 3</option>
            <option>Product 4</option>
          </select>
        );
      },
    },
    {
      Header: "Unit Price",
      accessor: "price",
      Cell: ({ row }) => {
        return (
          <input
            type="text"
            className="form-control"
            style={{ width: "250px" }}
            name="unitPrice"
            value={row.original.unitPrice}
            onChange={(e) => handleChange(e, row.original?.id)}
          />
        );
      },
    },
    {
      Header: "Taxes",
      accessor: "taxes",
      Cell: ({ row }) => {
        return (
          <input
            className="form-control  form-select table-select "
            style={{ width: "150px" }}
            name="taxes"
            value={row.original.taxes}
            onChange={(e) => handleChange(e, row.original?.id)}
          />
        );
      },
    },
    {
      Header: "Subtotal",
      accessor: "subtotal",
      Cell: ({ row }) => {
        return (
          <input
            type="text"
            className="form-control"
            style={{ width: "250px" }}
            name="subTotal"
            value={row.original.subTotal}
            onChange={(e) => handleChange(e, row.original?.id)}
          />
        );
      },
    },
  ];

  return (
    <>
      {productList && productList.length > 0 && (
        <Tables recievedColumns={recievedColumns} recievedData={recievedData} />
      )}
      <button className="btn add-btn m-2 df dc" onClick={handleAddMore}>
        <IoMdAddCircle />
        Add More
      </button>
    </>
  );
};

export default ProductTable;
