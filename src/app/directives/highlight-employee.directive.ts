import { HostListener, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appHighlightEmployee]'
})
export class HighlightEmployeeDirective {

    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('lightblue');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
