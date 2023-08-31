

const sizes = { width:window.innerWidth,height:window.innerHeight };
const cursor = {x:0,y:0};

window.addEventListener('resize',() => {
    sizes.height = window.innerHeight;
    sizes.width = window.innerWidth;
    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width,sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
});

window.addEventListener('mousemove',event => {
    cursor.x=(event.clientX / sizes.width)-.5;
    cursor.y= (event.clientY / sizes.height)-.5;
});

window.addEventListener('dblclick',(event) => {
    const fElem = document.fullscreenElement || document.webkitfullscreenElement;
    if(!document.fullscreenElement) {
        if(canvas.requestFullscreen){
            canvas.requestFullscreen();
        }
        else if(canvas.webkitfullscreenElement) {
            canvas.webkitfullscreenElement
        }
    }else {
        document.exitFullscreen();
    }
})


const scene = new THREE.Scene();

const geometry =  new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:0x00ff00});
const mesh =  new THREE.Mesh(geometry,material);

// camera => (fieldofview , aspect , near , far )
const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height,2,1000);
camera.position.z = 3;

//camera helper
//const cameraHelper = new THREE.CameraHelper(camera);
//scene.add(cameraHelper);



scene.add(mesh);
scene.add(camera);

const canvas  = document.querySelector('.webgl');
const control = new THREE.OrbitControls(camera,canvas);
control.enableDamping = true;
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
});
renderer.setSize(sizes.width,sizes.height);
//running
renderer.render(scene,camera);

const clock = new THREE.Clock();
function animateSomething() {
    //const elapsedTime = clock.getElapsedTime();
    /*camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
    camera.position.y = - (cursor.y * 5); */
    camera.lookAt(mesh.position);
    control.update();
    //mesh.rotation.y +=0.05;   
    renderer.render(scene,camera);
    window.requestAnimationFrame(animateSomething);
}
animateSomething();





