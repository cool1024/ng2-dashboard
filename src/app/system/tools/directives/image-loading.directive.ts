import { Component, ElementRef, Directive } from '@angular/core';

@Directive({
    selector: 'img[loading]',
    host: {
        'onerror': '$event.target.src="',
        'role':'button',
    }
})
export class ImageLoadingDirective {

    constructor(private elementRef: ElementRef) { }

    loadDefault() {

    }
}