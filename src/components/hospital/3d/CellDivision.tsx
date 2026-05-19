'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Cell with membrane and organelles ── */
function Cell({ position, phase = 0 }: { position: [number, number, number]; phase?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    // Gentle breathing
    const breathe = 1 + Math.sin(time * 0.8 + phase) * 0.05;
    groupRef.current.scale.setScalar(breathe);
    groupRef.current.rotation.y = time * 0.1 + phase;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Cell membrane */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#7A8B6F"
          emissive="#7A8B6F"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.25}
          clearcoat={0.5}
        />
      </mesh>

      {/* Nucleus */}
      <mesh position={[0.1, 0.1, 0]}>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshPhysicalMaterial
          color="#5C6B52"
          emissive="#5C6B52"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.2}
          clearcoat={1}
        />
      </mesh>

      {/* Organelles */}
      <mesh position={[0.5, 0.3, 0.2]} scale={[0.3, 0.15, 0.3]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color="#C17B5A" emissive="#C17B5A" emissiveIntensity={0.3} transparent opacity={0.6} />
      </mesh>
      <mesh position={[-0.4, -0.2, 0.3]} scale={[0.2, 0.1, 0.2]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color="#C17B5A" emissive="#C17B5A" emissiveIntensity={0.3} transparent opacity={0.6} />
      </mesh>
      <mesh position={[0.2, -0.4, -0.2]} scale={[0.15, 0.15, 0.25]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color="#9B958C" emissive="#9B958C" emissiveIntensity={0.3} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

/* ── Division animation - two cells separating ── */
function CellDivision() {
  const groupRef = useRef<THREE.Group>(null);
  const membraneRef = useRef<THREE.Mesh>(null);
  const nucleus1Ref = useRef<THREE.Mesh>(null);
  const nucleus2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current || !membraneRef.current) return;
    const time = state.clock.elapsedTime;

    // Division cycle: pinch → stretch → separate → merge back → repeat
    const cycleDuration = 8;
    const t = (time % cycleDuration) / cycleDuration;

    if (t < 0.3) {
      // Phase 1: Elongating
      const phase = t / 0.3;
      membraneRef.current.scale.set(1 + phase * 0.8, 1 - phase * 0.2, 1 - phase * 0.2);
      if (nucleus1Ref.current) nucleus1Ref.current.position.x = -0.15 - phase * 0.3;
      if (nucleus2Ref.current) nucleus2Ref.current.position.x = 0.15 + phase * 0.3;
    } else if (t < 0.5) {
      // Phase 2: Pinching
      const phase = (t - 0.3) / 0.2;
      membraneRef.current.scale.set(1.8, 0.8, 0.8);
      if (nucleus1Ref.current) nucleus1Ref.current.position.x = -0.45 - phase * 0.2;
      if (nucleus2Ref.current) nucleus2Ref.current.position.x = 0.45 + phase * 0.2;
    } else if (t < 0.7) {
      // Phase 3: Separating
      const phase = (t - 0.5) / 0.2;
      membraneRef.current.scale.set(1.8 + phase * 0.5, 0.8 - phase * 0.2, 0.8 - phase * 0.1);
      if (nucleus1Ref.current) nucleus1Ref.current.position.x = -0.65 - phase * 0.8;
      if (nucleus2Ref.current) nucleus2Ref.current.position.x = 0.65 + phase * 0.8;
    } else if (t < 0.85) {
      // Phase 4: Two separate cells
      membraneRef.current.scale.set(2.3, 0.6, 0.7);
      if (nucleus1Ref.current) nucleus1Ref.current.position.x = -1.45;
      if (nucleus2Ref.current) nucleus2Ref.current.position.x = 1.45;
    } else {
      // Phase 5: Merge back
      const phase = (t - 0.85) / 0.15;
      const ease = phase * phase * (3 - 2 * phase); // smoothstep
      membraneRef.current.scale.set(
        2.3 - ease * 1.3,
        0.6 + ease * 0.4,
        0.7 + ease * 0.3
      );
      if (nucleus1Ref.current) nucleus1Ref.current.position.x = -1.45 + ease * 1.3;
      if (nucleus2Ref.current) nucleus2Ref.current.position.x = 1.45 - ease * 1.3;
    }

    groupRef.current.rotation.y = time * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Cell membrane */}
      <mesh ref={membraneRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhysicalMaterial
          color="#7A8B6F"
          emissive="#7A8B6F"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.3}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </mesh>

      {/* Dividing nuclei */}
      <mesh ref={nucleus1Ref} position={[-0.15, 0, 0]}>
        <sphereGeometry args={[0.3, 24, 24]} />
        <meshPhysicalMaterial
          color="#5C6B52"
          emissive="#5C6B52"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.3}
          clearcoat={1}
        />
      </mesh>
      <mesh ref={nucleus2Ref} position={[0.15, 0, 0]}>
        <sphereGeometry args={[0.3, 24, 24]} />
        <meshPhysicalMaterial
          color="#5C6B52"
          emissive="#5C6B52"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.3}
          clearcoat={1}
        />
      </mesh>

      {/* Spindle fibers */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array([
              -0.15, 0, 0, -0.8, 0.5, 0,
              -0.15, 0, 0, -0.8, -0.5, 0,
              -0.15, 0, 0, -0.8, 0, 0.5,
              -0.15, 0, 0, -0.8, 0, -0.5,
              0.15, 0, 0, 0.8, 0.5, 0,
              0.15, 0, 0, 0.8, -0.5, 0,
              0.15, 0, 0, 0.8, 0, 0.5,
              0.15, 0, 0, 0.8, 0, -0.5,
            ]), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#9B958C" transparent opacity={0.2} />
      </lineSegments>
    </group>
  );
}

/* ── Surrounding cells ── */
function SurroundingCells() {
  const cells = useMemo(
    () => [
      { pos: [-4, 2, -2] as [number, number, number], phase: 1.2 },
      { pos: [3.5, -1.5, -1] as [number, number, number], phase: 2.4 },
      { pos: [-3, -2.5, 1] as [number, number, number], phase: 3.6 },
      { pos: [4.5, 2.5, -3] as [number, number, number], phase: 0.8 },
    ],
    []
  );

  return (
    <>
      {cells.map((cell, i) => (
        <Cell key={i} position={cell.pos} phase={cell.phase} />
      ))}
    </>
  );
}

export default function CellDivisionScene() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <CellDivision />
        <SurroundingCells />
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 5, 5]} intensity={0.7} color="#7A8B6F" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#C17B5A" />
        <pointLight position={[0, 5, 3]} intensity={0.5} color="#ffffff" />
      </Canvas>
    </div>
  );
}
