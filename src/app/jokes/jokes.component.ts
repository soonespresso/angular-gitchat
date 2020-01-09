import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // URL: http://localhost:4202/jokes?id=1&name=darwin
    this.activeRoute.queryParams.subscribe((queryParam) => {
      console.log(queryParam);
    });
    // URL: http://localhost:4202/jokes;id=2;name=Darwin
    this.activeRoute.params.subscribe((param) => {
      console.log(param);
    });
  }

}
