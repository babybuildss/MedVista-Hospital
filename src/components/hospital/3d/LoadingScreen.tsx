'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Animated medical cross that rotates and assembles ── */
function LoadingCross() {
  const verticalRef = useRef<THREE.Mesh>(null);
  const horizontalRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    // Smooth assembly animation
    const assemblyPhase = Math.min(time / 2, 1);
    const eased = 1 - Math.pow(1 - assemblyPhase, 3);

    // Vertical bar drops in
    if (verticalRef.current) {
      verticalRef.current.position.y = (1 - eased) * -3;
      verticalRef.current.rotation.z = (1 - eased) * Math.PI * 0.5;
    }

    // Horizontal bar slides in
    if (horizontalRef.current) {
      horizontalRef.current.position.x = (1 - eased) * 5;
    }

    // Continuous rotation
    groupRef.current.rotation.y = time * 0.4;
    groupRef.current.position.y = Math.sin(time * 0.8) * 0.15;

    // Glow pulse
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.1 + Math.sin(time * 3) * 0.05);
    }
  });

  const crossMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#7A8B6F',
        emissive: '#7A8B6F',
        emissiveIntensity: 0.6,
        roughness: 0.15,
        metalness: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        transparent: true,
        opacity: 0.95,
      }),
    []
  );

  return (
    <>
      <group ref={groupRef}>
        {/* Vertical bar */}
        <mesh ref={verticalRef} material={crossMaterial} position={[0, 0, 0]}>
          <boxGeometry args={[0.7, 2.6, 0.7]} />
        </mesh>
        {/* Horizontal bar */}
        <mesh ref={horizontalRef} material={crossMaterial} position={[0, 0.5, 0]}>
          <boxGeometry args={[2.6, 0.7, 0.7]} />
        </mesh>
        {/* Accent spheres */}
        <mesh position={[0, 1.6, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshPhysicalMaterial
            color="#C17B5A"
            emissive="#C17B5A"
            emissiveIntensity={1}
            roughness={0.1}
            metalness={0.6}
            clearcoat={1}
          />
        </mesh>
        <mesh position={[1.3, 0.5, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshPhysicalMaterial
            color="#C17B5A"
            emissive="#C17B5A"
            emissiveIntensity={1}
            roughness={0.1}
            metalness={0.6}
            clearcoat={1}
          />
        </mesh>

        {/* Glow group */}
        <group ref={glowRef}>
          <mesh>
            <boxGeometry args={[0.85, 2.75, 0.85]} />
            <meshBasicMaterial color="#7A8B6F" transparent opacity={0.06} side={THREE.BackSide} />
          </mesh>
        </group>
      </group>
    </>
  );
}

/* ── DNA strand orbiting around cross ── */
function LoadingDNA() {
  const groupRef = useRef<THREE.Group>(null);
  const particleCount = 60;

  const particles = useMemo(() => {
    const positions: { pos: THREE.Vector3; color: THREE.Color }[] = [];
    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 4;
      const y = (i / particleCount) * 6 - 3;
      const radius = 3.5;
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

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshStandardMaterial
            color={p.color}
            emissive={p.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
      {/* DNA backbone */}
      <mesh>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3(
              Array.from({ length: 60 }, (_, i) => {
                const t = (i / 60) * Math.PI * 4;
                const y = (i / 60) * 6 - 3;
                return new THREE.Vector3(Math.cos(t) * 3.5, y, Math.sin(t) * 3.5);
              })
            ),
            150,
            0.012,
            6,
            false,
          ]}
        />
        <meshStandardMaterial
          color="#7A8B6F"
          emissive="#7A8B6F"
          emissiveIntensity={0.4}
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3(
              Array.from({ length: 60 }, (_, i) => {
                const t = (i / 60) * Math.PI * 4 + Math.PI;
                const y = (i / 60) * 6 - 3;
                return new THREE.Vector3(Math.cos(t) * 3.5, y, Math.sin(t) * 3.5);
              })
            ),
            150,
            0.012,
            6,
            false,
          ]}
        />
        <meshStandardMaterial
          color="#C17B5A"
          emissive="#C17B5A"
          emissiveIntensity={0.4}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

/* ── Floating particles ── */
function LoadingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 80;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particleData = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 12,
        z: (Math.random() - 0.5) * 10,
        speed: Math.random() * 0.2 + 0.08,
        offset: Math.random() * Math.PI * 2,
        baseScale: Math.random() * 0.03 + 0.008,
      })),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particleData.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(time * p.speed + p.offset) * 0.5,
        p.y + Math.cos(time * p.speed * 0.7 + p.offset) * 0.4,
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
        emissiveIntensity={0.4}
        transparent
        opacity={0.3}
      />
    </instancedMesh>
  );
}

/* ── Expanding rings ── */
function ExpandingRings() {
  const groupRef = useRef<THREE.Group>(null);
  const rings = useMemo(() => Array.from({ length: 4 }, (_, i) => ({ delay: i * 0.9 })), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.children.forEach((ring, i) => {
      const phase = ((time * 0.3 + rings[i].delay) % 4) / 4;
      const scale = 0.3 + phase * 2.5;
      ring.scale.set(scale, scale, 1);
      const mat = (ring as THREE.Mesh).material as THREE.MeshBasicMaterial;
      mat.opacity = Math.max(0, 0.15 * (1 - phase));
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, -1]}>
      {rings.map((_, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2, 0.01, 8, 80]} />
          <meshBasicMaterial color="#7A8B6F" transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
}

/* ── 3D Scene ── */
function LoadingScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <LoadingCross />
      <LoadingDNA />
      <LoadingParticles />
      <ExpandingRings />
      <ambientLight intensity={0.3} />
      <pointLight position={[6, 5, 5]} intensity={0.8} color="#7A8B6F" />
      <pointLight position={[-5, -3, 5]} intensity={0.5} color="#C17B5A" />
      <pointLight position={[0, 6, 4]} intensity={0.4} color="#ffffff" />
      <fog attach="fog" args={['#1A1A1A', 6, 20]} />
    </Canvas>
  );
}

/* ═══════════════════════════════════════
   LOADING SCREEN - Full-screen overlay
   ═══════════════════════════════════════ */
export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Simulate loading progress with easing
    const duration = 3200;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      setProgress(Math.round(easedProgress * 100));

      if (rawProgress >= 1) {
        clearInterval(timer);
        // Trigger fade out
        setTimeout(() => setFadeOut(true), 200);
        // Remove from DOM after fade
        setTimeout(() => {
          setHidden(true);
          onComplete();
        }, 800);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-charcoal flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-60">
        <LoadingScene />
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Brand */}
        <div className="mb-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl text-white tracking-tight">
            Med<span className="text-sage-light italic">Vista</span>
          </h1>
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-white/30 mt-2">
            Premier Hospital
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sage to-terracotta rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress text */}
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/25 mt-4">
          {progress < 100 ? 'Loading Experience' : 'Welcome'}
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/10" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/10" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/10" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/10" />
    </div>
  );
}
