"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, RoundedBox } from "@react-three/drei";
import { Rotate3d } from "lucide-react";
import * as THREE from "three";
import { WebGLErrorBoundary } from "./WebGLErrorBoundary";

interface WorkspaceSceneProps {
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
  scrollProgressRef: React.MutableRefObject<number>;
  isCompact: boolean;
}

function AnimatedBar({
  position,
  targetHeight,
  color,
  delay,
}: {
  position: [number, number, number];
  targetHeight: number;
  color: string;
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    const wave = 0.88 + Math.sin(t * 2 + delay) * 0.12;
    const h = targetHeight * wave;
    meshRef.current.scale.y = h;
    meshRef.current.position.y = position[1] + h * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position} castShadow>
      <boxGeometry args={[0.16, 1, 0.06]} />
      <meshStandardMaterial color={color} roughness={0.28} metalness={0.08} />
    </mesh>
  );
}

function WorkspaceScene({
  pointerRef,
  scrollProgressRef,
  isCompact,
}: WorkspaceSceneProps) {
  const rootRef = useRef<THREE.Group>(null);
  const cardLeftRef = useRef<THREE.Group>(null);
  const cardRightRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const ambientLightRef = useRef<THREE.AmbientLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const px = pointerRef.current.x;
    const py = pointerRef.current.y;
    const sp = scrollProgressRef.current;

    if (rootRef.current) {
      rootRef.current.position.y = Math.sin(t * 1.1) * 0.08 - sp * 0.12;
      rootRef.current.rotation.x = THREE.MathUtils.lerp(
        rootRef.current.rotation.x,
        -py * 0.08 + 0.04,
        0.07
      );
    }

    if (cardLeftRef.current) {
      cardLeftRef.current.position.x = THREE.MathUtils.lerp(
        cardLeftRef.current.position.x,
        -1.65 + px * 0.2,
        0.08
      );
      cardLeftRef.current.position.y = 0.72 + Math.sin(t * 1.6) * 0.09 + py * 0.1;
    }

    if (cardRightRef.current) {
      cardRightRef.current.position.x = THREE.MathUtils.lerp(
        cardRightRef.current.position.x,
        1.65 + px * 0.24,
        0.08
      );
      cardRightRef.current.position.y = 0.55 + Math.cos(t * 1.4) * 0.09 - py * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.5 + py * 0.2;
      ringRef.current.rotation.y = t * 0.4 + px * 0.2;
    }

    if (cubeRef.current) {
      cubeRef.current.rotation.x = t * 0.35;
      cubeRef.current.rotation.z = t * 0.45;
    }

    if (ambientLightRef.current) {
      ambientLightRef.current.intensity = 1.05 + Math.sin(t * 1.2) * 0.08;
    }
  });

  return (
    <>
      <ambientLight ref={ambientLightRef} intensity={1.1} color="#ffffff" />
      <hemisphereLight args={["#F0EAFE", "#F8D7F4", 0.9]} />
      <directionalLight position={[4, 6, 5]} intensity={1.35} color="#ffffff" castShadow />
      <directionalLight position={[-4, 3, -4]} intensity={0.75} color="#C4B5FD" />
      <pointLight position={[2.2, 2.5, 2.5]} intensity={0.55} color="#FFB52E" />

      {/* 360° Drag-to-Turn + Continuous Smooth Auto-Rotation */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.07}
        autoRotate
        autoRotateSpeed={1.4}
        minPolarAngle={Math.PI / 3.4}
        maxPolarAngle={Math.PI / 1.95}
      />

      <group ref={rootRef} position={[0, 0, 0]}>
        {/* Rounded Purple/Lavender Desk */}
        <RoundedBox
          args={[3.5, 0.2, 1.8]}
          radius={0.09}
          smoothness={4}
          position={[0, -0.78, 0]}
          receiveShadow
        >
          <meshStandardMaterial color="#E6DCFE" roughness={0.38} metalness={0.05} />
        </RoundedBox>

        {/* Four Desk Legs for Full 360° Rear Inspection */}
        <RoundedBox args={[0.16, 0.55, 0.16]} radius={0.05} position={[-1.4, -1.12, 0.55]}>
          <meshStandardMaterial color="#8B70F5" roughness={0.35} />
        </RoundedBox>
        <RoundedBox args={[0.16, 0.55, 0.16]} radius={0.05} position={[1.4, -1.12, 0.55]}>
          <meshStandardMaterial color="#8B70F5" roughness={0.35} />
        </RoundedBox>
        <RoundedBox args={[0.16, 0.55, 0.16]} radius={0.05} position={[-1.4, -1.12, -0.55]}>
          <meshStandardMaterial color="#8B70F5" roughness={0.35} />
        </RoundedBox>
        <RoundedBox args={[0.16, 0.55, 0.16]} radius={0.05} position={[1.4, -1.12, -0.55]}>
          <meshStandardMaterial color="#8B70F5" roughness={0.35} />
        </RoundedBox>

        {/* 3D Monitor Stand */}
        <RoundedBox args={[0.32, 0.48, 0.14]} radius={0.05} position={[0, -0.45, -0.18]}>
          <meshStandardMaterial color="#DCD4F8" roughness={0.3} metalness={0.1} />
        </RoundedBox>
        <RoundedBox args={[0.92, 0.07, 0.44]} radius={0.03} position={[0, -0.66, -0.15]}>
          <meshStandardMaterial color="#C8B9FA" roughness={0.3} />
        </RoundedBox>

        {/* Sleek 3D Computer Monitor Body */}
        <RoundedBox
          args={[2.35, 1.48, 0.12]}
          radius={0.1}
          smoothness={4}
          position={[0, 0.36, -0.15]}
          castShadow
        >
          <meshStandardMaterial color="#FFFFFF" roughness={0.22} metalness={0.08} />
        </RoundedBox>

        {/* Back-of-Monitor Purple Emblem Accent for 360° Views */}
        <RoundedBox args={[0.42, 0.42, 0.04]} radius={0.08} position={[0, 0.42, -0.22]}>
          <meshStandardMaterial color="#8B70F5" roughness={0.25} />
        </RoundedBox>

        {/* Monitor Inner Screen Canvas */}
        <RoundedBox args={[2.14, 1.26, 0.04]} radius={0.06} position={[0, 0.36, -0.09]}>
          <meshStandardMaterial color="#F7F4FF" roughness={0.18} />
        </RoundedBox>

        {/* Animated 3D Growth Chart Bars */}
        <AnimatedBar position={[-0.72, -0.08, -0.04]} targetHeight={0.34} color="#C4B5FD" delay={0} />
        <AnimatedBar position={[-0.44, -0.08, -0.04]} targetHeight={0.52} color="#A78BFA" delay={0.5} />
        <AnimatedBar position={[-0.16, -0.08, -0.04]} targetHeight={0.68} color="#8B70F5" delay={1.0} />
        <AnimatedBar position={[0.12, -0.08, -0.04]} targetHeight={0.82} color="#5B6CFF" delay={1.5} />
        <AnimatedBar position={[0.4, -0.08, -0.04]} targetHeight={0.96} color="#F58206" delay={2.0} />

        {/* Screen Top Header Bar */}
        <RoundedBox args={[1.68, 0.14, 0.03]} radius={0.04} position={[0, 0.84, -0.05]}>
          <meshStandardMaterial color="#8B70F5" roughness={0.25} />
        </RoundedBox>

        {/* Desk Accessories */}
        <RoundedBox args={[0.8, 0.04, 0.35]} radius={0.02} position={[-0.55, -0.66, 0.45]}>
          <meshStandardMaterial color="#F8D7F4" roughness={0.4} />
        </RoundedBox>
        <mesh position={[0.85, -0.56, 0.45]} castShadow>
          <cylinderGeometry args={[0.14, 0.12, 0.24, 24]} />
          <meshStandardMaterial color="#55D9EA" roughness={0.28} />
        </mesh>

        {/* Floating Left Glass Card */}
        <group ref={cardLeftRef} position={[-1.65, 0.72, 0.35]}>
          <RoundedBox args={[0.92, 0.62, 0.07]} radius={0.08} smoothness={4}>
            <meshPhysicalMaterial
              color="#FFFFFF"
              transmission={0.55}
              opacity={0.9}
              transparent
              roughness={0.14}
              thickness={0.3}
            />
          </RoundedBox>
          <RoundedBox args={[0.56, 0.1, 0.03]} radius={0.03} position={[-0.08, 0.12, 0.04]}>
            <meshStandardMaterial color="#8B70F5" />
          </RoundedBox>
          <RoundedBox args={[0.42, 0.1, 0.03]} radius={0.03} position={[-0.15, -0.08, 0.04]}>
            <meshStandardMaterial color="#55D9EA" />
          </RoundedBox>
        </group>

        {/* Floating Right Card */}
        <group ref={cardRightRef} position={[1.65, 0.55, 0.38]}>
          <RoundedBox args={[0.88, 0.66, 0.07]} radius={0.08} smoothness={4}>
            <meshStandardMaterial color="#39208C" roughness={0.25} metalness={0.1} />
          </RoundedBox>
          <mesh position={[0, 0.08, 0.05]}>
            <torusGeometry args={[0.14, 0.045, 16, 32]} />
            <meshStandardMaterial color="#FFB52E" roughness={0.25} />
          </mesh>
          <RoundedBox args={[0.5, 0.07, 0.02]} radius={0.02} position={[0, -0.18, 0.05]}>
            <meshStandardMaterial color="#F8D7F4" />
          </RoundedBox>
        </group>

        {/* Floating Purple Ring */}
        <mesh ref={ringRef} position={[1.38, 1.32, -0.35]}>
          <torusGeometry args={[0.26, 0.085, 20, 48]} />
          <meshStandardMaterial color="#8B70F5" roughness={0.22} metalness={0.18} />
        </mesh>

        {!isCompact ? (
          <>
            <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
              <mesh position={[-1.45, 1.38, -0.25]}>
                <sphereGeometry args={[0.2, 28, 28]} />
                <meshStandardMaterial color="#F8D7F4" roughness={0.25} />
              </mesh>
            </Float>

            <Float speed={1.7} rotationIntensity={0.5} floatIntensity={0.5}>
              <mesh ref={cubeRef} position={[-1.18, -0.28, 0.72]}>
                <boxGeometry args={[0.26, 0.26, 0.26]} />
                <meshPhysicalMaterial
                  color="#55D9EA"
                  transmission={0.45}
                  transparent
                  opacity={0.85}
                  roughness={0.12}
                />
              </mesh>
            </Float>

            <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.7}>
              <mesh position={[1.45, -0.22, 0.78]}>
                <sphereGeometry args={[0.14, 24, 24]} />
                <meshStandardMaterial color="#F58206" roughness={0.22} />
              </mesh>
            </Float>
          </>
        ) : null}
      </group>

      <ContactShadows
        position={[0, -1.42, 0]}
        opacity={0.28}
        scale={7}
        blur={2.4}
        far={3}
        color="#39208C"
      />
    </>
  );
}

export function HeroWorkspace3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const scrollProgressRef = useRef(0);

  const [inView, setInView] = useState(true);
  const [canWebGL, setCanWebGL] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(reduced);

    const checkViewport = () => setIsCompact(window.innerWidth < 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setCanWebGL(false);
    } catch {
      setCanWebGL(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const onScroll = () => {
      const progress = Math.min(1, Math.max(0, window.scrollY / 650));
      scrollProgressRef.current = progress;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", checkViewport);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    pointerRef.current = { x: nx, y: ny };
  };

  const handlePointerLeave = () => {
    pointerRef.current = { x: 0, y: 0 };
  };

  const staticFallback = (
    <img
      src="/images/hero-workspace-3d.jpg"
      alt="3D creative digital marketing workspace with floating analytics graphs and purple studio objects"
      width={1024}
      height={1024}
      className="h-full w-full object-cover"
    />
  );

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative h-[360px] w-full cursor-grab overflow-hidden rounded-[28px] bg-gradient-to-br from-[#F7F4FF] via-white to-[#FDF2FA] active:cursor-grabbing sm:h-[440px]"
    >
      <span className="pointer-events-none absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-brand-purple/25 bg-white/85 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-deep shadow-xs backdrop-blur-sm">
        <Rotate3d className="h-3.5 w-3.5 text-brand-purple" />
        360° Drag to Turn
      </span>

      {!canWebGL || reducedMotion ? (
        staticFallback
      ) : (
        <WebGLErrorBoundary fallback={staticFallback}>
          <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 1.25, 5.7], fov: 40 }}
            frameloop={inView ? "always" : "never"}
            gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
          >
            <WorkspaceScene
              pointerRef={pointerRef}
              scrollProgressRef={scrollProgressRef}
              isCompact={isCompact}
            />
          </Canvas>
        </WebGLErrorBoundary>
      )}
    </div>
  );
}
