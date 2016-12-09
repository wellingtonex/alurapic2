Você deve ter reparado que tanto no componente AppComponent e no FotoComponent precisamos utilizar URL's 
absolutas para indicar a localização de seus templates na propriedade templateUrl. 
Contudo, isso não precisa ser assim. Vamos adicionar no decorator dos dois componentes 
a propriedade moduleId e passar o valor enigmático module.id. Com ele, podemos passar o caminho 
relativo dos templates:

RXJS
https://github.com/Reactive-Extensions/RxJS