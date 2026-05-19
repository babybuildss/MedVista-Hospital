'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Central atom with electron orbits ── */
function Atom() {
  const groupRef = useRef<THREE.Group>(null);
  const electronsRef = useRef<THREE.Group>(null);

  // Create 3 orbit rings at different angles
  const orbits = useMemo(() => [
    { rotation: [0, 0, 0] as [number, number, number], electronOffset: 0 },
    { rotation: [Math.PI / 3, 0, Math.PI / 6] as [number, number, number], electronOffset: Math.PI * 0.66 },
    { rotation: [-Math.PI / 3, 0, -Math.PI / 6] as [number, number, number], electronOffset: Math.PI * 1.33 },
  ], []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = time * 0.15;
    groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;

    if (electronsRef.current) {
      electronsRef.current.children.forEach((electronGroup, i) => {
        const angle = time * (1.2 + i * 0.3) + orbits[i].electronOffset;
        const radius = 2;
        (electronGroup as THREE.Group).position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * Math.sin(i * 1.047) * radius * 0.5,
          Math.sin(angle) * radius
        );
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nucleus - cluster of spheres */}
      <group>
        <mesh>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshPhysicalMaterial
            color="#7A8B6F"
            emissive="#7A8B6F"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.3}
            clearcoat={1}
          />
        </mesh>
        <mesh position={[0.15, 0.12, 0.1]}>
          <sphereGeometry args={[0.2, 24, 24]} />
          <meshPhysicalMaterial
            color="#5C6B52"
            emissive="#5C6B52"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.3}
            clearcoat={1}
          />
        </mesh>
        <mesh position={[-0.12, -0.1, 0.15]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshPhysicalMaterial
            color="#9B958C"
            emissive="#9B958C"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.3}
            clearcoat={1}
          />
        </mesh>
      </group>

      {/* Orbit rings */}
      {orbits.map((orbit, i) => (
        <mesh key={i} rotation={orbit.rotation}>
          <torusGeometry args={[2, 0.012, 8, 100]} />
          <meshStandardMaterial
            color="#7A8B6F"
            emissive="#7A8B6F"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}

      {/* Electrons */}
      <group ref={electronsRef}>
        {orbits.map((_, i) => (
          <group key={i}>
            <mesh>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshPhysicalMaterial
                color="#C17B5A"
                emissive="#C17B5A"
                emissiveIntensity={0.8}
                roughness={0.1}
                metalness={0.5}
                clearcoat={1}
              />
            </mesh>
            {/* Electron trail/glow */}
            <mesh>
              <sphereGeometry args={[0.18, 12, 12]} />
              <meshBasicMaterial
                color="#E8C4B0"
                transparent
                opacity={0.2}
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

/* ── Surrounding molecule structures ── */
function MoleculeParticles() {
  const count = 50;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const bondRef = useRef<THREE.InstancedMesh>(null);
  const bondDummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(
    () => Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 10,
      y: (Math.random() - 0.5) * 10,
      z: (Math.random() - 0.5) * 8,
      speed: Math.random() * 0.2 + 0.05,
      offset: Math.random() * Math.PI * 2,
      scale: Math.random() * 0.06 + 0.02,
    })),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(time * p.speed + p.offset) * 1.2,
        p.y + Math.cos(time * p.speed * 0.8 + p.offset) * 0.8,
        p.z + Math.sin(time * p.speed * 0.6 + p.offset) * 0.6
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update bond connections (connect nearby particles)
    if (bondRef.current) {
      let bondIdx = 0;
      const maxBonds = 30;
      for (let i = 0; i < count && bondIdx < maxBonds; i += 3) {
        const nextI = (i + 3) % count;
        const p1 = particles[i];
        const p2 = particles[nextI];
        const px1 = p1.x + Math.sin(time * p1.speed + p1.offset) * 1.2;
        const py1 = p1.y + Math.cos(time * p1.speed * 0.8 + p1.offset) * 0.8;
        const pz1 = p1.z + Math.sin(time * p1.speed * 0.6 + p1.offset) * 0.6;
        const px2 = p2.x + Math.sin(time * p2.speed + p2.offset) * 1.2;
        const py2 = p2.y + Math.cos(time * p2.speed * 0.8 + p2.offset) * 0.8;
        const pz2 = p2.z + Math.sin(time * p2.speed * 0.6 + p2.offset) * 0.6;

        const mid = bondDummy.position;
        mid.set((px1 + px2) / 2, (py1 + py2) / 2, (pz1 + pz2) / 2);
        const dist = Math.sqrt((px2 - px1) ** 2 + (py2 - py1) ** 2 + (pz2 - pz1) ** 2);
        bondDummy.scale.set(0.008, 0.008, dist);
        bondDummy.lookAt(px2, py2, pz2);
        bondDummy.rotateX(Math.PI / 2);
        bondDummy.updateMatrix();
        bondRef.current.setMatrixAt(bondIdx, bondDummy.matrix);
        bondIdx++;
      }
      bondRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshStandardMaterial
          color="#7A8B6F"
          emissive="#7A8B6F"
          emissiveIntensity={0.5}
          transparent
          opacity={0.35}
        />
      </instancedMesh>
      <instancedMesh ref={bondRef} args={[undefined, undefined, 30]}>
        <cylinderGeometry args={[1, 1, 1, 4]} />
        <meshStandardMaterial
          color="#9B958C"
          emissive="#9B958C"
          emissiveIntensity={0.2}
          transparent
          opacity={0.15}
        />
      </instancedMesh>
    </>
  );
}

export default function MolecularStructureScene() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Atom />
        <MoleculeParticles />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.7} color="#7A8B6F" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#C17B5A" />
        <pointLight position={[0, 4, 4]} intensity={0.5} color="#ffffff" />
      </Canvas>
    </div>
  );
}
