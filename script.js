// 1. FUNCIÓN PARA LA CALCULADORA DE IVA
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

// 2. FUNCIÓN PARA LA CALCULADORA DE PORCENTAJES
function calcularPorcentaje() {
    const porcentaje = parseFloat(document.getElementById('porcentajeNum').value);
    const totalCantidad = parseFloat(document.getElementById('totalNum').value);

    if (isNaN(porcentaje) || isNaN(totalCantidad) || totalCantidad <= 0) {
        alert("Por favor, introduce números válidos.");
        return;
    }

    const resultadoFin = (totalCantidad * porcentaje) / 100;
    document.getElementById('resPorcentaje').innerText = resultadoFin.toFixed(2) + " €";
    document.getElementById('resultadoPorcentaje').classList.remove('hidden');
}

// 3. NUEVA FUNCIÓN PARA LA CALCULADORA DE IRPF
function calcularIrpf() {
    const base = parseFloat(document.getElementById('baseIrpf').value);
    const porcentajeIrpf = parseFloat(document.getElementById('tipoIrpf').value);

    if (isNaN(base) || base <= 0) {
        alert("Por favor, introduce un importe bruto válido.");
        return;
    }

    // Calcular cuánto se queda Hacienda
    const retencion = base * (porcentajeIrpf / 100);
    // Calcular cuánto le queda al usuario en limpio
    const neto = base - retencion;

    // Mostrar los datos en la pantalla
    document.getElementById('resRetencionIrpf').innerText = retencion.toFixed(2);
    document.getElementById('resNetoIrpf').innerText = neto.toFixed(2);
    
    // Quitar la clase hidden para que se vea el recuadro azul de resultados
    document.getElementById('resultadoIrpf').classList.remove('hidden');
}
