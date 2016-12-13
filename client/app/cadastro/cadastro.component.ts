import { Component, Input } from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    form: FormGroup;
    service: FotoService;

    constructor(service: FotoService, fb: FormBuilder) {

        this.service = service;

        this.form = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event) {
        event.preventDefault();

        console.log(this.foto);

        this.service.cadastra(this.foto).subscribe(()=>{
            console.log('Foto cadastrada com sucesso.');
            this.foto = new FotoComponent();
        }, error => {
            console.log(error);
        });
    }


}