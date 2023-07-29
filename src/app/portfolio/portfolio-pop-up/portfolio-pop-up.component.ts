import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Project } from 'src/app/interfaces';
import { animations } from './animations';

@Component({
  selector: 'app-portfolio-pop-up',
  templateUrl: './portfolio-pop-up.component.html',
  styleUrls: ['./portfolio-pop-up.component.scss'],
  animations: animations,
})
export class PortfolioPopUpComponent implements OnChanges {
  @Input() project!: Project;
  @Output() Close = new EventEmitter<unknown>();
  @Output() Scroll = new EventEmitter<'left' | 'right'>();
  currentProject: Project | undefined;
  isClosing: boolean = false;
  cardState: boolean = false;
  private readonly animationTime = 250;

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['project'].previousValue?.name &&
      changes['project'].previousValue?.name !==
        changes['project'].currentValue?.name
    ) {
      this.cardState = !this.cardState;
      setTimeout(() => {
        this.currentProject = this.project;
      }, this.animationTime);
    } else {
      this.currentProject = this.project;
    }
  }

  close() {
    this.isClosing = true;
    setTimeout(() => {
      this.Close.emit();
    }, this.animationTime);
  }

  next() {
    this.Scroll.emit('right');
  }
  previous() {
    this.Scroll.emit('left');
  }
}
