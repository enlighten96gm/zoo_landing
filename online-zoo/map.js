const App = () => {
    // Dark theme
    const header = document.querySelector('.headet__main')
    const fullTheme = document.querySelector('.section_theme')
    const theme = document.querySelector('.section_theme__background')
    const themeCircle = document.querySelector('.section_theme__circle')
    const darkness = document.querySelectorAll('.darkness')
    const mapDark = document.querySelector('.map__section_scroll')
    const myCarousel = document.querySelector('.scroll__carousel')
    const myCarouselInput = document.querySelector('.zoo-pets__inside')
    const myCarouselNumber = document.querySelector('.carousel__input_number1')
    const planetImg = document.querySelectorAll('.planet__img')
    const samuraj = document.querySelectorAll('.samurai')
    const buttonToWatch = document.querySelector('.my-byton')
    const leftButton = document.querySelector('.arrw_slid1')
    const rightButton = document.querySelector('.arrw_slid2')
    let number = myCarouselInput.value
    console.log(samuraj);

// Carousel
    myCarouselInput.addEventListener('input', (e) => {
        number = Number(e.target.value)
        console.log(number);
        myCarouselNumber.innerHTML = `0${e.target.value}/`
        samuraj.forEach(item => item.classList.remove('active__item'))
        samuraj[Number(e.target.value) - 1].classList.add('active__item')
        if (Number(e.target.value) === 1) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            buttonToWatch.href = './live2.html'
            planetImg[0].classList.add('active__img')
        } else if (Number(e.target.value) === 2) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            planetImg[3].classList.add('active__img')
            buttonToWatch.href = './live.html'
        } else if (Number(e.target.value) === 3) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            planetImg[2].classList.add('active__img')
            buttonToWatch.href = './live4.html'
        } else if (Number(e.target.value) === 4) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            planetImg[1].classList.add('active__img')
            buttonToWatch.href = './live3.html'
        } else {
            planetImg.forEach(item => item.classList.remove('active__img'))
        }
    })
//  Carousel Buttons
    rightButton.addEventListener('click', (e) => {
        if (number === 8) { 
            number = 0
        }
        samuraj.forEach(item => item.classList.remove('active__item'))
        samuraj[number].classList.add('active__item')
        number++
        if (number > 8) { 
            number = 1
        }
        myCarouselNumber.innerHTML = `0${number}/`
        myCarouselInput.value = number
        console.log(number);
        if (number  === 1) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            buttonToWatch.href = './live2.html'
            planetImg[0].classList.add('active__img')
        } else if (number  === 2) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            planetImg[3].classList.add('active__img')
            buttonToWatch.href = './live.html'
        } else if (number  === 3) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            planetImg[2].classList.add('active__img')
            buttonToWatch.href = './live.html'
        } else if (number  === 4) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            planetImg[1].classList.add('active__img')
            buttonToWatch.href = './live.html'
        }
    })
    leftButton.addEventListener('click', (e) => {
        if (number === 1) {
            number = 9
        }
        number--
        samuraj.forEach(item => item.classList.remove('active__item'))
        samuraj[number - 1].classList.add('active__item')
        if (number < 1) {
            number = 8
        }
        myCarouselNumber.innerHTML = `0${number}/`
        myCarouselInput.value = number
        console.log(number);
        if (number  === 1) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            buttonToWatch.href = './live2.html'
            planetImg[0].classList.add('active__img')
        } else if (number  === 2) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            planetImg[3].classList.add('active__img')
            buttonToWatch.href = './live.html'
        } else if (number  === 3) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            planetImg[2].classList.add('active__img')
            buttonToWatch.href = './live.html'
        } else if (number  === 4) {
            planetImg.forEach(item => item.classList.remove('active__img'))
            planetImg[1].classList.add('active__img')
            buttonToWatch.href = './live.html'
        }
    })
// Carousel animals
    
    // Dark theme state
    const state = {
        flag: false,
        dayNight: 'day'
    }

    let { flag, dayNight } = state
    // dark theme work

    let myLocalStorage = window.localStorage
    let setDarkTheme = (darkTheme) => {
        if (darkTheme === 'false' || !darkTheme) {
            theme.classList.add('active__theme')
            themeCircle.classList.add('active__circle')
            header.classList.add('active-night')
            mapDark.classList.add('slight__dark')
            darkness.forEach(item => {
                item.classList.add('dark__dark')
            })
            
        } else if (darkTheme === 'true') {
            theme.classList.remove('active__theme')
            themeCircle.classList.remove('active__circle')
            header.classList.remove('active-night')
            mapDark.classList.remove('slight__dark')
            darkness.forEach(item => {
                item.classList.remove('dark__dark')
            })
        }
    }
    setDarkTheme(myLocalStorage.getItem('darkTheme'))

    let setEverythingDark = () => {
        
        if (myLocalStorage.getItem('darkTheme') == 'true') {
            myLocalStorage.setItem('darkTheme', false)
            setDarkTheme(myLocalStorage.getItem('darkTheme'))
            console.log(myLocalStorage);
          } else if (myLocalStorage.getItem('darkTheme') == 'false' || !myLocalStorage.getItem('darkTheme')) {
            console.log('kek2');
            myLocalStorage.setItem('darkTheme', true)
            setDarkTheme(myLocalStorage.getItem('darkTheme'))
            console.log(myLocalStorage);
          }
    }

    fullTheme.addEventListener('click', setEverythingDark) 

}
document.addEventListener('DOMContentLoaded', App)
