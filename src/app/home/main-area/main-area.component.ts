import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {

  menuName = 'No menu selected';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: { id: string }) => {
      console.log(`Current Menu ID : ${ params.id }`);
      if (params.id === '1') {
        this.menuName = 'Look at the picture.';
      } else {
        this.menuName = 'Look at the text.';
      }
    });
  }

}
