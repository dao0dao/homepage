import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Project } from '../interfaces';
import { myProjects } from './projects';

type Direction = 'left' | 'right';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  @ViewChild('carContainer') cardsContainerDOM:
    | ElementRef<HTMLElement>
    | undefined;
  projects: Project[] = myProjects;
  isPopUp: boolean = false;
  showedProject: Project | undefined = undefined;
  isLeftBtn: boolean = false;
  isRightBtn: boolean = false;
  private showedProjectIndex: number = 0;
  private isScrolling: boolean = false;
  private isMovingGallery: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.isBtnHidden();
    this.cd.detectChanges();
  }

  showPopUp(project: Project, index: number) {
    if (this.isScrolling || this.isMovingGallery) {
      return;
    }
    this.showedProject = project;
    this.showedProjectIndex = index;
    this.isPopUp = true;
  }

  closePopUp() {
    this.isPopUp = false;
    this.showedProject = undefined;
    this.showedProjectIndex = 0;
  }

  scrollPopUp(direction: Direction) {
    if ('right' === direction) {
      this.showedProjectIndex++;
      if (this.showedProjectIndex >= this.projects.length) {
        this.showedProjectIndex = 0;
      }
    }
    if ('left' === direction) {
      this.showedProjectIndex--;
      if (this.showedProjectIndex < 0) {
        this.showedProjectIndex = this.projects.length - 1;
      }
    }
    this.showedProject = this.projects[this.showedProjectIndex];
  }

  scroll(direction: Direction) {
    const container = this.cardsContainerDOM?.nativeElement;
    if (!container) {
      return;
    }
    if ('right' === direction) {
      container.scrollLeft = container.scrollLeft + container.clientWidth;
    }
    if ('left' === direction) {
      container.scrollLeft = container.scrollLeft - container.clientWidth;
    }
  }

  startScroll(e: PointerEvent) {
    this.isScrolling = true;
  }

  stopScroll(e: PointerEvent) {
    this.isScrolling = false;
    setTimeout(() => {
      this.isMovingGallery = false;
    }, 0);
  }

  moveGallery(event: MouseEvent) {
    if (!this.isScrolling) {
      return;
    }
    const container = this.cardsContainerDOM?.nativeElement;
    if (!container) {
      return;
    }
    this.isMovingGallery = true;
    container.scrollLeft = container.scrollLeft - event.movementX * 10;
  }

  isBtnHidden(): boolean | void {
    const container = this.cardsContainerDOM?.nativeElement;
    if (container) {
      if (container.scrollLeft === 0) {
        this.isLeftBtn = false;
      } else {
        this.isLeftBtn = true;
      }
      if (
        container.scrollLeft ===
        container.scrollWidth - container.clientWidth
      ) {
        this.isRightBtn = false;
      } else {
        this.isRightBtn = true;
      }
    }
  }
}
