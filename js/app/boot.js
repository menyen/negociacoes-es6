'use strict';

System.register(['./controllers/NegociacaoController.js', './polyfill/fetch.js'], function (_export, _context) {
  "use strict";

  var singleton, negociacaoController;
  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      singleton = _controllersNegociacaoControllerJs.singleton;
    }, function (_polyfillFetchJs) {}],
    execute: function () {
      negociacaoController = singleton();


      document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
      document.querySelector('[type=button').onclick = negociacaoController.apaga.bind(negociacaoController);
    }
  };
});
//# sourceMappingURL=boot.js.map