import { Component, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'button[loading]',
    template: `
        <i [hidden]="!complete" class="fa fa-spinner fa-pulse"></i>
        <span>{{title}}</span>
    `,
    inputs: ['title', 'loading', 'disabled'],
    host: {
        '(click)': 'showLoading()'
    },
    exportAs: 'btnLoading'
})
export class ButtonLoadingDirective implements OnChanges {

    title: string

    loading = false

    disabled = false

    constructor(private elementRef: ElementRef) { }

    ngOnChanges() {
        this.elementRef.nativeElement.disabled = this.disabled
    }

    set complete(ready: boolean) {
        this.elementRef.nativeElement.disabled = !ready || this.disabled
        this.loading = !ready
    }

    get complete(): boolean {
        return this.loading
    }

    showLoading() {
        this.complete = false
    }
}