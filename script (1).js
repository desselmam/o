const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que o contato com a socidade está diminuindo após a inteligência artificial?",
        alternativas: [
            {
                texto: "Acredito que sim, o contato social está diminuindo.",
                afirmacao:"Afirmação da alternativa 1"
            },
            {
                texto: "Acredito que não, pois tenho contato com a sociedade diariamente.",
              afirmacao: "Afirmação da alternativa 2"
            }
        ]
    },
    {
        enunciado: "você acredita que a inteligência artifial esta fazendo melhorias no mundo?",
        alternativas: [
            {
                texto: "Acredito que sim, pois vejo cada vez mais presente a inteligência articial em diversos lugares.",
                afirmacao:"afirmação da alternativa 1"
            },
            {
                texto: "Acredito que não, pois a inteligência artificial esta desencadeando uma aprendizagem empobrecida.",
              afirmacao:"afirmação da alternativa 2."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
if (atual >= perguntas.length) {
    mostraResultado();
    return;
}
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
        }
    }
        function respostaSelecionada(opcaoSelecionada){
            const afirmacoes=opcaoSelecionada.afirmacao;
            historiaFinal += afirmacoes +" ";
            atual++;
            mostraPergunta();
        }
    
    function mostraResultado() {
        caixaPerguntas.textContent="Em 2049...";
        textoResultado.textContent= historiaFinal;
        caixaAlternativas.textContent = "";
    }
  
    mostraPergunta();