// Настройка сцены, камеры и рендера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game-container').appendChild(renderer.domElement);

// Создание куба
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Позиция камеры
camera.position.z = 5;

// Анимация куба
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Обработка ввода пользователя
document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    // Простое управление
    if (keyName === 'ArrowUp') {
        cube.position.y += 0.1;
    } else if (keyName === 'ArrowDown') {
        cube.position.y -= 0.1;
    } else if (keyName === 'ArrowLeft') {
        cube.position.x -= 0.1;
    } else if (keyName === 'ArrowRight') {
        cube.position.x += 0.1;
    }
});

// Обработка изменения размера окна
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});