// 1. FUNCION CALCULADORA DE IVA
function calcularIva(añadir) {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const tipoIva = parseFloat(document.getElementById('tipoIva').value);
    const contenedorResultado = document.getElementById('resultado');

    if (isNaN(cantidad) || cantidad < 0) {
        alert("Por favor, introduce un importe válido.");
        return;
    }

    let base, iva, total;

    if (añadir) {
        base = cantidad;
        iva = (cantidad * tipoIva) / 100;
        total = base + iva;
    } else {
        total = cantidad;
        base = total / (1 + (tipoIva / 100));
        iva = total - base;
    }

    document.getElementById('resBase').innerText = base.toFixed(2);
    document.getElementById('resIva').innerText = iva.toFixed(2);
    document.getElementById('resTotal').innerText = total.toFixed(2);

    contenedorResultado.classList.remove('hidden');
}

// 2. FUNCION CALCULADORA DE PORCENTAJES
function calcularPorcentaje() {
    const porcentajeNum = parseFloat(document.getElementById('porcentajeNum').value);
    const totalNum = parseFloat(document.getElementById('totalNum').value);
    const contenedorResultado = document.getElementById('resultadoPorcentaje');

    if (isNaN(porcentajeNum) || isNaN(totalNum) || porcentajeNum < 0 || totalNum < 0) {
        alert("Por favor, introduce cantidades válidas.");
        return;
    }

    const resultado = (totalNum * porcentajeNum) / 100;

    document.getElementById('resPorcentaje').innerText = resultado.toFixed(2);

    contenedorResultado.classList.remove('hidden');
}

// 3. FUNCION CALCULADORA DE RETENCIÓN DE IRPF
function calcularIrpf() {
    const baseIrpf = parseFloat(document.getElementById('baseIrpf').value);
    const tipoIrpf = parseFloat(document.getElementById('tipoIrpf').value);
    const contenedorResultado = document.getElementById('resultadoIrpf');

    if (isNaN(baseIrpf) || baseIrpf < 0) {
        alert("Por favor, introduce un importe bruto válido.");
        return;
    }

    const retencion = (baseIrpf * tipoIrpf) / 100;
    const neto = baseIrpf - retencion;

    document.getElementById('resRetencionIrpf').innerText = retencion.toFixed(2);
    document.getElementById('resNetoIrpf').innerText = neto.toFixed(2);

    contenedorResultado.classList.remove('hidden');
}

// 4. FUNCION CALCULADORA DE DESCUENTOS
function calcularDescuento() {
    const precioOriginal = parseFloat(document.getElementById('precioOriginal').value);
    const descuento = parseFloat(document.getElementById('porcentajeDescuento').value);
    const contenedorResultado = document.getElementById('resultadoDescuento');

    if (isNaN(precioOriginal) || isNaN(descuento) || precioOriginal < 0 || descuento < 0) {
        alert("Por favor, introduce números válidos en la calculadora de descuentos.");
        return;
    }

    const dineroAhorrado = (precioOriginal * descuento) / 100;
    const precioFinal = precioOriginal - dineroAhorrado;

    document.getElementById('resAhorrado').innerText = dineroAhorrado.toFixed(2);
    document.getElementById('resPrecioFinal').innerText = precioFinal.toFixed(2);
    
    contenedorResultado.classList.remove('hidden');
}

// 5. FUNCION CALCULADORA DE MARGEN DE BENEFICIO
function calcularMargen() {
    const coste = parseFloat(document.getElementById('costeProducto').value);
    const margen = parseFloat(document.getElementById('margenDeseado').value);
    const contenedorResultado = document.getElementById('resultadoMargen');

    if (isNaN(coste) || isNaN(margen) || coste < 0 || margen < 0 || margen >= 100) {
        alert("Por favor, introduce números válidos. El margen debe ser menor al 100%.");
        return;
    }

    // Fórmula financiera del margen sobre precio de venta: PV = Coste / (1 - Margen)
    const precioVenta = coste / (1 - (margen / 100));
    const beneficioNeto = precioVenta - coste;

    document.getElementById('resBeneficioNeto').innerText = beneficioNeto.toFixed(2);
    document.getElementById('resPrecioVenta').innerText = precioVenta.toFixed(2);
    
    contenedorResultado.classList.remove('hidden');
}
