import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-pg',
  templateUrl: './go-pg.component.html',
  styleUrls: ['./go-pg.component.css']
})
export class GoPgComponent implements OnInit {
  words:string = '';
  Nb: string;
  i: number;
  constructor() { }
  ngOnInit(): void {
   this.Nb=localStorage.getItem("_Words");
  }
  getWords(qa: number){
    for (let j: number=1; j <= qa; j++){
      this.randomInteger(0,localStorage.length-4);
      this.words=localStorage.key(this.i);
      document.getElementById(`${j}`).innerText=`${this.words}`;
    }
  }
  randomInteger(min: number, max: number){
    let rand = min + Math.random() * (max+1);
    this.i = Math.floor(rand);
    return this.i;
  }
  checkWords(qa: number){
    for (let j: number=1; j <= qa; j++){
      if (localStorage.getItem(document.getElementById(`${j}`).innerText) == document.querySelectorAll("input")[j-1].value){
        document.getElementById(`result${j}`).innerText="  True";
      }else{
        document.getElementById(`result${j}`).innerText="  False";
      }
    }
  }
}
