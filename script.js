// Seleciona o botão e a barra lateral do HTML usando os IDs
const btnToggle = document.getElementById('btn-mostrar');
const sidebar = document.getElementById('sidebar');

// Adiciona o evento de clique ao botão
btnToggle.addEventListener('click', () => {
   
    sidebar.classList.toggle('oculto');
});
// Teste de linha
