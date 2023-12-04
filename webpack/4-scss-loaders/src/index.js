import style from './index.scss'
import _ from 'lodash'
import './ClearButton'

const btn = document.getElementById('update-button')

btn.addEventListener('click', function () {
  const el = document.getElementById('header')
  el.innerHTML = 'this is updated version'

  const listEl = document.getElementById('shopping-list')
  const shoppingItems = ['Apple', 'orange', 'banana']

  _.forEach(shoppingItems, function (item) {
    const element = document.createElement('li')
    element.innerHTML = item
    listEl.appendChild(element)
  })
})

btn.classList.add([style.button]) // this one will throw an error, because we made  the button
// css class global, and here we are trying to apply it by the scoped way, so this won't work
