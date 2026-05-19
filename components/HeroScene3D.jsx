'use client'
import { useEffect, useRef } from 'react'

export default function HeroScene3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let animId
    let THREE

    async function init() {
      THREE = (await import('three')).default || await import('three')

      const canvas = canvasRef.current
      if (!canvas) return

      const W = canvas.clientWidth || canvas.offsetWidth || 800
      const H = canvas.clientHeight || canvas.offsetHeight || 600

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(W, H)
      renderer.setClearColor(0xF2EDE5, 0)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000)
      camera.position.set(0, 0, 5)

      const horsePts = buildHorsePoints()
      const hPosArr = new Float32Array(horsePts.length * 3)
      horsePts.forEach((p, i) => { hPosArr[i*3]=p.x; hPosArr[i*3+1]=p.y; hPosArr[i*3+2]=p.z })
      const horseGeo = new THREE.BufferGeometry()
      horseGeo.setAttribute('position', new THREE.BufferAttribute(hPosArr, 3))
      const horseMat = new THREE.LineBasicMaterial({ color: 0xCDA540, linewidth: 2 })
      const horse = new THREE.LineLoop(horseGeo, horseMat)
      horse.position.set(0.8, -0.2, 0)
      scene.add(horse)

      const PARTICLE_COUNT = 55
      const particles = []
      const particleGeo = new THREE.BufferGeometry()
      const positions = new Float32Array(PARTICLE_COUNT * 3)
      const particleMat = new THREE.PointsMaterial({ color: 0x78427F, size: 0.06, transparent: true, opacity: 0.8 })

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: (Math.random() - 0.5) * 7,
          y: (Math.random() - 0.5) * 5,
          z: (Math.random() - 0.5) * 2,
          vx: (Math.random() - 0.5) * 0.004,
          vy: (Math.random() - 0.5) * 0.004,
          phase: Math.random() * Math.PI * 2,
        })
        positions[i * 3]     = particles[i].x
        positions[i * 3 + 1] = particles[i].y
        positions[i * 3 + 2] = particles[i].z
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const points = new THREE.Points(particleGeo, particleMat)
      scene.add(points)

      const MAX_DIST = 1.8
      const linePositions = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6)
      const lineGeo = new THREE.BufferGeometry()
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
      const lineMesh = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({
        color: 0x9A5BAA, transparent: true, opacity: 0.25, vertexColors: false,
      }))
      scene.add(lineMesh)

      function onResize() {
        const w = canvas.clientWidth
        const h = canvas.clientHeight
        renderer.setSize(w, h)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      window.addEventListener('resize', onResize)

      let t = 0
      function animate() {
        animId = requestAnimationFrame(animate)
        t += 0.012
        const breathe = 1 + Math.sin(t * 0.6) * 0.018
        horse.scale.setScalar(breathe)
        horse.position.y = -0.2 + Math.sin(t * 0.4) * 0.04
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const p = particles[i]
          p.x += p.vx + Math.sin(t * 0.3 + p.phase) * 0.001
          p.y += p.vy + Math.cos(t * 0.2 + p.phase) * 0.001
          if (p.x >  3.5) p.x = -3.5
          if (p.x < -3.5) p.x =  3.5
          if (p.y >  2.5) p.y = -2.5
          if (p.y < -2.5) p.y =  2.5
          positions[i * 3]     = p.x
          positions[i * 3 + 1] = p.y
          positions[i * 3 + 2] = p.z
        }
        particleGeo.attributes.position.needsUpdate = true
        let lineIdx = 0
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          for (let j = i + 1; j < PARTICLE_COUNT; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const dz = particles[i].z - particles[j].z
            const dist = Math.sqrt(dx*dx + dy*dy + dz*dz)
            if (dist < MAX_DIST) {
              linePositions[lineIdx++] = particles[i].x
              linePositions[lineIdx++] = particles[i].y
              linePositions[lineIdx++] = particles[i].z
              linePositions[lineIdx++] = particles[j].x
              linePositions[lineIdx++] = particles[j].y
              linePositions[lineIdx++] = particles[j].z
            }
          }
        }
        for (let k = lineIdx; k < linePositions.length; k++) linePositions[k] = 0
        lineGeo.attributes.position.needsUpdate = true
        lineGeo.setDrawRange(0, lineIdx / 3)
        lineMesh.material.opacity = 0.18 + Math.sin(t * 0.5) * 0.10
        renderer.render(scene, camera)
      }
      animate()

      return () => {
        window.removeEventListener('resize', onResize)
        cancelAnimationFrame(animId)
        renderer.dispose()
      }
    }

    let cleanup
    init().then((fn) => { cleanup = fn })
    return () => { cleanup && cleanup() }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}

function buildHorsePoints() {
  const raw = [
    [0.0,  1.2], [0.3,  1.3], [0.5,  1.2],
    [0.6,  1.0],
    [0.7,  1.3], [0.8,  1.1], [0.65, 0.95],
    [0.75, 0.85],
    [0.9,  0.6],  [0.85, 0.3],
    [0.7,  0.1],  [0.5,  0.0], [0.3,  0.05], [0.1,  0.2],
    [-0.1, 0.4],  [-0.3, 0.5],
    [-0.4, 0.7],
    [-0.5, 0.9],  [-0.4, 1.1], [-0.2, 1.2], [0.0,  1.2],
  ]
  return raw.map(([x, y]) => ({ x: x * 0.9 - 0.35, y: y * 0.9 - 0.55, z: 0 }))
}
