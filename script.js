// 1. Take image input - required
// 2. Take animation time - optional
// 3. Checkbox for border - optional
// 4. Screen background color - optional
// 5. Image gap in px - optional
// 6. Finally Start Button

    // '1.png',
    // '1(1).png',
    // '1(2).png',
    // '1(3).png',
    // '1(4).png',
    // '1(5).png',
    // '1(6).png',
    // '1(7).png',
    // '1(8).png',
    // '1(9).png',
    // '1(10).png',
    // '1(11).png',
    // '1(12).png',
    // '1(13).png',
    // '1(14).png',
    // '1(15).png',
    // '1(16).png',
    // '1(17).png',
    // '1(18).png',
    // '1(19).png',
//     '1(20).png',
//     '1(21).png',
//     '1(22).png',
//     '1(23).png',
//     '1(24).png',
//     '1(25).png',
//     '1(26).png',
//     '1(27).png',
//     '1(28).png',
//     '1(29).png',
//     '1(30).png',
//     '1(31).png',
//     '1(32).png',
//     '1(33).png',
//     '1(34).png',
//     '1(35).png',
//     '1(36).png',
//     '1(37).png',



const bg = '';
const imageArray = [
    '1.png',
    '1(1).png',
    '1(2).png',
    '1(3).png',
    '1(4).png',
    '1(5).png',
    '1(6).png',
    '1(7).png',
    '1(8).png',
    '1(9).png',
    '1(10).png',
    '1(11).png',
    '1(12).png',
    '1(13).png',
    '1(14).png',
    '1(15).png',
    '1(16).png',
    '1(17).png',
    '1(18).png',
    '1(19).png',
];
const time = '360s';




start();
async function start() {
    const containerEl = document.getElementById('container');

    if(bg) {
        const bgImage = document.getElementById('bg-image');
        bgImage.setAttribute('src', `./images/${bg}`);
        bgImage.style.display = 'block';
    }
    
    let imageUI = '';
    imageArray.forEach(image => {
        let singleImage = `
            <img src='./images/${image}' class='single-image shadow' />
        `;
        imageUI += singleImage;
    })
    containerEl.innerHTML = imageUI;
    await sleep(2000);
    animate();
}

function animate() {
    const containerEl = document.getElementById('container');
    containerEl.style.transition = `all ${time} linear`;
    containerEl.style.transform = `translateX(-${1000 * imageArray.length}px)`;
}

function sleep(ms) {
    return new Promise((res, rej) => setTimeout(() => res(), ms));
}