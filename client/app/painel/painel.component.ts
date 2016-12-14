import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

    @Input() titulo: string;
    _element: ElementRef;

    constructor(_element: ElementRef) {
        this._element = _element;
    }

    ngOnInit() {
        this.titulo = this.titulo.length > 7 ?
             this.titulo.substr(0, 7) + '...' : 
             this.titulo;
    }

    fadeOut(cb) {
        $(this._element.nativeElement).fadeOut(cb);
    }
}