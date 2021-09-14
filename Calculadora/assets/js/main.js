function criaCalculadora(){
  return{
    display: document.querySelector('.display'), //classe do display
    btnClear: document.querySelector('.btn-clear'), //botão de limpar
      
    inicia(){
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta(){
      let conta = this.display.value;

      try{
        conta =  eval(conta);

        if(!conta) {
          alert('conta invalida');
        }

        this.display.value = String(conta);

      } catch(e){
        alert('conta invalida');
        return;
      }
    },
    
    clearDisplay(){
      this.display.value = '';
    },

    apagaUm(){
      this.display.value = this.display.value.slice(0,-1); //tamanho da strig -1
    },

    
    cliqueBotoes(){
      document.addEventListener('click', (e) =>{
        const el = e.target;

        if(el.classList.contains('btn-num')){
            this.btnParaDisplay(el.innerText); //innerText valor dentro da tag
        }
        
        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        if(el.classList.contains('btn-dell')){
          this.apagaUm();
        }
        
        if(el.classList.contains('btn-eq')){
          this.realizaConta();
        }
      });
    },
    btnParaDisplay(valor){
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();