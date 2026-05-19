'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);
  const particleCount = 120;

  const particles = useMemo(() => {
    const positions: { pos: THREE.Vector3; color: THREE.Color }[] = [];
    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 6;
      const y = (i / particleCount) * 8 - 4;
      const radius = 1.2;
      const isStrand1 = i % 2 === 0;
      const x = Math.cos(t) * radius;
      const z = Math.sin(t) * radius;
      positions.push({
        pos: new THREE.Vector3(x, y, z),
        color: isStrand1
          ? new THREE.Color('#7A8B6F')
          : new THREE.Color('#C17B5A'),
      });
    }
    return positions;
  }, []);

  const connectorPositions = useMemo(() => {
    const connectors: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    for (let i = 0; i < particleCount; i += 8) {
      const t = (i / particleCount) * Math.PI * 6;
      const y = (i / particleCount) * 8 - 4;
      const radius = 1.2;
      connectors.push({
        start: new THREE.Vector3(Math.cos(t) * radius, y, Math.sin(t) * radius),
        end: new THREE.Vector3(
          Math.cos(t + Math.PI) * radius,
          y,
          Math.sin(t + Math.PI) * radius
        ),
      });
    }
    return connectors;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <Sphere key={i} args={[0.08, 8, 8]} position={p.pos}>
          <meshStandardMaterial
            color={p.color}
            emissive={p.color}
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
      {connectorPositions.map((c, i) => {
        const mid = new THREE.Vector3()
          .addVectors(c.start, c.end)
          .multiplyScalar(0.5);
        const length = c.start.distanceTo(c.end);
        const direction = new THREE.Vector3()
          .subVectors(c.end, c.start)
          .normalize();
        const quaternion = new THREE.Quaternion();
        quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

        return (
          <mesh
            key={`conn-${i}`}
            position={mid}
            quaternion={quaternion}
          >
            <cylinderGeometry args={[0.015, 0.015, length, 4]} />
            <meshStandardMaterial
              color="#9B958C"
              emissive="#9B958C"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </mesh>
        );
      })}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#7A8B6F" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#C17B5A" />
    </group>
  );
}

function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 80;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particleData = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10,
        speed: Math.random() * 0.5 + 0.2,
        offset: Math.random() * Math.PI * 2,
      })),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particleData.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(time * p.speed + p.offset) * 0.5,
        p.y + Math.cos(time * p.speed + p.offset) * 0.5,
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
      <meshStandardMaterial
        color="#9B958C"
        emissive="#9B958C"
        emissiveIntensity={0.6}
        transparent
        opacity={0.4}
      />
    </instancedMesh>
  );
}

export default function DNAHelixScene() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <DNAHelix />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
