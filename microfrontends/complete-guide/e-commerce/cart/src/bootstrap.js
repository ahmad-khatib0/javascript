import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>you have ${faker.random.number()} in your cart </div>`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-div');
  if (el) mount(el);
}

export { mount };
