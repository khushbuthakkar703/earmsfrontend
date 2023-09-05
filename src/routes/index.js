import React, { lazy } from "react";
import Routes from "../constants/Routes";
import BillExchangeForm from "../pages/Bills/Billsexchangetable/BillExchangeForm";
import BillexchangeTab from "../pages/Bills/Billsexchangetable/BillexchangeTab";
import Billforwardformtab from "../pages/Bills/Billsforward/billforwardformtab";

const SignIn = lazy(() => import("../pages/signin"));

const Panel = lazy(() => import("../layout/Panel"));

const Staff = lazy(() => import("../pages/staff/index"));

const DutyAllotment = lazy(() => import("../pages/dutyAllotment/index"));
const DutyAllotmentTable = lazy(() =>
  import("../pages/dutyAllotment/DuttyAllotmentTable"),
);
const StaffTable = lazy(() =>
  import("../pages/staff/Component/staffTable/staffTable.js"),
);
const Salary = lazy(() => import("../pages/salary/index"));
const SalaryForm = lazy(() => import("../pages/salary/salaryForm.js"));
const LeaveApprovalForm = lazy(() =>
  import("../pages/leaveApproval/leaveApprovalForm"),
);
const LeaveApproval = lazy(() => import("../pages/leaveApproval/index"));
const LeaveRequestForm = lazy(() =>
  import("../pages/LeaveRequest/LeaveRequestForm"),
);
const LeaveRequest = lazy(() => import("../pages/LeaveRequest/index"));
const LeaveRequestStatus = lazy(() =>
  import("../pages/LeaveRequest/LeaveRequestStatusForm"),
);
const ShiftAllotment = lazy(() => import("../pages/shiftallotment/index"));
const ShiftAllotmentForm = lazy(() =>
  import("../pages/shiftallotment/shiftAllotmentForm"),
);
const Fingerprint = lazy(() => import("../pages/fingerprint/fingerprint"));
const FingerprintForm = lazy(() =>
  import("../pages/fingerprint/fingerprintForm"),
);
const AttendanceAdmin = lazy(() =>
  import("../pages/AttendanceAdmin/AttendanceAdmin"),
);
const AttendanceUser = lazy(() =>
  import("../pages/AttendanceUser/AttendanceUser"),
);
const MedicalCheckup = lazy(() =>
  import("../pages/MedicalCheckup/MedicalCheckup"),
);
const MedicalCheckupForm = lazy(() =>
  import("../pages/MedicalCheckup/MedicalCheckupForm"),
);

const SampleTable = lazy(() => import("../Component/Tables/Tables"));
const BillInward = lazy(() => import("../pages/Bills/billInward"));

const BillInwardForm = lazy(() =>
  import("../pages/Bills/billInward/billInwardForm"),
);
const Billsforward = lazy(() =>
  import("../pages/Bills/Billsforward/Billsforward"),
);
const Billsreceive = lazy(() =>
  import("../pages/Bills/Billsreceive/Billsreceive"),
);
const Billforwardform = lazy(() =>
  import("../pages/Bills/Billsforward/Billforwardform"),
);
const Billsexchangetable = lazy(() =>
  import("../pages/Bills/Billsexchangetable/Billsexchangetable"),
);
const Billsreceiveform = lazy(() =>
  import("../pages/Bills/Billsreceive/Billsreciveform"),
);
const Billsexchange = lazy(() =>
  import("../pages/Bills/Billsexchangetable/BillExchangeForm"),
);
const DPEntry = lazy(() => import("../pages/Bills/DPEntry/index"));
const DPEntryTable = lazy(() => import("../pages/Bills/DPEntry/DPEntryTable"));
const MasterCreation = lazy(() =>
  import("../pages/MasterPageCreation/MasterCreation/index"),
);
const MastercreationFrom = lazy(() =>
  import("../pages/MasterPageCreation/MasterCreation/MastercreationFrom"),
);
const PageMenuCreationTable = lazy(() =>
  import("../pages/MasterPageCreation/PageMenuCreation/Pagemenucreationtable"),
);
const PageMenuCreationForm = lazy(() =>
  import("../pages/MasterPageCreation/PageMenuCreation/Pagemenucreationform"),
);
const MaterialRequest = lazy(() =>
  import("../pages/MaterialFlow/MaterialRequest/index"),
);
const MaterialRequestForm = lazy(() =>
  import("../pages/MaterialFlow/MaterialRequest/MaterialRequestForm"),
);

const MaterialIssueTable = lazy(() =>
  import("../pages/MaterialFlow/MaterialIssue/Materialissuetable"),
);
const MaterialIssueForm = lazy(() =>
  import("../pages/MaterialFlow/MaterialIssue/Materialissueform"),
);

const WithinPlantReceipt = lazy(() =>
  import("../pages/MaterialFlow/WithinBranchReceipt/index"),
);
const WithinPlantReceiptForm = lazy(() =>
  import("../pages/MaterialFlow/WithinBranchReceipt/WithinPlantReceiptForm"),
);
const OtherPlantIssue = lazy(() =>
  import("../pages/MaterialFlow/OtherBranchIssue/index"),
);
const OtherPlantIssueForm = lazy(() =>
  import("../pages/MaterialFlow/OtherBranchIssue/OtherPlantIssueForm"),
);
const OtherPlantIssue1 = lazy(() =>
  import("../pages/MaterialFlow/OtherBranchIssue/otherplantissue1"),
);
const InternalMaterialIssue = lazy(() =>
  import("../pages/MaterialFlow/WithinBranchDist/index"),
);
const InternalMaterialIssueForm = lazy(() =>
  import("../pages/MaterialFlow/WithinBranchDist/InternalMaterialIssueForm"),
);
const PlantReceiveTable = lazy(() =>
  import("../pages/MaterialFlow/IndraPlantReceipt/Plantreceivetable"),
);

const OtherBranchReceipts = lazy(() =>
  import("../pages/MaterialFlow/OtherBranchReceipts/Otherbranchrecetable"),
);
const OtherBranchReceiptsform = lazy(() =>
  import("../pages/MaterialFlow/OtherBranchReceipts/Otherbranchrecform"),
);

const WithinBranchReceive = lazy(() =>
  import("../pages/MaterialFlow/Withinbranchreceive/withbranchreceive"),
);
const WithinBranchReceiveForm = lazy(() =>
  import("../pages/MaterialFlow/Withinbranchreceive/Withbranchreform"),
);
const GDCReport = lazy(() =>
  import("../pages/MaterialFlow/GDC Report/gdcreport"),
);

const RewardsUserDetail = lazy(() =>
  import("../pages/Rewards/RewEmployeeForm"),
);
const RewardsList = lazy(() => import("../pages/Rewards/RewardsTable"));

const CreateReward = lazy(() => import("../pages/Rewards/Createreward"));
const ProductionTable = lazy(() =>
  import("../pages/Production/Productiontable"),
);
const ProductionForm = lazy(() => import("../pages/Production/Productionform"));
const JournalTable = lazy(() => import("../pages/Journal/Journaltable"));
const JournalForm = lazy(() => import("../pages/Journal/Journalform"));

const Rewards = lazy(() => import("../pages/Rewards/RewardsEmplyee"));
const RewardsCategory = lazy(() =>
  import("../pages/Rewards/RewardCategory/RewardCategory"),
);
const AwardsTable = lazy(() => import("../pages/Rewards/awardsTable"));
const AwardsForm = lazy(() => import("../pages/Rewards/awardsform"));
const AdminInspectionTable = lazy(() =>
  import("../pages/AdminInspection/Admininspectiontable"),
);
const AdminInspectionForm = lazy(() =>
  import("../pages/AdminInspection/Admininspectionform"),
);
const DayEndStockTable = lazy(() =>
  import("../pages/DayEndStock/Dayendstocktable"),
);
const DayEndStockForm = lazy(() =>
  import("../pages/DayEndStock/Dayendstockform"),
);

const PlantReceiveForm = lazy(() =>
  import("../pages/MaterialFlow/IndraPlantReceipt/Plantreceiveform"),
);
const InwardInspectionEntry = lazy(() =>
  import("../pages/Quality Control/InwardInspectionEntry/index"),
);
const InwardInspectionEntryForm = lazy(() =>
  import(
    "../pages/Quality Control/InwardInspectionEntry/InwardInspectionEntryForm"
  ),
);
const AgainstOrder = lazy(() => import("../pages/Dispatch/AgainstOrder/index"));
const AgainstOrderForm = lazy(() =>
  import("../pages/Dispatch/AgainstOrder/AgainstOrderForm"),
);

const AgainstBillTable = lazy(() =>
  import("../pages/Dispatch/AgainstBilll/Againstbilltable"),
);
const AgainstBillForm = lazy(() =>
  import("../pages/Dispatch/AgainstBilll/Againstbillform"),
);

const AgainstOrderWithPrice = lazy(() =>
  import("../pages/Dispatch/AgainstOrderWithPrice/index"),
);
const AgainstOrderWithPriceForm = lazy(() =>
  import("../pages/Dispatch/AgainstOrderWithPrice/AgainstOrderWithPriceForm"),
);
const StorageTable = lazy(() =>
  import("../pages/Quality Control/Storage/Storagetable"),
);
const StorageForm = lazy(() =>
  import("../pages/Quality Control/Storage/Storageform"),
);
const ProductionEntry = lazy(() =>
  import("../pages/Quality Control/ProductionEntry/Productionentrytable"),
);
const ProductionEntryForm = lazy(() =>
  import("../pages/Quality Control/ProductionEntry/Productionentryform"),
);
const ProductionPopup = lazy(() =>
  import("../pages/Quality Control/ProductionEntry/Productionpopup"),
);
const ShiftRotation = lazy(() =>
  import("../pages/ShiftRotation/Shiftrotationtable"),
);
const ShiftRotationForm = lazy(() =>
  import("../pages/ShiftRotation/Shiftrotationform"),
);
const ShiftRotationView = lazy(() =>
  import("../pages/ShiftRotation/Shiftrotationview"),
);
const Gunnybags = lazy(() => import("../pages/Sales/GunnyBags/Gunnybags"));
const GunnybagsForm = lazy(() =>
  import("../pages/Sales/GunnyBags/GunnybagsForm"),
);
const HomePage = lazy(() => import("../pages/Home"));
const PageNotFound = lazy(() => import("../pages/PageNotfound"));
// bills
const BillInwardtab = lazy(() =>
  import("../pages/Bills/billInward/billInwardtab"),
);
const BtemsTable = lazy(() => import("../pages/Bills/billInward/ItemsTable"));
const ProductTable = lazy(() =>
  import("../pages/Bills/billInward/productTable"),
);
const Billsexchangetab = lazy(() =>
  import("../pages/Bills/Billsexchangetable/BillexchangeTab"),
);
const Billsreciveformtab = lazy(() =>
  import("../pages/Bills/Billsreceive/Billsreceiveformtab"),
);
const DutyTransfer = lazy(() => import("../pages/Dutytransfer/Dutytransfer"));

const Excestorage = lazy(() =>
  import("../pages/PDexcessStroage/Excesstoragetable"),
);
const Excessform = lazy(() => import("../pages/PDexcessStroage/Excessform"));
const ExcessViewForm = lazy(() => import("../pages/PDexcessStroage/viewform"));
const ExcessEditForm = lazy(() => import("../pages/PDexcessStroage/editform"));
const PurchaseReturn = lazy(() =>
  import("../pages/PDpurchasereturn/Purchasereturn"),
);

const DutyTransferForm = lazy(() =>
  import("../pages/Dutytransfer/DutytransferForm"),
);
const PriceUpdate = lazy(() =>
  import("../pages/Sales/PriceUpdate/PriceUpdate"),
);
const PriceUpdateForm = lazy(() =>
  import("../pages/Sales/PriceUpdate/PriceUpdateForm"),
);

const EditPriceUpdate = lazy(() =>
  import("../pages/Sales/PriceUpdate/EditPriceUpdate"),
);

const PurchaseRetunForm = lazy(() =>
  import("../pages/PDpurchasereturn/purchasereturnform"),
);
const SplitConfig = lazy(() =>
  import("../pages/PDsplitconfig/Splitconfigtable"),
);
const SplitConfigForm = lazy(() =>
  import("../pages/PDsplitconfig/Splitconfigform"),
);
const QCJournalTable = lazy(() =>
  import("../pages/Quality Control/Journal/Journaltable"),
);
const JournalSesameCleaning = lazy(() =>
  import("../pages/Quality Control/Journal/Fsesamecleaning"),
);
const JournalSampleCleaning = lazy(() =>
  import("../pages/Quality Control/Journal/Fsamplecleaning"),
);
const JournalSesameCurshing = lazy(() =>
  import("../pages/Quality Control/Journal/Fsesamecurshing"),
);
const JournalSesameTunnel = lazy(() =>
  import("../pages/Quality Control/Journal/Fsesametunneldry"),
);

const SalesReturn = lazy(() => import("../pages/SalesReturn/SalesReturn"));
const SalesreturnForm = lazy(() =>
  import("../pages/SalesReturn/SalesreturnForm"),
);
const PlantRewardsTable = lazy(() =>
  import("../pages/PlantMasterScreens/PlantRewards/rewardstable"),
);
const PlantRewardsForm = lazy(() =>
  import("../pages/PlantMasterScreens/PlantRewards/plantrewardsform"),
);
const PlantpurchaseTable = lazy(() =>
  import("../pages/PlantMasterScreens/PurchaseOrder/purchasetable"),
);

const MdRewards = lazy(() => import("../pages/MdScreens/Rewards/MdRewards"));
const RewardsForm = lazy(() =>
  import("../pages/MdScreens/Rewards/RewardsForm"),
);
const SesameeSeeds = lazy(() =>
  import("../pages/MdScreens/Products/SesameeSeeds"),
);
const SesameeSeedsForm = lazy(() =>
  import("../pages/MdScreens/Products/SesameeSeedsForm"),
);
const GroundnutSeeds = lazy(() =>
  import("../pages/MdScreens/Products/GrountnutSeeds"),
);
const GroundnutSeedsForm = lazy(() =>
  import("../pages/MdScreens/Products/GroundnutSeedsForm"),
);
const RateHistory = lazy(() =>
  import("../pages/MdScreens/Products/RateHistory"),
);
const RateHistoryForm = lazy(() =>
  import("../pages/MdScreens/Products/RateHistoryForm"),
);
const Sale = lazy(() => import("../pages/MdScreens/Products/Sale"));
const SaleForm = lazy(() => import("../pages/MdScreens/Products/SaleForm"));
const SaleStatus = lazy(() => import("../pages/Sales/GunnyBags/SaleStatus"));
const SaleStatusForm = lazy(() =>
  import("../pages/Sales/GunnyBags/SaleStatusForm"),
);
const Welfare = lazy(() => import("../pages/Sales/GunnyBags/Welfare"));
const WelfareAmt = lazy(() => import("../pages/Sales/GunnyBags/WelfareAmt"));
const WelfareForm = lazy(() => import("../pages/Sales/GunnyBags/WelfareForm"));
const WelfareAmtForm = lazy(() =>
  import("../pages/Sales/GunnyBags/WelfareAmtForm"),
);
const PurchaseForm = lazy(() =>
  import("../pages/PlantMasterScreens/PurchaseOrder/Purchaseform"),
);
const Employee = lazy(() =>
  import("../pages/HumanResourcesScreens/Employees/Employees"),
);
const EmployeeForm = lazy(() =>
  import("../pages/HumanResourcesScreens/Employees/EmployeeForm"),
);
const ViewEmployee = lazy(() =>
  import("../pages/HumanResourcesScreens/Employees/viewemployee"),
);
const ProductMaster = lazy(() =>
  import("../pages/MasterPageCreation/ProductMaster/productmaster"),
);
const ProductMasterEdit = lazy(() =>
  import("../pages/MasterPageCreation/ProductMaster/editForm"),
);
const ProductMasterView = lazy(() =>
  import("../pages/MasterPageCreation/ProductMaster/viewform"),
);
const ProductMasterTable = lazy(() =>
  import("../pages/MasterPageCreation/ProductMaster/productmastertable"),
);
const ShiftMasterTable = lazy(() =>
  import("../pages/MasterPageCreation/ShiftMaster/shiftMaster"),
);
const ShiftMasterForm = lazy(() =>
  import("../pages/MasterPageCreation/ShiftMaster/ShiftMasterForm"),
);
const ShiftMasterEditForm = lazy(() =>
  import("../pages/MasterPageCreation/ShiftMaster/ShiftMasterEditForm"),
);
const ShiftMasterViewForm = lazy(() =>
  import("../pages/MasterPageCreation/ShiftMaster/ShiftMasterViewForm"),
);
const FoodListTable = lazy(() =>
  import("../pages/MasterPageCreation/CanteenMaster/Foodlist/foodlist"),
);
const FoodListForm = lazy(() =>
  import("../pages/MasterPageCreation/CanteenMaster/Foodlist/foodlistform"),
);
const CanteenMenuTable = lazy(() =>
  import(
    "../pages/MasterPageCreation/CanteenMaster/CanteenMenu/CanteenmenuTable"
  ),
);
const CanteenMenuForm = lazy(() =>
  import(
    "../pages/MasterPageCreation/CanteenMaster/CanteenMenu/CanteenmenuForm"
  ),
);
const BinMasterTable = lazy(() =>
  import("../pages/MasterPageCreation/BinMaster/binmastertable"),
);
const BinMasterForm = lazy(() =>
  import("../pages/MasterPageCreation/BinMaster/binmasterform"),
);
const MenuTable = lazy(() => import("../pages/Canteen/CanteenMenu/MenuTable"));
const MenuForm = lazy(() => import("../pages/Canteen/CanteenMenu/MenuForm"));
const CanteenAttendanceTable = lazy(() =>
  import("../pages/Canteen/CanteenAttendance/Attendancetable"),
);
const CanteenAttendanceForm = lazy(() =>
  import("../pages/Canteen/CanteenAttendance/AteendanceForm"),
);
const CanteenTokenTable = lazy(() =>
  import("../pages/Canteen/Tokens/TokenTable"),
);
const CanteenTokenForm = lazy(() =>
  import("../pages/Canteen/Tokens/tokenform"),
);
const InterviewTable = lazy(() =>
  import("../pages/HumanResourcesScreens/CandidateInterview/InterviewTable"),
);
const InterviewForm = lazy(() =>
  import("../pages/HumanResourcesScreens/CandidateInterview/InterviewForm"),
);
const ViewShiftsTable = lazy(() =>
  import("../pages/viewShifts/ViewShiftsTable"),
);
const routes = [
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: Routes.signIn,
    element: <SignIn />,
  },
  {
    path: Routes.home,
    element: <HomePage />,
  },
  {
    path: Routes.panel,
    element: <Panel />,
    children: [
      {
        path: Routes.staff,
        element: <Staff />,
      },
      {
        path: Routes.staffTable,
        element: <StaffTable />,
      },
      {
        path: Routes.dutyAllotment,
        element: <DutyAllotment />,
      },
      {
        path: Routes.dutyAllotmenttable,
        element: <DutyAllotmentTable />,
      },
      {
        path: Routes.salaryForm,
        element: <SalaryForm />,
      },
      {
        path: Routes.salary,
        element: <Salary />,
      },
      {
        path: Routes.leaveapprovalform,
        element: <LeaveApprovalForm />,
      },
      {
        path: Routes.leaveapproval,
        element: <LeaveApproval />,
      },
      {
        path: Routes.leaverequestform,
        element: <LeaveRequestForm />,
      },
      {
        path: Routes.leaverequest,
        element: <LeaveRequest />,
      },
      {
        path: Routes.leaverequeststatus,
        element: <LeaveRequestStatus />,
      },
      {
        path: Routes.shiftallotment,
        element: <ShiftAllotment />,
      },
      {
        path: Routes.shiftallotmentform,
        element: <ShiftAllotmentForm />,
      },
      {
        path: Routes.fingerprint,
        element: <Fingerprint />,
      },
      {
        path: Routes.fingerprintform,
        element: <FingerprintForm />,
      },
      {
        path: Routes.productmaster,
        element: <ProductMaster />,
      },
      {
        path: Routes.producteditform,
        element: <ProductMasterEdit />,
      },
      {
        path: Routes.productviewform,
        element: <ProductMasterView />,
      },
      {
        path: Routes.productmastertable,
        element: <ProductMasterTable />,
      },
      {
        path: Routes.attendanceadmin,
        element: <AttendanceAdmin />,
      },
      {
        path: Routes.attendanceuser,
        element: <AttendanceUser />,
      },
      {
        path: Routes.medicalcheckup,
        element: <MedicalCheckup />,
      },
      {
        path: Routes.medicalcheckupform,
        element: <MedicalCheckupForm />,
      },
      {
        path: Routes.sampleTable,
        element: <SampleTable />,
      },
      {
        path: Routes.billinward,
        element: <BillInward />,
      },
      {
        path: Routes.billinwardform,
        element: <BillInwardForm />,
      },
      {
        path: Routes.billsforward,
        element: <Billsforward />,
      },
      {
        path: Routes.billsreceive,
        element: <Billsreceive />,
      },
      {
        path: Routes.billforwardform,
        element: <Billforwardform />,
      },
      {
        path: Routes.billsexchangetable,
        element: <Billsexchangetable />,
      },
      {
        path: Routes.billsreceiveform,
        element: <Billsreceiveform />,
      },
      {
        path: Routes.billsexchange,
        element: <Billsexchange />,
      },
      {
        path: Routes.dpentry,
        element: <DPEntry />,
      },
      {
        path: Routes.dpentrytable,
        element: <DPEntryTable />,
      },
      {
        path: Routes.mastercreation,
        element: <MasterCreation />,
      },
      {
        path: Routes.mastercreationfrom,
        element: <MastercreationFrom />,
      },
      {
        path: Routes.pagemenucreationtable,
        element: <PageMenuCreationTable />,
      },
      {
        path: Routes.pagemenucreationform,
        element: <PageMenuCreationForm />,
      },
      {
        path: Routes.materialrequest,
        element: <MaterialRequest />,
      },
      {
        path: Routes.materialrequestform,
        element: <MaterialRequestForm />,
      },
      {
        path: Routes.materialissuetable,
        element: <MaterialIssueTable />,
      },
      {
        path: Routes.materialissueform,
        element: <MaterialIssueForm />,
      },
      {
        path: Routes.wpr,
        element: <WithinPlantReceipt />,
      },
      {
        path: Routes.wprForm,
        element: <WithinPlantReceiptForm />,
      },
      {
        path: Routes.opi,
        element: <OtherPlantIssue />,
      },
      {
        path: Routes.opiForm,
        element: <OtherPlantIssueForm />,
      },
      {
        path: Routes.imi,
        element: <InternalMaterialIssue />,
      },
      {
        path: Routes.imiForm,
        element: <InternalMaterialIssueForm />,
      },
      {
        path: Routes.plantreceivetable,
        element: <PlantReceiveTable />,
      },
      {
        path: Routes.plantreceiveform,
        element: <PlantReceiveForm />,
      },
      {
        path: Routes.rewards,
        element: <Rewards />,
      },
      {
        path: Routes.rewardsuserdetails,
        element: <RewardsUserDetail />,
      },
      {
        path: Routes.rewardsList,
        element: <RewardsList />,
      },
      {
        path: Routes.createreward,
        element: <CreateReward />,
      },
      {
        path: Routes.awardstable,
        element: <AwardsTable />,
      },
      {
        path: Routes.awardsform,
        element: <AwardsForm />,
      },
      {
        path: Routes.productiontable,
        element: <ProductionTable />,
      },
      {
        path: Routes.productionform,
        element: <ProductionForm />,
      },
      {
        path: Routes.journaltable,
        element: <JournalTable />,
      },
      {
        path: Routes.journalform,
        element: <JournalForm />,
      },
      {
        path: Routes.rewardscategory,
        element: <RewardsCategory />,
      },
      {
        path: Routes.admininspectiontable,
        element: <AdminInspectionTable />,
      },
      {
        path: Routes.admininspectionform,
        element: <AdminInspectionForm />,
      },
      {
        path: Routes.dayendstocktable,
        element: <DayEndStockTable />,
      },
      {
        path: Routes.dayendstockform,
        element: <DayEndStockForm />,
      },
      {
        path: Routes.iietable,
        element: <InwardInspectionEntry />,
      },
      {
        path: Routes.iieform,
        element: <InwardInspectionEntryForm />,
      },
      {
        path: Routes.againstorder,
        element: <AgainstOrder />,
      },
      {
        path: Routes.againstorderform,
        element: <AgainstOrderForm />,
      },
      {
        path: Routes.againstbilltable,
        element: <AgainstBillTable />,
      },
      {
        path: Routes.againstbillform,
        element: <AgainstBillForm />,
      },
      {
        path: Routes.againstorderprice,
        element: <AgainstOrderWithPrice />,
      },
      {
        path: Routes.againstorderpriceform,
        element: <AgainstOrderWithPriceForm />,
      },
      {
        path: Routes.storagetable,
        element: <StorageTable />,
      },
      {
        path: Routes.storageform,
        element: <StorageForm />,
      },
      {
        path: Routes.productionentry,
        element: <ProductionEntry />,
      },
      {
        path: Routes.productionentryform,
        element: <ProductionEntryForm />,
      },
      {
        path: Routes.productionpopup,
        element: <ProductionPopup />,
      },
      {
        path: Routes.shiftrotation,
        element: <ShiftRotation />,
      },
      {
        path: Routes.shiftrotationform,
        element: <ShiftRotationForm />,
      },
      {
        path: Routes.shiftrotationview,
        element: <ShiftRotationView />,
      },
      {
        path: Routes.gunnybags,
        element: <Gunnybags />,
      },
      {
        path: Routes.gunnybagsForm,
        element: <GunnybagsForm />,
      },
      {
        path: Routes.billinward,
        element: <BillInward />,
      },
      {
        path: Routes.billforwardform,
        element: <Billforwardform />,
      },
      {
        path: Routes.billInwardtab,
        element: <billInwardtab />,
      },
      {
        path: Routes.itemsTable,
        element: <itemsTable />,
      },
      {
        path: Routes.productTable,
        element: <productTable />,
      },
      {
        path: Routes.billsexchangetab,
        element: <BillexchangeTab />,
      },
      {
        path: Routes.billforwardform,
        element: <BillExchangeForm />,
      },
      {
        path: Routes.billsexchangetable,
        element: <Billsexchangetable />,
      },
      {
        path: Routes.Billsforward,
        element: <Billsforward />,
      },
      {
        path: Routes.billforwardformtab,
        element: <Billforwardformtab />,
      },
      {
        path: Routes.billsreceive,
        element: <Billsreceive />,
      },
      {
        path: Routes.billsreceiveform,
        element: <Billsreceiveform />,
      },
      {
        path: Routes.billsreciveformtab,
        element: <Billsreciveformtab />,
      },
      {
        path: Routes.BtemsTable,
        element: <BtemsTable />,
      },
      {
        path: Routes.ProductTable,
        element: <ProductTable />,
      },
      {
        path: Routes.dutytransfer,
        element: <DutyTransfer />,
      },
      {
        path: Routes.excestorage,
        element: <Excestorage />,
      },
      {
        path: Routes.excessform,
        element: <Excessform />,
      },
      {
        path: Routes.excesseditform,
        element: <ExcessEditForm />,
      },
      {
        path: Routes.excessviewform,
        element: <ExcessViewForm />,
      },
      {
        path: Routes.purchasereturn,
        element: <PurchaseReturn />,
      },
      {
        path: Routes.dutytransferform,
        element: <DutyTransferForm />,
      },
      {
        path: Routes.priceupdate,
        element: <PriceUpdate />,
      },
      {
        path: Routes.priceupdateform,
        element: <PriceUpdateForm />,
      },
      {
        path: Routes.editpriceupdate,
        element: <EditPriceUpdate />,
      },
      {
        path: Routes.purchasereturnform,
        element: <PurchaseRetunForm />,
      },
      {
        path: Routes.splitconfig,
        element: <SplitConfig />,
      },
      {
        path: Routes.splitconfigform,
        element: <SplitConfigForm />,
      },
      {
        path: Routes.qcjournaltable,
        element: <QCJournalTable />,
      },
      {
        path: Routes.journalsesamecleaning,
        element: <JournalSesameCleaning />,
      },
      {
        path: Routes.journalsamplecleaning,
        element: <JournalSampleCleaning />,
      },
      {
        path: Routes.journalsesamecurshing,
        element: <JournalSesameCurshing />,
      },
      {
        path: Routes.journalsesametunnel,
        element: <JournalSesameTunnel />,
      },
      {
        path: Routes.salesreturn,
        element: <SalesReturn />,
      },
      {
        path: Routes.salesreturnform,
        element: <SalesreturnForm />,
      },
      {
        path: Routes.mdrewards,
        element: <MdRewards />,
      },
      {
        path: Routes.rewardsform,
        element: <RewardsForm />,
      },
      {
        path: Routes.sesameeSeeds,
        element: <SesameeSeeds />,
      },
      {
        path: Routes.sesameeseedsform,
        element: <SesameeSeedsForm />,
      },
      {
        path: Routes.groundnutseeds,
        element: <GroundnutSeeds />,
      },
      {
        path: Routes.groundnutseedsform,
        element: <GroundnutSeedsForm />,
      },
      {
        path: Routes.priceupdate,
        element: <PriceUpdate />,
      },
      {
        path: Routes.ratehistory,
        element: <RateHistory />,
      },
      {
        path: Routes.ratehistoryform,
        element: <RateHistoryForm />,
      },
      {
        path: Routes.sale,
        element: <Sale />,
      },
      {
        path: Routes.saleform,
        element: <SaleForm />,
      },
      {
        path: Routes.opiform1,
        element: <OtherPlantIssue1 />,
      },
      {
        path: Routes.otherbranchreceipts,
        element: <OtherBranchReceipts />,
      },
      {
        path: Routes.otherbranchreceiptsform,
        element: <OtherBranchReceiptsform />,
      },
      {
        path: Routes.withinbranchreceive,
        element: <WithinBranchReceive />,
      },
      {
        path: Routes.withinbranchreceiveform,
        element: <WithinBranchReceiveForm />,
      },
      {
        path: Routes.gdcreport,
        element: <GDCReport />,
      },
      {
        path: Routes.plantrewardstable,
        element: <PlantRewardsTable />,
      },
      {
        path: Routes.plantrewardsform,
        element: <PlantRewardsForm />,
      },
      {
        path: Routes.plantpurchasetable,
        element: <PlantpurchaseTable />,
      },
      {
        path: Routes.salestatus,
        element: <SaleStatus />,
      },
      {
        path: Routes.salestatusform,
        element: <SaleStatusForm />,
      },
      {
        path: Routes.welfare,
        element: <Welfare />,
      },
      {
        path: Routes.welfareform,
        element: <WelfareForm />,
      },
      {
        path: Routes.welfareamt,
        element: <WelfareAmt />,
      },
      {
        path: Routes.welfareamtform,
        element: <WelfareAmtForm />,
      },
      {
        path: Routes.purchseform,
        element: <PurchaseForm />,
      },
      {
        path: Routes.employee,
        element: <Employee />,
      },
      {
        path: Routes.employeeform,
        element: <EmployeeForm />,
      },
      {
        path: Routes.viewemployee,
        element: <ViewEmployee />,
      },
      {
        path: Routes.shiftmastertable,
        element: <ShiftMasterTable />,
      },
      {
        path: Routes.shiftmasterform,
        element: <ShiftMasterForm />,
      },
      {
        path: Routes.shiftmastereditform,
        element: <ShiftMasterEditForm />,
      },
      {
        path: Routes.shiftmasterviewform,
        element: <ShiftMasterViewForm />,
      },
      {
        path: Routes.foodlisttable,
        element: <FoodListTable />,
      },
      {
        path: Routes.foodlistform,
        element: <FoodListForm />,
      },
      {
        path: Routes.canteenmenutable,
        element: <CanteenMenuTable />,
      },
      {
        path: Routes.canteenmenuform,
        element: <CanteenMenuForm />,
      },
      {
        path: Routes.menutable,
        element: <MenuTable />,
      },
      {
        path: Routes.menuform,
        element: <MenuForm />,
      },
      {
        path: Routes.canteenattendancetable,
        element: <CanteenAttendanceTable />,
      },
      {
        path: Routes.canteenattendanceform,
        element: <CanteenAttendanceForm />,
      },
      {
        path: Routes.canteentokentable,
        element: <CanteenTokenTable />,
      },
      {
        path: Routes.canteentokenform,
        element: <CanteenTokenForm />,
      },
      {
        path: Routes.binmastertable,
        element: <BinMasterTable />,
      },
      {
        path: Routes.binmasterform,
        element: <BinMasterForm />,
      },
      {
        path: Routes.interviewTable,
        element: <InterviewTable />,
      },
      {
        path: Routes.interviewForm,
        element: <InterviewForm />,
      },
      {
        path: Routes.viewShifts,
        element: <ViewShiftsTable />,
      },
    ],
  },
];

export default routes;
