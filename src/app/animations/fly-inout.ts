import { trigger, transition, animate, style, state } from '@angular/animations';

export const flyInOut = trigger('flyInOut', [
  /* state('in', style({ opacity: 1, transform: 'translateX(0)' })),
  state('out', style({ opacity: 0 })), */
  transition('void => *', [
    style({ opacity: 0, transform: 'translateX(50%)' }),
    animate('0.5s ease-in')
  ]),
  transition('* => void', [
    animate('2s 0.2s ease-out', style({
      opacity: 0,
      transform: 'translateX(100%)'
    }))
  ]),
]);
