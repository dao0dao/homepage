import { Component, NgZone, ApplicationRef } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(public lang: LanguageService) {}

  isOpen: boolean = false;

  toggleList() {
    this.isOpen = !this.isOpen;
  }

  hideList() {
    this.isOpen = false;
  }

  changeLanguage(lang: string) {
    this.lang.changeLanguage(lang);
  }
}
