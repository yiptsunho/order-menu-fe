import axios from '../utils/axiosInstance';
import * as ApiConst from '../utils/ApiConst'

export async function login(params, setState, navigate, setOpenDialog, dialogTitle, dialogContent) {
    let responseData = null;

    try {
        responseData = await axios.post(ApiConst.LOGIN, params);
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        setState(true)
        window.sessionStorage.setItem('userId', responseData.data.userId)
        window.sessionStorage.setItem('displayName', responseData.data.displayName)
        window.sessionStorage.setItem('accessToken', responseData.data.accessToken)
        window.sessionStorage.setItem('refreshToken', responseData.data.refreshToken)
        axios.defaults.headers.common['Authorization'] = `Bearer ${responseData.data.accessToken}`;
        // refreshToken.current = responseData.data.refreshToken
        navigate('/landing/dashboard')
    } else {
        dialogTitle.current = "Warning"
        dialogContent.current = "Username or password incorrect"
        // dialogContent = responseData.message
        setOpenDialog(true)
    }

}

export async function refreshSession(params, navigate, refreshToken, setIsLogin, clearPreviousRefreshCountdown) {
    const currentRefreshToken = window.sessionStorage.getItem('refreshToken')
    axios.defaults.headers.common['Authorization'] = `Bearer ${currentRefreshToken}`;
    let responseData = null;

    try {
        responseData = await axios.post(ApiConst.REFRESH_SESSION, params);
    } catch (ex) {
        console.error(ex);
    }

    if (responseData && responseData.status === 200) {
        window.sessionStorage.setItem('accessToken', responseData.data.accessToken)
        window.sessionStorage.setItem('refreshToken', responseData.data.refreshToken)
        axios.defaults.headers.common['Authorization'] = `Bearer ${responseData.data.accessToken}`;
        // refreshToken.current = responseData.data.refreshToken
    } else {
        delete axios.defaults.headers.common["Authorization"]
        window.sessionStorage.clear()
        navigate('/')
        setIsLogin(false)
    }

}