import { login, logout } from './authSlice.js';
import { axiosPost } from '../../utils/dataFetch.js';
import { validateFormCheck, validateSignupFormCheck } from '../../utils/validate.js';


/** Login */
export const getLogin = (formData, param) => async(dispatch) => {

    //관리자 계정 테스트
    if(formData.id === "admin" && formData.pwd === "1234") {
        dispatch(login({"userId": formData.id}));
        return true;
    }

    //유효성 체크 후 서버에 로그인 요청
    if(validateFormCheck(param)) {
        const url = "/member/login";
        const result = await axiosPost(url, formData);

        if(result) {
            dispatch(login({"userId": formData.id}));
            return true;
        }
    }

    return false;
}


/** Logout */
export const getLogout = () => async(dispatch) => {
    dispatch(logout());
    return true;
}