Você deve ter reparado que tanto no componente AppComponent e no FotoComponent precisamos utilizar URL's 
absolutas para indicar a localização de seus templates na propriedade templateUrl. 
Contudo, isso não precisa ser assim. Vamos adicionar no decorator dos dois componentes 
a propriedade moduleId e passar o valor enigmático module.id. Com ele, podemos passar o caminho 
relativo dos templates:

RXJS
https://github.com/Reactive-Extensions/RxJS


Quando um evento é disparado, podemos transferir com o evento um dado. 
Que tal vermos esse processo para sabermos ainda mais sobre eventos customizado?
Primeiro, vamos definir o tipo do nosso EventEmitter. Ele será do tipo number. 
É o tipo que definimos no generic do EventEmitter que define o tipo aceito pelo seu método emit:

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'meuComponente',
  templateUrl: './meu-component.html'
})
class MeuComponent { 

   @Output meuEvento = new EventEmitter<number>(); // tipando o EventEmitter

   executaAcao() {
       this.meuEvento.emit(10); // como nosso EventEmitter é do tipo number, podemos passar um número. Qualquer outra coisa geraria um erro de compilação.
   }
}

<!-- meu-component.html -->
<button click="executaAcao()">Meu botão</button>

<meuComponent meuEvento="metodoQualquerdoComponent($event)"></meuComponent>

metodoQualquerDoComponent(event) {

    alert(event); // exibe 10!
}