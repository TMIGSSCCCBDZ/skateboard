"use client";
import { CameraControls, ContactShadows, Environment, Gltf, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Skateboard } from "./skateboard";
import { useStore } from "../../../../hooks/use-store";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const Interactive = () => {
    const {setBoltColor,setTruckColor,setDeckTexture,setWheelTexture,wheelTexture,boltColor,truckColor,deckTexture} =  useStore()
    const boltColors = [
     { colorHex: "#008080", colorName: "teal" },
  { colorHex: "#90EE90", colorName: "lime" },
  { colorHex: "#FF7F50", colorName: "coral" },
  { colorHex: "#98FB98", colorName: "mint" },
  { colorHex: "#E6E6FA", colorName: "lavender" },
  { colorHex: "#FFDB58", colorName: "mustard" },
  { colorHex: "#800000", colorName: "maroon" },
  { colorHex: "#000080", colorName: "navy" },
  { colorHex: "#808000", colorName: "olive" },
  { colorHex: "#87CEEB", colorName: "skyBlue" },
    ]
      const truckColors = [
     { colorHex: "#008080", colorName: "teal" },
  { colorHex: "#90EE90", colorName: "lime" },
  { colorHex: "#FF7F50", colorName: "coral" },
  { colorHex: "#98FB98", colorName: "mint" },
  { colorHex: "#E6E6FA", colorName: "lavender" },
  { colorHex: "#FFDB58", colorName: "mustard" },
  { colorHex: "#800000", colorName: "maroon" },
  { colorHex: "#000080", colorName: "navy" },
  { colorHex: "#808000", colorName: "olive" },
  { colorHex: "#87CEEB", colorName: "skyBlue" },
    ]
          const deckTextures = [
     { textureName: "/red-black-complete.png", name: "Red and Black Mix" },
     { textureName: "/red-white-complete.png", name: "Red and White Mix" },
 
    ]
          const wheelTextures = [
     { textureName: "/wheel-black.png", name: "Black Wheel" },
     { textureName: "/wheel-red.png", name: "Red Wheel " },
 
    ]
    const router = useRouter()
  return (
    <div className=" relative w-full h-full bg-zinc-500">
      
        <aside className="w-52  flex flex-col items-center bg-zinc-700 bg-texture h-full z-50 absolute inset-0">
   <button  onClick={() => {
    router.push('/')
   }} className="button-cutout  absolute ml-auto  top-2  z-20 transition  bg-purple-800">
<ChevronLeft />
        </button>
    <div className="flex flex-col mt-10 w-full justify-center  items-center">
        <h1 className="font-bold font-mono text-2xl text-white">Bolt Color</h1>
    <div className="flex w-full items-center justify-center py-2 flex-wrap gap-x-1 gap-y-2">
{boltColors.map(({colorHex,colorName}) => (
    <span key={colorHex} onClick={() => {setBoltColor(colorHex)}} className="w-8 h-8 cursor-pointer flex items-center justify-center font-mono font-bold rounded-full" style={{backgroundColor: colorHex}}>
        
    </span>
))}
    </div>
    </div>
     <div className="flex flex-col w-full justify-center  items-center">
        <h1 className="font-bold font-mono text-2xl text-white">Truck Color</h1>
    <div className="flex w-full items-center justify-center py-2 flex-wrap gap-x-1 gap-y-2">
{truckColors.map(({colorHex,colorName}) => (
    <span key={colorHex} onClick={() => {setTruckColor(colorHex)}} className="w-8 h-8 cursor-pointer flex items-center justify-center font-mono font-bold rounded-full" style={{backgroundColor: colorHex}}>
        
    </span>
))}
    </div>
    </div>
        <div className="flex flex-col w-full justify-center  items-center">
        <h1 className="font-bold font-mono text-2xl text-white">Deck Texture</h1>
    <div className="flex w-full items-center justify-center py-2 flex-wrap gap-x-1 gap-y-2">
{deckTextures.map(({textureName,name}) => (
    <img key={textureName} onClick={() => {setDeckTexture(textureName)}} src={textureName} className={`w-12 h-12 cursor-pointer  flex items-center justify-center object-contain `} />
        
   
))}
    </div>
    </div>
      <div className="flex flex-col w-full justify-center  items-center">
        <h1 className="font-bold font-mono text-2xl text-white">Wheel Texture</h1>
    <div className="flex w-full items-center justify-center py-2 flex-wrap gap-x-1 gap-y-2">
{wheelTextures.map(({textureName,name}) => (
    <img key={textureName} onClick={() => {setWheelTexture(textureName)}} src={textureName} className={`w-10 h-10 cursor-pointer  flex items-center justify-center object-cover rounded-full `} />
        
   
))}
    </div>
    </div>
        </aside>
      <Canvas shadows className="h-full" camera={{ position: [2, 2, 2], fov: 70 }}>
        <Suspense fallback={null}>
          <Scene />

      <fog attach="fog" args={["#555555", 2, 8]} />
      <color attach="background" args={["#555555"]} />
 
        </Suspense>
      </Canvas>
    </div>
  );
};

function Scene() {
  // ✅ Ensure the texture is fully loaded before applying it
  const normalTexture = useLoader(THREE.TextureLoader, "/concrete-normal.avif");
    const {setBoltColor,setTruckColor,setDeckTexture,setWheelTexture,wheelTexture,boltColor,truckColor,deckTexture} =  useStore()

  const groundMaterial = useMemo(() => {
    normalTexture.wrapS = THREE.RepeatWrapping;
    normalTexture.wrapT = THREE.RepeatWrapping;
    normalTexture.repeat.set(9, 9);
    normalTexture.anisotropy = Math.min(16, normalTexture.anisotropy);
    normalTexture.needsUpdate = true;

    return new THREE.MeshStandardMaterial({
      normalMap: normalTexture,
      roughness: 0.6,
      color: "#555555",
    });
  }, [normalTexture]);

  const cameraRef = useRef<CameraControls>(null);
  const roofRef = useRef<THREE.Mesh>(null)

  useGLTF.preload("/skateboard.glb"); // ✅ Preload 3D Model
  const adjustCamera = (pos:THREE.Vector3,target:THREE.Vector3) => {
    if (!cameraRef.current) return
    cameraRef.current.setTarget(target.x,target.y,target.z,true)
    cameraRef.current.setPosition(pos.x,pos.y,pos.z,true)
    
  }
  const adjustToground = () =>{
    const currentBottom = roofRef.current

    if (!currentBottom || !cameraRef.current || cameraRef.current.colliderMeshes.length>0)  return
    cameraRef.current.colliderMeshes = [currentBottom]
    
  }
  useEffect(() => {
    adjustCamera(
       ( new THREE.Vector3(0,0,2)),
       ( new THREE.Vector3(0,0,0))
    )
    
  }, [truckColor])
  useEffect(() => {
    adjustCamera(
       ( new THREE.Vector3(0,1.5,2)),
       ( new THREE.Vector3(0,0,0))
    )
    
  }, [wheelTexture])
    useEffect(() => {
    adjustCamera(
       ( new THREE.Vector3(-1.5,0.5,2)),
       ( new THREE.Vector3(0,0,0))
    )
    
  }, [boltColor])
    useEffect(() => {
    adjustCamera(
       ( new THREE.Vector3(2,0.5,0)),
       ( new THREE.Vector3(0,0,0))
    )
    
  }, [deckTexture])
  

  return (
    <group>
      <Environment preset="warehouse" />

     
      <CameraControls ref={cameraRef} minDistance={2} maxDistance={10} />

     
      <directionalLight castShadow position={[2, 2, 2]} />

      <group>

        <Skateboard  constantSpeed={false} />
      </group>

  

      <group>
        <mesh
        ref={adjustToground}
          name="ground"
          receiveShadow
          castShadow
          material={groundMaterial}
          position={[0, -0.28, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <circleGeometry args={[20, 30]} />
        </mesh>
          <mesh
        ref={roofRef}
          name="ground"
          receiveShadow
          visible={false}
          castShadow
          material={groundMaterial}
          position={[0, -0.28, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <circleGeometry args={[20, 30]} />
        </mesh>
      </group>
    </group>
  );
}
