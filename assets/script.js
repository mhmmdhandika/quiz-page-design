// if user click a
// change to button wrong
// if user click b
// change to disabled button
// if user click c
// change to another position
// if user click d
// change to correct button

const buttons = document.querySelectorAll('.choice')

buttons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (e.target.classList.contains('a')) {

      const aButton = document.querySelector('.a')
      const aCircle = document.querySelector('.a-circle')
      aButton.classList.add('a-answer')
      aButton.classList.remove('not-selected')
      aButton.classList.add('shake')
      aCircle.classList.add('a-circle-style')
      aCircle.innerText = 'X'

    } else if (e.target.classList.contains('b')) {

      const bButton = document.querySelector('.b')
      const bCircle = document.querySelector('.b-circle')
      bButton.classList.remove('not-selected')
      bButton.classList.add('b-answer')
      bCircle.classList.add('b-circle-style')

    } else if (e.target.classList.contains('c')) {

      const cButton = document.querySelector('.c')
      cButton.classList.add('c-answer')
      let randomPost = Math.floor(Math.random() * 10)
      let top = Math.random()
      top *= 80
      let left = Math.random()
      left *= 80
      cButton.style.position = 'relative'
      if (randomPost <= 5) {
        cButton.style.top = top + 'px'
        cButton.style.left = left + '%'
      } else {
        cButton.style.top = `-${top}px`
        cButton.style.left = `-${left}%`
      }
      // console.log(typeof (cButton))

    } else if (e.target.classList.contains('d')) {

      const dButton = document.querySelector('.d')
      const dCircle = document.querySelector('.d-circle')
      dButton.classList.remove('not-selected')
      dButton.classList.add('d-answer', 'shake')
      dCircle.innerText = '✓'
    }
  })
})