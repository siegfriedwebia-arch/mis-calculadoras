function calcularIva(añadir) {
    // 1. Obtener los valores que puso el usuario
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const porcentajeIva = parseFloat(document.getElementById('tipoIva').value);
    
    // Validar si el usuario no metió ningún número
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, introduce una cantidad válida.");
        return;
    }

    let baseImponible = 0;
    let cuotaIva = 0;
    let total = 0;

    // 2. Hacer las operaciones matemáticas
    if (añadir) {
        // Añadir IVA al precio base
        baseImponible = cantidad;
        cuotaIva = baseImponible * (porcentajeIva / 100);
        total = baseImponible + cuotaIva;
    } else {
        // Desglosar (Quitar) el IVA del precio total
        total = cantidad;
        baseImponible = total / (1 + (porcentajeIva / 100));
        cuotaIva = total - baseImponible;
    }

    // 3. Mostrar los resultados en la pantalla redondeando a 2 decimales
    document.getElementById('resBase').innerText = baseImponible.toFixed(2);
    document.getElementById('resIva').innerText = cuotaIva.toFixed(2);
    document.getElementById('resTotal').innerText = total.toFixed(2);

    // Hacer visible el recuadro de resultados
    document.getElementById('resultado').classList.remove('hidden');
}
