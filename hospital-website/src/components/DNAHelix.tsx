'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Deterministic pseudo-random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function DNAStrand() {
  const groupRef = useRef<THREE.Group>(null);
  const particleCount = 80;
  const helixRadius = 1.5;
  const helixHeight = 8;
  const turns = 3;

  const strand1Positions = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * helixHeight;
      const x = Math.cos(angle) * helixRadius;
      const z = Math.sin(angle) * helixRadius;
      positions.push(new THREE.Vector3(x, y, z));
    }
    return positions;
  }, []);

  const strand2Positions = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      const angle = t * Math.PI * 2 * turns + Math.PI;
      const y = (t - 0.5) * helixHeight;
      const x = Math.cos(angle) * helixRadius;
      const z = Math.sin(angle) * helixRadius;
      positions.push(new THREE.Vector3(x, y, z));
    }
    return positions;
  }, []);

  const connectorPositions = useMemo(() => {
    const positions: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < particleCount; i += 4) {
      positions.push([strand1Positions[i], strand2Positions[i]]);
    }
    return positions;
  }, [strand1Positions, strand2Positions]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {strand1Positions.map((pos, i) => (
        <mesh key={`s1-${i}`} position={pos}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.5} />
        </mesh>
      ))}

      {strand2Positions.map((pos, i) => (
        <mesh key={`s2-${i}`} position={pos}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#0d9488" emissive="#0d9488" emissiveIntensity={0.5} />
        </mesh>
      ))}

      {connectorPositions.map(([start, end], i) => {
        const mid = start.clone().add(end).multiplyScalar(0.5);
        const length = start.distanceTo(end);
        const direction = end.clone().sub(start).normalize();
        const quaternion = new THREE.Quaternion();
        quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

        return (
          <mesh key={`c-${i}`} position={mid} quaternion={quaternion}>
            <cylinderGeometry args={[0.02, 0.02, length, 4]} />
            <meshStandardMaterial color="#d4a853" emissive="#d4a853" emissiveIntensity={0.3} transparent opacity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;

  // Use deterministic seed-based random to avoid Math.random in render
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (seededRandom(i * 3 + 1) - 0.5) * 10;
      pos[i * 3 + 1] = (seededRandom(i * 3 + 2) - 0.5) * 10;
      pos[i * 3 + 2] = (seededRandom(i * 3 + 3) - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
      particlesRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#d4a853"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function DNAHelix() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#0d9488" />
        <pointLight position={[0, 0, 5]} intensity={0.4} color="#d4a853" />

        <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
          <DNAStrand />
        </Float>

        <FloatingParticles />
      </Canvas>
    </div>
  );
}
