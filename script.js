document.addEventListener("DOMContentLoaded", function () {
    // URL del servicio web
    const apiUrl = "https://dolar.melizeche.com/api/1.0/";

    // Elemento donde se mostrarán los resultados
    const resultContainer = document.getElementById("result-container");

    // Realizar la solicitud al servicio web
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extraer los resultados
            const dolarpy = data.dolarpy;
            const bcp = dolarpy.bcp;
            const bonanza = dolarpy.bonanza;
            const cambioschaco = dolarpy.cambioschaco;

            // Crear el HTML para mostrar los resultados
            const resultHTML = `
                <div class="exchange">
                    <h2>BCP</h2>
                    <p>Compra: ${bcp.compra}</p>
                    <p>Venta: ${bcp.venta}</p>
                </div>
                <div class="exchange">
                    <h2>Bonanza</h2>
                    <p>Compra: ${bonanza.compra}</p>
                    <p>Venta: ${bonanza.venta}</p>
                </div>
                <div class="exchange">
                    <h2>Cambios Chaco</h2>
                    <p>Compra: ${cambioschaco.compra}</p>
                    <p>Venta: ${cambioschaco.venta}</p>
                </div>
            `;

            // Mostrar los resultados en la página
            resultContainer.innerHTML = resultHTML;
        })
        .catch(error => {
            // Manejar errores de la solicitud
            console.error("Error al obtener los datos:", error);
            resultContainer.innerHTML = "<p>Error al obtener los datos. Por favor, intenta nuevamente.</p>";
        });
});
