import _ from 'lodash'

document.getElementById('update-button').addEventListener('click', function () {
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
