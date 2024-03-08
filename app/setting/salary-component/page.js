"use client"
import React ,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setbreadcrumb } from '@/app/redux/slices/breadcrumbSlice'

export default function Pagesage() {
    const dispatch =  useDispatch()

    useEffect(()=>{
        dispatch(setbreadcrumb(["Setting","Salary Component"]))
    },[dispatch])
  return (
    <div>Pages</div>
  )
}
