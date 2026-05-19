'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Animated DNA Helix strands as hero background ── */
function HeroDNAHelix() {
  const groupRef = useRef<THREE.Group>(null);
  const particleCount = 200;

  const particles = useMemo(() => {
    const positions: { pos: THREE.Vector3; color: THREE.Color; size: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 10;
      const y = (i / particleCount) * 16 - 8;
      const radius = 2.2;
      const isStrand1 = i % 2 === 0;
      const x = Math.cos(t) * radius;
      const z = Math.sin(t) * radius;
      positions.push({
        pos: new THREE.Vector3(x, y, z),
        color: isStrand1
          ? new THREE.Color('#7A8B6F')
          : new THREE.Color('#C17B5A'),
        size: Math.random() * 0.08 + 0.04,
      });
    }
    return positions;
  }, []);

  const connectorPositions = useMemo(() => {
    const connectors: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    for (let i = 0; i < particleCount; i += 4) {
      const t = (i / particleCount) * Math.PI * 10;
      const y = (i / particleCount) * 16 - 8;
      const radius = 2.2;
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
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[2.5, 0, -2]}>
      {/* Strand spheres */}
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshPhysicalMaterial
            color={p.color}
            emissive={p.color}
            emissiveIntensity={0.7}
            roughness={0.2}
            metalness={0.4}
            clearcoat={1}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* Connectors */}
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
            <cylinderGeometry args={[0.008, 0.008, length, 4]} />
            <meshStandardMaterial
              color="#9B958C"
              emissive="#9B958C"
              emissiveIntensity={0.3}
              transparent
              opacity={0.35}
            />
          </mesh>
        );
      })}

      {/* Backbone tubes */}
      <mesh>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3(
              Array.from({ length: 100 }, (_, i) => {
                const t = (i / 100) * Math.PI * 10;
                const y = (i / 100) * 16 - 8;
                return new THREE.Vector3(Math.cos(t) * 2.2, y, Math.sin(t) * 2.2);
              })
            ),
            300,
            0.018,
            8,
            false,
          ]}
        />
        <meshPhysicalMaterial
          color="#7A8B6F"
          emissive="#7A8B6F"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.3}
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3(
              Array.from({ length: 100 }, (_, i) => {
                const t = (i / 100) * Math.PI * 10 + Math.PI;
                const y = (i / 100) * 16 - 8;
                return new THREE.Vector3(Math.cos(t) * 2.2, y, Math.sin(t) * 2.2);
              })
            ),
            300,
            0.018,
            8,
            false,
          ]}
        />
        <meshPhysicalMaterial
          color="#C17B5A"
          emissive="#C17B5A"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.3}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

/* ── Floating medical particles ── */
function HeroParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 150;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particleData = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 14,
        z: (Math.random() - 0.5) * 12,
        speed: Math.random() * 0.3 + 0.1,
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
        p.x + Math.sin(time * p.speed + p.offset) * 0.8,
        p.y + Math.cos(time * p.speed * 0.7 + p.offset) * 0.6,
        p.z + Math.sin(time * p.speed * 0.4) * 0.4
      );
      const pulse = 1 + Math.sin(time * 1.5 + p.offset) * 0.4;
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
        opacity={0.35}
      />
    </instancedMesh>
  );
}

/* ── Orbiting rings ── */
function OrbitRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = Math.PI / 2 + Math.sin(time * 0.15 + i * 1.5) * 0.2;
      child.rotation.z = time * (0.08 + i * 0.03) * (i % 2 === 0 ? 1 : -1);
    });
  });

  return (
    <group ref={groupRef} position={[3, 0, -3]}>
      {[2.5, 3.2, 4].map((radius, i) => (
        <mesh key={i}>
          <torusGeometry args={[radius, 0.006, 8, 120]} />
          <meshStandardMaterial
            color="#7A8B6F"
            emissive="#7A8B6F"
            emissiveIntensity={0.25}
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Pulse wave emanating from center ── */
function PulseWaves() {
  const groupRef = useRef<THREE.Group>(null);
  const waves = useMemo(() => Array.from({ length: 5 }, (_, i) => ({ delay: i * 0.7 })), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.children.forEach((ring, i) => {
      const phase = ((time * 0.35 + waves[i].delay) % 3.5) / 3.5;
      const scale = 0.5 + phase * 3;
      ring.scale.set(scale, scale, 1);
      const mat = (ring as THREE.Mesh).material as THREE.MeshBasicMaterial;
      if (mat.opacity !== undefined) {
        mat.opacity = Math.max(0, 0.2 * (1 - phase));
      }
    });
  });

  return (
    <group ref={groupRef} position={[2, 0, -2]}>
      {waves.map((_, i) => (
        <mesh key={i}>
          <ringGeometry args={[0.95, 1, 80]} />
          <meshBasicMaterial color="#7A8B6F" transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Mouse-reactive camera ── */
function MouseCamera() {
  const { camera } = useThree();
  const targetX = useRef(0);
  const targetY = useRef(0);

  useFrame((state) => {
    const pointer = state.pointer;
    targetX.current = pointer.x * 0.5;
    targetY.current = pointer.y * 0.3;

    camera.position.x += (targetX.current - camera.position.x) * 0.02;
    camera.position.y += (targetY.current + 0.5 - camera.position.y) * 0.02;
    camera.lookAt(1, 0, 0);
  });

  return null;
}

/* ── Main Scene ── */
export default function HeroBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 8], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <HeroDNAHelix />
      <HeroParticles />
      <OrbitRings />
      <PulseWaves />
      <MouseCamera />
      <ambientLight intensity={0.25} />
      <pointLight position={[8, 5, 5]} intensity={0.8} color="#7A8B6F" />
      <pointLight position={[-5, -3, 5]} intensity={0.5} color="#C17B5A" />
      <pointLight position={[0, 8, 3]} intensity={0.4} color="#ffffff" />
      <pointLight position={[3, 0, 5]} intensity={0.3} color="#E8C4B0" />
      <fog attach="fog" args={['#1A1A1A', 8, 22]} />
    </Canvas>
  );
}
