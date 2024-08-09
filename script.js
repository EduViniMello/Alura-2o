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