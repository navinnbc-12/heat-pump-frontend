export const header = () => {
    const userData = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('axisUserData')) : null
    if (userData === null || userData === undefined || userData === "") {
        return true
    } else {
        return {
            headers: {
                'Content-Type': 'application/json',
                "Token": userData
            }
        }
    }
}



export const formDataHeader = () => {
    const userData = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('axisUserData')) : null
    if (userData === null || userData === undefined || userData === "") {
        return true
    } else {
        return {
            headers: {
                "Token": userData
            }
        }
    }
}