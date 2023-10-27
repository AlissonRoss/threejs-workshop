import * as THREE from 'three';

/*RENDERER */
// The renderer is the most important part as it handles the Scene and Camera
const renderer = new THREE.WebGLRenderer(); 
const scene = new THREE.Scene(); //The Scene is where you want to set up your 3D objects, cameras, etc.
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );//Camera 

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
/*CUBE */
const geometry = new THREE.BoxGeometry( 1, 1, 1 );//The actual geometry of the cube
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); //The color of the material
const cube = new THREE.Mesh( geometry, material ); //adds the material to the geometry
scene.add( cube );//adds cube to the scene

camera.position.z = 5;

// function onWindowResize()
// {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setPixelRatio( window.devicePixelRatio );
//     renderer.setSize( window.innerWidth, window.innerHeight);
// }

/*Animation */
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();