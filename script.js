const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultMessage = document.getElementById('result-message');

guessButton.addEventListener('click', checkGuess);

function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultMessage.textContent = 'Por favor, digite um número válido entre 1 e 100.';
  } else if (userGuess === randomNumber) {
    resultMessage.textContent = 'Parabéns! Você acertou o número.';
  } else if (userGuess < randomNumber) {
    setTimeout(() => {
      resultMessage.textContent = 'Tente um número maior.';
    }, 1000); // Atraso de 1 segundo (1000 milissegundos)
  } else {
    setTimeout(() => {
      resultMessage.textContent = 'Tente um número menor.';
    }, 1000); // Atraso de 1 segundo (1000 milissegundos)
  }
}

let clickCount = 0;
let timer; // Variável para armazenar o timer

document.getElementById('click-button').addEventListener('click', () => {
  clickCount++;
  document.getElementById('click-count').textContent = `Clicou ${clickCount} vezes!`;
  resetTimer(); // Resetar o timer a cada clique
});

function startTimer() {
  timer = setTimeout(() => {
    // Reiniciar o jogo após 10 segundos
    resetClickGame();
  }, 5000); // 10 segundos em milissegundos
}

function resetTimer() {
  clearTimeout(timer); // Limpar o timer atual
  startTimer(); // Iniciar um novo timer
}

// Restante do código...

// Exemplo de reiniciar o jogo de clicar
function resetClickGame() {
  clickCount = 0;
  document.getElementById('click-count').textContent = 'Clique no botão o máximo de vezes possível em 5 segundos.';
}

// Adicione mais funções para outros jogos ou interatividades

// Exemplo de chamar a reinicialização do jogo de clicar
document.getElementById('reset-click-button').addEventListener('click', resetClickGame);

// Exemplo de chamar a reinicialização do jogo de clicar
// resetClickGame();



  function showNoVacancyModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  // Fechar o modal se o usuário clicar fora dele
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  
  function showNoVacancyModal1() {
    const modal = document.getElementById('modal1');
    modal.style.display = 'block';
  }
  
  function closeModal1() {
    const modal = document.getElementById('modal1');
    modal.style.display = 'none';
  }
  
  // Fechar o modal se o usuário clicar fora dele
  window.onclick = function(event) {
    const modal = document.getElementById('modal1');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

// Função para contar e exibir o total de notícias
function atualizarContadorNoticias() {
    const totalNoticias = document.querySelectorAll('.noticia').length;
    document.getElementById('total-noticias').textContent = totalNoticias;
  }
  
  // Chame a função para inicializar o contador ao carregar a página
  window.addEventListener('load', atualizarContadorNoticias);
  
  // Exemplo: se você adicionar ou remover notícias dinamicamente, chame esta função
  // após a modificação do DOM para atualizar o contador
  // Exemplo: após adicionar uma nova notícia ao DOM
  // atualizarContadorNoticias();
  
  function watchNow(videoFile) {
    alert('Você está prestes a assistir: ' + filme1.mp4);
  }
  