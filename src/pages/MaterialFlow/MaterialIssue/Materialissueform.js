import React, { useEffect, useState } from "react";
import "./materialissue.scss";
import MaterialIssueTab from "./materialissuetab";
import MaterialBinTab from "./Materialbintab";
import { useLocation } from "react-router-dom";

const MaterialIssueForm = () => {
  const issueItems = {
    itemname: "Item 1",
    issuedfrombin: "Bin 1, Bin 2",
    issuedfromabtch: "Batch 1, Batch 2",
    requestedquantity: 2000,
    allocatedquantity: "0",
    pendingquantity: "",
    issue: false,
  };

  const binData = [
    {
      binid: "1024",
      batchno: "Batch 1",
      stock: "21,000",
      takenissued: "",
    },
    {
      binid: "1025",
      batchno: "Batch 2",
      stock: "21,000",
      takenissued: "",
    },
  ];

  const [receiveData, setReceiveData] = useState([{ ...issueItems, id: 0 }]);

  const [binDetails, setBinDetails] = useState([
    {
      id: 0,
      data: binData,
    },
  ]);

  console.log("binDetails", binDetails);

  console.log("reciveData", receiveData);
  const location = useLocation();

  // const [issueQuantity, setIssueQuantity] = useState()

  const handleChange = (e, obj, id, key) => {
    console.log("aaaa", { e, obj, id, key });

    let totalissued = 0;

    const tab = [...receiveData];
    const bin = [...binDetails];
    const rowObj = { ...bin[id] };
    console.log("rowobj", { rowObj });
    const row = { ...rowObj.data.filter((elem) => elem.binid === obj)[0] };
    row[key] = e.target.value;
    bin[id].data = rowObj.data.map((elem) => {
      if (elem.binid === obj) elem = row;
      return elem;
    });
    bin[id].data.map((elem) => {
      console.log({ key: elem[key] });
      if (parseInt(elem[key])) totalissued += parseInt(elem[key]);
    });
    console.log("totalissued", totalissued);

    tab[id]["allocatedquantity"] = totalissued;
    tab[id]["pendingquantity"] = tab[id]["requestedquantity"] - totalissued;

    setReceiveData(tab);
    setBinDetails(bin);
  };

  const handleAddMore = () => {
    const totalLength = receiveData.length;
    setReceiveData((oldData) => [
      ...oldData,
      { ...issueItems, id: totalLength + 1 },
    ]);
    setBinDetails((oldData) => [
      ...oldData,
      { id: totalLength + 1, data: [...binData] },
    ]);
  };

  useEffect(() => {
    console.log(location.state, "lll");
  });
  return (
    <div>
      <div>
        <p className="employee-1">Material Flow</p>
        <p className="employee-2">Material Flow</p>
      </div>
      <div className="theme-card">
        <div className="theme-card-header">
          <h6>Material Issue</h6>
        </div>
        <div className="theme-card-content">
          <div className="df fw">
            <div className="form-group">
              <label className="form-label">Requested Name</label>
              <input
                type="text"
                value={location.state?.requestName}
                required
                className="form-control"
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="form-label">Request ID</label>
              <input
                type="text"
                value={location.state?.requestId}
                required
                className="form-control"
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="form-label">Issue Person </label>
              <input type="text" required className="form-control" readOnly />
            </div>
            <div className="form-group">
              <label className="form-label">Issue Date </label>
              <input type="text" required className="form-control" readOnly />
            </div>
          </div>
        </div>
      </div>

      <div>
        <MaterialIssueTab
          handleAddMore={handleAddMore}
          receiveData={receiveData}
        />
      </div>
      <div>
        {/* <MaterialBinTab handleChange={handleChange} binDetails={binDetails} /> */}
        {console.log({ binDetails })}
        {binDetails &&
          binDetails.map(
            (val, index) =>
              val?.data && (
                <MaterialBinTab
                  handleChange={handleChange}
                  Id={index}
                  binDetails={val?.data}
                />
              )
          )}
      </div>

      <div className="Forward-form-button">
        <div>
          <button className="btn btn-outline-primary bg-white m-2">
            Cancel
          </button>
        </div>
        <div>
          <button className="btn primary-btn">Issue</button>
        </div>
      </div>
    </div>
  );
};

export default MaterialIssueForm;
