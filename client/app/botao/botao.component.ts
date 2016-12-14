import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: 'botao.component.html'
})
export class BotaoComponent implements OnInit {

    @Input() nome: string = 'Ok';
    @Input() estilo: string =  'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();
    @Input() confirmacao: boolean = false;

    constructor() { }

    ngOnInit() { }
    
    executaAcao() {
        
        if(this.confirmacao) {
            if(confirm('Deseja excluir essa foto?')) {
                this.acao.emit(null);
            }
        }else {
            this.acao.emit(null);
        }
    }
}