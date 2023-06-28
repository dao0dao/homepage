import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isOpen: boolean = false;

  toggleList() {
    this.isOpen = !this.isOpen;
  }

  hideList(){
    this.isOpen = false
  }
}
