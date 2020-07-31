let container;
let camera;
let renderer;
let scene;
let house;

function init(){
    container = document.getElementById('scene');

    scene = new THREE.Scene();

    const fov = 1;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 10;
    const far = 500;

    //Renderer
    renderer = new THREE.WebGLRenderer({canvas: container, antialias:true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    //Camera
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 3, 500);


    //load modal
    let loader = new THREE.GLTFLoader();
    loader.load('./3d/scene.gltf', function (gltf){
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    });
}

init();
