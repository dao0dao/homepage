import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/interfaces';
import { animations } from './animations';

@Component({
  selector: 'app-portfolio-pop-up',
  templateUrl: './portfolio-pop-up.component.html',
  styleUrls: ['./portfolio-pop-up.component.scss'],
  animations: animations,
})
export class PortfolioPopUpComponent {
  @Input() project!: Project;
  @Output() Close = new EventEmitter<unknown>();
  isClosing: boolean = false;
  private readonly animationTime = 300;

  close() {
    this.isClosing = true;
    setTimeout(() => {
      this.Close.emit();
    }, this.animationTime);
  }
}
