'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Stethoscope-inspired 3D element ── */
function Stethoscope3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.4;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Chest piece (bell) */}
      <mesh position={[0, -1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.9, 0.3, 32]} />
        <meshPhysicalMaterial
          color="#9B958C"
          emissive="#9B958C"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
      {/* Chest piece top */}
      <mesh position={[0, -1.2, 0]}>
        <sphereGeometry args={[0.7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#7A8B6F"
          emissive="#7A8B6F"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.7}
          clearcoat={1}
        />
      </mesh>
      {/* Tubing - curved using torus segments */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.06, 12, 32, Math.PI]} />
        <meshPhysicalMaterial
          color="#5C6B52"
          emissive="#5C6B52"
          emissiveIntensity={0.2}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
      {/* Left earpiece */}
      <mesh position={[-1.2, 0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.08, 0.8, 12]} />
        <meshPhysicalMaterial
          color="#9B958C"
          emissive="#9B958C"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
        />
      </mesh>
      {/* Right earpiece */}
      <mesh position={[1.2, 0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.08, 0.8, 12]} />
        <meshPhysicalMaterial
          color="#9B958C"
          emissive="#9B958C"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
        />
      </mesh>
      {/* Connector ring */}
      <mesh position={[0, 1, 0]}>
        <torusGeometry args={[0.4, 0.03, 8, 32]} />
        <meshPhysicalMaterial
          color="#C17B5A"
          emissive="#C17B5A"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.6}
          clearcoat={1}
        />
      </mesh>
    </group>
  );
}

/* ── Heartbeat line (ECG waveform) ── */
function ECGLine() {
  const lineRef = useRef<THREE.Line>(null);
  const scrollRef = useRef(0);

  const basePoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const width = 10;
    const segments = 200;

    for (let i = 0; i < segments; i++) {
      const t = (i / segments) * width - width / 2;
      let y = 0;

      // ECG-like waveform
      const cycle = ((t % 2) + 2) % 2;
      if (cycle > 0.7 && cycle < 0.78) {
        y = -0.15; // P wave dip
      } else if (cycle > 0.82 && cycle < 0.86) {
        y = 0.05; // Q
      } else if (cycle > 0.86 && cycle < 0.92) {
        y = 1.2; // R peak
      } else if (cycle > 0.92 && cycle < 0.96) {
        y = -0.3; // S
      } else if (cycle > 1.1 && cycle < 1.25) {
        y = 0.15; // T wave
      }

      points.push(new THREE.Vector3(t, y, -1));
    }
    return points;
  }, []);

  useFrame((state) => {
    if (!lineRef.current) return;
    scrollRef.current = state.clock.elapsedTime * 0.5;
    lineRef.current.position.x = -Math.sin(scrollRef.current) * 0.3;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(basePoints);
    return geo;
  }, [basePoints]);

  return (
    // @ts-expect-error - R3F line element type mismatch
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#C17B5A" transparent opacity={0.6} linewidth={2} />
    </line>
  );
}

/* ── Floating medical icons ── */
function FloatingIcons() {
  const count = 25;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const icons = useMemo(
    () => Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 10,
      y: (Math.random() - 0.5) * 8,
      z: (Math.random() - 0.5) * 6,
      speed: Math.random() * 0.2 + 0.05,
      offset: Math.random() * Math.PI * 2,
      scale: Math.random() * 0.08 + 0.03,
    })),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    icons.forEach((icon, i) => {
      dummy.position.set(
        icon.x + Math.sin(time * icon.speed + icon.offset) * 0.8,
        icon.y + Math.cos(time * icon.speed * 0.6 + icon.offset) * 0.5,
        icon.z + Math.sin(time * icon.speed * 0.4) * 0.3
      );
      dummy.rotation.set(time * icon.speed, time * icon.speed * 0.5, 0);
      dummy.scale.setScalar(icon.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#7A8B6F"
        emissive="#7A8B6F"
        emissiveIntensity={0.4}
        transparent
        opacity={0.25}
      />
    </instancedMesh>
  );
}

export default function StethoscopeScene() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Stethoscope3D />
        <ECGLine />
        <FloatingIcons />
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#9B958C" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#C17B5A" />
        <pointLight position={[0, 5, 3]} intensity={0.6} color="#ffffff" />
      </Canvas>
    </div>
  );
}
