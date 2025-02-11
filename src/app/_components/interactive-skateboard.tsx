"use client"
import {Canvas, ThreeEvent, useThree} from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import { BoxGeometry } from 'three'
import { ContactShadows, Environment, Html, OrbitControls, useCamera} from '@react-three/drei'
import { Skateboard } from './skateboard'
import * as THREE from 'three'
import gsap from 'gsap'
import { HeatPoint } from './heat-point'
import { WavyPaths } from './wavy'
export const InteractiveSkateboard = () => {

    return (
        <div className="absolute w-full inset-0 grid grid-cols-5 place-items-center  ">
<Canvas className=" row-start-1 col-start-2  col-span-4 !h-[70%]    w-full" camera={{position:[2,1,1]}} >
    
<Suspense>
    
<Scene />
</Suspense>
</Canvas>
        </div>
    )
}

function Scene () {
const containerRef = useRef<THREE.Group>(null)
const {camera} =  useThree()


const onClick = (event:ThreeEvent<MouseEvent>) => {

    const board = containerRef.current
    if (!board) return
    const {name} =  event.object

    const doTheJump = (board:THREE.Group) => {
  
 gsap.timeline()
        .to(board.position,{
            y:0.9,
            duration:0.5,
            ease:'power2.out',
            delay:0.3,
           

        })
        .to(board.position,{
            y:0,
            duration:0.45,
            ease:'power2.in',
            
         
        })

    }
    if (name === 'end') {
       doTheJump(board)
          gsap.timeline()
        .to(board.rotation,{
            x:-0.6,
            duration:0.3,
            ease:'none'
        })
        
        .to(board.rotation,{
            x:0.3,
            duration:0.8,
            ease:'power1.inOut'
        })
        .to(board.rotation,{
            x:0,
            duration:0.3,
            ease:'none'
        })
    }
    if (name ==='middle') {
        doTheJump(board)
           gsap.timeline()
        .to(board.rotation,{
            x:-0.6,
            duration:0.3,
            ease:'none'
        })
        
        .to(board.rotation,{
            x:0.3,
            duration:0.8,
            ease:'power1.inOut',
        
        })
        
         .to(board.rotation,{
            z:`+=${Math.PI *2}`,
            duration:0.3,
            ease:'none'
        },0.5)
        .to(board.rotation,{
            x:0,
            duration:0.3,
            ease:'none'
        })
       
        

    }
    if (name === 'start') {
        doTheJump(board)
          gsap.timeline()
          .to(board.rotation,{
            x:-0.6,
            duration:0.3,
            ease:'none'
        })
        
        .to(board.rotation,{
            x:0.6,
            duration:0.8,
            ease:'power1.inOut',
        
        })
        
         .to(board.rotation,{
            y:`+=${Math.PI *2}`,
            duration:0.5,
            ease:'none'
        },0.6)
        .to(board.rotation,{
            x:0,
            duration:0.3,
            ease:'none'
        })

    }
    

}
   // ✅ Change cursor to pointer on hover
    const onPointerOver = () => {
        document.body.style.cursor = "pointer";
    };
    const onPointerOut = () => {
        document.body.style.cursor = "default";
    };


useEffect(() => {
    const board = containerRef.current
    if (!board) return
 gsap.to(board.position,{
            x:0.8,
            yoyo:true,
            duration:0.9,
            repeat:-1,
            ease:'sine.inOut'
        })
}, [])

   
  
    
    return (
        <group>
            <Environment preset='sunset'  />
        
          <group onPointerOver={onPointerOver} onPointerOut={onPointerOut}  onClick={onClick} ref={containerRef}>


            <Skateboard  constantSpeed />

            <HeatPoint position={new THREE.Vector3(0,0.3,0)} color='red' />
            <mesh  position={[0,0.3,0]} name='middle'>
            <boxGeometry args={[0.6,0.1,1]} />
            <meshStandardMaterial visible={false} />
            </mesh>
            <HeatPoint position={new THREE.Vector3(0,0.3,-0.9)} color='yellow' />
            <mesh position={[0,0.32,-1.1]} name='end'>
            <boxGeometry args={[0.6,0.1,1]} />
            <meshStandardMaterial visible={false} />
            </mesh>
             <HeatPoint position={new THREE.Vector3(0,0.3,0.9)} color='blue' />

            <mesh position={[0,0.32,0.9]} name='start'>
            <boxGeometry args={[0.6,0.1,0.6]} />
            <meshStandardMaterial visible={false} />
            </mesh>
          </group>
          <group position={[1,0,1]} rotation={[-Math.PI /2,0,-Math.PI /2]} scale={[0.1,0.1,0.1]}>
            <Html transform>
                <WavyPaths />
            </Html>
          </group>
          <group   position={[-1,0,1]} rotation={[-Math.PI /2,0,-Math.PI /2]} scale={[0.1,0.1,0.1]}>
            <Html zIndexRange={[1,0]}  occlude='blending' transform>
                <WavyPaths  />
            </Html>
          </group>
            <ContactShadows opacity={0.4} />
        </group>
    )
}