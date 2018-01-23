import {singleton} from './controllers/NegociacaoController.js';
import {} from './polyfill/fetch.js';

var negociacaoController = singleton();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('[type=button').onclick = negociacaoController.apaga.bind(negociacaoController);