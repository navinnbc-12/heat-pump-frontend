const globalAPI = {
    register:"api/v1/auth/register",
    login:"api/v1/auth/login",
    forgotPassword:"api/v1/auth/forgot-password",
    otp:"api/v1/auth/verify-otp",
    changePassword:"api/v1/auth/change-password",
    fileupload:"api/v1/common/uploads/documents",
    // allreq:"api/v1/services/service-requests",
    mystatus:"api/v1/services/service-requests-status",
    myreq:"api/v1/services/service-requests",
    allnotes:"api/v1/services/service-requests-notes",
    getFile:"api/v1/common/uploads/documents",
    myjobs:"api/v1/services/jobs",
    addnotes:"api/v1/services/service-requests-notes",
    accountlist:"api/v1/services/users",
    accountstatus:"api/v1/services/users-count",
     
    adminedituser:"api/v1/services/users",
    adminstatus:"api/v1/admin/service-requests-count",
    adminreq:"api/v1/admin/service-requests"
}

export default globalAPI;