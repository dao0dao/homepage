import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor() {}

  isOpen: boolean = false;

  toggleList() {
    this.isOpen = !this.isOpen;
  }

  hideList() {
    this.isOpen = false;
  }
}
