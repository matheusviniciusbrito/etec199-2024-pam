const form = document.getElementById('formulario');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nLados = parseInt(document.getElementById('inputLados').value);

    if (isNaN(nLados) || nLados < 3) {
      alert("Por favor, insira um número válido de lados (mínimo 3).");
    } else {

      let figura, perimetroFormula, areaFormula, imgPath;

      if (nLados === 3) {
          figura = "Triângulo";
          perimetroFormula = "P = 3 * lado";
          areaFormula = "A = (base * altura) / 2";
      } else if (nLados === 4) {
          figura = "Quadrado";
          perimetroFormula = "P = 4 * lado";
          areaFormula = "A = lado * lado";
      } else if (nLados === 5) {
          figura = "Pentágono";
          perimetroFormula = "P = 5 * lado";
          areaFormula = "A = ";
      } else if (nLados === 6) {
          figura = "Hexágono";
          perimetroFormula = "P = 6 * lado";
          areaFormula = "A = ";
      } else if (nLados === 7) {
          figura = "Heptágono";
          perimetroFormula = "P = 7 * lado";
          areaFormula = "A = ";
      } else if (nLados === 8) {
          figura = "Octógono";
          perimetroFormula = "P = 8 * lado";
          areaFormula = "A = ";
      } else if (nLados === 9) {
          figura = "Eneágono";
          perimetroFormula = "P = 9 * lado";
          areaFormula = "A = ";
      } else if (nLados === 10) {
          figura = "Decágono";
          perimetroFormula = "P = 10 * lado";
          areaFormula = "A = ";
      } else {
          figura = `Polígono de ${nLados} lados`;
          perimetroFormula = `P = ${nLados} * lado`;
          areaFormula = "A = ?";
      }

      imgPath = `./img/${nLados - 2}.png`;

      document.getElementById('output').innerHTML = `
          <h2>${figura}</h2>
          <p>Fórmula do Perímetro: ${perimetroFormula}</p>
          <p>Fórmula da Área: ${areaFormula}</p>
          <img src="${imgPath}" alt="Imagem de um ${figura}">
      `;
    }
  }
);
