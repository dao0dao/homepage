import { Component, effect } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private navService: NavigationService) {
    effect(() => {
      this.navHeight = this.navService.navHeight$();
    });
  }

  navHeight: number = 0;
}
