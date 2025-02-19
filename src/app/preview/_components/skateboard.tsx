

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import gsap from 'gsap'

import * as THREE from 'three'
import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { GLTF, MaterialCreator } from 'three-stdlib'
import { useFrame, useLoader } from '@react-three/fiber'
import { useStore } from '../../../../hooks/use-store'
interface SkateboardProps {
    constantSpeed: boolean
}
type GLTFResult = GLTF & {
  nodes: {
    GripTape: THREE.Mesh
    Wheel1: THREE.Mesh
    Wheel2: THREE.Mesh
    Deck: THREE.Mesh
    Wheel4: THREE.Mesh
    Bolts: THREE.Mesh
    Wheel3: THREE.Mesh
    Baseplates: THREE.Mesh
    Truck1: THREE.Mesh
    Truck2: THREE.Mesh
  }
  materials: {}
}

export function Skateboard({constantSpeed=true}:SkateboardProps) {
  const { nodes } = useGLTF('/skateboard.gltf') as GLTFResult
  const wheelRefs = useRef<THREE.Object3D[]>([])
    const {setBoltColor,setTruckColor,setDeckTexture,setWheelTexture,wheelTexture:wheelTex,boltColor,truckColor,deckTexture:deck} =  useStore()

  const gribTabeDiffuse = useTexture('/skateboard/griptape-diffuse.webp')
  const gribTabeRoughness = useTexture('/skateboard/griptape-roughness.webp')

  const griptapeMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
        map: gribTabeDiffuse,
        bumpMap: gribTabeRoughness,
        roughnessMap: gribTabeRoughness,
        roughness:0.8,
        color:'#555555',
        bumpScale:0.35

    })
    gribTabeDiffuse.wrapS = THREE.RepeatWrapping
    gribTabeDiffuse.wrapS = THREE.RepeatWrapping
    gribTabeDiffuse.repeat.set(9,9)
    gribTabeDiffuse.needsUpdate = true
gribTabeDiffuse.anisotropy = 8
        gribTabeRoughness.wrapS = THREE.RepeatWrapping
    gribTabeRoughness.wrapS = THREE.RepeatWrapping
    gribTabeRoughness.repeat.set(9,9)
    gribTabeRoughness.needsUpdate = true
    gribTabeRoughness.anisotropy = 8
    return material
    
  }, [gribTabeDiffuse,gribTabeRoughness])


  const boltMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
        metalness:0.8,
        roughness:0.2,
        color:boltColor,
    })
    return material

  }, [boltColor])

    const truckNormal = useTexture('/skateboard/metal-normal.avif')
  const truckMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
        normalMap: truckNormal,
        metalness:0.9,
        roughness:0.1,
        color:truckColor,
        
    })
    truckNormal.wrapS = THREE.RepeatWrapping
    truckNormal.wrapT = THREE.RepeatWrapping
    truckNormal.repeat.set(18,18)
    truckNormal.needsUpdate = true,
    truckNormal.anisotropy = 8
    return material

  }, [truckColor,truckNormal])
    const deckTexture = useLoader(THREE.TextureLoader, deck);

  const deckMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
        map: deckTexture,
        roughness:0.1,
       
        
    })
 
    return material

  }, [deckTexture])
     const wheelTexture = useLoader(THREE.TextureLoader, wheelTex);

    wheelTexture.flipY = false
  const wheelMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
        map: wheelTexture,
        roughness:0.3,
       
        
    })
 
    return material

  }, [wheelTexture])
  const addToWheelRefs = (ref:THREE.Object3D | null) => {
    if (ref && !wheelRefs.current.includes(ref)) {
            wheelRefs.current.push(ref)
    }
  }


  useEffect(() => {
    if (!wheelRefs.current || constantSpeed) return
    for (const wheel of wheelRefs.current){
        gsap.to(wheel.rotation,{
            x:'+=30',
            duration:2.5,
          
          ease:'circ.out'
        })
    }
    
    
  }, [constantSpeed,wheelTexture])
  
  

  return (
    <group position={[0,0,0]} rotation={[0,0,(Math.PI / 2)]}  dispose={null}>
      <group name="Scene">
        <mesh
          name="GripTape"
          castShadow
          receiveShadow
          geometry={nodes.GripTape.geometry}
          material={griptapeMaterial}
          position={[0, 0.286, -0.002]}
          
        />
        <mesh
          name="Wheel1"
          castShadow
          receiveShadow
          geometry={nodes.Wheel1.geometry}
          material={wheelMaterial}
          position={[0.238, 0.086, 0.635]}
          ref={addToWheelRefs}
        />
        <mesh
          name="Wheel2"
          castShadow
          receiveShadow
          geometry={nodes.Wheel2.geometry}
          material={wheelMaterial}
          position={[-0.237, 0.086, 0.635]}
          ref={addToWheelRefs}
        />
        <mesh
          name="Deck"
          castShadow
          receiveShadow
          geometry={nodes.Deck.geometry}
          material={deckMaterial}
          position={[0, 0.271, -0.002]}
        />
        <mesh
          name="Wheel4"
          castShadow
          receiveShadow
          geometry={nodes.Wheel4.geometry}
          material={wheelMaterial}
          position={[-0.238, 0.086, -0.635]}
          rotation={[Math.PI, 0, Math.PI]}
          ref={addToWheelRefs}
        />
        <mesh
          name="Bolts"
          castShadow
          receiveShadow
          geometry={nodes.Bolts.geometry}
          material={boltMaterial}
          position={[0, 0.198, 0]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Wheel3"
          castShadow
          receiveShadow
          geometry={nodes.Wheel3.geometry}
          material={wheelMaterial}
          position={[0.237, 0.086, -0.635]}
          rotation={[Math.PI, 0, Math.PI]}
          ref={addToWheelRefs}
        />
        <mesh
          name="Baseplates"
          castShadow
          receiveShadow
          geometry={nodes.Baseplates.geometry}
          material={nodes.Baseplates.material}
          position={[0, 0.211, 0]}
        />
        <mesh
          name="Truck1"
          castShadow
          receiveShadow
          geometry={nodes.Truck1.geometry}
          material={truckMaterial}
          position={[0, 0.101, -0.617]}
        />
        <mesh
          name="Truck2"
          castShadow
          receiveShadow
          geometry={nodes.Truck2.geometry}
          material={truckMaterial}
          position={[0, 0.101, 0.617]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/skateboard.gltf')
