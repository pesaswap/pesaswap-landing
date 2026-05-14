'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const COLORS = {
  primary: 0x1b5e4b,
  primaryDeep: 0x143d32,
  accent: 0xc9a84e,
  accentMuted: 0xd4b96a,
}

const LOOP_DURATION = 8.0
const FALL_DISTANCE = 10.0

const ENGLISH_NAME: Record<number, string> = {
  1: 'ONE SHILLING',
  5: 'FIVE SHILLINGS',
  10: 'TEN SHILLINGS',
  20: 'TWENTY SHILLINGS',
}
const SWAHILI_NAME: Record<number, string> = {
  1: 'SHILINGI MOJA',
  5: 'SHILINGI TANO',
  10: 'SHILINGI KUMI',
  20: 'SHILINGI ISHIRINI',
}
const ANIMAL_EMOJI: Record<number, string> = {
  1: '🦒',
  5: '🦏',
  10: '🦁',
  20: '🐘',
}

function makeCoinFaceTexture(denomination: number) {
  const size = 1024
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const ctx = c.getContext('2d')!
  const cx = size / 2
  const cy = size / 2

  const grad = ctx.createRadialGradient(cx - 100, cy - 100, 30, cx, cy, size / 2)
  grad.addColorStop(0.0, '#F0DA9C')
  grad.addColorStop(0.45, '#D4B96A')
  grad.addColorStop(0.85, '#967F36')
  grad.addColorStop(1.0, '#5C4A1E')
  ctx.fillStyle = grad
  ctx.beginPath()
  ctx.arc(cx, cy, size / 2, 0, Math.PI * 2)
  ctx.fill()

  // Option B: deep brand green engraving instead of bronze brown.
  // Keeps the coin metallic gold, but every embossed mark (text, silhouette,
  // beaded border, denomination, KENYA) reads as inked in pesaswap green.
  const ENGRAVE = '#0E2A22'
  const ENGRAVE_SOFT = 'rgba(14, 42, 34, 0.65)'

  ctx.fillStyle = ENGRAVE_SOFT
  const outerBeads = 120
  const outerBeadR = size / 2 - 30
  for (let i = 0; i < outerBeads; i++) {
    const a = (i / outerBeads) * Math.PI * 2
    ctx.beginPath()
    ctx.arc(cx + Math.cos(a) * outerBeadR, cy + Math.sin(a) * outerBeadR, 3.0, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.strokeStyle = ENGRAVE_SOFT
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.arc(cx, cy, size / 2 - 60, 0, Math.PI * 2)
  ctx.stroke()

  function curvedText(
    text: string,
    radius: number,
    startAngle: number,
    fontSize: number,
    weight: string,
    color: string,
    flip = false,
    spacing = 0.115,
  ) {
    ctx.save()
    ctx.translate(cx, cy)
    ctx.fillStyle = color
    ctx.font = `${weight} ${fontSize}px "Arial Black", "Helvetica Neue", sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    const angleStep = spacing
    const totalAngle = (text.length - 1) * angleStep
    let angle = flip ? startAngle + totalAngle / 2 : startAngle - totalAngle / 2
    for (const ch of text) {
      ctx.save()
      ctx.rotate(angle)
      ctx.translate(0, -radius)
      if (flip) ctx.rotate(Math.PI)
      ctx.fillText(ch, 0, 0)
      ctx.restore()
      angle += flip ? -angleStep : angleStep
    }
    ctx.restore()
  }

  curvedText(ENGLISH_NAME[denomination], size / 2 - 80, -Math.PI / 2, 50, 'bold', ENGRAVE, false, 0.13)
  curvedText(SWAHILI_NAME[denomination], size / 2 - 80, Math.PI / 2, 44, 'bold', ENGRAVE, true, 0.12)

  ctx.fillStyle = ENGRAVE
  for (const angle of [0, Math.PI]) {
    const dx = Math.cos(angle) * (size / 2 - 80)
    const dy = Math.sin(angle) * (size / 2 - 80)
    ctx.beginPath()
    ctx.arc(cx + dx, cy + dy, 6, 0, Math.PI * 2)
    ctx.fill()
  }

  const animalSize = size * 0.42
  const tmp = document.createElement('canvas')
  tmp.width = animalSize
  tmp.height = animalSize
  const tctx = tmp.getContext('2d')!
  tctx.font = `${animalSize * 0.85}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`
  tctx.textAlign = 'center'
  tctx.textBaseline = 'middle'
  tctx.fillText(ANIMAL_EMOJI[denomination], animalSize / 2, animalSize / 2)
  tctx.globalCompositeOperation = 'source-in'
  tctx.fillStyle = ENGRAVE
  tctx.fillRect(0, 0, animalSize, animalSize)
  ctx.drawImage(tmp, cx - animalSize * 0.95, cy - animalSize / 2)

  ctx.fillStyle = ENGRAVE
  ctx.font = `bold ${denomination >= 10 ? 170 : 210}px "Times New Roman", serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(String(denomination), cx + size * 0.2, cy - 20)

  ctx.font = 'bold 36px "Arial Black", sans-serif'
  ctx.fillText('KENYA', cx + size * 0.2, cy + 80)

  const sheen = ctx.createRadialGradient(cx - 200, cy - 200, 30, cx - 200, cy - 200, 500)
  sheen.addColorStop(0, 'rgba(255, 245, 200, 0.32)')
  sheen.addColorStop(1, 'rgba(255, 245, 200, 0.0)')
  ctx.fillStyle = sheen
  ctx.beginPath()
  ctx.arc(cx, cy, size / 2 - 8, 0, Math.PI * 2)
  ctx.fill()

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 16
  return tex
}

function makeReededEdgeTexture() {
  const w = 2048
  const h = 64
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')!
  const grad = ctx.createLinearGradient(0, 0, 0, h)
  grad.addColorStop(0, '#7A6228')
  grad.addColorStop(0.5, '#D4B96A')
  grad.addColorStop(1, '#7A6228')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)
  ctx.fillStyle = 'rgba(40, 28, 6, 0.55)'
  for (let i = 0; i < 200; i++) {
    ctx.fillRect((i / 200) * w, 0, 2.0, h)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

const coinConfigs = [
  { xBase: 3.5, yTop: 4.5, zBase: 0.5, scale: 1.1, tilt: { x: 1.55, y: 0.0, z: 0.1 }, phase: 0.0, denomination: 20 },
  { xBase: 6.0, yTop: 4.0, zBase: -0.5, scale: 0.9, tilt: { x: 1.2, y: 0.5, z: -0.15 }, phase: 0.18, denomination: 10 },
  { xBase: 4.8, yTop: 5.0, zBase: 1.5, scale: 1.4, tilt: { x: 1.4, y: 0.3, z: 0.2 }, phase: 0.32, denomination: 20 },
  { xBase: 2.5, yTop: 3.5, zBase: 0.0, scale: 0.85, tilt: { x: 0.3, y: 0.0, z: 0.05 }, phase: 0.46, denomination: 5 },
  { xBase: 6.5, yTop: 3.8, zBase: -1.0, scale: 0.75, tilt: { x: 1.55, y: 0.7, z: 0.0 }, phase: 0.58, denomination: 10 },
  { xBase: 3.8, yTop: 4.2, zBase: -1.5, scale: 0.65, tilt: { x: 1.55, y: 0.0, z: -0.05 }, phase: 0.72, denomination: 1 },
  { xBase: 5.5, yTop: 3.6, zBase: 2.0, scale: 1.25, tilt: { x: 1.55, y: 0.2, z: 0.3 }, phase: 0.86, denomination: 20 },
]

function smoothstep(e0: number, e1: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)))
  return t * t * (3 - 2 * t)
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const getSize = () => ({ width: container.clientWidth, height: container.clientHeight })
    let { width, height } = getSize()

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setSize(width, height, false)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    renderer.outputColorSpace = THREE.SRGBColorSpace

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(COLORS.primary)
    scene.fog = new THREE.FogExp2(COLORS.primaryDeep, 0.04)

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 200)
    camera.position.set(0, 0, 14)
    camera.lookAt(0, 0, 0)

    // Lighting
    scene.add(new THREE.AmbientLight(0x8a9890, 0.5))

    const keyLight = new THREE.DirectionalLight(0xffe6bc, 1.1)
    keyLight.position.set(5, 8, 6)
    scene.add(keyLight)

    const fillLight = new THREE.PointLight(0x4d9080, 1.0, 30, 2)
    fillLight.position.set(-6, 3, 4)
    scene.add(fillLight)

    const goldLight = new THREE.PointLight(COLORS.accentMuted, 1.3, 22, 2)
    goldLight.position.set(6, -2, 5)
    scene.add(goldLight)

    // Coins
    const reededTex = makeReededEdgeTexture()
    const faceTexCache: Record<number, THREE.CanvasTexture> = {}
    const getFaceTexture = (d: number) => {
      if (!faceTexCache[d]) faceTexCache[d] = makeCoinFaceTexture(d)
      return faceTexCache[d]
    }

    const disposables: { dispose: () => void }[] = []
    const trackTexture = (t: THREE.Texture) => disposables.push(t)
    trackTexture(reededTex)

    function makeCoin(denomination: number) {
      const group = new THREE.Group()

      const sideMat = new THREE.MeshStandardMaterial({
        map: reededTex,
        color: 0xffffff,
        metalness: 1.0,
        roughness: 0.3,
        transparent: true,
      })
      const faceTex = getFaceTexture(denomination)
      trackTexture(faceTex)
      const faceMat = new THREE.MeshStandardMaterial({
        map: faceTex,
        color: 0xffffff,
        metalness: 0.92,
        roughness: 0.22,
        // Subtle green inner glow (was warm brown #3a2c0c) — ties the coin
        // to the brand environment without recolouring the gold metal itself.
        emissive: 0x0e2a22,
        emissiveIntensity: 0.14,
        transparent: true,
      })

      const COIN_R = 1.0
      const COIN_H = 0.16
      const bodyGeom = new THREE.CylinderGeometry(COIN_R, COIN_R, COIN_H, 128)
      const body = new THREE.Mesh(bodyGeom, [sideMat, faceMat, faceMat])
      group.add(body)
      disposables.push(bodyGeom, sideMat, faceMat)

      const rimGeom = new THREE.TorusGeometry(COIN_R - 0.018, 0.02, 12, 128)
      const rimMat = new THREE.MeshStandardMaterial({
        color: COLORS.accentMuted,
        metalness: 1.0,
        roughness: 0.12,
        emissive: 0x5c4a1e,
        emissiveIntensity: 0.45,
        transparent: true,
      })
      const rimTop = new THREE.Mesh(rimGeom, rimMat)
      rimTop.rotation.x = Math.PI / 2
      rimTop.position.y = COIN_H / 2 + 0.001
      group.add(rimTop)
      const rimBottom = rimTop.clone()
      rimBottom.position.y = -(COIN_H / 2 + 0.001)
      group.add(rimBottom)
      disposables.push(rimGeom, rimMat)

      return group
    }

    const coins = coinConfigs.map(cfg => {
      const c = makeCoin(cfg.denomination)
      c.scale.setScalar(cfg.scale)
      scene.add(c)
      return c
    })

    const clock = new THREE.Clock()
    let rafId = 0
    let running = true

    const onVisibility = () => {
      running = !document.hidden
      if (running) clock.start()
    }
    document.addEventListener('visibilitychange', onVisibility)

    const tick = () => {
      rafId = requestAnimationFrame(tick)
      if (!running) return

      const elapsed = clock.getElapsedTime()
      const t = (elapsed % LOOP_DURATION) / LOOP_DURATION

      coins.forEach((coin, i) => {
        const cfg = coinConfigs[i]
        const phase = (t + cfg.phase) % 1

        coin.position.y =
          cfg.yTop - phase * FALL_DISTANCE + Math.sin(elapsed * 0.7 + i) * 0.04
        coin.position.x = cfg.xBase + Math.sin(elapsed * 0.4 + i * 1.3) * 0.1
        coin.position.z = cfg.zBase + Math.cos(elapsed * 0.3 + i) * 0.08

        coin.rotation.x = cfg.tilt.x + Math.sin(elapsed * 0.35 + i * 0.7) * 0.04
        coin.rotation.y = cfg.tilt.y + elapsed * 0.08 + Math.sin(elapsed * 0.25 + i) * 0.06
        coin.rotation.z = cfg.tilt.z + Math.cos(elapsed * 0.3 + i * 0.5) * 0.04

        const yPos = coin.position.y
        const fadeIn = smoothstep(4.0, 2.5, yPos)
        const fadeOut = smoothstep(-4.5, -2.0, yPos)
        const alpha = Math.min(fadeIn, fadeOut)
        coin.traverse(o => {
          const mesh = o as THREE.Mesh
          if (!mesh.material) return
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(m => {
              ;(m as THREE.Material & { opacity: number }).opacity = alpha
            })
          } else {
            ;(mesh.material as THREE.Material & { opacity: number }).opacity = alpha
          }
        })
      })

      camera.position.x = Math.sin(elapsed * 0.18) * 0.12
      camera.position.y = Math.sin(elapsed * 0.22) * 0.08
      camera.lookAt(0, 0, 0)

      goldLight.position.x = 6 + Math.sin(elapsed * 0.3) * 1.2
      goldLight.position.y = -2 + Math.cos(elapsed * 0.25) * 0.6
      fillLight.intensity = 1.0 + Math.sin(elapsed * 0.4) * 0.15

      renderer.render(scene, camera)
    }
    tick()

    const onResize = () => {
      const next = getSize()
      if (next.width === 0 || next.height === 0) return
      width = next.width
      height = next.height
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(container)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      disposables.forEach(d => d.dispose())
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden rounded-b-[32px] md:rounded-b-[48px]">
      <canvas ref={canvasRef} className="block h-full w-full" />
      {/* Soft vignette to deepen edges and improve text contrast */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 40%, transparent 45%, rgba(8, 22, 18, 0.55) 100%)',
        }}
      />
    </div>
  )
}
