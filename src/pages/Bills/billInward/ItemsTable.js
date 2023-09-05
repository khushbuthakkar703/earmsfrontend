import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Tables from "../../../Component/Tables/Tables";

const ItemsTable = ({
  recievedData,
  handleAddMore,
  handleChange,
  productList,
}) => {
  const recievedColumns = [
    {
      Header: "Products",
      accessor: "products",
      Cell: ({ row }) => {
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
      Header: "Description",
      accessor: "desc",
      Cell: ({ row }) => {
        return (
          <input
            type="text"
            className="form-control"
            style={{ width: "250px" }}
            name="description"
            value={row.original.description}
            onChange={(e) => handleChange(e, row.original?.id)}
          />
        );
      },
    },

    {
      Header: "Package type",
      accessor: "type",
      Cell: ({ row }) => {
        return (
          <select
            className="form-control  form-select table-select "
            style={{ width: "150px" }}
            name="packageType"
            value={row.original.packageType}
            onChange={(e) => handleChange(e, row.original?.id)}
          >
            <option>Select Product</option>
            <option>Product 1</option>
            <option>Product 2</option>
            <option>Product 3</option>
            <option>Product 4</option>
          </select>
        );
      },
    },
    {
      Header: "Per Bag Weight",
      accessor: "bagPerWait",
      Cell: ({ row }) => {
        return (
          <input
            type="text"
            className="form-control"
            style={{ width: "250px" }}
            name="bagPerWait"
            value={row.original.bagPerWait}
            onChange={(e) => handleChange(e, row.original?.id)}
          />
        );
      },
    },
    {
      Header: "Package Quantity",
      accessor: "packageQuantity",
      Cell: ({ row }) => {
        return (
          <input
            type="text"
            className="form-control"
            style={{ width: "250px" }}
            name="packageQuantity"
            value={row.original.packageQuantity}
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

export default ItemsTable;
