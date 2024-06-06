import style from './index.scss'
import _ from 'lodash'
import './ClearButton'
import logo from './assets/logo.png'
import './assets/fonts/Redressed-Regular.ttf'

const btn = document.getElementById('update-button')
const logoEl = document.getElementById('logo')

btn.addEventListener('click', function () {
  const el = document.getElementById('header')
  el.innerHTML = 'this is updated version'
  el.classList.add([style.header])

  const listEl = document.getElementById('shopping-list')
  const shoppingItems = ['Apple', 'orange', 'banana']

  _.forEach(shoppingItems, function (item) {
    const element = document.createElement('li')
    element.innerHTML = item
    listEl.appendChild(element)
  })
})

btn.classList.add([style.butttonScoped])
logoEl.src = logo
