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





const introText = "Hollywood's Biggest Losers of 2024";
// const introText='';
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
    // '1(19).png',
];
const time = '260s';
const animateCount = 4;







const fullScreenTextContainerEl = document.getElementById('full-screen-text-container');
const fullScreenTextEl = document.getElementById('full-screen-text');

const keyboardTypingSoundEl = document.getElementById("keyboard-typing-audio");
const audio = document.getElementById('myAudio');
audio.load();
keyboardTypingSoundEl.load();
keyboardTypingSoundEl.loop = true;


start();
async function start() {
    await sleep(2000);
    console.log("Testing sounds...");
    keyboardTypingSoundEl.play();
    await sleep(2000);
    keyboardTypingSoundEl.pause();
    await sleep(1000);

    if(introText) {
        await showFullScreenText({
            text: introText,
            typingSpeed: 100,
            textSize: '92px',
            color: 'yellow'
        });
        await sleep(3000);
        await hideFullScreenText();
    }


    audio.play();
    const containerEl = document.getElementById('container');
    if(bg) {
        const bgImage = document.getElementById('bg-image');
        bgImage.setAttribute('src', `./images/${bg}`);
        bgImage.style.display = 'block';
    }
    
    let imageUI = '';
    imageArray.forEach((image, index) => {
        let singleImage = `
            <img src='./images/${image}' class='single-image shadow ${index <= (animateCount-1) ? 'image-animate-' + (index+1) : ''}' />
        `;
        imageUI += singleImage;
    })
    containerEl.innerHTML = imageUI;
    await sleep((animateCount * 4000) + 1000);
    slide();
}

function slide() {
    const containerEl = document.getElementById('container');
    containerEl.style.transition = `all ${time} linear`;
    containerEl.style.transform = `translateX(-${1000 * imageArray.length}px)`;
}

function sleep(ms) {
    return new Promise((res, rej) => setTimeout(() => res(), ms));
}

// Show full screen text
async function showFullScreenText({ text, typingSpeed, textSize, color }) {
    fullScreenTextContainerEl.style.display = 'flex';
    fullScreenTextEl.style.display = 'flex';

    if (textSize) {
        fullScreenTextEl.style.fontSize = textSize;
    }

    if(color) {
        fullScreenTextEl.style.color = color;
    }

    await typeWriter({
        textEl: fullScreenTextEl,
        text: text,
        typingSpeed: typingSpeed
    });
}

async function hideFullScreenText() {
    fullScreenTextContainerEl.style.transition = 'transform 0.5s linear';
    fullScreenTextContainerEl.style.transform = 'translateX(-1400px)';
    await sleep(500);
    fullScreenTextEl.style.display = 'none';
    fullScreenTextContainerEl.style.display = 'none';
}

// Text Typing Animation
let typingText = '';
let speed = 0;
let charIndex = 0;
let pauseCharacters = ['.', ','];
async function typeWriter({ textEl, text, typingSpeed }) {
    if (textEl && text && typingSpeed) {
        await keyboardTypingSoundEl.play();
        textEl.style.display = 'block';
    };
    if (text) typingText = text;
    if (typingSpeed) speed = typingSpeed;

    if (charIndex < typingText.length) {
        textEl.textContent = textEl.textContent.substring(0, textEl.textContent.length - 1);
        textEl.textContent += typingText.charAt(charIndex);

        if (charIndex != typingText.length - 1) {
            textEl.textContent += '|'
        }

        // Pause typing
        if (pauseCharacters.includes(typingText.charAt(charIndex))) {
            await keyboardTypingSoundEl.pause();
            await sleep(250);
            await keyboardTypingSoundEl.play();
        }

        charIndex++;
        await sleep(speed);
        await typeWriter({ textEl });
    } else {
        typingText = '';
        speed = 0;
        charIndex = 0;
        await keyboardTypingSoundEl.pause();
    }
}