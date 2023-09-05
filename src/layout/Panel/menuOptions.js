import "./panel.scss";
import { AiOutlineUser } from "react-icons/ai";
import { MdSpeed, MdMenuBook } from "react-icons/md";
import {
  FaAward,
  FaDollyFlatbed,
  FaCogs,
  FaWpforms,
  FaSearch,
  FaWarehouse,
  FaFileInvoice,
  FaDollarSign,
  FaCog,
} from "react-icons/fa";

const menuOptions = [
  {
    title: "Dashboard",
    icon: <MdSpeed className="menu-items-icons" />,
  },
  // {
  //   title: 'Rewards',
  //   icon: <FaAward className='menu-items.icons' />,
  //   pathName: '/panel/mdrewards',
  // },
  {
    icon: <AiOutlineUser className="menu-items-icons" />,
    title: "Employees",
    innerMenu: [
      {
        title: "Fingerprint",
        pathName: "/panel/fingerprint",
      },

      {
        title: "Shift Rotation",
        pathName: "/panel/shiftrotation",
      },
      {
        title: "Shift Rotation View",
        pathName: "/panel/shiftrotationview",
      },
      {
        title: "Shift Allotment",
        pathName: "/panel/shiftallotment",
      },

      {
        title: "Attendance (Admin)",
        pathName: "/panel/attendanceadmin",
      },
      {
        title: "Attendance (User)",
        pathName: "/panel/attendanceuser",
      },
      {
        title: "Duty Transfer",
        pathName: "/panel/dutytransfer",
      },
      {
        title: "Duty allotment",
        pathName: "/panel/dutyAllotmenttable",
      },
      {
        title: "Leave (Approval)",
        pathName: "/panel/leaveapproval",
      },
      {
        title: "Leave",
        pathName: "/panel/leaverequest",
      },
      {
        title: "Salary",
        pathName: "/panel/salary", // Please update the following
      },
      {
        title: "Staff",
        pathName: "/panel/stafftable",
      },

      {
        title: "Medical Checkup",
        pathName: "/panel/medicalcheckup",
      },
    ],
  },
  {
    title: "Employee Details",
    pathName: "/panel/Employee",
  },
  {
    icon: <MdSpeed className="menu-items-icons" />,
    title: "Bills",
    innerMenu: [
      {
        title: "Bill Inward",
        pathName: "/panel/billInward",
      },
      {
        title: "Bill Forward",
        pathName: "/panel/billsforward",
      },
      {
        title: "Bill Receive",
        pathName: "/panel/billsreceive",
      },
      {
        title: "Bill Exchange",
        pathName: "/panel/billsexchangetable",
      },
      {
        title: "DP Entry",
        pathName: "/panel/dpentrytable",
      },
    ],
  },
  {
    icon: <FaDollyFlatbed className="menu-items-icons" />,
    title: "Material Flow",
    innerMenu: [
      {
        title: "Material Request",
        pathName: "/panel/materialRequest",
      },
      {
        title: "Material Issue",
        pathName: "/panel/materialissuetable",
      },
      {
        title: "Within Branch Receipt",
        pathName: "/panel/wpr",
      },
      {
        title: "Other Branch Issue",
        pathName: "/panel/opi",
      },
      {
        title: "Intra  Branch Receipt",
        pathName: "/panel/plantreceivetable",
      },
      {
        title: "Within Branch Distribution",
        pathName: "/panel/wpr",
      },
      {
        title: "Other Branch Receipt",
        pathName: "/panel/wpr",
      },
      {
        title: "Within Branch Receive",
        pathName: "/panel/wpr",
      },
    ],
  },
  {
    icon: <FaAward className="menu-items-icons" />,
    title: "Awards",
    innerMenu: [
      {
        title: "Award List",
        pathName: "/panel/rewardsList",
      },
      {
        title: "Employee List",
        pathName: "/panel/rewards",
      },
      {
        title: "Employee View",
        pathName: "/panel/awardstable",
      },
    ],
  },
  {
    icon: <FaCogs className="menu-items-icons" />,
    title: "Production",
  },
  {
    icon: <MdMenuBook className="menu-items-icons" />,
    title: "Journal",
  },
  {
    icon: <FaSearch className="menu-items-icons" />,
    title: "Admin inspection",
  },
  {
    icon: <FaWarehouse className="menu-items-icons" />,
    title: "Day End Stock",
  },
  {
    icon: <FaFileInvoice className="menu-items-icons" />,
    title: "Inward Insp Entry",
    path: "/panel/iietable",
  },
  {
    icon: <FaFileInvoice className="menu-items-icons" />,
    title: "No.2 Products",
    innerMenu: [
      {
        title: "Sesamee Seeds",
        pathName: "/panel/sesameeseeds",
      },
      {
        title: "Groundnut Seeds",
        pathName: "/panel/groundnutseeds",
      },
      {
        title: "Price Update",
        pathName: "/panel/priceupdate",
      },
      {
        title: "Rate History",
        pathName: "/panel/ratehistory",
      },
      {
        title: "Sale",
        pathName: "/panel/sale",
      },
    ],
  },
  {
    icon: <FaWpforms className="menu-items-icons" />,
    title: "Dispatch",
    innerMenu: [
      {
        title: "Against Order",
        pathName: "/panel/againstorder",
      },
      {
        title: "Against Order With Price",
        pathName: "/panel/againstorderprice",
      },
      {
        title: "Against Bill",
        pathName: "/panel/againstbilltable",
      },
    ],
  },
  {
    icon: <FaDollarSign className="menu-items-icons" />,
    title: "Sales",
    innerMenu: [
      {
        title: "Gunny bags",
        pathName: "/panel/gunnybags",
        innerMenu: [
          {
            title: "Sale Status",
            pathName: "/panel/salestatus",
          },
        ],
      },
      {
        title: "Price Update",
        pathName: "/panel/priceupdate",
      },
    ],
  },
  {
    icon: <FaDollarSign className="menu-items-icons" />,
    title: "Welfare",
    innerMenu: [
      {
        title: "Welfare  Contribution",
        pathName: "/panel/welfare",
      },
      {
        title: "Contribution  Amount",
        pathName: "/panel/welfareamt",
      },
    ],
  },
  {
    icon: <FaCog className="menu-items-icons" />,
    title: "Product Distruptancies",
    innerMenu: [
      {
        title: "Excess/Shortage",
        pathName: "/panel/excestorage",
      },
      {
        title: "Purchase Return",
        pathName: "/panel/purchasereturn",
      },
      {
        title: "Sales Return",
        pathName: "/panel/salesreturn",
      },
      {
        title: "Split Config",
        pathName: "/panel/",
      },
    ],
  },
  {
    icon: <FaCog className="menu-items-icons" />,
    title: "Canteen",
    innerMenu: [
      {
        title: "Canteen Menu",
        pathName: "/panel/menutable",
      },
      {
        title: "Canteen Attendance",
        pathName: "/panel/canteenattendancetable",
      },
      {
        title: "Tokens",
        pathName: "/panel/canteentokentable",
      },
    ],
  },

  {
    icon: <FaCog className="menu-items-icons" />,
    title: "Master Screens",
    innerMenu: [
      {
        title: "Product Master",
        pathName: "/panel/productmastertable",
      },
      {
        title: "Shift Master",
        pathName: "/panel/shiftmastertable",
      },
      {
        title: "Bin Master",
        pathName: "/panel/binmastertable",
      },
    ],
  },
];

export default menuOptions;
