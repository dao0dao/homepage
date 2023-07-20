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
      'Mid frontend developer': '01.04.2023-',
      company: 'Westhill Consulting Corp. Sp. z o.o.',
    },
    {
      'Junior frontend developer': '01.04.2021-31.03.2023',
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
    'about.softTeamPlayer',
    'about.softAnalytic',
    'about.softThinking',
    'about.softProblem',
  ];

  readonly languages: HtmlObjectData[] = [
    { language: 'about.english', level: 'B1/B2' },
    { language: 'about.polish', level: 'C2' },
    { language: 'about.russian', level: 'C2' },
  ];
}
