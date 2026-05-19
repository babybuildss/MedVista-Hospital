'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── DNA double helix - enhanced version with glow and better materials ── */
function DNAHelixEnhanced() {
  const groupRef = useRef<THREE.Group>(null);
  const particleCount = 160;

  const particles = useMemo(() => {
    const positions: { pos: THREE.Vector3; color: THREE.Color }[] = [];
    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 8;
      const y = (i / particleCount) * 10 - 5;
      const radius = 1.4;
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
    for (let i = 0; i < particleCount; i += 6) {
      const t = (i / particleCount) * Math.PI * 8;
      const y = (i / particleCount) * 10 - 5;
      const radius = 1.4;
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
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Strand spheres with enhanced material */}
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshPhysicalMaterial
            color={p.color}
            emissive={p.color}
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.3}
            clearcoat={0.8}
          />
        </mesh>
      ))}

      {/* Connectors with gradient color */}
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
          <mesh key={`conn-${i}`} position={mid} quaternion={quaternion}>
            <cylinderGeometry args={[0.012, 0.012, length, 4]} />
            <meshStandardMaterial
              color="#9B958C"
              emissive="#9B958C"
              emissiveIntensity={0.4}
              transparent
              opacity={0.5}
            />
          </mesh>
        );
      })}

      {/* Spiral backbone tubes - left strand */}
      <mesh>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3(
              Array.from({ length: 80 }, (_, i) => {
                const t = (i / 80) * Math.PI * 8;
                const y = (i / 80) * 10 - 5;
                return new THREE.Vector3(Math.cos(t) * 1.4, y, Math.sin(t) * 1.4);
              })
            ),
            200,
            0.025,
            8,
            false,
          ]}
        />
        <meshPhysicalMaterial
          color="#7A8B6F"
          emissive="#7A8B6F"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Spiral backbone tubes - right strand */}
      <mesh>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3(
              Array.from({ length: 80 }, (_, i) => {
                const t = (i / 80) * Math.PI * 8 + Math.PI;
                const y = (i / 80) * 10 - 5;
                return new THREE.Vector3(Math.cos(t) * 1.4, y, Math.sin(t) * 1.4);
              })
            ),
            200,
            0.025,
            8,
            false,
          ]}
        />
        <meshPhysicalMaterial
          color="#C17B5A"
          emissive="#C17B5A"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#7A8B6F" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#C17B5A" />
    </group>
  );
}

/* ── Enhanced floating particles with trails ── */
function EnhancedParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 120;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particleData = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 12,
        y: (Math.random() - 0.5) * 12,
        z: (Math.random() - 0.5) * 10,
        speed: Math.random() * 0.5 + 0.15,
        offset: Math.random() * Math.PI * 2,
        baseScale: Math.random() * 0.04 + 0.01,
      })),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particleData.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(time * p.speed + p.offset) * 0.6,
        p.y + Math.cos(time * p.speed + p.offset) * 0.5,
        p.z + Math.sin(time * p.speed * 0.4) * 0.3
      );
      const pulse = 1 + Math.sin(time * 2 + p.offset) * 0.3;
      dummy.scale.setScalar(p.baseScale * pulse);
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
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
      />
    </instancedMesh>
  );
}

export default function DNAEnhancedScene() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <DNAHelixEnhanced />
        <EnhancedParticles />
      </Canvas>
    </div>
  );
}
