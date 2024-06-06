import faker from 'faker';

const mount = (element) => {
  let products = '';
  for (let i = 0; i < 6; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  element.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#div-products'); // try to make really unique name that you can
  // assume that the container team won't use,
  if (el) mount(el); //we are probably in isolation, so run the products generation immediately
}

export { mount };
