"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, RoundedBox } from "@react-three/drei";
import { Rotate3d } from "lucide-react";
import * as THREE from "three";
import { WebGLErrorBoundary } from "./WebGLErrorBoundary";

export type CharacterVariant = "strategist" | "analytics" | "client";

function CharacterRig({ variant }: { variant: CharacterVariant }) {
  const charGroupRef = useRef<THREE.Group>(null);
  const armRightRef = useRef<THREE.Mesh>(null);
  const orbitRingRef = useRef<THREE.Group>(null);
  const bar1Ref = useRef<THREE.Mesh>(null);
  const bar2Ref = useRef<THREE.Mesh>(null);
  const bar3Ref = useRef<THREE.Mesh>(null);

  const outfitColor =
    variant === "strategist"
      ? "#8B70F5"
      : variant === "analytics"
      ? "#5B6CFF"
      : "#39208C";
  const accentColor =
    variant === "client" ? "#FFB52E" : variant === "analytics" ? "#55D9EA" : "#F58206";

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (charGroupRef.current) {
      charGroupRef.current.position.y = Math.sin(t * 1.4) * 0.06;
    }

    if (armRightRef.current) {
      armRightRef.current.rotation.z = -0.75 + Math.sin(t * 2.2) * 0.14;
    }

    if (orbitRingRef.current) {
      orbitRingRef.current.rotation.y = t * 0.55;
    }

    if (bar1Ref.current) {
      const h = 0.25 + (Math.sin(t * 2) * 0.5 + 0.5) * 0.15;
      bar1Ref.current.scale.y = h;
      bar1Ref.current.position.y = -0.12 + h * 0.5;
    }
    if (bar2Ref.current) {
      const h = 0.42 + (Math.sin(t * 2 + 1) * 0.5 + 0.5) * 0.18;
      bar2Ref.current.scale.y = h;
      bar2Ref.current.position.y = -0.12 + h * 0.5;
    }
    if (bar3Ref.current) {
      const h = 0.6 + (Math.sin(t * 2 + 2) * 0.5 + 0.5) * 0.2;
      bar3Ref.current.scale.y = h;
      bar3Ref.current.position.y = -0.12 + h * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={1.15} color="#ffffff" />
      <hemisphereLight args={["#F0EAFE", "#F8D7F4", 0.95]} />
      <directionalLight position={[4, 6, 5]} intensity={1.3} color="#ffffff" castShadow />
      <directionalLight position={[-4, 3, -4]} intensity={0.75} color="#C4B5FD" />

      {/* Full 360° Interactive Orbit + Gentle Continuous Auto-Rotation */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.07}
        autoRotate
        autoRotateSpeed={1.8}
        minPolarAngle={Math.PI / 3.4}
        maxPolarAngle={Math.PI / 1.9}
      />

      <group position={[0, -0.25, 0]}>
        {/* Pedestal Platform */}
        <mesh position={[0, -0.95, 0]} receiveShadow>
          <cylinderGeometry args={[1.35, 1.48, 0.18, 40]} />
          <meshStandardMaterial color="#EDE8FE" roughness={0.35} />
        </mesh>

        {/* Stylized 3D Blender-Clay Cartoon Character */}
        <group ref={charGroupRef} position={[-0.38, 0, 0]}>
          {/* Legs */}
          <mesh position={[-0.16, -0.58, 0]}>
            <capsuleGeometry args={[0.1, 0.35, 8, 16]} />
            <meshStandardMaterial color="#27263A" roughness={0.45} />
          </mesh>
          <mesh position={[0.16, -0.58, 0]}>
            <capsuleGeometry args={[0.1, 0.35, 8, 16]} />
            <meshStandardMaterial color="#27263A" roughness={0.45} />
          </mesh>

          {/* Shoes */}
          <RoundedBox args={[0.2, 0.12, 0.3]} radius={0.05} position={[-0.16, -0.82, 0.05]}>
            <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
          </RoundedBox>
          <RoundedBox args={[0.2, 0.12, 0.3]} radius={0.05} position={[0.16, -0.82, 0.05]}>
            <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
          </RoundedBox>

          {/* Torso / Sweater / Blazer */}
          <mesh position={[0, -0.05, 0]} castShadow>
            <capsuleGeometry args={[0.28, 0.42, 12, 24]} />
            <meshStandardMaterial color={outfitColor} roughness={0.35} />
          </mesh>

          {/* Tie / Collar Accent */}
          <RoundedBox args={[0.14, 0.24, 0.06]} radius={0.03} position={[0, 0.06, 0.25]}>
            <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
          </RoundedBox>

          {/* Left Arm */}
          <mesh position={[-0.36, -0.04, 0.04]} rotation={[0, 0, 0.22]}>
            <capsuleGeometry args={[0.085, 0.34, 8, 16]} />
            <meshStandardMaterial color={outfitColor} roughness={0.35} />
          </mesh>
          <mesh position={[-0.42, -0.27, 0.06]}>
            <sphereGeometry args={[0.085, 16, 16]} />
            <meshStandardMaterial color="#F7CFB6" roughness={0.4} />
          </mesh>

          {/* Right Arm Gesturing Toward Dashboard / Props */}
          <mesh ref={armRightRef} position={[0.42, 0.08, 0.12]} rotation={[0, 0, -0.75]}>
            <capsuleGeometry args={[0.085, 0.36, 8, 16]} />
            <meshStandardMaterial color={outfitColor} roughness={0.35} />
          </mesh>

          {/* Head */}
          <mesh position={[0, 0.56, 0]} castShadow>
            <sphereGeometry args={[0.31, 32, 32]} />
            <meshStandardMaterial color="#F7CFB6" roughness={0.38} />
          </mesh>

          {/* Hair Cap + Top Volume */}
          <mesh position={[0, 0.66, -0.04]}>
            <sphereGeometry args={[0.32, 28, 28, 0, Math.PI * 2, 0, Math.PI * 0.58]} />
            <meshStandardMaterial color="#232036" roughness={0.45} />
          </mesh>
          <RoundedBox args={[0.36, 0.14, 0.2]} radius={0.06} position={[0, 0.82, 0.12]}>
            <meshStandardMaterial color="#232036" roughness={0.45} />
          </RoundedBox>

          {/* Expressive Eyes */}
          <mesh position={[-0.1, 0.57, 0.28]}>
            <sphereGeometry args={[0.036, 16, 16]} />
            <meshStandardMaterial color="#181826" roughness={0.2} />
          </mesh>
          <mesh position={[0.1, 0.57, 0.28]}>
            <sphereGeometry args={[0.036, 16, 16]} />
            <meshStandardMaterial color="#181826" roughness={0.2} />
          </mesh>

          {/* Friendly Smile */}
          <mesh position={[0, 0.46, 0.28]} rotation={[0.2, 0, Math.PI]}>
            <torusGeometry args={[0.065, 0.016, 12, 24, Math.PI]} />
            <meshStandardMaterial color="#C86452" roughness={0.3} />
          </mesh>
        </group>

        {/* Companion Interactive 3D Dashboard / Star Prop */}
        <group position={[0.78, 0.18, 0.15]}>
          {variant === "client" ? (
            <Float speed={2} rotationIntensity={0.35} floatIntensity={0.5}>
              <RoundedBox args={[0.85, 0.62, 0.08]} radius={0.08} smoothness={4}>
                <meshPhysicalMaterial
                  color="#FFFFFF"
                  transmission={0.45}
                  transparent
                  opacity={0.92}
                  roughness={0.14}
                />
              </RoundedBox>
              {[-0.24, 0, 0.24].map((xPos) => (
                <mesh key={xPos} position={[xPos, 0.06, 0.07]}>
                  <octahedronGeometry args={[0.09, 0]} />
                  <meshStandardMaterial color="#FFB52E" roughness={0.22} metalness={0.15} />
                </mesh>
              ))}
              <RoundedBox args={[0.56, 0.08, 0.03]} radius={0.02} position={[0, -0.14, 0.06]}>
                <meshStandardMaterial color="#8B70F5" />
              </RoundedBox>
            </Float>
          ) : (
            <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.35}>
              <RoundedBox args={[0.98, 0.78, 0.08]} radius={0.09} smoothness={4}>
                <meshPhysicalMaterial
                  color="#FFFFFF"
                  transmission={0.4}
                  transparent
                  opacity={0.94}
                  roughness={0.14}
                />
              </RoundedBox>
              <mesh ref={bar1Ref} position={[-0.24, -0.12, 0.07]}>
                <boxGeometry args={[0.14, 1, 0.05]} />
                <meshStandardMaterial color="#C4B5FD" roughness={0.3} />
              </mesh>
              <mesh ref={bar2Ref} position={[0, -0.12, 0.07]}>
                <boxGeometry args={[0.14, 1, 0.05]} />
                <meshStandardMaterial color="#8B70F5" roughness={0.3} />
              </mesh>
              <mesh ref={bar3Ref} position={[0.24, -0.12, 0.07]}>
                <boxGeometry args={[0.14, 1, 0.05]} />
                <meshStandardMaterial color={accentColor} roughness={0.3} />
              </mesh>
            </Float>
          )}
        </group>

        {/* 360° Orbiting Decorative Props */}
        <group ref={orbitRingRef} position={[0, 0.35, 0]}>
          <mesh position={[1.15, 0.45, -0.4]}>
            <sphereGeometry args={[0.14, 24, 24]} />
            <meshStandardMaterial color="#F8D7F4" roughness={0.25} />
          </mesh>
          <mesh position={[-1.15, 0.62, 0.45]}>
            <torusGeometry args={[0.14, 0.045, 16, 32]} />
            <meshStandardMaterial color={accentColor} roughness={0.25} />
          </mesh>
          <mesh position={[0, 0.95, -1.05]}>
            <octahedronGeometry args={[0.13, 0]} />
            <meshStandardMaterial color="#55D9EA" roughness={0.22} />
          </mesh>
        </group>
      </group>

      <ContactShadows
        position={[0, -1.32, 0]}
        opacity={0.28}
        scale={6}
        blur={2.4}
        far={3}
        color="#39208C"
      />
    </>
  );
}

export function CartoonCharacter3D({
  variant,
  fallbackSrc,
  fallbackAlt,
  className = "h-[330px] sm:h-[380px]",
}: {
  variant: CharacterVariant;
  fallbackSrc: string;
  fallbackAlt: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [canWebGL, setCanWebGL] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setCanWebGL(false);
    } catch {
      setCanWebGL(false);
    }

    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05, rootMargin: "120px" }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const fallbackEl = (
    <img
      src={fallbackSrc}
      alt={fallbackAlt}
      width={1024}
      height={1024}
      className="h-full w-full object-cover"
    />
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full cursor-grab overflow-hidden active:cursor-grabbing ${className}`}
    >
      <span className="pointer-events-none absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-brand-purple/25 bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-deep shadow-xs backdrop-blur-sm">
        <Rotate3d className="h-3.5 w-3.5 text-brand-purple" />
        360° Drag to Turn
      </span>

      {!canWebGL || reducedMotion ? (
        fallbackEl
      ) : (
        <WebGLErrorBoundary fallback={fallbackEl}>
          <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 0.4, 4.15], fov: 40 }}
            frameloop={inView ? "always" : "never"}
            gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
          >
            <CharacterRig variant={variant} />
          </Canvas>
        </WebGLErrorBoundary>
      )}
    </div>
  );
}
