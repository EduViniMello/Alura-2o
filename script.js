const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const pergunta1 = [
    {
    enunciado: 'Pergunta 1',
    alternativas: [
        'Alternativa 1',
        'Alternativa 2'
    ]
},
{
enunciado: 'Pergunta 2',
alternativas: [
    'Alternativa 1',
    'Alternativa 2'
]
}    
];







[
    { 
      [
        {
            texto: 'Escrever comandos para o chat é uma forma de contribuircom trabalho, por'
            afirmacao:'afirmacao'
        }
  
  
      ]
    },
  ];
  
  let atual = 0;
  let perguntaAtual;
  let historiaFinal = '';
  
  function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
  }
  
  function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
      const botaoAlternativas = document.createElement('button');
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
  
  function respostaSelecionada(opcaoSeLecionada){
    atual++;
    mostraPergunta();
  }
  mostraPergunta();