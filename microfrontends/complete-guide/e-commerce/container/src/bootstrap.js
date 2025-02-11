import { mount as productsMount } from 'products/ProductsIndex'; //refers to the index file in products src
import { mount as cartMount } from 'cart/CartShow';

console.log('container');

productsMount(document.querySelector('#div-products-container-team'));
cartMount(document.querySelector('#my-cart'));
