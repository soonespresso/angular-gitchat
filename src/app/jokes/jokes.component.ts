import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor(private router: Router, private service: RouterService) {
    console.log('[JokesComponent]');
    this.service.jokesRouter = router;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        console.log('JokesComponent.NavigationStart');
      });
  }

  ngOnInit() {
    // console.log(this.router);
    /* this.router.events.subscribe((event: any) => {
      console.log(event);
      // 可以用 instanceof 来判断事件的类型，然后进行操作
      if (event instanceof NavigationStart) {
        console.log('NavigationStart');
      }
    }); */
  }

}
