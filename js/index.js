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
const lightMode = document.querySelector('.lightMode')
const darkMode = document.querySelector('.darkMode')
const body = document.querySelector('body')
const time = document.querySelector('.time')

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

lightMode.addEventListener('click', () => {
    lightMode.classList.toggle('hide')
    darkMode.classList.toggle('hide')
    body.classList.toggle('bgDark')
    time.classList.toggle('lightColor')

    if(coffee.classList.contains('blue')) {
        coffee.classList.add('darkBlue')
        coffee.classList.remove('blue')

    }

    if(!coffee.classList.contains('white')) {
        coffee.classList.add('white')
        coffee.classList.add('dark')
    }

    if(rain.classList.contains('blue')) {
        rain.classList.add('darkBlue')
        rain.classList.remove('blue')

    }

    if(!rain.classList.contains('white')) {
        rain.classList.add('white')
        rain.classList.add('dark')
    }

    if(fireplace.classList.contains('blue')) {
        fireplace.classList.add('darkBlue')
        fireplace.classList.remove('blue')

    }

    if(!fireplace.classList.contains('white')) {
        fireplace.classList.add('white')
        fireplace.classList.add('dark')
    }

    if(florest.classList.contains('blue')) {
        florest.classList.add('darkBlue')
        florest.classList.remove('blue')

    }

    if(!florest.classList.contains('white')) {
        florest.classList.add('white')
        florest.classList.add('dark')
    }

})

darkMode.addEventListener('click', () => {
    lightMode.classList.toggle('hide')
    darkMode.classList.toggle('hide')
    body.classList.toggle('bgDark')

    time.classList.toggle('lightColor')

    if (coffee.classList.contains('darkBlue')) {
        coffee.classList.remove('darkBlue')
        coffee.classList.add('blue')
    } else {
        coffee.classList.toggle('white')
        coffee.classList.toggle('dark')
    }

    if (rain.classList.contains('darkBlue')) {
        rain.classList.remove('darkBlue')
        rain.classList.add('blue')
    } else {
        rain.classList.toggle('white')
        rain.classList.toggle('dark')
    }

    if (fireplace.classList.contains('darkBlue')) {
        fireplace.classList.remove('darkBlue')
        fireplace.classList.add('blue')
    } else {
        fireplace.classList.toggle('white')
        fireplace.classList.toggle('dark')
    }

    if (florest.classList.contains('darkBlue')) {
        florest.classList.remove('darkBlue')
        florest.classList.add('blue')
    } else {
        florest.classList.toggle('white')
        florest.classList.toggle('dark')
    }
})

coffee.addEventListener('click', () => {

    if(!lightMode.classList.contains('hide')) {
    coffee.classList.toggle('blue')
    coffee.classList.toggle('white')
    fireplace.classList.remove('blue')
    fireplace.classList.remove('white')
    florest.classList.remove('blue')
    florest.classList.remove('white')
    rain.classList.remove('blue')
    rain.classList.remove('white')
        } else {
            coffee.classList.toggle('darkBlue')
            coffee.classList.toggle('dark')
            florest.classList.remove('darkBlue')
            florest.classList.add('dark')
            rain.classList.remove('darkBlue')
            rain.classList.add('dark')
            fireplace.classList.remove('darkBlue')
            fireplace.classList.add('dark')
        }

    coffeeSound.loop = true
    florestSound.pause()
    rainSound.pause()
    fireplaceSound.pause()
    coffeeSound.paused ? coffeeSound.play() : coffeeSound.pause()
})


rain.addEventListener('click', () => {
    if(!lightMode.classList.contains('hide')) {
        rain.classList.toggle('blue')
        rain.classList.toggle('white')
        fireplace.classList.remove('blue')
        fireplace.classList.remove('white')
        florest.classList.remove('blue')
        florest.classList.remove('white')
        coffee.classList.remove('blue')
        coffee.classList.remove('white')
            } else {
                rain.classList.toggle('darkBlue')
                rain.classList.toggle('dark')
                florest.classList.remove('darkBlue')
                florest.classList.add('dark')
                coffee.classList.remove('darkBlue')
                coffee.classList.add('dark')
                fireplace.classList.remove('darkBlue')
                fireplace.classList.add('dark')
            }

    rainSound.loop = true
    coffeeSound.pause()
    florestSound.pause()
    fireplaceSound.pause()
    rainSound.paused ? rainSound.play() : rainSound.pause()
})

fireplace.addEventListener('click', () => {
    if(!lightMode.classList.contains('hide')) {
        fireplace.classList.toggle('blue')
        fireplace.classList.toggle('white')
        coffee.classList.remove('blue')
        coffee.classList.remove('white')
        florest.classList.remove('blue')
        florest.classList.remove('white')
        rain.classList.remove('blue')
        rain.classList.remove('white')
            } else {
                fireplace.classList.toggle('darkBlue')
                fireplace.classList.toggle('dark')
                florest.classList.remove('darkBlue')
                florest.classList.add('dark')
                rain.classList.remove('darkBlue')
                rain.classList.add('dark')
                coffee.classList.remove('darkBlue')
                coffee.classList.add('dark')
            }


    fireplaceSound.loop = true
    coffeeSound.pause()
    florestSound.pause()
    rainSound.pause()
    fireplaceSound.paused ? fireplaceSound.play() : fireplaceSound.pause()
})

florest.addEventListener('click', () => {
    if(!lightMode.classList.contains('hide')) {
        florest.classList.toggle('blue')
        florest.classList.toggle('white')
        fireplace.classList.remove('blue')
        fireplace.classList.remove('white')
        coffee.classList.remove('blue')
        coffee.classList.remove('white')
        rain.classList.remove('blue')
        rain.classList.remove('white')
            } else {
                florest.classList.toggle('darkBlue')
                florest.classList.toggle('dark')
                coffee.classList.remove('darkBlue')
                coffee.classList.add('dark')
                rain.classList.remove('darkBlue')
                rain.classList.add('dark')
                fireplace.classList.remove('darkBlue')
                fireplace.classList.add('dark')
            }


    florestSound.loop = true
    coffeeSound.pause()
    rainSound.pause()
    fireplaceSound.pause()
    florestSound.paused ? florestSound.play() : florestSound.pause()
})
