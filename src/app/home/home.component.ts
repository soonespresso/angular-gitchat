import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params);
    });
  }

  manualNav() {
    // 支持矩阵式参数
    // this.router.navigateByUrl('/jokes;id=2;name=Darwin');
    // this.router.navigate(['/jokes', {id: 2, name: 'Darwin'}]);
    // -> this.activeRoute.params.subscribe

    // 不支持矩阵式参数
    this.router.navigateByUrl('/jokes?page=1&name=Newton');
    // this.router.navigate(['/jokes'], { queryParams: { page: 1, name: 'Newton' } });
    // -> this.activeRoute.queryParams.subscribe
  }
}
