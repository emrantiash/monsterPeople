import React from 'react';
import Image from 'next/image';
import loadingImg from '../../assets/img/loading/loading.gif'

export default function Loading() {
  return (
    <div >
    <Image src={loadingImg} width={100} alt="loading" />
  </div>
  )
}