import { Component } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {


  tasks! : Array<string>;

  constructor () {
    this.tasks = ['entrainement','repos','musique','reviser']
  }
}
