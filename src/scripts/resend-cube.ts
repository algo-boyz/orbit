/**
 * Resend-style interactive cube for the CTA visual.
 * Soft-black physical materials with per-tile variation,
 * continuous orbit + occasional layer twists.
 *
 * resend.com uses an interactive Spline scene; this is a lightweight
 * Three.js recreation that aims for the same quiet presence next to form content.
 */
import * as THREE from "three";

const CUBES_PER_SIDE = 3;
const GAP = 1.045;
const CUBIE_SIZE = 1;
const ROUND_RADIUS = 0.11;
const SMOOTHNESS = 5;

function createBoxWithRoundedEdges(
  width: number,
  height: number,
  depth: number,
  radius0: number,
  smoothness: number
): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  const eps = 0.00001;
  const radius = radius0 - eps;
  shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
  shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
  shape.absarc(width - radius * 2, height - radius * 2, eps, Math.PI / 2, 0, true);
  shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: depth - radius0 * 2,
    bevelEnabled: true,
    bevelSegments: smoothness * 2,
    steps: 1,
    bevelSize: radius,
    bevelThickness: radius0,
    curveSegments: smoothness,
  });
  geometry.center();
  return geometry;
}

/** Deterministic hash → [0,1] so materials stay stable across reloads */
function hash01(i: number, j: number, k: number, salt = 0): number {
  let n = (i * 73856093) ^ (j * 19349663) ^ (k * 83492791) ^ (salt * 99991);
  n = (n >>> 0) % 10000;
  return n / 10000;
}

function makeMaterial(i: number, j: number, k: number): THREE.MeshPhysicalMaterial {
  // Mix of soft-black "families" so tiles feel different (like Resend)
  // 0 = matte anodized, 1 = soft gloss, 2 = slightly metallic, 3 = deeper charcoal
  const family = Math.floor(hash01(i, j, k, 1) * 4);

  const baseColors = [0x222228, 0x1a1a20, 0x2a2a32, 0x16161c];
  const color = baseColors[family];

  // Per-tile jitter
  const roughJitter = (hash01(i, j, k, 2) - 0.5) * 0.18;
  const metalJitter = (hash01(i, j, k, 3) - 0.5) * 0.22;
  const coatJitter = (hash01(i, j, k, 4) - 0.5) * 0.25;

  const presets = [
    // matte anodized
    { metalness: 0.18, roughness: 0.55, clearcoat: 0.25, clearcoatRoughness: 0.45 },
    // soft gloss black
    { metalness: 0.28, roughness: 0.32, clearcoat: 0.75, clearcoatRoughness: 0.18 },
    // slightly metallic
    { metalness: 0.55, roughness: 0.28, clearcoat: 0.4, clearcoatRoughness: 0.3 },
    // deep charcoal, low sheen
    { metalness: 0.12, roughness: 0.62, clearcoat: 0.15, clearcoatRoughness: 0.55 },
  ];

  const p = presets[family];

  return new THREE.MeshPhysicalMaterial({
    color,
    metalness: THREE.MathUtils.clamp(p.metalness + metalJitter, 0.05, 0.75),
    roughness: THREE.MathUtils.clamp(p.roughness + roughJitter, 0.18, 0.75),
    clearcoat: THREE.MathUtils.clamp(p.clearcoat + coatJitter, 0.05, 0.9),
    clearcoatRoughness: THREE.MathUtils.clamp(
      p.clearcoatRoughness + roughJitter * 0.5,
      0.1,
      0.7
    ),
    reflectivity: 0.4 + hash01(i, j, k, 5) * 0.2,
    envMapIntensity: 0.75 + hash01(i, j, k, 6) * 0.35,
  });
}

function makeCube(): THREE.Object3D {
  const layers = new THREE.Object3D();
  const offset = (CUBES_PER_SIDE - 1) / 2;

  for (let i = 0; i < CUBES_PER_SIDE; i++) {
    const layer = new THREE.Object3D();
    for (let j = 0; j < CUBES_PER_SIDE; j++) {
      for (let k = 0; k < CUBES_PER_SIDE; k++) {
        const geom = createBoxWithRoundedEdges(
          CUBIE_SIZE,
          CUBIE_SIZE,
          CUBIE_SIZE,
          ROUND_RADIUS,
          SMOOTHNESS
        );
        const x = (i - offset) * GAP;
        const y = (j - offset) * GAP;
        const z = (k - offset) * GAP;
        geom.translate(x, y, z);
        const mesh = new THREE.Mesh(geom, makeMaterial(i, j, k));
        layer.add(mesh);
      }
    }
    layers.add(layer);
  }

  const wrapper = new THREE.Object3D();
  wrapper.add(layers);
  wrapper.scale.setScalar(0.92);
  return wrapper;
}

export type CubeHandle = {
  dispose: () => void;
};

export function mountResendCube(canvas: HTMLCanvasElement): CubeHandle | null {
  if (typeof window === "undefined") return null;

  const prefersReduced =
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0.15, 0.25, 8.6);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const key = new THREE.PointLight(0xffffff, 70, 55);
  key.position.set(3.8, 4.2, 6.5);
  scene.add(key);

  const fill = new THREE.PointLight(0xc8d8f0, 38, 45);
  fill.position.set(-4.5, -0.8, 3.5);
  scene.add(fill);

  const rim = new THREE.PointLight(0x8ab4e8, 28, 40);
  rim.position.set(0.5, 3.2, -5.5);
  scene.add(rim);

  const kick = new THREE.PointLight(0xf0e6d8, 18, 35);
  kick.position.set(1.5, -3.5, 4.5);
  scene.add(kick);

  const ambient = new THREE.AmbientLight(0x585868, 0.7);
  scene.add(ambient);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.add(new THREE.HemisphereLight(0xf0f4ff, 0x303040, 1.0));
  const envMap = pmrem.fromScene(envScene, 0.06).texture;
  scene.environment = envMap;
  pmrem.dispose();
  envScene.clear();

  const cube = makeCube();
  scene.add(cube);

  const spinSpeed = prefersReduced ? 0 : 0.0036;

  let nextTwistAt = performance.now() + 2400;
  let twisting = false;
  let twistLayer: THREE.Object3D | null = null;
  let twistStart = 0;
  let twistFrom = 0;
  let twistTo = 0;
  const TWIST_DURATION = 1500;

  function scheduleTwist() {
    if (prefersReduced) return;
    // Twist one of the three fixed layers in place.
    // We intentionally do NOT reorient the parent cube here — that was
    // reshuffling the visible material pattern and breaking coherence.
    // Materials stay permanently on their cubies; only the layer rotates.
    const layers = cube.children[0] as THREE.Object3D;
    const idx = Math.floor(Math.random() * CUBES_PER_SIDE);
    twistLayer = layers.children[idx];
    const dir = Math.random() > 0.5 ? 1 : -1;
    // 180° keeps the same faces outward (coherent pattern); occasional 90°
    // for variety while still preserving adjacency of materials.
    const turns = Math.random() > 0.35 ? 2 : 1; // 2*90° or 1*90°
    twistFrom = twistLayer.rotation.x;
    twistTo = twistFrom + dir * turns * (Math.PI / 2);
    twistStart = performance.now();
    twisting = true;
  }

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  let raf = 0;
  let disposed = false;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width));
    const h = Math.max(1, Math.floor(rect.height));
    if (canvas.width !== w || canvas.height !== h) {
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
  }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  function animate(now: number) {
    if (disposed) return;
    raf = requestAnimationFrame(animate);

    cube.rotation.x += spinSpeed * 0.55;
    cube.rotation.y += spinSpeed;

    if (twisting && twistLayer) {
      const t = Math.min(1, (now - twistStart) / TWIST_DURATION);
      const e = easeInOutCubic(t);
      twistLayer.rotation.x = twistFrom + (twistTo - twistFrom) * e;
      if (t >= 1) {
        twisting = false;
        twistLayer.rotation.x = twistTo;
        nextTwistAt = now + 2000 + Math.random() * 2500;
      }
    } else if (!prefersReduced && now >= nextTwistAt) {
      scheduleTwist();
    }

    renderer.render(scene, camera);
  }

  raf = requestAnimationFrame(animate);

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries[0]?.isIntersecting ?? true;
      if (!visible && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (visible && !raf && !disposed) {
        raf = requestAnimationFrame(animate);
      }
    },
    { threshold: 0.05 }
  );
  io.observe(canvas);

  return {
    dispose() {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      if (scene.environment) {
        (scene.environment as THREE.Texture).dispose();
        scene.environment = null;
      }
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    },
  };
}
