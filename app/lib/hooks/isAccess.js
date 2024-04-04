import {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';


export default function useIsAccess() {
    const [isHrs,setIsHrs] = useState(true)
    const [isPayroll,setIsPayroll] = useState(false)
    const [isAttendance,setIsAttendance] = useState(false)
    // const data = useSelector((state) => state.loginReducer.login)
    // useEffect(() => {
    //     if(cookieCutter.get(cookiesNames.LOG_IN) ||  data){
    //         setIsLogin(true)
    //     }
    //     else
    //     setIsLogin(false) 
    // },[data]);

    // return [isLogin];
    return [isHrs,isPayroll,isAttendance] ;
}
