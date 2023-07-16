import { Component } from '@angular/core';
import { HtmlObjectData } from '../interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly workExperience: HtmlObjectData[] = [
    {
      'Mid Frontend developer': '01.04.2023-',
      company: 'Westhill Consulting Corp. Sp. z o.o.',
    },
    {
      'Junior Frontend developer': '01.04.2021-31.03.2023',
      company: 'Westhill Consulting Corp. Sp. z o.o.',
    },
  ];

  readonly techStack: string[] = [
    'HTML/SCSS/JS',
    'RWD',
    'TypeScript',
    'RxJS',
    'Angular',
    'Angular Material',
    'Bootstrap',
    'NodeJS',
    'ExpressJS',
    'NestJS',
    'MongoDB',
    'MySQL',
    'Figma',
    'Gimp',
    'React',
  ];

  readonly softSkills = [
    'about.softPressure',
    'about.softAnalytic',
    'about.softTeamPlayer',
    'about.softThinking',
    'about.softProblem',
    'about.softWork',
  ];

  readonly languages: HtmlObjectData[] = [
    { 'about.english': 'B1/B2' },
    { 'about.polish': 'C2' },
    { 'about.russian': 'C2' },
  ];
}
