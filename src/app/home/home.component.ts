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
    // this.router.navigateByUrl('/jokes;id=2;name=Darwin');
    // 不支持矩阵式参数
    this.router.navigate(['/jokes'], { queryParams: { page: 1, name: 'Newton' } });
  }
}
