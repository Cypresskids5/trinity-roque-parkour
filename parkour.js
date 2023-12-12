import * as THREE from 'three'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'

const objects = []; //arry - list
let raycaster; //raygun

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now(); //current time
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

let camera, scene, controls, renderer;

init();
animate();
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.y = 10;

    controls = new PointerLockControls(camera, document.body);

    const blocker = document.getElementById('blocker');
    const instructions = document.getElementById('instructions');

    instructions.addEventListener('click', function () {
        controls.lock();
    });
    controls.addEventListener('lock', function () {
        instructions.style.display = 'none';
        blocker.style.display = 'none';
    });
    controls.addEventListener('unlock', function () {
        blocker.style.display = 'block';
        instructions.style.display = '';
    });
    scene.add(controls.getObject());

    const onKeyDown = function (event) {
        switch (event.code) {
            case 'KeyW':
                moveForward = true;
                break;
            case 'KeyS':
                moveBackward = true;
                break;
            case 'KeyA':
                moveLeft = true;
                break;
            case 'KeyD':
                moveRight = true;
                break;
            case 'Space':
                if (canJump === true) velocity.y += 350;
                canJump = false;
                break;
        }
    }

    const onKeyUp = function (event) {
        switch (event.code) {
            case 'KeyW':
                moveForward = false;
                break;
            case 'KeyS':
                moveBackward = false;
                break;
            case 'KeyA':
                moveLeft = false;
                break;
            case 'KeyD':
                moveRight = false;
                break;
        }

    }
    document.addEventListener('keydown',onKeyDown);
    document.addEventListener('keyup',onKeyUp);

    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector2(0,-1,0),0,10);

    const geometry = new THREE.PlaneGeometry(23, 23, 64, 64)
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotateX(-1.57)
    scene.add(plane);
    objects.push(plane);

    const geometry1 = new THREE.BoxGeometry(0.8, 1, 1);
    const material1 = new THREE.MeshLambertMaterial({ color: 0xFFD9F1 });
    const cube1 = new THREE.Mesh(geometry1, material1);
    cube1.position.x = 8.5
    scene.add(cube1);
    objects.push(cube1);

    const torusGeometry = new THREE.TorusGeometry(0.2, 0.1, 64, 64);
    const torusMaterial = new THREE.MeshLambertMaterial({ color: 0x00ccaa });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);
    objects.push(torus);

    const geometry2 = new THREE.BoxGeometry(0.32, 1, 1);
    const material2 = new THREE.MeshLambertMaterial({ color: 0x3FD9F1 });
    const cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.x = 7.5
    scene.add(cube2);
    objects.push(cube2)

    const geometry3 = new THREE.BoxGeometry(0.9, 1, 1);
    const material3 = new THREE.MeshLambertMaterial({ color: 0xFF29F1 });
    const cube3 = new THREE.Mesh(geometry3, material3);
    cube3.position.x = 10
    scene.add(cube3);
    objects.push(cube3)

    const geometry4 = new THREE.BoxGeometry(0.9, 1, 1);
    const material4 = new THREE.MeshLambertMaterial({ color: 0x66c9F1 });
    const cube4 = new THREE.Mesh(geometry4, material4);
    cube4.position.x = 6.5
    scene.add(cube4);
    objects.push(cube4)

    const geometry5 = new THREE.BoxGeometry(0.9, 1, 1);
    const material5 = new THREE.MeshLambertMaterial({ color: 0xaF49a1 });
    const cube5 = new THREE.Mesh(geometry5, material5);
    cube5.position.x = 5.3
    scene.add(cube5);
    objects.push(cube5)

    const geometry6 = new THREE.BoxGeometry(0.9, 1, 1);
    const material6 = new THREE.MeshLambertMaterial({ color: 0x0b69F1 });
    const cube6 = new THREE.Mesh(geometry6, material6);
    cube6.position.x = 4
    scene.add(cube6);
    objects.push(cube6)

    const geometry7 = new THREE.BoxGeometry(0.9, 1, 1);
    const material7 = new THREE.MeshLambertMaterial({ color: 0x0a5cF2 });
    const cube7 = new THREE.Mesh(geometry7, material7);
    cube7.position.x = 1.8
    scene.add(cube7);
    objects.push(cube7)

    const geometry9 = new THREE.BoxGeometry(0.9, 1, 1);
    const material9 = new THREE.MeshLambertMaterial({ color: 0x0ddcF2 });
    const cube9 = new THREE.Mesh(geometry9, material9);
    cube9.position.x = 2.93
    scene.add(cube9);
    objects.push(cube9)

    const geometry8 = new THREE.BoxGeometry(0.9, 1, 1);
    const material8 = new THREE.MeshLambertMaterial({ color: 0x11daa2 });
    const cube8 = new THREE.Mesh(geometry8, material8);
    cube8.position.x = 0.45
    scene.add(cube8);
    objects.push(cube8)

    const geometry10 = new THREE.BoxGeometry(0.9, 1, 1);
    const material10 = new THREE.MeshLambertMaterial({ color: 0x11cca1 });
    const cube10 = new THREE.Mesh(geometry10, material10);
    cube10.position.x = -1
    scene.add(cube10);
    objects.push(cube10)

    const geometry11 = new THREE.BoxGeometry(0.9, 1, 1);
    const material11 = new THREE.MeshLambertMaterial({ color: 0x233ab2 });
    const cube11 = new THREE.Mesh(geometry11, material11);
    cube11.position.x = -2.5
    scene.add(cube11);
    objects.push(cube11)

    const geometry12 = new THREE.BoxGeometry(0.9, 1, 1);
    const material12 = new THREE.MeshLambertMaterial({ color: 0x244aa2 });
    const cube12 = new THREE.Mesh(geometry12, material12);
    cube12.position.x = -3.2
    scene.add(cube12);
    objects.push(cube12)

    const geometry13 = new THREE.BoxGeometry(0.9, 1, 1);
    const material13 = new THREE.MeshLambertMaterial({ color: 0x22daa2 });
    const cube13 = new THREE.Mesh(geometry13, material13);
    cube11.position.x = -4.3
    scene.add(cube13);
    objects.push(cube13)

    const geometry14 = new THREE.BoxGeometry(0.9, 1, 1);
    const material14 = new THREE.MeshLambertMaterial({ color: 0x22daa2 });
    const cube14 = new THREE.Mesh(geometry14, material14);
    cube14.position.x = -5.6
    scene.add(cube14);
    objects.push(cube14)

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

     renderer = new THREE.WebGLRenderer({antialias:true});
     renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

        window.addEventListener('resize',onWindowResize);
}
 
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth,window.innerHeight);
}
    

    function animate() {
        requestAnimationFrame(animate);

        const time = performance.now();
        if(controls.isLocked === true){
            raycaster.ray.origin.copy(controls.getObject().position);
            raycaster.ray.origin.y -= 10;

            const intersections = raycaster.intersectObjects(objects,false);
            const onObject = intersections.length > 0
            const delta = (time - prevTime) / 1000;

            velocity.x -= velocity.x * 10.0 * delta;
            velocity.z -= velocity.z * 10.0 * delta;
            velocity.y -= 9.8 * 100.0 * delta; 

            direction.z = Number(moveForward) - Number(moveBackward);
            direction.x = Number(moveRight) - Number(moveLeft);
            direction.normalize();

            if(moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
            if(moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

            if(onObject === true){
                velocity.y = Math.max(0, velocity.y)
                canJump = true;
            }

            controls.moveRight(-velocity.x * delta);
            controls.moveForward(-velocity.z * delta);
            controls.getObject().position.y += (velocity.y * delta);

            if(controls.getObject().position.y < 10){
                velocity.y = 0;
                controls.getObject().position.y = 10;
                canJump = true;
            }
        }
        prevTime = time;
        renderer.render(scene, camera);
    }


