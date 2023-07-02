import {
  Component,
  effect,
  HostBinding,
  ChangeDetectorRef,
} from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private navService: NavigationService,
    private cd: ChangeDetectorRef
  ) {
    effect(() => {
      Promise.resolve().then(() => {
        this.setHostHeight(this.navService.navHeight$());
      });
    });
  }
  @HostBinding('style.height') hostHeight: string | undefined;

  setHostHeight(height: number) {
    if (height) {
      this.hostHeight = 'calc(100vh - ' + height + 'px)';
    }
  }
}
