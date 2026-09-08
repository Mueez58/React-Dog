import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Dog = () => {

  
  const Scene = useGLTF("/models/dog.drc.glb")
 
  return (
   <>
    <primitive object={Scene} />
    <OrbitControls/>
    </>
    
   
  )
}

export default Dog
