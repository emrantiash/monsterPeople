"use client"
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setbreadcrumb } from '@/app/redux/slices/breadcrumbSlice'
import Button from '@/app/components/button/Button'

export default function page() {
    const dispatch = useDispatch()
    useEffect(()=>{

        dispatch(setbreadcrumb(["Master","Location"]))

    },[dispatch])
  return (
    <div>
         <div className='row'>
            <div className='col-9'></div>
            <div className='col-3'>
                <Button class="btn btn-success text-table" text = "Add New Location"
                icon = {<i className='fas fa-plus' ></i>}
                />
            </div>
            </div>
            <div className='row'>
            <div className='col-12'>
                <hr />
            </div>
            
            </div>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-3'>
            <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold  text-capitalize mb-1">
                   
                   
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                </div>
                <div className="col-auto"></div>
              </div>
            </div>
          </div>
            </div>
        </div>
    </div>
  )
}
