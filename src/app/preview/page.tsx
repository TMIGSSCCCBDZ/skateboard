import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Interactive } from './_components/interactive'

const page = () => {
  return (
    <div className='h-full'>
      <Interactive />
        
    </div>
  )
}


export default page