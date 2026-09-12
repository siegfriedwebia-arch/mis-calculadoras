// FUNCIÓN PARA LA CALCULADORA DE IVA
function calcularIva(añadir) {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const porcentajeIva = parseFloat(document.getElementById('tipoIva').value);
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, introduce una cantidad válida.");
        return;
    }

    let baseImponible = 0;
    let cuotaIva = 0;
    let total = 0;

    if (añadir) {
        baseImponible = cantidad;
        cuotaIva = baseImponible * (porcentajeIva / 100);
        total = baseImponible + cuotaIva;
    } else {
        total = cantidad;
        baseImponible = total / (1 + (porcentajeIva / 100));
        cuotaIva = total - baseImponible;
    }

    document.getElementById('resBase').innerText = baseImponible.toFixed(2);
    document.getElementById('resIva').innerText = cuotaIva.toFixed(2);
    document.getElementById('resTotal').innerText = total.toFixed(2);

    document.getElementById('resultado').classList.remove('hidden');
}

// FUNCIÓN NUEVA PARA LA CALCULADORA DE PORCENTAJES
function calcularPorcentaje() {
    const porcentaje = parseFloat(document.getElementById('porcentajeNum').value);
    const totalCantidad = parseFloat(document.getElementById('totalNum').value);

    if (isNaN(porcentaje) || isNaN(totalCantidad) || totalCantidad <= 0) {
        alert("Por favor, introduce números válidos.");
        return;
    }

    // Aplicar la fórmula: (Cantidad * Porcentaje) / 100
    const resultadoFin = (totalCantidad * porcentaje) / 100;

    // Mostrar el resultado en pantalla redondeando a 2 decimales
    document.getElementById('resPorcentaje').innerText = resultadoFin.toFixed(2) + " €";
    
    // Hacer visible el recuadro del resultado de porcentajes
    document.getElementById('resultadoPorcentaje').classList.remove('hidden');
}
