const App = () => {
    // Dark theme
    const header = document.querySelector('.headet__main')
    const fullTheme = document.querySelector('.section_theme')
    const theme = document.querySelector('.section_theme__background')
    const themeCircle = document.querySelector('.section_theme__circle')
    const darkness = document.querySelectorAll('.darkness')
    const arrow1 = document.querySelector('.arrw_slid1')
    const arrow2 = document.querySelector('.arrw_slid2')
    const item1 = document.querySelector('.item1')
    const item2 = document.querySelector('.item2')
    const item3 = document.querySelector('.item3')
    const item4 = document.querySelector('.item4')


    
    
    // Dark theme state
    const state = {
        flag: false,
        dayNight: 'day',
        counter: 2,
    }

    let { flag, dayNight, counter } = state
    // dark theme work

    const liveTheme = document.querySelector('.online__section')
    let myLocalStorage = window.localStorage
    let setDarkTheme = (darkTheme) => {
        if (darkTheme === 'false' || !darkTheme) {
            theme.classList.add('active__theme')
            themeCircle.classList.add('active__circle')
            header.classList.add('active-night')
            // headerFull.classList.add('active-night')
            liveTheme.classList.add('slight__dark')
            darkness.forEach(item => {
                item.classList.add('dark__dark')
            })
            
        } else if (darkTheme === 'true') {
            theme.classList.remove('active__theme')
            themeCircle.classList.remove('active__circle')
            header.classList.remove('active-night')
            // headerFull.classList.remove('active-night')
            liveTheme.classList.remove('slight__dark')
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

    
    arrow1.addEventListener('click', (e) => {
        if (counter == 1) {
            counter += 0
        } else {
            counter -= 1
        }
        if (counter == 1) {
            item1.classList.add('active__item')
            item2.classList.remove('active__item')
        } else if (counter == 2) {
            item1.classList.remove('active__item')
            item2.classList.add('active__item')
            item3.classList.remove('active__item')
        } else if (counter == 3) {
            item2.classList.remove('active__item')
            item3.classList.add('active__item')
            item4.classList.remove('active__item')
        } else if (counter == 4) {
            item3.classList.remove('active__item')
            item4.classList.add('active__item')
        }
    })
    arrow2.addEventListener('click', (e) => {
        if (counter == 4) {
            counter += 0
        } else {
            counter +=1
        }
        if (counter == 1) {
            item1.classList.add('active__item')
            item2.classList.remove('active__item')
        } else if (counter == 2) {
            item1.classList.remove('active__item')
            item2.classList.add('active__item')
            item3.classList.remove('active__item')
        } else if (counter == 3) {
            item2.classList.remove('active__item')
            item3.classList.add('active__item')
            item4.classList.remove('active__item')
        } else if (counter == 4) {
            item3.classList.remove('active__item')
            item4.classList.add('active__item')
        }
    })
    item1.addEventListener('click', (e) => {
        item1.classList.add('active__item')
        item2.classList.remove('active__item')
        item3.classList.remove('active__item')
        item4.classList.remove('active__item')
        counter = 1
    })
    item2.addEventListener('click', (e) => {
        item1.classList.remove('active__item')
        item2.classList.add('active__item')
        item3.classList.remove('active__item')
        item4.classList.remove('active__item')
        counter = 2
    })
    item3.addEventListener('click', (e) => {
        item1.classList.remove('active__item')
        item2.classList.remove('active__item')
        item3.classList.add('active__item')
        item4.classList.remove('active__item')
        counter = 3
    })
    item4.addEventListener('click', (e) => {
        item1.classList.remove('active__item')
        item2.classList.remove('active__item')
        item3.classList.remove('active__item')
        item4.classList.add('active__item')
        counter = 4
    })

}
document.addEventListener('DOMContentLoaded', App)
