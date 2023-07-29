import { Component } from '@angular/core';
import { Project } from '../interfaces';
import { myProjects } from './projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: Project[] = myProjects;
  isPopUp: boolean = false;
  showedProject: Project | undefined = undefined;
  private showedProjectIndex: number = 0;

  showPopUp(project: Project, index: number) {
    this.showedProject = project;
    this.showedProjectIndex = index;
    this.isPopUp = true;
  }

  closePopUp() {
    this.isPopUp = false;
    this.showedProject = undefined;
    this.showedProjectIndex = 0;
  }

  scrollPopUp(direction: 'left' | 'right') {
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
}
