import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { makePlantTextures } from "./plantMaterials";

function leafPoint(u, v, length, width, phase = 0) {
  const edge = Math.pow(Math.sin(Math.PI * u), 0.72);
  const ruffle = Math.sin(u * 29 + phase) * 0.018 * Math.pow(Math.abs(v), 3);
  return new THREE.Vector3(
    v * width * edge * (1 + v * 0.09 + Math.sin(u * 17 + phase) * 0.035) +
      Math.sin(u * Math.PI) * 0.045,
    u * length + Math.abs(v) * edge * 0.045,
    Math.sin(Math.PI * u) * 0.12 +
      v * v * edge * 0.12 -
      Math.pow(u, 3) * 0.27 +
      ruffle +
      Math.sin(u * 42 - Math.abs(v) * 5) * 0.003 * edge,
  );
}

// Asymmetric blades, a curved tip, fine ribs, and softly ruffled edges.
function makeLeaf(length, width, tint, phase) {
  const geometry = new THREE.BufferGeometry();
  const points = [],
    colors = [],
    indices = [],
    uvs = [];
  const dark = new THREE.Color(tint),
    light = new THREE.Color("#9bba62");
  for (let row = 0; row <= 48; row++) {
    const u = row / 48;
    for (let col = 0; col <= 24; col++) {
      const v = col / 12 - 1;
      points.push(...leafPoint(u, v, length, width, phase).toArray());
      uvs.push(col / 24, u);
      const color = dark
        .clone()
        .lerp(
          light,
          0.08 +
            0.18 * (1 - Math.abs(v)) +
            0.08 * Math.sin(u * 13 + v * 7 + phase),
        );
      colors.push(color.r, color.g, color.b);
      if (row < 48 && col < 24) {
        const a = row * 25 + col;
        indices.push(a, a + 1, a + 25, a + 1, a + 26, a + 25);
      }
    }
  }
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(points, 3),
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

const shoots = [
  {
    tip: [-0.95, 1.15, 0.1],
    angle: [0.52, 0.3, 1.02],
    length: 1.12,
    width: 0.43,
    tint: "#426541",
    at: 0,
  },
  {
    tip: [0.95, 1.4, -0.08],
    angle: [-0.15, -0.35, -0.98],
    length: 1.3,
    width: 0.48,
    tint: "#355b35",
    at: 0.07,
  },
  {
    tip: [-0.45, 1.9, -0.22],
    angle: [-0.24, 0.55, 0.7],
    length: 1.24,
    width: 0.48,
    tint: "#5b763d",
    at: 0.16,
  },
  {
    tip: [0.35, 2.25, 0.13],
    angle: [0.28, -0.35, -0.49],
    length: 1.25,
    width: 0.45,
    tint: "#426538",
    at: 0.24,
  },
  {
    tip: [-0.05, 2.55, -0.18],
    angle: [-0.27, 0.18, 0.15],
    length: 1.18,
    width: 0.4,
    tint: "#6b8243",
    at: 0.33,
  },
  {
    tip: [0.2, 1.3, 0.72],
    angle: [0.95, -0.1, -0.15],
    length: 1.18,
    width: 0.44,
    tint: "#315b3f",
    at: 0.12,
  },
  {
    tip: [-0.64, 1.42, -0.66],
    angle: [-0.75, -0.5, 0.5],
    length: 1.12,
    width: 0.39,
    tint: "#5e773d",
    at: 0.2,
  },
  {
    tip: [-0.48, 0.8, 0.52],
    angle: [0.82, 0.22, 1.16],
    length: 0.93,
    width: 0.36,
    tint: "#38663a",
    at: 0.02,
  },
  {
    tip: [0.62, 0.83, 0.34],
    angle: [0.64, -0.4, -1.12],
    length: 1.01,
    width: 0.4,
    tint: "#44783c",
    at: 0.09,
  },
  {
    tip: [0.65, 1.91, -0.46],
    angle: [-0.52, -0.5, -0.63],
    length: 0.93,
    width: 0.35,
    tint: "#6d8b46",
    at: 0.27,
  },
  {
    tip: [-0.26, 1.63, 0.63],
    angle: [0.6, 0.45, 0.44],
    length: 0.92,
    width: 0.36,
    tint: "#4e7b3b",
    at: 0.18,
  },
  {
    tip: [0.18, 2.71, -0.08],
    angle: [0.08, 0.6, -0.21],
    length: 0.71,
    width: 0.18,
    tint: "#a3ae55",
    at: 0.31,
  },
];

function Shoot({ data, progress, index, still, textures }) {
  const group = useRef(),
    leaf = useRef();
  const geom = useMemo(
    () => makeLeaf(data.length, data.width, data.tint, index * 1.7),
    [data, index],
  );
  const stem = useMemo(
    () =>
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(
            data.tip[0] * 0.2,
            data.tip[1] * 0.55,
            data.tip[2] * 0.2,
          ),
          new THREE.Vector3(...data.tip),
        ]),
        24,
        0.023,
        8,
        false,
      ),
    [data],
  );
  const midrib = useMemo(
    () =>
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(
          Array.from({ length: 25 }, (_, i) =>
            leafPoint(i / 24, 0, data.length, data.width, index * 1.7).add(
              new THREE.Vector3(0, 0, 0.006),
            ),
          ),
        ),
        32,
        0.005,
        4,
        false,
      ),
    [data, index],
  );
  useEffect(
    () => () => {
      geom.dispose();
      stem.dispose();
      midrib.dispose();
    },
    [geom, stem, midrib],
  );
  useFrame(({ clock }, dt) => {
    const target = still
      ? 1
      : THREE.MathUtils.clamp((progress.current - data.at) / 0.56, 0.015, 1);
    const scale = still
      ? 1
      : THREE.MathUtils.damp(group.current.scale.x, target, 8, dt);
    group.current.scale.setScalar(scale);
    leaf.current.rotation.x =
      data.angle[0] +
      (still ? 0 : Math.sin(clock.elapsedTime * 0.75 + index) * 0.035) +
      (1 - target) * 1.2;
    leaf.current.scale.x = THREE.MathUtils.lerp(0.06, 1, target);
  });
  return (
    <group ref={group} scale={0.03}>
      <mesh geometry={stem} castShadow>
        <meshStandardMaterial
          color={index % 3 ? "#617442" : "#7a7950"}
          roughness={0.65}
        />
      </mesh>
      <group ref={leaf} position={data.tip} rotation={data.angle}>
        <mesh geometry={geom} castShadow receiveShadow>
          <meshPhysicalMaterial
            vertexColors
            map={textures.leaf}
            bumpMap={textures.leafBump}
            bumpScale={0.009}
            side={THREE.DoubleSide}
            roughness={0.49}
            clearcoat={0.14}
            clearcoatRoughness={0.46}
            emissive={data.tint}
            emissiveIntensity={0.065}
          />
        </mesh>
        <mesh geometry={midrib}>
          <meshStandardMaterial color="#9fa866" roughness={0.72} />
        </mesh>
      </group>
    </group>
  );
}

function SoilDetail() {
  const stones = useRef();
  useLayoutEffect(() => {
    const item = new THREE.Object3D();
    const colors = ["#55412a", "#756046", "#3b3023", "#b0a287", "#6b5034"];
    for (let i = 0; i < 110; i++) {
      const angle = i * 2.39996;
      const radius = Math.sqrt((i + 0.5) / 110) * 0.56;
      item.position.set(
        Math.cos(angle) * radius,
        0.495,
        Math.sin(angle) * radius,
      );
      item.rotation.set(i * 0.7, i * 1.3, i * 0.4);
      const size = 0.012 + (i % 7) * 0.004;
      item.scale.set(size * 1.6, size * 0.6, size);
      item.updateMatrix();
      stones.current.setMatrixAt(i, item.matrix);
      stones.current.setColorAt(i, new THREE.Color(colors[i % colors.length]));
    }
    stones.current.instanceMatrix.needsUpdate = true;
    stones.current.instanceColor.needsUpdate = true;
  }, []);
  return (
    <instancedMesh ref={stones} args={[null, null, 110]} receiveShadow>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial roughness={1} />
    </instancedMesh>
  );
}

function Plant({ growth, pointer, still }) {
  const plant = useRef(),
    progress = useRef(0.08);
  const textures = useMemo(makePlantTextures, []);
  useEffect(
    () => () => Object.values(textures).forEach((texture) => texture.dispose()),
    [textures],
  );
  useFrame(({ clock }, dt) => {
    progress.current = still
      ? 1
      : THREE.MathUtils.damp(progress.current, growth.current, 8, dt);
    plant.current.rotation.y = THREE.MathUtils.damp(
      plant.current.rotation.y,
      still ? -0.3 : -0.3 + pointer.current.x * 0.28,
      3,
      dt,
    );
    plant.current.rotation.z = THREE.MathUtils.damp(
      plant.current.rotation.z,
      still
        ? 0
        : pointer.current.x * -0.025 +
            Math.sin(clock.elapsedTime * 0.5) * 0.008,
      3,
      dt,
    );
  });
  return (
    <group position={[0, -1.48, 0]}>
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.65, 0.49, 0.74, 64, 1, true]} />
        <meshStandardMaterial
          map={textures.clay}
          bumpMap={textures.clayBump}
          bumpScale={0.035}
          roughness={0.92}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, 0.48, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.63, 0.05, 12, 64]} />
        <meshStandardMaterial
          map={textures.clay}
          bumpMap={textures.clayBump}
          bumpScale={0.02}
          roughness={0.85}
        />
      </mesh>
      <mesh
        position={[0, 0.49, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <circleGeometry args={[0.6, 48]} />
        <meshStandardMaterial color="#36291c" roughness={1} />
      </mesh>
      <SoilDetail />
      <mesh position={[0, -0.26, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[0.74, 0.76, 0.1, 64]} />
        <meshStandardMaterial color="#c99b77" roughness={1} />
      </mesh>
      <group ref={plant} position={[0, 0.5, 0]} rotation={[0, -0.3, 0]}>
        {shoots.map((data, i) => (
          <Shoot
            data={data}
            key={i}
            index={i}
            progress={progress}
            still={still}
            textures={textures}
          />
        ))}
      </group>
      <mesh position={[0, -0.68, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.08, 1.16, 0.68, 96]} />
        <meshStandardMaterial
          color="#41473a"
          roughness={0.78}
          metalness={0.08}
        />
      </mesh>
      <mesh position={[0, -0.355, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.075, 0.012, 6, 96]} />
        <meshStandardMaterial color="#8b8761" roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.025, 0]}
        receiveShadow
      >
        <planeGeometry args={[60, 60]} />
        <shadowMaterial opacity={0.24} />
      </mesh>
    </group>
  );
}

function RoomDust({ light, still }) {
  const particles = useRef(),
    material = useRef();
  const positions = useMemo(
    () =>
      new Float32Array(
        Array.from({ length: 54 }, (_, i) => [
          Math.sin(i * 127.1) * 1.9,
          -1.5 + ((i * 0.618) % 1) * 6.5,
          Math.cos(i * 47.7) * 1.6,
        ]).flat(),
      ),
    [],
  );
  useFrame(({ clock }) => {
    particles.current.rotation.y = still
      ? 0
      : Math.sin(clock.elapsedTime * 0.09) * 0.2;
    material.current.opacity = light.current * 0.42;
  });
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={material}
        color="#e4d99e"
        size={0.023}
        transparent
        opacity={0}
        depthWrite={false}
      />
    </points>
  );
}

function Scene({ growth, light, pointer, still, onReady }) {
  const { invalidate, gl, camera, size } = useThree();
  const sunlight = useRef(),
    sky = useRef(),
    rim = useRef(),
    fill = useRef();
  const target = useMemo(() => new THREE.Object3D(), []);
  useEffect(() => {
    camera.lookAt(0, 0.05, 0);
    camera.zoom = Math.min(1, size.width / size.height / 0.9);
    camera.updateProjectionMatrix();
    invalidate();
  }, [camera, size.width, size.height, invalidate]);
  useFrame((_, dt) => {
    const brightness = still ? 1 : light.current;
    sunlight.current.intensity = brightness * 3.4;
    sky.current.intensity = 0.2 + brightness * 0.9;
    sunlight.current.position.x = THREE.MathUtils.damp(
      sunlight.current.position.x,
      4.5 + (still ? 0 : pointer.current.x * 1.7),
      3,
      dt,
    );
    target.position.set(
      still ? 0 : pointer.current.x * 0.3,
      0.3 - (still ? 0 : pointer.current.y * 0.3),
      0,
    );
    target.updateMatrixWorld();
    rim.current.intensity = 0.08 + brightness * 1.1;
    fill.current.intensity = brightness * 1.15;
    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      0.35 + (still ? 0 : pointer.current.x * 0.16),
      3,
      dt,
    );
    camera.lookAt(0, 0.05, 0);
  });
  useEffect(() => {
    onReady();
    invalidate();
  }, [onReady, invalidate, still]);
  useEffect(() => {
    const canvas = gl.domElement;
    const lost = (e) => {
      e.preventDefault();
      onReady(false);
    };
    const restored = () => {
      onReady();
      invalidate();
    };
    canvas.addEventListener("webglcontextlost", lost);
    canvas.addEventListener("webglcontextrestored", restored);
    return () => {
      canvas.removeEventListener("webglcontextlost", lost);
      canvas.removeEventListener("webglcontextrestored", restored);
    };
  }, [gl, onReady, invalidate]);
  return (
    <>
      <ambientLight intensity={0.16} />
      <hemisphereLight ref={sky} args={["#d5e9f4", "#7a704b", 0.2]} />
      <primitive object={target} />
      <directionalLight
        ref={sunlight}
        position={[4.5, 7.5, 5]}
        target={target}
        color="#fff0c4"
        intensity={0}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={5}
        shadow-camera-bottom={-4}
        shadow-camera-near={0.1}
        shadow-camera-far={24}
        shadow-bias={-0.0003}
        shadow-normalBias={0.025}
      />
      <directionalLight
        ref={rim}
        position={[3, 3, -4]}
        intensity={0.08}
        color="#d2dba7"
      />
      <directionalLight
        ref={fill}
        position={[0, 1, 6]}
        intensity={0}
        color="#edf1df"
      />
      <Plant growth={growth} pointer={pointer} still={still} />
      <RoomDust light={light} still={still} />
    </>
  );
}

export default function PlantScene({
  growth,
  light,
  pointer,
  stopped,
  visible,
  onReady,
}) {
  return (
    <Canvas
      shadows="percentage"
      dpr={[1, 1.5]}
      camera={{ position: [0.35, 1.6, 10.4], fov: 35 }}
      frameloop={visible && !stopped ? "always" : "demand"}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      style={{ touchAction: "pan-y" }}
    >
      <Scene
        growth={growth}
        light={light}
        pointer={pointer}
        still={stopped}
        onReady={onReady}
      />
    </Canvas>
  );
}
