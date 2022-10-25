const primeiroDigito = document.querySelector('.primeiro-digito')
const aumentarPrimeiroDigito = document.querySelector('.aumentar1')
const diminuirPrimeiroDigito = document.querySelector('.diminuir1')
const segundoDigito = document.querySelector('.segundo-digito')
const aumentarSegundoDigito = document.querySelector('.aumentar2')
const diminuirSegundoDigito = document.querySelector('.diminuir2')
const terceiroDigito = document.querySelector('.terceiro-digito')
const aumentarTerceiroDigito = document.querySelector('.aumentar3')
const diminuirTerceiroDigito = document.querySelector('.diminuir3')
const quartoDigito = document.querySelector('.quarto-digito')
const aumentarQuartoDigito = document.querySelector('.aumentar4')
const diminuirQuartoDigito = document.querySelector('.diminuir4')
const quintoDigito = document.querySelector('.quinto-digito')
const aumentarQuintoDigito = document.querySelector('.aumentar5')
const diminuirQuintoDigito = document.querySelector('.diminuir5')
const sextoDigito = document.querySelector('.sexto-digito')
const aumentarSextoDigito = document.querySelector('.aumentar6')
const diminuirSextoDigito = document.querySelector('.diminuir6')
const botaoConferir = document.querySelector('.conferir')
const fotoCadeado = document.querySelector('img')
const portaCadeado = document.querySelector('.porta-cadeado')
const portaMensagem = document.querySelector('.mensagem')
const mensagemResposta = document.querySelector('.mensagem-resposta')
const receberPremio = document.querySelector('.premio')

let primeiroDigitoAtual = 0
let segundoDigitoAtual = 0
let terceiroDigitoAtual = 0
let quartoDigitoAtual = 0
let quintoDigitoAtual = 0
let sextoDigitoAtual = 0
let conferir = false;
let contadorDeCliques = 0;

function primeiroDigitoBotaoAumentar(callback) {
    if (primeiroDigitoAtual === 9) {
        primeiroDigito.textContent = '0'
        primeiroDigitoAtual = 0
    } else {
        primeiroDigitoAtual++
        callback()
    }
}

function primeiroDigitoBotaoDiminuir(callback) {
    if (primeiroDigitoAtual === 0) {
        primeiroDigito.textContent = '9'
        primeiroDigitoAtual = 9
    } else {
        primeiroDigitoAtual--
        callback()
    }
}

function segundoDigitoBotaoAumentar(callback) {
    if (segundoDigitoAtual === 9) {
        segundoDigito.textContent = '0'
        segundoDigitoAtual = 0
    } else {
        segundoDigitoAtual++
        callback()
    }
}

function segundoDigitoBotaoDiminuir(callback) {
    if (segundoDigitoAtual === 0) {
        segundoDigito.textContent = '9'
        segundoDigitoAtual = 9
    } else {
        segundoDigitoAtual--
        callback()
    }
}

function terceiroDigitoBotaoAumentar(callback) {
    if (terceiroDigitoAtual === 9) {
        terceiroDigito.textContent = '0'
        terceiroDigitoAtual = 0
    } else {
        terceiroDigitoAtual++
        callback()
    }
}

function terceiroDigitoBotaoDiminuir(callback) {
    if (terceiroDigitoAtual === 0) {
        terceiroDigito.textContent = '9'
        terceiroDigitoAtual = 9
    } else {
        terceiroDigitoAtual--
        callback()
    }
}

function quartoDigitoBotaoAumentar(callback) {
    if (quartoDigitoAtual === 9) {
        quartoDigito.textContent = '0'
        quartoDigitoAtual = 0
    } else {
        quartoDigitoAtual++
        callback()
    }
}

function quartoDigitoBotaoDiminuir(callback) {
    if (quartoDigitoAtual === 0) {
        quartoDigito.textContent = '9'
        quartoDigitoAtual = 9
    } else {
        quartoDigitoAtual--
        callback()
    }
}

function quintoDigitoBotaoAumentar(callback) {
    if (quintoDigitoAtual === 9) {
        quintoDigito.textContent = '0'
        quintoDigitoAtual = 0
    } else {
        quintoDigitoAtual++
        callback()
    }
}

function quintoDigitoBotaoDiminuir(callback) {
    if (quintoDigitoAtual === 0) {
        quintoDigito.textContent = '9'
        quintoDigitoAtual = 9
    } else {
        quintoDigitoAtual--
        callback()
    }
}

function sextoDigitoBotaoAumentar(callback) {
    if (sextoDigitoAtual === 9) {
        sextoDigito.textContent = '0'
        sextoDigitoAtual = 0
    } else {
        sextoDigitoAtual++
        callback()
    }
}

function sextoDigitoBotaoDiminuir(callback) {
    if (sextoDigitoAtual === 0) {
        sextoDigito.textContent = '9'
        sextoDigitoAtual = 9
    } else {
        sextoDigitoAtual--
        callback()
    }
}


function mostrarPrimeiroDigito() {
    primeiroDigito.textContent = `${primeiroDigitoAtual}`
}

function mostrarSegundoDigito() {
    segundoDigito.textContent = `${segundoDigitoAtual}`
}

function mostrarTerceiroDigito() {
    terceiroDigito.textContent = `${terceiroDigitoAtual}`
}

function mostrarQuartoDigito() {
    quartoDigito.textContent = `${quartoDigitoAtual}`
}

function mostrarQuintoDigito() {
    quintoDigito.textContent = `${quintoDigitoAtual}`
}

function mostrarSextoDigito() {
    sextoDigito.textContent = `${sextoDigitoAtual}`
}

aumentarPrimeiroDigito.onclick = () => primeiroDigitoBotaoAumentar(mostrarPrimeiroDigito)
diminuirPrimeiroDigito.onclick = () => primeiroDigitoBotaoDiminuir(mostrarPrimeiroDigito)
aumentarSegundoDigito.onclick = () => segundoDigitoBotaoAumentar(mostrarSegundoDigito)
diminuirSegundoDigito.onclick = () => segundoDigitoBotaoDiminuir(mostrarSegundoDigito)
aumentarTerceiroDigito.onclick = () => terceiroDigitoBotaoAumentar(mostrarTerceiroDigito)
diminuirTerceiroDigito.onclick = () => terceiroDigitoBotaoDiminuir(mostrarTerceiroDigito)
aumentarQuartoDigito.onclick = () => quartoDigitoBotaoAumentar(mostrarQuartoDigito)
diminuirQuartoDigito.onclick = () => quartoDigitoBotaoDiminuir(mostrarQuartoDigito)
aumentarQuintoDigito.onclick = () => quintoDigitoBotaoAumentar(mostrarQuintoDigito)
diminuirQuintoDigito.onclick = () => quintoDigitoBotaoDiminuir(mostrarQuintoDigito)
aumentarSextoDigito.onclick = () => sextoDigitoBotaoAumentar(mostrarSextoDigito)
diminuirSextoDigito.onclick = () => sextoDigitoBotaoDiminuir(mostrarSextoDigito)

function realizarConferencia() {
    if (primeiroDigitoAtual === 1 && segundoDigitoAtual === 9 && terceiroDigitoAtual === 2 && quartoDigitoAtual === 3 && quintoDigitoAtual === 1 && sextoDigitoAtual === 1) {
        portaCadeado.style.backgroundColor = 'green'
        fotoCadeado.setAttribute('src', '../Cadeado/assets/cadeadoaberto.png')
        mensagemResposta.textContent = 'Você Acertou'
        portaMensagem.style.backgroundColor = 'green'
        conferir = true;
        receberPremio.removeAttribute('hidden')
    } else {
        portaCadeado.style.backgroundColor = 'red'
        mensagemResposta.textContent = 'Você Errou'
        portaMensagem.style.backgroundColor = 'red'
    }
}



botaoConferir.onclick = realizarConferencia

