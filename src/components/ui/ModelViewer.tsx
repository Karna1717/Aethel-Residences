import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Float, MeshReflectorMaterial } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Sun, Moon } from "lucide-react";

function ArchitecturalMaquette({ isNightMode }: { isNightMode: boolean }) {
  return (
    <group position={[0, -1, 0]}>
      {/* Base Floor */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[12, 0.2, 8]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Reflective Inner Floor */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[11.5, 7.5]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={40}
          roughness={0.1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#1a1a1a"
          metalness={0.5}
          mirror={1}
        />
      </mesh>

      {/* Main Walls */}
      <mesh position={[-5.5, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 3, 7.5]} />
        <meshStandardMaterial color="#222222" roughness={0.7} />
      </mesh>
      
      <mesh position={[0, 1.5, -3.5]} castShadow receiveShadow>
        <boxGeometry args={[11, 3, 0.2]} />
        <meshStandardMaterial color="#222222" roughness={0.7} />
      </mesh>

      {/* Glass Partition */}
      <mesh position={[-2, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 3, 4]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          transmission={0.9} 
          opacity={1} 
          metalness={0} 
          roughness={0.1} 
          ior={1.5} 
          thickness={0.1} 
          transparent 
        />
      </mesh>

      {/* Gold Feature Wall / Pillar */}
      <mesh position={[2, 1.5, -1]} castShadow receiveShadow>
        <boxGeometry args={[1, 3, 1]} />
        <meshStandardMaterial color={isNightMode ? "#ffcc77" : "#c5a059"} emissive={isNightMode ? "#c5a059" : "#000000"} emissiveIntensity={isNightMode ? 0.2 : 0} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Abstract Furniture: Kitchen Island */}
      <mesh position={[2, 0.5, 1.5]} castShadow receiveShadow>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Abstract Furniture: Sofa */}
      <mesh position={[-3, 0.3, 1.5]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.6, 1]} />
        <meshStandardMaterial color="#333333" roughness={0.9} />
      </mesh>
      
      {/* Abstract Art / Floating Element */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <mesh position={[-3, 2, -3.3]} castShadow>
          <boxGeometry args={[2, 1, 0.1]} />
          <meshStandardMaterial color="#c5a059" metalness={1} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}

export function ModelViewer() {
  const [isNightMode, setIsNightMode] = useState(false);

  return (
    <div className="w-full h-full bg-dark relative cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [8, 6, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <color attach="background" args={[isNightMode ? '#050505' : '#1a1a1a']} />
          <fog attach="fog" args={[isNightMode ? '#050505' : '#1a1a1a', 10, 30]} />
          
          {isNightMode ? (
            <>
              <ambientLight intensity={0.1} color="#445566" />
              <spotLight position={[2, 5, 2]} angle={0.6} penumbra={1} intensity={2} color="#ffaa55" castShadow />
              <pointLight position={[-5, 2, -2]} intensity={1} color="#ffaa55" />
            </>
          ) : (
            <>
              <ambientLight intensity={0.6} color="#ffffff" />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
            </>
          )}
          
          <ArchitecturalMaquette isNightMode={isNightMode} />
          
          <ContactShadows position={[0, -1.1, 0]} opacity={isNightMode ? 0.8 : 0.4} scale={20} blur={2} far={4} />
          <Environment preset={isNightMode ? "night" : "city"} />
          <OrbitControls 
            makeDefault 
            autoRotate 
            autoRotateSpeed={0.5} 
            maxPolarAngle={Math.PI / 2 - 0.05} 
            minDistance={5} 
            maxDistance={20} 
          />
        </Suspense>
      </Canvas>
      
      {/* Day/Night Toggle */}
      <div className="absolute top-8 right-8 z-10">
        <div className="flex items-center bg-dark/80 backdrop-blur-md border border-white/10 rounded-full p-1">
          <button
            onClick={() => setIsNightMode(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-colors duration-300 ${!isNightMode ? 'bg-white text-dark' : 'text-gray-400 hover:text-white'}`}
          >
            <Sun size={14} /> Day
          </button>
          <button
            onClick={() => setIsNightMode(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-colors duration-300 ${isNightMode ? 'bg-gold text-dark' : 'text-gray-400 hover:text-white'}`}
          >
            <Moon size={14} /> Night
          </button>
        </div>
      </div>

      {/* Overlay Instructions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="text-white/50 text-xs uppercase tracking-[0.2em]">Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
}
