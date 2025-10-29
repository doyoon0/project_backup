import { axiosPost } from '../../utils/dataFetch.js';

/** Signup */
export const getSignup = (formData) => async (dispatch) => {
   let result = null;
       /**
           스프링부트 연동 - Post, /member/signup
       */
       const url = "http://localhost:8080/member/signup";

       result = await axiosPost(url, formData);

    return result;
}