import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-added-pg',
  templateUrl: './added-pg.component.html',
  styleUrls: ['./added-pg.component.css']
})
export class AddedPgComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    let output: string = '';
    for (let i: number = 0; i < localStorage.length-3; i++){
      output=`${output}\n${localStorage.key(i)}: ${localStorage.getItem(localStorage.key(i))}\n`;
    }
    document.querySelector("textarea").value=output;
  }

}
