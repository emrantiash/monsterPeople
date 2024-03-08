"use client"
import React , {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setbreadcrumb } from '@/app/redux/slices/breadcrumbSlice'

export default function Page() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setbreadcrumb(["Setting","Organization Profile"]))
    },[dispatch])
  return (
    <main>

    </main>
  )
}
