// ==UserScript==
// @name         Script de Descifrado Avanzado
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ¡Descifra mensajes ocultos!
// @author       Tú
// @match        https://cripto.tiiny.site
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiiny.site
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==
// ==/UserScript==

(function() {
    'use strict';

    // Extraer la clave de cifrado de las letras mayúsculas en el texto
    function obtenerClaveCifrado() {
        const texto = document.body.textContent;
        const letrasMayusculas = texto.match(/[A-Z]/g) || [];
        const clave = letrasMayusculas.join('');
        console.log('Clave del Cifrado corresponde a :', clave);
        return clave || "NoDisponible";
    }

    // Obtener la clave de cifrado
    const claveCifrado = obtenerClaveCifrado();

    // Función para descifrar el contenido
    function descifrarContenido(claveCifrado) {
        const elementosClaseM = document.querySelectorAll('[class*="M"]');
        console.log(`Elementos con clase 'M' encontrados: ${elementosClaseM.length}`);

        elementosClaseM.forEach(elemento => {
            const idCifrado = elemento.id;
            const claveEncriptacion = CryptoJS.enc.Utf8.parse(claveCifrado);

            // Configuración para el descifrado
            const configuracion = {
                mode: CryptoJS.mode.ECB
            };

            // Descifrar el ID
            const idDescifrado = CryptoJS.TripleDES.decrypt(idCifrado, claveEncriptacion, configuracion);
            console.log(`ID: ${elemento.id},el mensaje Descifrado es: ${idDescifrado.toString(CryptoJS.enc.Utf8)}`);
            const textoDescifrado = idDescifrado.toString(CryptoJS.enc.Utf8);
            const elementoH2 = document.createElement('h2');
            elementoH2.textContent = textoDescifrado;
            document.body.appendChild(elementoH2);
        });
    }

    // Ejecutar la función al cargar la página
    descifrarContenido(claveCifrado);
})();
