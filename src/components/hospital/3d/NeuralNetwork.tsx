'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Neural network nodes ── */
function NeuralNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const nodeCount = 60;

  const nodes = useMemo(
    () =>
      Array.from({ length: nodeCount }, () => ({
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 6,
        z: (Math.random() - 0.5) * 4,
        baseScale: Math.random() * 0.12 + 0.04,
        speed: Math.random() * 0.5 + 0.2,
        offset: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 2 + 1,
      })),
    []
  );

  // Create connections between nearby nodes
  const connections = useMemo(() => {
    const conns: { from: number; to: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 3 && conns.length < 80) {
          conns.push({ from: i, to: j });
        }
      }
    }
    return conns;
  }, [nodes]);

  const linePositions = useMemo(() => {
    const positions: number[] = [];
    connections.forEach((conn) => {
      positions.push(
        nodes[conn.from].x, nodes[conn.from].y, nodes[conn.from].z,
        nodes[conn.to].x, nodes[conn.to].y, nodes[conn.to].z
      );
    });
    return new Float32Array(positions);
  }, [connections, nodes]);

  useFrame((state) => {
    if (!nodesRef.current) return;
    const time = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.08;
    }

    nodes.forEach((node, i) => {
      const pulse = 1 + Math.sin(time * node.pulseSpeed + node.offset) * 0.3;
      dummy.position.set(
        node.x + Math.sin(time * node.speed * 0.3 + node.offset) * 0.3,
        node.y + Math.cos(time * node.speed * 0.4 + node.offset) * 0.2,
        node.z + Math.sin(time * node.speed * 0.2) * 0.15
      );
      dummy.scale.setScalar(node.baseScale * pulse);
      dummy.updateMatrix();
      nodesRef.current!.setMatrixAt(i, dummy.matrix);
    });
    nodesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      {/* Neural nodes */}
      <instancedMesh ref={nodesRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshPhysicalMaterial
          color="#7A8B6F"
          emissive="#7A8B6F"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.2}
          clearcoat={0.5}
        />
      </instancedMesh>

      {/* Connection lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7A8B6F"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </group>
  );
}

/* ── Signal pulses traveling along connections ── */
function SignalPulses() {
  const pulseCount = 15;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const pulseData = useMemo(
    () => Array.from({ length: pulseCount }, () => ({
      startX: (Math.random() - 0.5) * 6,
      startY: (Math.random() - 0.5) * 4,
      startZ: (Math.random() - 0.5) * 3,
      endX: (Math.random() - 0.5) * 6,
      endY: (Math.random() - 0.5) * 4,
      endZ: (Math.random() - 0.5) * 3,
      speed: Math.random() * 0.4 + 0.2,
      offset: Math.random() * Math.PI * 2,
    })),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    pulseData.forEach((pulse, i) => {
      const t = ((time * pulse.speed + pulse.offset) % 4) / 4;
      const active = t < 1 ? 1 : 0;
      dummy.position.set(
        pulse.startX + (pulse.endX - pulse.startX) * t,
        pulse.startY + (pulse.endY - pulse.startY) * t,
        pulse.startZ + (pulse.endZ - pulse.startZ) * t
      );
      dummy.scale.setScalar(0.06 * active * Math.sin(t * Math.PI));
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, pulseCount]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#C17B5A" transparent opacity={0.8} />
    </instancedMesh>
  );
}

/* ── Brain outline wireframe ── */
function BrainOutline() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <mesh ref={meshRef} scale={[2.2, 1.8, 2]}>
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial
        color="#5C6B52"
        emissive="#5C6B52"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

export default function NeuralNetworkScene() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <BrainOutline />
        <NeuralNodes />
        <SignalPulses />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#7A8B6F" />
        <pointLight position={[-4, -3, 4]} intensity={0.4} color="#C17B5A" />
        <pointLight position={[0, 5, 2]} intensity={0.5} color="#ffffff" />
      </Canvas>
    </div>
  );
}
