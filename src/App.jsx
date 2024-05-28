import * as THREE from 'three'
import { useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, useCursor, OrbitControls, Environment } from '@react-three/drei'
import { Effects } from './Effects'
import { Model } from './Model'
import { useControls } from 'leva'

export const App = () => (
  <Canvas shadows gl={{ logarithmicDepthBuffer: true, antialias: false, stencil: false, depth: false }} camera={{ position: [20, 25, 25], fov: 15 }}>
    <color attach="background" args={['#151520']} />
    <OrbitControls />
    <Environment files="/garden.hdr" />
    <group position={[2, -2, 0]}>
      <group position={[0, -0.9, -3]}>
        <Plane color="black" rotation-x={-Math.PI / 2} position-z={3} scale={[20, 20, 0.2]} />
      </group>
      <Model />
    </group>
    <Sphere />
    <Effects />
  </Canvas>
)
const Plane = ({ color, ...props }) => (
  <RoundedBox receiveShadow castShadow smoothness={10} radius={0.015} {...props}>
    <meshStandardMaterial color={color} envMapIntensity={0.5} roughness={0} metalness={0} />
  </RoundedBox>
)

function Sphere() {
  const ref = useRef()
  const [active, setActive] = useState(false)
  const [zoom, set] = useState(true)
  useCursor(active)
  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() / 1)
  })
  return (
    <mesh
      position={[0, 0, 3]}
      ref={ref}
      receiveShadow
      castShadow
      onClick={() => set(!zoom)}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshStandardMaterial color={active ? 'hotpink' : 'lightblue'} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.25} />
    </mesh>
  )
}
