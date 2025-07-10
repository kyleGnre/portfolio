// src/components/Planet.jsx
import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Planet = ({ textureUrl, position = [0, 0, 0], size = 1 }) => {
  const meshRef = useRef()
  const texture = useLoader(TextureLoader, textureUrl)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0006
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default Planet
