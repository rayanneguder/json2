function ray() {
    fetch('dados.json')
    .then (response => response.json())
    .then(dadinho => {
        tablet = document.getElementById('destino');

        dadinho.forEach(pessoa => {
            let linha = document.createElement('tr');
          
          linha.innerHTML =`
          <td> ${pessoa.nome} </td>
          <td> ${pessoa.idade} </td>
          <td> ${pessoa.sexo} </td>
          <td> ${pessoa.cidade} </td>
          <button type="button" onclick="ray()">oi</button>
          `
          tablet.appendChild(linha);
            
        });

    })

}