import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private navService: NavigationService) {}
  @ViewChild('nav') navDOM: ElementRef<HTMLElement> | undefined;
  @HostListener('window:resize') onResize() {
    this.navService.setNavHeight(this.navDOM?.nativeElement.clientHeight!);
  }
  isOpen: boolean = false;

  ngAfterViewInit() {
    this.navService.setNavHeight(this.navDOM?.nativeElement.clientHeight!);
  }

  toggleList() {
    this.isOpen = !this.isOpen;
  }

  hideList() {
    this.isOpen = false;
  }
}
