let container;
let camera;
let renderer;
let scene;
let house_1;
let house_2;
let house_3;

function init(){
    container = document.getElementById('scene');

    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 1000;

    //Renderer
    renderer = new THREE.WebGLRenderer({canvas: container, antialias:true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    //Camera
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 3, 25);

    // light
    const ambient = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambient);
    const light= new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(10, 10, 10);
    scene.add(light);

    //load modal
    let loader = new THREE.GLTFLoader();
    loader.load('./3d/1_House/scene.gltf', function (gltf){
        scene.add(gltf.scene);
        house_1 = gltf.scene.children[0];
        animaition();
    });

    loader.load('./3d/2_House/scene.gltf',function (gltf){
        scene.add(gltf.scene);
        house_2 = gltf.scene.children[0];
        house_2.position.x = -12;
        house_2.scale.set(0.5, 0.5, 0.5)
        
        animaition2();
    });

    loader.load('./3d/3_House/scene.gltf',function (gltf){
        scene.add(gltf.scene);
        house_3 = gltf.scene.children[0];
        house_3.position.x = 12;
        house_3.scale.set(0.17, 0.17, 0.17)
        
        animaition3();
    });

    function animaition(){
        requestAnimationFrame(animaition);
        house_1.rotation.z += 0.005;
        renderer.render(scene, camera);
    }

    function animaition2(){
        requestAnimationFrame(animaition2);
        house_2.rotation.z += 0.005;
        renderer.render(scene, camera);
    }

    function animaition3(){
        requestAnimationFrame(animaition3);
        house_3.rotation.z += 0.005;
        renderer.render(scene, camera);
    }
}

init();

function onWindowResize(){
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);
