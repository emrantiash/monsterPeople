import React from 'react';
import Image from 'next/image';
import loadingImg from '../../assets/img/loading/loading.gif'

export default function Loading(props) {
  return (
    <div style={{
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
    }}>
    {/* <Image src={loadingImg} width={100} alt="loading" /> */}
    {
      props.isLoading &&
      <i className='fas fa-spinner fa-2x' ></i>
    }
    
  </div>
  )
}