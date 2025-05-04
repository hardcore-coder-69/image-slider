// 1. Take image input - required
// 2. Take animation time - optional
// 3. Checkbox for border - optional
// 4. Screen background color - optional
// 5. Image gap in px - optional
// 6. Finally Start Button

const imageArray = [
    '1 (9).png',
    '1 (8).png',
    '1 (7).png',
    '1 (6).png',
    '1 (5).png',
    '1 (4).png',
    '1 (3).png',
    '1 (2).png',
    '1 (1).png',
    '1.png',
];

start();
async function start() {
    const containerEl = document.getElementById('container');
    let imageUI = '';
    imageArray.forEach(image => {
        let singleImage = `
            <img src='./images/${image}' class='single-image' />
        `;
        imageUI += singleImage;
    })
    containerEl.innerHTML = imageUI;
    await sleep(1000);
    animate();
}

function animate() {
    const containerEl = document.getElementById('container');
    containerEl.style.transition = 'all 120s linear';
    containerEl.style.transform = `translateX(-${1000 * imageArray.length}px)`;
}

function sleep(ms) {
    return new Promise((res, rej) => setTimeout(() => res(), ms));
}