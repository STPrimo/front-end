function calcularChurrasco() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carne = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    const resultado = `
        <p><strong>Carne bovina:</strong> ${carne / 1000} kg</p>
        <p><strong>Frango:</strong> ${frango / 1000} kg</p>
        <p><strong>Linguiça:</strong> ${linguica / 1000} kg</p>
        <p><strong>Refrigerante:</strong> ${refrigerante / 1000} L</p>
        <p><strong>Cerveja:</strong> ${cerveja / 1000} L</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}