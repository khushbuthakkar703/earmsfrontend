const requests = {
  login: {
    path: "auth/signin",
    method: "POST",
  },
  refreshToken: {
    path: "auth/refreshToken",
    method: "POST",
  },
  getShiftRotationList: {
    path: "getShiftRotationList",
    method: "GET",
  },
  filterShiftRotationList: {
    path: "filterShiftRotationList",
    method: "GET",
  },
  deleteShiftRotation: {
    path: "deleteShiftRotationDetails",
    method: "DELETE",
  },
  getShiftAllotmentList: {
    path: "getShiftAllotmentList",
    method: "GET",
  },
  deleteShiftAllotment: {
    path: "deleteShiftAllotmentDetails",
    method: "DELETE",
  },
  getDutyList: {
    path: "getDutyList",
    method: "GET",
  },
  getDutyDetails: {
    path: "getDutyDetails",
    method: "GET",
  },
  getbillNumberList: {
    path: "billNumberList ",
    method: "GET",
  },
  salaryList: {
    path: "salaryList",
    method: "GET",
  },
  deleteSalaryDetails: {
    path: "deleteSalaryDetails",
    method: "DELETE",
  },
  allListUser: {
    path: "allListUser",
    method: "GET",
  },
  userProfile: {
    path: "userProfile",
    method: "GET",
  },
  checkuser: {
    path: "checkUser ",
    method: "POST",
  },
  getMedicalCheckupList: {
    path: "getMedicalCheckupList",
    method: "GET",
  },
  getMedicalCheckupDetails: {
    path: "getMedicalCheckupDetails",
    method: "GET",
  },
  saveMedicalCheckup: {
    path: "saveMedicalCheckup",
    method: "POST",
  },
  getProductionList: {
    path: "getProductionEntryList",
    method: "GET",
  },
  getProductionListById: {
    path: "getProductionEntry",
    method: "GET",
  },
  saveProductionEntry: {
    path: "saveProductionEntry",
    method: "POST",
  },
  deleteroductionEntry: {
    path: "getProductionEntry",
    method: "DELETE",
  },
  leaveRejectOrApprove: {
    path: "leaveRejectOrApprove",
    method: "PUT",
  },
  leaveRequest: {
    path: "leaveRequest",
    method: "POST",
  },
  getLeaveRequestReport: {
    path: "getLeaveRequestReport",
    method: "GET",
  },
  getLeaveRequestListByUserId: {
    path: "getLeaveRequestListByUserId",
    method: "GET",
  },
  getLeaveDetails: {
    path: "getLeaveDetails",
    method: "GET",
  },
  updateLeaveRequest: {
    path: "updateLeaveRequest",
    method: "PUT",
  },
  getLeaveRejectOrApproveList: {
    path: "getLeaveRejectOrApproveList",
    method: "GET",
  },
  getLeaveRequestList: {
    path: "getLeaveRequestList",
    method: "GET",
  },
  deleteLeaveDetails: {
    path: "deleteLeaveDetails",
    method: "DELETE",
  },
  getJournalList: {
    path: "getJournalList",
    method: "GET",
  },
  getJournalListById: {
    path: "getJournal",
    method: "GET",
  },
  getJournalById: {
    path: "getJournal",
    method: "GET",
  },
  deleteJournal: {
    path: "deleteJournal",
    method: "DELETE",
  },
  headerDetails: {
    path: "headerDetails",
    method: "GET",
  },
  dutyAllotment: {
    path: "saveDutyAllotment",
    method: "POST",
  },
  updateDutyAllotment: {
    path: "updateDutyAllotment",
    method: "PUT",
  },
  updateUser: {
    path: "updateUser",
    method: "PUT",
  },
  departmentList: {
    path: "departmentList",
    method: "GET",
  },
  staffList: {
    path: "staffList",
    method: "POST",
  },
  shiftList: {
    path: "shiftList",
    method: "GET",
  },
  saveShiftAllotment: {
    path: "saveShiftAllotment",
    method: "POST",
  },
  updateShiftRotation: {
    path: "updateShiftRotation",
    method: "PUT",
  },

  getAdminInspectionList: {
    path: "getAdminInspectionList",
    method: "GET",
  },
  getShiftList: {
    path: "shiftList",
    method: "GET",
  },
  getWithInBranchDistributionList: {
    path: "getWithInBranchDistributionList",
    method: "GET",
  },
  getIntraBranchReceiptList: {
    path: "getIntraBranchReceiptList",
    method: "GET",
  },
  getOtherBranchReceiptList: {
    path: "getOtherBranchReceiptList",
    method: "GET",
  },
  getWithInBranchReceiveList: {
    path: "getWithInBranchReceiveList",
    method: "GET",
  },
  saveBillInward: {
    path: "saveBillInward",
    method: "POST",
  },
  updateBillInward: {
    path: "updateBillInward",
    method: "PUT",
  },
  getBillInwardList: {
    path: "getBillInwardList",
    method: "GET",
  },
  mdVerify: {
    path: "mdVerify",
    method: "PUT",
  },
  getBillInwardDetails: {
    path: "getBillInwardDetails",
    method: "GET",
  },
  purchaseOrderFilterListByPONumber: {
    path: "purchaseOrderFilterListByPONumber",
    method: "GET",
  },
  deleteBillInwardDetails: {
    path: "deleteBillInwardDetails",
    method: "DELETE",
  },
  getBillForwardList: {
    path: "getBillForwardList",
    method: "GET",
  },
  getBillForwardDetails: {
    path: "getBillForwardDetails",
    method: "GET",
  },
  updateBillForward: {
    path: "updateBillForward",
    method: "PUT",
  },
  deleteBillForwardDetails: {
    path: "deleteBillForwardDetails",
    method: "DELETE",
  },
  getBillForwardDetails: {
    path: "getBillForwardDetails",
    method: "GET",
  },
  getBillReceiveDetails: {
    path: "getBillReceiveDetails",
    method: "GET",
  },
  deleteBillReceiveDetails: {
    path: "deleteBillReceiveDetails",
    method: "DELETE",
  },
  updateBillReceive: {
    path: "updateBillReceive",
    method: "PUT",
  },
  getBillExchangeList: {
    path: "getBillExchangeList",
    method: "GET",
  },
  getBillExchangeDetails: {
    path: "getBillExchangeDetails",
    method: "GET",
  },
  deleteBillExchangeDetails: {
    path: "deleteBillExchangeDetails",
    method: "DELETE",
  },
  getBillForwardDetails: {
    path: "getBillForwardDetails",
    method: "GET",
  },
  saveMaterialRequest: {
    path: "saveMaterialRequest",
    method: "POST",
  },
  fingerPrintList: {
    path: "fingerPrintList",
    method: "GET",
  },
  getDirectPurchaseList: {
    path: "getDirectPurchaseList",
  },
  getMaterialRequestList: {
    path: "getMaterialRequestList",
    method: "GET",
  },
  getMaterialIssueList: {
    path: "getMaterialIssueList",
    method: "GET",
  },
  getMaterialWithInBranchReceiptList: {
    path: "getMaterialWithInBranchReceiptList",
    method: "GET",
  },
  getMaterialWithInBranchReceiptList: {
    path: "getMaterialWithInBranchReceiptList",
    method: "GET",
  },
  getMaterialWithInBranchReceiptDetails: {
    path: "getMaterialWithInBranchReceiptDetails",
    method: "GET",
  },
  getDutyTransferList: {
    path: "getDutyTransferList",
    method: "GET",
  },
  getAdminInspectionList: {
    path: "getAdminInspectionList",
    method: "GET",
  },

  getRewardList: {
    path: "getRewardList",
    method: "GET",
  },
  getOtherBranchIssueList: {
    path: "getOtherBranchIssueList",
    method: "GET",
  },
  deleteDutyTransferDetails: {
    path: "deleteDutyTransferDetails",
    method: "DELETE",
  },
  deleteDutyDetails: {
    path: "deleteDutyDetails",
    method: "DELETE",
  },
  deleteUserDetails: {
    path: "deleteUserDetails",
    method: "DELETE",
  },
  deleteMedicalCheckupDetails: {
    path: "deleteMedicalCheckupDetails",
    method: "DELETE",
  },
  deleteMaterialRequest: {
    path: "deleteMaterialRequest",
    method: "DELETE",
  },
  deleteMaterialIssue: {
    path: "deleteMaterialIssue",
    method: "DELETE",
  },
  deleteMaterialWithInBranchReceipt: {
    path: "deleteMaterialWithInBranchReceipt",
    method: "DELETE",
  },

  adminAttendanceList: {
    path: "adminAttendanceList",
    method: "GET",
  },
  userAttendanceList: {
    path: "userAttendanceList",
    method: "GET",
  },
  deleteDirectPurchaseDetails: {
    path: "deleteDirectPurchaseDetails",
    method: "DELETE",
  },

  getAttendanceInfo: {
    path: "getAttendanceInfo",
    method: "GET",
  },
  updateOverTimeReason: {
    path: "updateOverTimeReason",
    method: "PUT",
  },
  updateOverDueToBreakTimeReason: {
    path: "updateOverDueToBreakTimeReason",
    method: "PUT",
  },

  branchList: {
    path: "branchList",
    method: "GET",
  },
  departmentList: {
    path: "departmentList",
    method: "GET",
  },
  OrganizationList: {
    path: "OrganizationList",
    method: "GET",
  },
  designationList: {
    path: "designationList",
    method: "GET",
  },
  employeeCategoryList: {
    path: "employeeCategoryList",
    method: "GET",
  },
  getMaterialRequestDetails: {
    path: "getMaterialRequestDetails",
    method: "GET",
  },
  vendorList: {
    path: "vendorList",
    method: "GET",
  },
  getProductList: {
    path: "getProductList",
    method: "GET",
  },
  getAwardList: {
    path: "getAwardList",
    method: "GET",
  },
  getAwardDetails: {
    path: "getAwardDetails",
    method: "GET",
  },
  getEmployeeDetailByAwardList: {
    path: "getEmployeeDetailByAwardList",
    method: "GET",
  },
  getEmployeeAwardList: {
    path: "getEmployeeAwardList",
    method: "GET",
  },
  getParticularEmployeeAllAwardList: {
    path: "getParticularEmployeeAllAwardList",
    method: "GET",
  },
  getAwardAttendanceUserDetails: {
    path: "getAwardAttendanceUserDetails",
    method: "POST",
  },
  updateAward: {
    path: "updateAward",
    method: "PUT",
  },
  createUser: {
    path: "createUser",
    method: "POST",
  },

  saveShiftRotation: {
    path: "saveShiftRotation",
    method: "POST",
  },

  saveAward: {
    path: "saveAward",
    method: "POST",
  },
  updateMaterialWithInBranchReceipt: {
    path: "updateMaterialWithInBranchReceipt",
    method: "PUT",
  },
  deleteAwardDetails: {
    path: "deleteAwardDetails",
    method: "DELETE",
  },
  updateBillExchange: {
    path: "updateBillExchange",
    method: "PUT",
  },
  getProductExcessStorageList: {
    path: "getProductExcessStorageList",
    method: "GET",
  },
  getBillInwardReferenceList: {
    path: "getBillInwardReferenceList",
    method: "GET",
  },
  getPurchaseReturnList: {
    pah: "getPurchaseReturnList",
    method: "GET",
  },
  filterListUser: {
    path: "filterListUser",
    method: "GET",
  },
  getProductExcessStorageDetails: {
    path: "getProductExcessStorageDetails",
    method: "GET",
  },
  getBillInwardReferenceList: {
    path: "getBillInwardReferenceList",
    method: "GET",
  },
  saveProductExcessStorage: {
    path: "saveProductExcessStorage",
    method: "POST",
  },
  updateProductExcessStorage: {
    path: "updateProductExcessStorage ",
    method: "PUT",
  },
  bloogroupList: {
    path: "bloogroupList ",
    method: "GET",
  },
  saveInterview: {
    path: "saveInterview",
    method: "POST",
  },
  listAllShifts: {
    path: "listAllShifts",
    method: "GET",
  },
  shifts: {
    path: "shifts",
    method: "DELETE",
  },
  shifts: {
    path: "shifts",
    method: "POST",
  },
  shiftsEdit: {
    path: "shifts",
    method: "PUT",
  },
  saveProductMaster: {
    path: "saveProductMaster ",
    method: "POST",
  },
  getDropdownList: {
    path: "getDropdownList",
    method: "GET",
  },
  updateProductMaster: {
    path: "updateProductMaster",
    method: "PUT",
  },
  deleteProductMaster: {
    path: "deleteProductMaster",
    method: "DELETE",
  },
  qualificationList: {
    path: "qualificationList",
    method: "GET",
  },
  productCategoryList: {
    path: "productCategoryList",
    method: "GET",
  },

  saveProductCategory: {
    path: "saveProductCategory",
    method: "POST",
  },

  saveUnit: {
    path: "saveUnit",
    method: "POST",
  },
  clusterList: {
    path: "clusterList",
    method: "GET",
  },
  ViewShifts: {
    path: "ViewShifts",
    method: "GET",
  },
  saveDutyTransfer: {
    path: "saveDutyTransfer",
    method: "POST",
  },
  stafflistwfilter: {
    path: "stafflistwfilter",
    method: "GET",
  },
  getDutyTransferAssignDutyFilterList: {
    path: "getDutyTransferAssignDutyFilterList",
    method: "GET",
  },
  updateAssignDuty: {
    path: "updateAssignDuty",
    method: "PUT",
  },
};

export default requests;
