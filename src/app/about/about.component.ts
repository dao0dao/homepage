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
      'about.company': 'Westhill Consulting Corp. Sp. z o.o.',
    },
    {
      'Junior Frontend developer': '01.04.2021-31.03.2023',
      'about.company': 'Westhill Consulting Corp. Sp. z o.o.',
    },
  ];
}
