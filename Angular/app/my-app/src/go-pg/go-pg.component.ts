import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-pg',
  templateUrl: './go-pg.component.html',
  styleUrls: ['./go-pg.component.css']
})
export class GoPgComponent implements OnInit {
 words = "Example translate";
  constructor() { }

  ngOnInit(): void {
  }

}
