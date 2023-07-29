import {
  trigger,
  transition,
  style,
  animate,
  sequence,
  animateChild,
  query,
  group,
  state,
} from '@angular/animations';

export const animations = [
  trigger('container', [
    state('true', style({ opacity: 0 })),
    transition(':enter', [
      sequence([
        style({ opacity: 0 }),
        animate('0.25s ease-in-out', style({ opacity: 1 })),
        group([
          query('@left', animateChild()),
          query('@top', animateChild()),
          query('@image', animateChild()),
          query('@about', animateChild()),
        ]),
      ]),
    ]),
    transition('* => true', [
      animate('0.25s ease-in-out', style({ opacity: 0 })),
    ]),
  ]),
  trigger('top', [
    transition(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('0.25s ease-in-out', style({ transform: 'translateY(0%)' })),
    ]),
  ]),
  trigger('left', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.25s ease-in-out', style({ transform: 'translateX(0%)' })),
    ]),
  ]),
  trigger('image', [
    transition(':enter', [
      sequence([
        style({ opacity: 0 }),
        animate('0.25s ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ]),
  trigger('about', [
    transition(':enter', [
      sequence([
        style({ opacity: 0 }),
        animate('0.25s ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ]),
];
