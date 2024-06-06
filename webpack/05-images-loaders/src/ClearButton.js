import style from './ClearButton.scss'

const el = document.createElement('button')

el.innerHTML = 'Clear'
el.classList.add([style.button]) // scoped: this style will be added to the desired element only
el.classList.add(['button']) // global style, added by :global(.button) { .... }

el.addEventListener('click', () => {
  console.log('cleared')
})

document.body.appendChild(el)
