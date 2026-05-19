'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── 3D Medical Cross (Plus Sign) ── */
function MedicalCross() {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    groupRef.current.rotation.y = time * 0.3;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.15;

    // Subtle hover float
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.15;

    if (glowRef.current) {
      glowRef.current.rotation.y = time * 0.3;
      glowRef.current.rotation.x = Math.sin(time * 0.2) * 0.15;
      glowRef.current.position.y = Math.sin(time * 0.5) * 0.15;
      glowRef.current.scale.setScalar(1.08 + Math.sin(time * 2) * 0.03);
    }
  });

  const crossMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#7A8B6F',
        emissive: '#7A8B6F',
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.4,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        transparent: true,
        opacity: 0.9,
      }),
    []
  );

  return (
    <>
      <group ref={groupRef}>
        {/* Vertical bar */}
        <mesh material={crossMaterial} position={[0, 0, 0]}>
          <boxGeometry args={[0.8, 2.8, 0.8]} />
        </mesh>
        {/* Horizontal bar */}
        <mesh material={crossMaterial} position={[0, 0.6, 0]}>
          <boxGeometry args={[2.8, 0.8, 0.8]} />
        </mesh>
        {/* Top accent sphere */}
        <mesh position={[0, 1.7, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshPhysicalMaterial
            color="#C17B5A"
            emissive="#C17B5A"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.6}
            clearcoat={1}
          />
        </mesh>
      </group>

      {/* Glow outline */}
      <group ref={glowRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.95, 2.95, 0.95]} />
          <meshBasicMaterial color="#7A8B6F" transparent opacity={0.05} side={THREE.BackSide} />
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[2.95, 0.95, 0.95]} />
          <meshBasicMaterial color="#7A8B6F" transparent opacity={0.05} side={THREE.BackSide} />
        </mesh>
      </group>
    </>
  );
}

/* ── Orbiting medical symbols ── */
function OrbitingSymbols() {
  const groupRef = useRef<THREE.Group>(null);
  const symbolCount = 8;

  const symbols = useMemo(
    () => Array.from({ length: symbolCount }, (_, i) => ({
      angle: (i / symbolCount) * Math.PI * 2,
      radius: 3 + Math.random() * 0.5,
      speed: 0.15 + Math.random() * 0.1,
      y: (Math.random() - 0.5) * 2,
      scale: 0.08 + Math.random() * 0.06,
    })),
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    groupRef.current.children.forEach((child, i) => {
      const sym = symbols[i];
      const angle = sym.angle + time * sym.speed;
      (child as THREE.Group).position.set(
        Math.cos(angle) * sym.radius,
        sym.y + Math.sin(time * 0.5 + i) * 0.3,
        Math.sin(angle) * sym.radius
      );
    });
  });

  return (
    <group ref={groupRef}>
      {symbols.map((_, i) => (
        <group key={i}>
          <mesh>
            <octahedronGeometry args={[1, 0]} />
            <meshPhysicalMaterial
              color={i % 2 === 0 ? '#7A8B6F' : '#C17B5A'}
              emissive={i % 2 === 0 ? '#7A8B6F' : '#C17B5A'}
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.3}
              clearcoat={0.5}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ── Shield / Ring around cross ── */
function ShieldRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.5, 0.025, 8, 100]} />
      <meshStandardMaterial
        color="#9B958C"
        emissive="#9B958C"
        emissiveIntensity={0.3}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

/* ── Floating dust particles ── */
function DustParticles() {
  const count = 60;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(
    () => Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 10,
      y: (Math.random() - 0.5) * 8,
      z: (Math.random() - 0.5) * 8,
      speed: Math.random() * 0.2 + 0.1,
      offset: Math.random() * Math.PI * 2,
    })),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(time * p.speed + p.offset) * 0.5,
        p.y + Math.cos(time * p.speed * 0.7 + p.offset) * 0.4,
        p.z + Math.sin(time * p.speed * 0.5) * 0.3
      );
      dummy.scale.setScalar(0.03 + Math.sin(time + p.offset) * 0.01);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial color="#9B958C" emissive="#9B958C" emissiveIntensity={0.4} transparent opacity={0.3} />
    </instancedMesh>
  );
}

export default function MedicalCrossScene() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <MedicalCross />
        <OrbitingSymbols />
        <ShieldRing />
        <DustParticles />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#7A8B6F" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#C17B5A" />
        <pointLight position={[0, 5, 3]} intensity={0.5} color="#ffffff" />
      </Canvas>
    </div>
  );
}
