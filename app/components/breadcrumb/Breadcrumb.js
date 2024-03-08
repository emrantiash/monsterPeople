"use client";
import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/navigation';
import styles from './Breadcrumb.style';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import useIsLogin from '@/app/lib/hooks/isLogin';

const Breadcrumb = props => {
    const router = useRouter()
    const {parent,child,grandChild} = useSelector((state)=>state.breadcrumbReducer);
    const [isLogin, setIsLogin] = useState(false)

    const useLogin = useIsLogin()

    // console.log(useLogin[0])

    useEffect(() => {     
        setIsLogin(useLogin[0])
    },[useLogin]);
    
    return (
        isLogin &&
      

            <nav aria-label="breadcrumb" style={styles.container}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item text-table" style={styles.parentColor}> 
                   
                   {parent}</li>
                    <li className="breadcrumb-item active text-table" aria-current="page" 
                   
                    
                    // onClick={()=>grandChild && router.back()}
                    
                    style={styles.child}>{child}</li>
                    {
                        grandChild && 
                        <li className="breadcrumb-item active text-table" aria-current="page" >{grandChild}</li>
                    }
                    
                </ol>
            </nav>
    
    )
}

Breadcrumb.propTypes = {}

export default Breadcrumb