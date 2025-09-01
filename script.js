let storyText = document.getElementById('story');
let choice1Btn = document.getElementById('choice1');
let choice2Btn = document.getElementById('choice2');
let restartBtn = document.getElementById('restartBtn');

let choices = {
    initial: {
        text: "Você se encontra em uma sala misteriosa, com duas portas à sua frente.",
        option1: "Porta 1: Segredos do Tempo",
        option2: "Porta 2: Mistérios da Mente",
        next: ['porta1', 'porta2']
    },
    porta1: {
        text: "Você escolheu a Porta 1. Agora está em um corredor cheio de relógios. À frente, há duas portas.",
        option1: "Porta A: O Relógio Derretido",
        option2: "Porta B: O Relógio com Ponteiros em Movimento",
        next: ['portaA', 'portaB']
    },
    porta2: {
        text: "Você escolheu a Porta 2. Você está em uma biblioteca infinita. Há dois livros à sua frente.",
        option1: "Livro A: O Livro do Conhecimento Proibido",
        option2: "Livro B: O Livro dos Sonhos",
        next: ['livroA', 'livroB']
    },
    portaA: {
        text: "Você entrou na Porta A. O tempo está distorcido e você deve encontrar a chave do tempo.",
        option1: "Procurar a chave no campo",
        option2: "Voltar e tentar outra porta",
        next: ['chave', 'voltar']
    },
    portaB: {
        text: "Você entrou na Porta B. O tempo acelera e os objetos ao seu redor começam a se desintegrar.",
        option1: "Fugir da distorção do tempo",
        option2: "Ficar e explorar mais",
        next: ['voltar', 'voltar']
    },
    livroA: {
        text: "Você abriu o Livro A. Seu conhecimento aumentou, mas sua sanidade está sendo desafiada.",
        option1: "Fechar o livro e escapar",
        option2: "Continuar lendo",
        next: ['voltar', 'voltar']
    },
    livroB: {
        text: "Você abriu o Livro B. Os sonhos começam a tomar forma e você perde a noção da realidade.",
        option1: "Despertar e voltar",
        option2: "Explorar mais profundamente",
        next: ['voltar', 'voltar']
    },
    chave: {
        text: "Você encontrou a chave, mas o tempo está se esgotando! Você precisa sair rápido.",
        option1: "Escapar com a chave",
        option2: "Ficar e continuar explorando",
        next: ['voltar', 'voltar']
    },
    voltar: {
        text: "Você decide voltar e tentar outra escolha.",
        option1: "Voltar ao início",
        option2: "Explorar as portas novamente",
        next: ['initial', 'initial']
    }
};

let currentState = 'initial';

function updateStory() {
    let state = choices[currentState];
    storyText.innerText = state.text;
    choice1Btn.innerText = state.option1;
    choice2Btn.innerText = state.option2;

    if (currentState === 'initial' || currentState === 'porta1' || currentState === 'porta2') {
        restartBtn.style.display = 'none';
    } else {
        restartBtn.style.display = 'block';
    }
}

function makeChoice(choice) {
    let state = choices[currentState];
    currentState = state.next[choice - 1];
    updateStory();
}

function restartGame() {
    currentState = 'initial';
    updateStory();
}

updateStory();
