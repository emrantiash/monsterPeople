"use client"
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setbreadcrumb } from '../redux/slices/breadcrumbSlice'

export default function Page() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setbreadcrumb(["Dashboard"]))
  },[])
  return (
    <div>Dashboard</div>
  )
}
