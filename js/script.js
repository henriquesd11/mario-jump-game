// pega o conteudo da classe .mario
const mario = document.querySelector('.mario');
// pega o conteudo da classe .pipe
const pipe = document.querySelector('.pipe');

const cloud = document.querySelector('.clouds');

const score = document.querySelector('.score');

const animationScore = document.querySelector('.animation-score');

// função para pular
const jump = () => {
    // teste commit
    mario.classList.add('jump');
    setTimeout(() => {
        // remove a classe jump
        mario.classList.remove('jump');
    }, 500); // 500 milisegundos mesmo tempo que a animação do mario pulando é executada
}

// cria um loop infinito para verificar se o mario colidiu com o pipe
const loop = setInterval(() => {
    let valueScore = parseInt(score.innerHTML);
    score.innerHTML = valueScore + 1;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudsPosition}px`;

        score.innerHTML = `Game Over <br> Seu score: <u>${valueScore}</u>`

        animationScore.style.display = 'none';

        clearInterval(loop);
    }
}, 10) // 10 milisegundos

// executa o evento de pulo quando o usuário aperta qualquer tecla
document.addEventListener('keydown', (event) => {
    if (event.key === 'w' || event.key === 'ArrowUp') {
        jump();
    }
});

