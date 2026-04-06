function calcularPromedio() {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);

    let promedio = (n1 + n2 + n3) / 3;

    if (promedio >= 6) {
        document.getElementById("resultado").innerText = "Aprobado ✅ - Promedio: " + promedio.toFixed(2);
    } else {
        document.getElementById("resultado").innerText = "Reprobado ❌ - Promedio: " + promedio.toFixed(2);
    }
}
