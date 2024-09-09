import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
// @Input() backgroundColor : string ='black';
constructor(private el: ElementRef) {}
private highlight(backcolor: string | null, color: string | null) {
  this.el.nativeElement.style.backgroundColor = backcolor || '';
  this.el.nativeElement.style.color = color || '';
}
private handleClick(event: string) {
  console.log(`Button Clicked ${event}`);
  this.el.nativeElement.style.backgroundColor = event;
}
@HostListener('mouseenter') onMouseEnter() {
  // this.highlight(this.backgroundColor);
  this.highlight('black', 'green');
}
// @HostListener('mouseleave') onMouseLeave() {
//   this.highlight(null);
// }
@HostListener('mouseleave') onMouseLeave() {
  this.el.nativeElement.style.backgroundColor = null;
  this.el.nativeElement.style.color = null;
}
@HostListener('click') onClick() {
  this.handleClick('red');
}
@HostListener('keydown')
onKeydown() {
  console.log('Key pressed:');
}
@HostListener('window:resize', ['$event'])
onResize(event: Event) {
  console.log('Window resized:', event);
}
@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  console.log('Document clicked:', event);
}
@HostListener('myCustomEvent', ['$event'])
onCustomEvent(event: CustomEvent) {
  console.log('Custom event received:', event.detail);
}

}
