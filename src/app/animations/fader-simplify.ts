import { trigger, state, style, transition, animate } from '@angular/animations';

export const faderSimplify = trigger('visibilityChanged', [
  state('true', style({ opacity: 1, transform: 'scale(1)' })),
  state('false', style({ opacity: 1, transform: 'scale(0.5)' })),
  transition('true => false', animate('1s')),
  transition('0 => 1', animate('500ms'))
]);
