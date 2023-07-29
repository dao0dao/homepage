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

  showPopUp(project: Project) {
    this.showedProject = project;
    this.isPopUp = true;
  }

  closePopUp() {
    this.isPopUp = false;
    this.showedProject = undefined;
  }
}
