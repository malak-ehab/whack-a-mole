const cursor = document .querySelector(".cursor");
const holes = [...document.querySelectorAll('.hole')]
const scoreEL = document.querySelector('.score p')
let score = 0
let gameActive = true; 

const sound =new Audio("smash.mp3")
function run(){
    if (!gameActive) return;
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timm =null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = './mole.png'

    img.addEventListener('click', () => {
        score += 10
        sound.play()
        scoreEL.textContent = score
        img.src ='./mole-whacked.png'
        clearTimeout(timm)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
        
    })

    hole.appendChild(img)
    timm = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1200)
}
run()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})
    let timeLeft = 30; // 0.5 minute in seconds

    const timerElement = document.getElementById('timer');
    
    function freezeGame() {
        gameActive = false; 
        const moles = document.querySelectorAll('.mole');
        moles.forEach(mole => mole.remove()); 
    }

    const countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            freezeGame();
            document.getElementsByClassName("popup")[0].style.visibility = "visible";
            document.getElementsByClassName("popup")[0].style.zIndex = "1";
            
        } else {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;}},1000)
            

            function restartGame() {
                location.reload(); }

