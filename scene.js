import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
/*GLTFLoader to load GLTF/GLB Models */
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Dino from '/model/dino.glb';

/*RENDERER */
// The renderer is the most important part as it handles the Scene and Camera
const renderer = new THREE.WebGLRenderer(); 
const scene = new THREE.Scene(); //The Scene is where you want to set up your 3D objects, cameras, etc.
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );//Camera 
camera.position.z = 5; //position the camera along the z axis

// Renders everything at the same size as the window
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
/*CUBE */
const geometry = new THREE.BoxGeometry( 1, 1, 1 );//The actual geometry of the cube
const material = new THREE.MeshStandardMaterial( { color: 0x6082B6 } ); //The color of the material
const cube = new THREE.Mesh( geometry, material ); //adds the material to the geometry
cube.position.set(-1, 1, 0); // Sets the position of the cube within x,y,z axis
scene.add( cube );//adds cube to the scene

/*LIGHTING */
// Add ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);
// Add a point light to the scene
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(1, 4, 2);
pointLight.intensity = 20; // Adjust the intensity here, default is 1
scene.add(pointLight);

/*AXES HELPERS */
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
/*ROTATIONAL CONTROLS */
const controls = new OrbitControls( camera, renderer.domElement );

/*SPHERE */
const geometry_sphere = new THREE.SphereGeometry(1, 32, 32); // The actual geometry of the sphere
const material_sphere = new THREE.MeshStandardMaterial({ color: 0xffcc00 }); // The color of the material
const sphere = new THREE.Mesh(geometry_sphere, material_sphere); // Adds the material to the geometry
sphere.position.set(1,1,0) //Sets the position of the sphere
scene.add(sphere); // Adds sphere to the scene


/*LOADER */
const loader = new GLTFLoader();
const loadAsync = url => {
    return new Promise(resolve => {
      loader.load(url, gltf => {
        resolve(gltf);
      })
    })
}

Promise.all(loadAsync(Dino)).then(models => {
	models = models.map(obj=>{
		return obj;
	});
})

model1.position.set(0.5,1,1);
scene.add(model1);


/*Animation */
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	
	sphere.rotation.y += 2;
	sphere.rotation.z += 2;
	controls.update(); //control listener
	renderer.render( scene, camera );

}

animate();