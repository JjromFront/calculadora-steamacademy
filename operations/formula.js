function calcularRaices(a, b, c) {
    const discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [raiz1, raiz2];
    } else if (discriminante === 0) {
        const raiz = -b / (2 * a);
        return [raiz];
    } else {
        return []; // No hay raíces reales
    }
}

exports.general  = calcularRaices;