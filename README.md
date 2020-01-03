# Angular 动画

## 淡入淡出

*src\app\animations\fly-in.ts*

```typescript
import { trigger, state, style, transition, animate } from '@angular/animations';

export const fader = trigger('visibilityChanged', [
  state('shown', style({ opacity: 1 })),
  state('hidden', style({ opacity: 0 })),
  transition('* => *', animate('.5s'))
]);
```

## 淡入淡出简化

*src\app\animations\fader-simplify.ts*

```typescript
import { trigger, state, style, transition, animate } from '@angular/animations';

export const faderSimplify = trigger('visibilityChanged', [
  state('true', style({ opacity: 1, transform: 'scale(1)' })),
  state('false', style({ opacity: 1, transform: 'scale(0.5)' })),
  transition('true => false', animate('1s')),
  transition('0 => 1', animate('500ms'))
]);

```

## 细说State

### wildcard state

`transition('* => *', animate('.5s'))`中的`*`就是wildcard state（**通用符号**），表示所有状态。

### void state

`void`表示没有东西，可能是被移除或是还没产生，`void`用在进入或出场时非常好用。

- 飞入：`void => *`
- 飞出：`* => void`

## 动画时间控制

Angular提供3种控制时间效果的属性，分别是`duration`、`delay`和`easing`。
表达式：`animate('duration delay easing')`

### Duration

- 直接用数字，预设单位为`ms`：`100`
- 用字符串加上：`100ms`
- 用字符串加上：`0.1s`

### Delay

- 等到100ms然后动画运行200ms：`0.2s 100ms`

### Easing

- 等待100ms然后运行200ms搭配淡出效果：`0.2s 100ms ease-out`
- 执行200ms搭配淡入效果：`0.2s ease-in`

*src\app\animations\fly-inout.ts*

```typescript
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

```



