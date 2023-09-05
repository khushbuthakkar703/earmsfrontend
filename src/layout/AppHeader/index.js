import "./appHeader.scss";
import React, { useEffect, useState } from "react";
import User from "../../assets/user.png";
import Bell from "../../assets/Bell.svg";
import apiRequest from "../../utils/helpers/apiRequest";
import { storage_items } from "../../constants/constantValues";
import { useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
const AppHeader = () => {
  const [branchList, setBranchList] = useState([]);
  const [organizationalList, setOrganizationalList] = useState([]);
  const [userData, setUserData] = useState({});

  const navigation = useNavigate();

  const getHeaderDetails = async () => {
    const res = await apiRequest("headerDetails");

    if (res.error) {
      setBranchList([]);
    } else {
      setBranchList(res.data?.branchList);
      setOrganizationalList(res.data?.organizationList);
      setUserData(res.data?.userDetails);

      if (!localStorage.getItem(storage_items.selectedOrg)) {
        localStorage.setItem(
          storage_items.selectedOrg,
          JSON.stringify(res.data?.organizationList[0])
        );
      }

      if (!localStorage.getItem(storage_items.selectedBranch)) {
        localStorage.setItem(
          storage_items.selectedBranch,
          JSON.stringify(res.data?.branchList[0])
        );
      }

      localStorage.setItem(
        storage_items.barnchList,
        JSON.stringify(res.data?.branchList)
      );

      localStorage.setItem(
        storage_items.organizationalList,
        JSON.stringify(res.data?.organizationList)
      );
    }
  };

  const handleSelect = (name, type) => {
    if (type === "branch") {
      localStorage.setItem(storage_items.selectedBranch, name);
    } else if (type === "org") {
      localStorage.setItem(storage_items.selectedOrg, name);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigation("/signin");
  };

  useEffect(() => {
    getHeaderDetails();
  }, []);

  return (
    <div className="app-header-base df">
      <div className="logo df dc">Idhayam</div>
      <div className="df header-right df-sb">
        <select onChange={(e) => handleSelect(e.target.value, "org")}>
          {organizationalList.length > 0 &&
            organizationalList.map((val) => (
              <option style={{ color: "black" }} value={JSON.stringify(val)}>
                {val.name}
              </option>
            ))}
        </select>
        <div className="df">
          <select onChange={(e) => handleSelect(e.target.value, "branch")}>
            {branchList.length > 0 &&
              branchList.map((val) => (
                <option style={{ color: "black" }} value={JSON.stringify(val)}>
                  {val.branchName}
                </option>
              ))}
          </select>

          <div className="bell-icon">
            <img src={Bell} alt="Bell" />

            <span className=" dc df">3</span>
          </div>
          <div className="df">
            <div className="user-img">
              <img src={User} alt="username" title="username" />
            </div>
            <div className="user-details">
              <div className="user-list">
                <div>
                  <h6>{userData?.employeename}</h6>
                  <p>{userData?.role?.name}</p>
                </div>
                <BiChevronDown style={{ marginLeft: "10px", color: "white" }} />
              </div>
              <div class="dropdown-content">
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
