import {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import cookieCutter from 'cookie-cutter';
 import cookiesNames from '@/app/utils/constant';
 const CryptoJS = require("crypto-js");
 import Utf8 from 'crypto-js/enc-utf8';

export default function useIsLogin() {
    const [isLogin,setIsLogin] = useState(false)
    const data = useSelector((state) => state.loginReducer.login)
    useEffect(() => {
         console.log(cookieCutter.get(cookiesNames.HOW_THIS_MEASUREMENT_IS))
        console.log(CryptoJS.AES.decrypt(cookieCutter.get(cookiesNames.HOW_THIS_MEASUREMENT_IS), process.env.NEXT_PUBLIC_TITLE).toString(Utf8))
    },[]);

    // return [isLogin];
    return [true] ;
}
