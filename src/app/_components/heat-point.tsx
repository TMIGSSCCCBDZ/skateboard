"use client"
import { Billboard } from '@react-three/drei'
import * as THREE from 'three' 
interface HeatmapProps{
    position: THREE.Vector3,
    color: string
}
export const HeatPoint = ({position,color}:HeatmapProps) => {

    return (
        <Billboard position={position} follow={true}>
   <mesh >
            {/* Sphere Geometry */}
      <sphereGeometry args={[0.03, 30]} />

      {/* MeshPhysicalMaterial for glow and transparency */}
      <meshPhysicalMaterial
        color={color}
        emissive={color} // Glow effect
        emissiveIntensity={2} // Increase glow intensity
        transmission={1} // Glass-like transparency
        opacity={0.6} // Adjust visibility
        transparent
        roughness={0.1} // Slightly smooth surface
        clearcoat={1} // Reflection effect
        clearcoatRoughness={0} // Polished look
      />

      {/* Glow Effect Using Another Sphere */}
      <mesh>
        <sphereGeometry args={[0.035, 64, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          depthWrite={false}
          blending={THREE.AdditiveBlending} // Adds glow effect
        />
      </mesh>
        </mesh>
        </Billboard>
     
    )
}