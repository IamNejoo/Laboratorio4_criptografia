// ==UserScript==
// @name         cambiar pagina
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  CrytpoJS
// @author       You
// @match        https://cripto.tiiny.site
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiiny.site
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==

// ==/UserScript==

(function() {
    'use strict';
    var nuevo = 'Karla encontró varias ilustraciones, conocidas e inusuales, narrando sagas antiguas. Entonces sin embargo, la joven nunca sabía que cada historia oculta alguna Verdad. Ignorando que Karla tiene necedades, saboreaba cada palabra, cada historia. No observando los detalles intrincados, nunca sospechando que cada línea, cada nota, susurraba Secretos antiguos Karla encontró varias ilustraciones, conocidas e inusuales, narrando sagas antiguas. Entonces sin embargo, la joven nunca sabía que cada historia oculta alguna Verdad. Ignorando que Karla tiene necedades, saboreaba cada palabra, cada historia. No observando los detalles intrincados, nunca sospechando que cada línea, cada nota, susurraba Secretos antiguos Karla encontró varias ilustraciones, conocidas e inusuales, narrando sagas antiguas. Entonces sin embargo, la joven nunca sabía que cada historia oculta alguna Verdad. Ignorando que Karla tiene necedades, saboreaba cada palabra, cada historia. No observando los detalles intrincados, nunca sospechando que cada línea, cada nota, susurraba Secretos antiguos. Karla encontró varias ilustraciones, conocidas e inusuales, narrando sagas antiguas. Entonces sin embargo, la joven nunca sabía que cada historia oculta alguna.';
    var ids_nuevos = ['M41mGSaFGok=', 'N6BBnoZu/3A=', 'FH4a+A7d+kE=', 'XyshFz99Wxg=', 'knQuopaN97k=', 'ZL8Cf8zFOg8=', 'PlLpUajPXYw='];

    // Actualización del párrafo
    var parrafo = document.querySelector('p');
    if (parrafo) {
        parrafo.textContent = nuevo;
    }

    // Actualización de los IDs de los divs
    document.querySelectorAll('div[class^="M"]').forEach((div, index) => {
        if (index < ids_nuevos.length) {
            div.id = ids_nuevos[index];
        }
    });

    // Adición de un nuevo div si es necesario
    var ultimoDiv = document.querySelector('div[class="M7"]');
    if (!ultimoDiv) {
        ultimoDiv = document.createElement('div');
        ultimoDiv.className = 'M6';
        ultimoDiv.id = ids_nuevos[ids_nuevos.length - 1];
        document.body.appendChild(ultimoDiv);
    }


})();