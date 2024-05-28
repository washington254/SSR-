import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/compressed.glb')

  // Modify material properties
  materials['Metal Brushed'].roughness = 0.5
  materials['Metal Brushed'].metalness = 1

  materials.Gold.roughness = 0.2
  materials.Gold.metalness = 0.9

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials['Metal Brushed']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials.Gold} />
      </group>
    </group>
  )
}

useGLTF.preload('/compressed.glb')
