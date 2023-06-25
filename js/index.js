const florestSound = new Audio ('./sounds/Floresta.wav')
const rainSound = new Audio ('./sounds/Chuva.wav')
const coffeeSound = new Audio ('./sounds/Cafeteria.wav')
const fireplaceSound =new Audio ('./sounds/Lareira.wav')

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const florest = document.querySelector('.florest')
const coffee = document.querySelector('.coffee')
const rain = document.querySelector('.rain')
const fireplace = document.querySelector('.fireplace')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let timerTimeout

function hold() {
    clearTimeout(timerTimeout)
    play.addEventListener('click', countDown)
}

function minusButton() {

    if(minutes < 5 && minutes > 0) {
        minutes -= 1
    } else if( minutes <= 0) {
        return
    } else {
        minutes -= 5
    }

}

function countDown() {
    timerTimeout = setTimeout(function() {

        if( minutes <= 0 && seconds <= 0) {
            play.addEventListener('click', countDown)
            return
        }
    
        if(seconds <= 0) {
            --minutes
            seconds = 60
            minutesDisplay.innerText = String(minutes).padStart(2, '0')
        }

        --seconds
        
        secondsDisplay.innerText = String(seconds).padStart(2, '0')

        countDown()

    }, 1000)

    play.removeEventListener('click', countDown)
    
}



play.addEventListener('click', countDown)
pause.addEventListener('click', hold)

plus.addEventListener('click', () => {
    minutes += 5
    minutesDisplay.innerText = String(minutes).padStart(2, '0')
})

minus.addEventListener('click', () => {
    minusButton()
    minutesDisplay.innerText = String(minutes).padStart(2, '0')
})

coffee.addEventListener('click', () => {
    coffee.classList.toggle('dark')
    coffee.classList.toggle('white')
    fireplace.classList.remove('dark')
    fireplace.classList.remove('white')
    florest.classList.remove('dark')
    florest.classList.remove('white')
    rain.classList.remove('dark')
    rain.classList.remove('white')
    coffeeSound.loop = true
    florestSound.pause()
    rainSound.pause()
    fireplaceSound.pause()
    coffeeSound.paused ? coffeeSound.play() : coffeeSound.pause()
})


rain.addEventListener('click', () => {
    rain.classList.toggle('dark')
    rain.classList.toggle('white')
    fireplace.classList.remove('dark')
    fireplace.classList.remove('white')
    florest.classList.remove('dark')
    florest.classList.remove('white')
    coffee.classList.remove('dark')
    coffee.classList.remove('white')
    rainSound.loop = true
    coffeeSound.pause()
    florestSound.pause()
    fireplaceSound.pause()
    rainSound.paused ? rainSound.play() : rainSound.pause()
})

fireplace.addEventListener('click', () => {
    fireplace.classList.toggle('dark')
    fireplace.classList.toggle('white')
    coffee.classList.remove('dark')
    coffee.classList.remove('white')
    florest.classList.remove('dark')
    florest.classList.remove('white')
    rain.classList.remove('dark')
    rain.classList.remove('white')
    fireplaceSound.loop = true
    coffeeSound.pause()
    florestSound.pause()
    rainSound.pause()
    fireplaceSound.paused ? fireplaceSound.play() : fireplaceSound.pause()
})

florest.addEventListener('click', () => {
    florest.classList.toggle('dark')
    florest.classList.toggle('white')
    fireplace.classList.remove('dark')
    fireplace.classList.remove('white')
    coffee.classList.remove('dark')
    coffee.classList.remove('white')
    rain.classList.remove('dark')
    rain.classList.remove('white')
    florestSound.loop = true
    coffeeSound.pause()
    rainSound.pause()
    fireplaceSound.pause()
    florestSound.paused ? florestSound.play() : florestSound.pause()
})
