function ray(){
    fetch('dados.json')
    .then (response => response.json())
    .then(dadosana =>{
        tablet = document.getElementById('destino');

        dadosana.forEach(pesssoa => {

}