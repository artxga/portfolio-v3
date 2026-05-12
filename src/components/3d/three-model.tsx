"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const count = 600;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const r = 1.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() - 0.5) * 2);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions.set([x, y, z], i * 3);

      // 🎨 color variado por partícula
      color.setHSL(Math.random(), 0.7, 0.6);
      colors.set([color.r, color.g, color.b], i * 3);
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    pointsRef.current.rotation.y = t * 0.05;
    pointsRef.current.rotation.x = t * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.85}
      />
    </points>
  );
}

function NeuralCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    materialRef.current.uniforms.uTime.value = t;

    // 🎯 reacción al cursor (suave)
    meshRef.current.rotation.y += (mouse.x * 0.5 - meshRef.current.rotation.y) * 0.05;
    meshRef.current.rotation.x += (-mouse.y * 0.5 - meshRef.current.rotation.x) * 0.05;

    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.001;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 64]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={`
          uniform float uTime;

          varying vec3 vNormal;
          varying vec3 vPosition;
          varying vec3 vWorldPosition;

          float noise(vec3 p) {
            return sin(p.x + uTime) * sin(p.y * 1.3) * sin(p.z * 0.7);
          }

          void main() {
            vNormal = normal;
            vPosition = position;

            vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

            float n = noise(position * 3.0 + uTime * 1.2);

            vec3 newPosition = position + normal * n * 0.2;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;

          varying vec3 vNormal;
          varying vec3 vPosition;
          varying vec3 vWorldPosition;

          void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(cameraPosition - vWorldPosition);

            // 🔥 Fresnel real
            float fresnel = pow(1.0 - dot(normal, viewDir), 2.5);

            // 🌈 iridescencia basada en ángulo real
            float iridescence = dot(normal, viewDir);

            vec3 iridescentColor = vec3(
              0.5 + 0.5 * sin(6.0 * iridescence + uTime),
              0.5 + 0.5 * sin(6.0 * iridescence + uTime + 2.0),
              0.5 + 0.5 * sin(6.0 * iridescence + uTime + 4.0)
            );

            // 🌊 pulso interno
            float pulse = sin(uTime * 2.0 + length(vPosition) * 5.0) * 0.5 + 0.5;

            vec3 base = mix(vec3(0.05, 0.1, 0.2), iridescentColor, pulse);

            // ✨ glow + energía
            vec3 color = base + fresnel * 1.2;
            color += pulse * 0.3;

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function ThreeModel() {
  return (
    <div className="aspect-square h-1/2 lg:h-3/4">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        {/* 💡 iluminación */}
        <ambientLight intensity={0.15} />
        <pointLight position={[3, 3, 3]} intensity={2.2} />
        <pointLight position={[-3, -2, 2]} intensity={1.5} color="#ff00ff" />

        <Suspense fallback={null}>
          <NeuralCore />
          <Particles />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}