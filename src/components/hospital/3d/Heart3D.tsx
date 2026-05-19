'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Heart shape using parametric equation ── */
function HeartMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef(0);

  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x + 0.5, y + 0.5);
    shape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
    shape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
    shape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
    shape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
    shape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y);
    shape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);
    return shape;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.6,
    bevelEnabled: true,
    bevelSegments: 12,
    steps: 2,
    bevelSize: 0.15,
    bevelThickness: 0.15,
  }), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    pulseRef.current = 1 + Math.sin(time * 2.5) * 0.04 + Math.sin(time * 5) * 0.02;
    meshRef.current.scale.setScalar(pulseRef.current);
    meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.3;
    meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;

    if (glowRef.current) {
      glowRef.current.scale.setScalar(pulseRef.current * 1.15);
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.08 + Math.sin(time * 2.5) * 0.04;
    }
  });

  return (
    <group position={[-1.05, -0.95, 0]}>
      <mesh ref={meshRef} castShadow>
        <extrudeGeometry args={[heartShape, extrudeSettings]} />
        <meshPhysicalMaterial
          color="#C17B5A"
          emissive="#C17B5A"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.1}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          transparent
          opacity={0.92}
        />
      </mesh>
      <mesh ref={glowRef} scale={1.15}>
        <extrudeGeometry args={[heartShape, extrudeSettings]} />
        <meshBasicMaterial color="#E8C4B0" transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

function BloodCells() {
  const count = 30;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const cellData = useMemo(
    () => Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 8,
      z: (Math.random() - 0.5) * 6,
      speed: Math.random() * 0.3 + 0.1,
      offset: Math.random() * Math.PI * 2,
      scale: Math.random() * 0.08 + 0.04,
    })),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    cellData.forEach((cell, i) => {
      dummy.position.set(
        cell.x + Math.sin(time * cell.speed + cell.offset) * 0.8,
        cell.y + Math.cos(time * cell.speed * 0.7 + cell.offset) * 0.6,
        cell.z + Math.sin(time * cell.speed * 0.5) * 0.4
      );
      dummy.rotation.set(time * cell.speed * 0.5, time * cell.speed * 0.3, 0);
      dummy.scale.setScalar(cell.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial color="#C17B5A" emissive="#C17B5A" emissiveIntensity={0.3} transparent opacity={0.25} />
    </instancedMesh>
  );
}

function PulseRings() {
  const groupRef = useRef<THREE.Group>(null);
  const ringsData = useMemo(() => Array.from({ length: 4 }, (_, i) => ({ delay: i * 0.8 })), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.children.forEach((ring, i) => {
      const phase = ((time * 0.5 + ringsData[i].delay) % 3) / 3;
      const scale = 1 + phase * 2;
      ring.scale.set(scale, scale, 1);
      const mat = (ring as THREE.Mesh).material as THREE.MeshBasicMaterial;
      if (mat.opacity !== undefined) {
        mat.opacity = Math.max(0, 0.3 * (1 - phase));
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, -0.5]}>
      {ringsData.map((_, i) => (
        <mesh key={i}>
          <ringGeometry args={[0.9, 1, 64]} />
          <meshBasicMaterial color="#C17B5A" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

export default function Heart3DScene() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <HeartMesh />
        <BloodCells />
        <PulseRings />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#E8C4B0" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="#C17B5A" />
        <pointLight position={[0, 3, 3]} intensity={0.6} color="#ffffff" />
      </Canvas>
    </div>
  );
}
