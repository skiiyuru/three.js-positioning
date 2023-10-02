import * as THREE from "three"

const scene = new THREE.Scene()

const g = new THREE.BoxGeometry(1, 1, 1)
const m = new THREE.MeshBasicMaterial({ color: "red" })
const mesh = new THREE.Mesh(g, m)
scene.add(mesh)

// position
// mesh.position.x = 1
// mesh.position.y = -1
// mesh.position.z = 1

mesh.position.set(0.7, -2, 1)

// scale
mesh.scale.set(2, 0.5, 0.5)

// rotation
mesh.rotation.reorder("YXZ") // spacify which rotation to apply first. Used in FPS games
mesh.rotation.x = 1
mesh.rotation.y = Math.PI * 0.25 // PI => 180 degree rotation

// Grouping
const group = new THREE.Group()
scene.add(group)

const c1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "blue" })
)
group.add(c1)

const c2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "yellow" })
)
c2.position.x = -2
group.add(c2)

const c3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
)
c3.position.x = 2
group.add(c3)

group.scale.set(1, 2, 1)

// Axis helper
const helper = new THREE.AxesHelper(10)
scene.add(helper)

const sizes = {
  width: 800,
  height: 600,
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(1, 1, 5)
scene.add(camera)

camera.lookAt(group.position)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
