import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'button[loading]',
    template: `
        <i [hidden]="!complete" class="fa fa-spinner fa-pulse"></i>
        <span>{{title}}</span>
    `,
    inputs: ['title'],
    host: {
        '(click)': 'showLoading()'
    },
    exportAs: 'btnLoading'
})
export class ButtonLoadingDirective {

    title: string

    constructor(private elementRef: ElementRef) { }

    set complete(disabled: boolean) {
        this.elementRef.nativeElement.disabled = !disabled
    }

    get complete(): boolean {
        return this.elementRef.nativeElement.disabled
    }

    showLoading() {
        this.elementRef.nativeElement.disabled = true
    }
}