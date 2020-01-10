import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  jokeContent = '';
  saved = true;

  constructor() { }

  ngOnInit() {
  }

  writeJoke(content) {
    this.jokeContent = content;
    this.saved = false;
  }

  saveContent() {
    console.log(this.jokeContent);
    this.jokeContent = '';
    this.saved = true;
  }
}
