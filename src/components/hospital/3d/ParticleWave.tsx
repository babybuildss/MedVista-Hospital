'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Particle wave that responds to time ── */
function ParticleWave() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const gridSize = 28;
  const count = gridSize * gridSize;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const basePositions = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        x: ((i % gridSize) - gridSize / 2) * 0.3,
        z: (Math.floor(i / gridSize) - gridSize / 2) * 0.3,
      })),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    basePositions.forEach((pos, i) => {
      const dist = Math.sqrt(pos.x * pos.x + pos.z * pos.z);
      const y = Math.sin(dist * 1.5 - time * 1.2) * 0.5 * Math.exp(-dist * 0.08);

      dummy.position.set(pos.x, y, pos.z);

      const intensity = (y + 0.5) / 1;
      const scale = 0.04 + intensity * 0.06;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshPhysicalMaterial
        color="#7A8B6F"
        emissive="#7A8B6F"
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.2}
        transparent
        opacity={0.6}
      />
    </instancedMesh>
  );
}

/* ── Helix ring decorations ── */
function HelixRings() {
  const groupRef = useRef<THREE.Group>(null);
  const rings = useMemo(
    () => Array.from({ length: 6 }, (_, i) => ({
      radius: 1.5 + i * 0.4,
      y: (i - 2.5) * 0.8,
      rotSpeed: (i % 2 === 0 ? 1 : -1) * 0.15,
    })),
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = Math.PI / 2 + Math.sin(time * 0.2 + i) * 0.1;
      child.rotation.z = time * rings[i].rotSpeed;
    });
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} position={[0, ring.y, 0]}>
          <torusGeometry args={[ring.radius, 0.008, 8, 80]} />
          <meshStandardMaterial
            color="#9B958C"
            emissive="#9B958C"
            emissiveIntensity={0.2}
            transparent
            opacity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Floating DNA fragments in the background ── */
function DNAFragments() {
  const count = 40;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const fragments = useMemo(
    () => Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 12,
      y: (Math.random() - 0.5) * 8,
      z: (Math.random() - 0.5) * 6,
      speed: Math.random() * 0.3 + 0.1,
      offset: Math.random() * Math.PI * 2,
      scale: Math.random() * 0.05 + 0.02,
    })),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    fragments.forEach((f, i) => {
      dummy.position.set(
        f.x + Math.sin(time * f.speed + f.offset) * 0.6,
        f.y + Math.cos(time * f.speed * 0.7 + f.offset) * 0.4,
        f.z + Math.sin(time * f.speed * 0.5) * 0.3
      );
      dummy.rotation.set(time * f.speed, time * f.speed * 0.5, 0);
      dummy.scale.setScalar(f.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#5C6B52"
        emissive="#5C6B52"
        emissiveIntensity={0.4}
        transparent
        opacity={0.3}
      />
    </instancedMesh>
  );
}

export default function ParticleWaveScene() {
  return (
    <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
      <Canvas
        camera={{ position: [0, 5, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <ParticleWave />
        <HelixRings />
        <DNAFragments />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#7A8B6F" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#C17B5A" />
      </Canvas>
    </div>
  );
}
