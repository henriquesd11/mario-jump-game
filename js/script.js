// pega o conteudo da classe .mario
const mario = document.querySelector('.mario');
// pega o conteudo da classe .pipe
const pipe = document.querySelector('.pipe');

// função para pular
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        // remove a classe jump
        mario.classList.remove('jump');
    }, 500); // 500 milisegundos mesmo tempo que a animação do mario pulando é executada
}

// cria um loop infinito para verificar se o mario colidiu com o pipe
const loop = setInterval(() => {
    // pega a posição do pipe
    const pipePosition = pipe.offsetLeft;
    if (pipePosition <= 120) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }
}, 10) // 10 milisegundos

// executa o evento de pulo quando o usuário aperta qualquer tecla
document.addEventListener('keydown', jump);