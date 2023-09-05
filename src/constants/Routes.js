const Routes = {
  home: "/",
  signIn: "signIn",
  panel: "panel",
  staff: "staff",
  dutytransfer: "dutytransfer",
  dutyAllotment: "dutyAllotment",
  dutyAllotmenttable: "dutyAllotmenttable",
  staffTable: "staffTable",
  salaryForm: "salaryForm",
  salary: "salary",
  leaveapprovalform: "leaveapprovalform",
  leaveapproval: "leaveapproval",
  leaverequestform: "leaverequestform",
  leaverequest: "leaverequest",
  leaverequeststatus: "leaverequeststatus",
  shiftallotment: "shiftallotment",
  shiftallotmentform: "shiftallotmentform",
  fingerprint: "fingerprint",
  fingerprintform: "fingerprintform",
  attendanceadmin: "attendanceadmin",
  attendanceuser: "attendanceuser",
  medicalcheckupform: "medicalcheckupform",
  medicalcheckup: "medicalcheckup",
  sampleTable: "sampleTable",
  saveBillInward: "saveBillInward",
  updateBillInward: "updateBillInward",
  mdVerify: "mdVerify",
  getBillInwardDetails: "getBillInwardDetails",
  billinward: "billinward",
  billinwardform: "billinwardform",
  billsforward: "billsforward",
  billsreceive: "billsreceive",
  billforwardform: "billforwardform",
  billsexchangetable: "billsexchangetable",
  billsreceiveform: "billsreceiveform",
  saveMaterialRequest: "saveMaterialRequest",
  billsexchange: "billsexchange",
  dpentry: "dpentry",
  dpentrytable: "dpentrytable",
  mastercreation: "mastercreation",
  mastercreationfrom: "mastercreationform",
  pagemenucreationtable: "pagemenucreationtable",
  pagemenucreationform: "pagemenucreationform",
  materialrequest: "materialrequest",
  materialrequestform: "materialrequestform",
  materialissuetable: "materialissuetable",
  materialissueform: "materialissueform",
  //within branch receipt start
  wpr: "wpr",
  wprForm: "wprForm",
  //within branch receiptend
  //other branch issue
  opiForm: "opiForm",
  opiform1: "opiform1",
  opi: "opi",
  //other branch issue
  //within branch Disrtibution
  imi: "imi",
  imiForm: "imiForm",
  //within branch Disrtibution

  //indra branch issue
  plantreceivetable: "plantreceivetable",
  plantreceiveform: "plantreceiveform",
  //indra branch issue

  otherbranchreceipts: "otherbranchreceipts",
  otherbranchreceiptsform: "otherbranchreceiptsform",

  withinbranchreceive: "withinbranchreceive",
  withinbranchreceiveform: "withinbranchreceiveform",
  gdcreport: "gdcreport",

  productiontable: "productiontable",
  productionform: "productionform",
  journaltable: "journaltable",
  journalform: "journalform",
  rewardscategory: "rewardscategory",
  admininspectiontable: "admininspectiontable",
  admininspectionform: "admininspectionform",
  dayendstocktable: "dayendstocktable",
  dayendstockform: "dayendstockform",

  rewards: "rewards",
  rewardsList: "rewardsList",
  awardstable: "awardstable",
  awardsform: "awardsform",
  rewardscategory: "rewardscategory",
  rewardsuserdetails: "rewardsuserdetails",

  createreward: "createreward",
  iietable: "iietable",
  iieform: "iieform",
  againstorderform: "againstorderform",
  againstorder: "againstorder",

  againstbilltable: "againstbilltable",
  againstbillform: "againstbillform",

  againstorderpriceform: "againstorderpriceform",
  againstorderprice: "againstorderprice",
  storagetable: "storagetable",
  storageform: "storageform",
  productionentry: "productionentry",
  productionentryform: "productionentryform",
  productionpopup: "productionpopup",
  shiftrotation: "shiftrotation",
  shiftrotationform: "shiftrotationform",
  shiftrotationview: "shiftrotationview",
  gunnybags: "gunnybags",
  gunnybagsForm: "gunnybagsForm",
  excestorage: "excestorage",
  excessform: "excessform",
  excessviewform: "excessviewform",
  excesseditform: "excesseditform",
  purchasereturn: "purchasereturn",
  dutytransferform: "dutytransferform",
  priceupdate: "priceupdate",
  priceupdateform: "priceupdateform",
  editpriceupdate: "editpriceupdate",
  purchasereturnform: "purchasereturnform",
  splitconfig: "splitconfig",
  splitconfigform: "splitconfigform",
  qcjournaltable: "qcjournaltable",
  journalsesamecleaning: "journalsesamecleaning",
  journalsamplecleaning: "journalsamplecleaning",
  journalsesamecurshing: "journalsesamecurshing",
  journalsesametunnel: "journalsesametunnel",
  salesreturn: "salesreturn",
  salesreturnform: "salesreturnform",
  plantrewardstable: "plantrewardstable",
  plantrewardsform: "plantrewardsform",
  plantpurchasetable: "plantpurchasetable",

  mdrewards: "mdrewards",
  rewardsform: "rewardsform",
  sesameeSeeds: "sesameeSeeds",
  sesameeseedsform: "sesameeseedsform",
  groundnutseeds: "groundnutseeds",
  groundnutseedsform: "groundnutseedsform",
  priceupdate: "priceupdate",
  ratehistory: "ratehistory",
  ratehistoryform: "ratehistoryform",
  sale: "sale",
  saleform: "saleform",
  salestatus: "salestatus",
  salestatusform: "salestatusform",
  welfare: "welfare",
  welfareform: "welfareform",
  welfareamt: "welfareamt",
  welfareamtform: "welfareamtform",
  purchseform: "purchseform",
  employee: "employee",
  // HR Dept pages
  employeeform: "employeeform",
  viewemployee: "viewemployee",
  productmaster: "productmaster",
  producteditform: "producteditform",
  productviewform: "productviewform",
  productmastertable: "productmastertable",
  shiftmastertable: "shiftmastertable",
  shiftmasterform: "shiftmasterform",
  shiftmastereditform: "shiftmastereditform",
  shiftmasterviewform: "shiftmasterviewform",

  foodlisttable: "foodlisttable",
  foodlistform: "foodlistform",
  canteenmenutable: "canteenmenutable",
  canteenmenuform: "canteenmenuform",
  menutable: "menutable",
  menuform: "menuform",
  canteenattendancetable: "canteenattendancetable",
  canteenattendanceform: "canteenattendanceform",
  canteentokentable: "canteentokentable",
  canteentokenform: "canteentokenform",
  binmastertable: "binmastertable",
  binmasterform: "binmasterform",
  interviewTable: "interviewTable",
  interviewForm: "interviewForm",
  viewShifts:"viewShifts"
};

export default Routes;