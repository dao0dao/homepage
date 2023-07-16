import { Component, ElementRef, ViewChild } from '@angular/core';
import { CodeLineCounterService } from '../code-line-counter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private lineCounter: CodeLineCounterService) {}

  @ViewChild('container') containerDOM: ElementRef<HTMLElement> | undefined;

  ngAfterViewInit() {
    if (!this.containerDOM?.nativeElement) {
      return;
    }
    const htmlElement = this.containerDOM.nativeElement;
    htmlElement.childNodes.forEach((el, index) => {
      if (index === 0) {
        return;
      }
      if (!(el instanceof HTMLElement)) {
        return;
      }
      if (el.classList.contains('codeLine')) {
        el.setAttribute('line', this.lineCounter.line.toString());
      }
    });
  }
}
