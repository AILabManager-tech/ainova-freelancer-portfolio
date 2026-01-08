import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useSystem } from '../../context/SystemContext';
import * as THREE from 'three';

// Rotating wireframe reactor core
const ReactorCore = ({ isOverclocked }) => {
  const groupRef = useRef();
  const innerRingRef = useRef();
  const outerRingRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const speed = isOverclocked ? 0.03 : 0.01;
    const pulseSpeed = isOverclocked ? 3 : 1;

    // Rotate the entire group
    groupRef.current.rotation.y += speed;
    groupRef.current.rotation.x += speed * 0.5;

    // Counter-rotate inner elements
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= speed * 2;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += speed * 1.5;
    }

    // Pulsing effect
    const pulse = Math.sin(state.clock.elapsedTime * pulseSpeed) * 0.1 + 1;
    groupRef.current.scale.setScalar(pulse);
  });

  const color = isOverclocked ? '#FF003C' : '#00F0FF';
  const emissiveIntensity = isOverclocked ? 2 : 1;

  return (
    <group ref={groupRef}>
      {/* Center core - Icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Inner ring - Torus */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 16, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Middle ring - Torus */}
      <mesh rotation={[0, Math.PI / 4, Math.PI / 2]}>
        <torusGeometry args={[2, 0.08, 16, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Outer ring - Torus */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.06, 16, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Energy particles */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 2 + Math.random() * 0.5;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = (Math.random() - 0.5) * 2;

        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={emissiveIntensity * 2}
            />
          </mesh>
        );
      })}

      {/* Point light at center */}
      <pointLight
        color={color}
        intensity={isOverclocked ? 3 : 2}
        distance={10}
      />
    </group>
  );
};

// Particle field background
const ParticleField = ({ isOverclocked }) => {
  const pointsRef = useRef();

  // Generate random particle positions
  const particles = useRef(
    new Float32Array(
      [...Array(200)].flatMap(() => [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ])
    )
  );

  useFrame((state) => {
    if (!pointsRef.current) return;

    const speed = isOverclocked ? 0.5 : 0.2;
    pointsRef.current.rotation.y += 0.0005 * speed;
    pointsRef.current.rotation.x += 0.0003 * speed;

    // Gentle pulsing
    const pulse = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + 1;
    pointsRef.current.scale.setScalar(pulse);
  });

  const color = isOverclocked ? '#FF003C' : '#00F0FF';

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.current.length / 3}
          array={particles.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Main ArcReactor component
const ArcReactor = () => {
  const { isOverclocked } = useSystem();

  return (
    <div className="w-full h-[600px] relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />

        {/* Ambient light */}
        <ambientLight intensity={0.2} />

        {/* Main scene */}
        <ReactorCore isOverclocked={isOverclocked} />
        <ParticleField isOverclocked={isOverclocked} />

        {/* Controls - subtle movement only */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={isOverclocked ? 2 : 0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* Glow overlay */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isOverclocked
            ? 'bg-gradient-radial from-stark-red/20 via-transparent to-transparent'
            : 'bg-gradient-radial from-stark-cyan/20 via-transparent to-transparent'
        }`}
      />
    </div>
  );
};

export default ArcReactor;
