import { Component, Input } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: 'listagem.component.html'
})
export class ListagemComponent {
    
    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string;

    constructor(service: FotoService) {
        this.mensagem = '';
        this.service = service;
        this.service.lista().subscribe((fotos) => {
            this.fotos = fotos;
        }, error => {
            console.log(error);
        });
    }

    remove(foto: FotoComponent) {
        console.log(foto);
        this.service.remove(foto).subscribe(
            () => {
            //caso nao seja abribuida uma nova referencia a this.fotos o angular não vai rerenderizar a listagem
            let novasFotos = this.fotos.slice(0);
            let indice = novasFotos.indexOf(foto);
            novasFotos.splice(indice, 1);
            this.fotos = novasFotos;
            this.mensagem = 'Foto removida com sucesso.';            
        },
        error => {
            console.log(error);
            this.mensagem = 'Não foi possivel remover a foto.';
        });        
    }

}