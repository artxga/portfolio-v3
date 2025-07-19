"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";

function LivingEntity({ lookTarget }: { lookTarget: THREE.Vector3 }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const timeRef = useRef(0);
  const originalPositions = useRef<Float32Array | null>(null);

  useFrame((state, delta) => {
    timeRef.current += delta * 1.5;

    const mesh = meshRef.current;
    const geometry = mesh.geometry as THREE.IcosahedronGeometry;
    const position = geometry.attributes.position as THREE.BufferAttribute;

    if (!originalPositions.current) {
      originalPositions.current = Float32Array.from(position.array);
    }

    const count = position.count;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const ox = originalPositions.current[ix];
      const oy = originalPositions.current[ix + 1];
      const oz = originalPositions.current[ix + 2];

      const normal = new THREE.Vector3(ox, oy, oz).normalize();
      const pulse =
        Math.sin(timeRef.current * 2 + i * 0.5) * 0.1 +
        Math.sin(timeRef.current + i * 0.3) * 0.05;

      position.setXYZ(i, ox + normal.x * pulse, oy + normal.y * pulse, oz + normal.z * pulse);
    }

    position.needsUpdate = true;

    const material = mesh.material as THREE.MeshStandardMaterial;
    const hue = (Math.sin(timeRef.current * 0.3) + 1) / 2;
    material.color.setHSL(hue, 0.7, 0.6);

    // Apuntar suavemente al cursor 3D
    const currentPos = new THREE.Vector3();
    mesh.getWorldPosition(currentPos);

    const dir = new THREE.Vector3().subVectors(lookTarget, currentPos).normalize();
    const targetPos = new THREE.Vector3().addVectors(currentPos, dir);
    mesh.lookAt(targetPos);
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 5]} />
      <meshStandardMaterial wireframe />
    </mesh>
  );
}

function CursorTracker() {
  const [target, setTarget] = useState(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      // Apunta más profundo en Z para mejor reacción
      const vector = new THREE.Vector3(x, y, 0.5).unproject(camera);
      setTarget(vector);
    }

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 3.5);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <LivingEntity lookTarget={target} />;
}

export default function ThreeModel() {
  return (
    <div className="aspect-square h-1/2 lg:h-3/4">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={<Html center>Loading...</Html>}>
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
            <CursorTracker />
          </Float>
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
