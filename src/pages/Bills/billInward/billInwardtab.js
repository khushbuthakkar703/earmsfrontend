import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IoMdAddCircle } from "react-icons/io";
import ItemsTable from "./ItemsTable";
import ProductTable from "./productTable";

const BillInwardtab = ({
  recievedDataProductTable,
  handleChangeProductTable,
  handleAddMoreProductTable,
  recievedDataItemTable,
  handleChangeItemTable,
  handleAddMoreItemTable,
  productList = [],
  vendorList = [],
}) => {
  return (
    <div className="custom-tab">
      <Tabs
        defaultActiveKey="Products"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Products" title="Products">
          <ProductTable
            handleAddMore={handleAddMoreProductTable}
            handleChange={handleChangeProductTable}
            recievedData={recievedDataProductTable}
            productList={productList}
            vendorList={vendorList}
          />
        </Tab>
        <Tab eventKey="Items" title="Items Received">
          <ItemsTable
            handleAddMore={handleAddMoreItemTable}
            handleChange={handleChangeItemTable}
            recievedData={recievedDataItemTable}
            productList={productList}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default BillInwardtab;
