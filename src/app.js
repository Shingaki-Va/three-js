
const container = document.querySelector('#game-container');

/////////// escena //////////////
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

//////// Cámara perspectiva//////////
const camera = new THREE.PerspectiveCamera(
       35, // Fov  (Field, of, view) 1-179
        container.clientWidth / container.clientHeight, // Aspect
        0.1, // near
        1000 // Far
    
);
camera.position.set(0, 0, 10);
//camera.zoom = 2;
camera.updateProjectionMatrix(); 

////////////camara ortografica///////////////
/* let div = 100;
let camera = new THREE.OrthographicCamera(
 container.clientWidth/div,
 container.clientWidth/-div,
 container.clientHeight/div,
 container.clientHeight/-div,
 .1,
 1000

);
camera.position.set(0, 0, 15) */

// Mesh
const geometry = new THREE.CylinderBufferGeometry(1, 1, 3,8);
const material = new THREE.MeshBasicMaterial({
    color: 'teal'
});
const cylinder_mesh = new THREE.Mesh(geometry, material);
cylinder_mesh.rotateZ(THREE.MathUtils.degToRad(90));
cylinder_mesh.position.set(-3, 0, 0);

scene.add(cylinder_mesh);


//mesh 2
const cylinder_mesh2 = new THREE.Mesh(geometry, material);
cylinder_mesh2.rotateZ(THREE.MathUtils.degToRad(180));
cylinder_mesh2.position.set(3, 0, 0);

scene.add(cylinder_mesh2);



///////HELPER//////
const helperAxes = new THREE.AxesHelper(1);
scene.add(helperAxes);

// Render
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: container
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const update = () => {
    cylinder_mesh2.rotateX(0.01);
    cylinder_mesh.rotateY(0.01);
    renderer.render(scene, camera);
    renderer.setAnimationLoop(() => update());
}
update();
